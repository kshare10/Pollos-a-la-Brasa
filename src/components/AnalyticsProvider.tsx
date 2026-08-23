"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
    trackPageView,
    trackScrollDepth,
    trackEngagementTime,
    trackOutboundLink,
    trackPhoneCall,
    trackMapDirections,
    trackTrafficAcquisition,
} from "@/lib/analytics";

export default function AnalyticsProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const trackedScrollMilestones = useRef<Set<number>>(new Set());
    const pageStartTime = useRef<number>(Date.now());
    const isFirstMount = useRef(true);

    // 1. Page View & Route Change Tracking
    useEffect(() => {
        const fullUrl = window.location.href;
        const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

        trackPageView(fullUrl, document.title);

        // Reset scroll milestones and timer for new page
        trackedScrollMilestones.current = new Set();
        pageStartTime.current = Date.now();
    }, [pathname, searchParams]);

    // 2. Traffic Acquisition & UTM Parameters (First Load)
    useEffect(() => {
        if (isFirstMount.current && typeof window !== "undefined") {
            isFirstMount.current = false;

            const urlParams = new URLSearchParams(window.location.search);
            const referrer = document.referrer;

            const utmSource = urlParams.get("utm_source");
            const utmMedium = urlParams.get("utm_medium");
            const utmCampaign = urlParams.get("utm_campaign");
            const utmTerm = urlParams.get("utm_term");
            const utmContent = urlParams.get("utm_content");
            const gclid = urlParams.get("gclid");

            if (referrer || utmSource || gclid) {
                trackTrafficAcquisition({
                    referrer: referrer || "direct",
                    utmSource,
                    utmMedium,
                    utmCampaign,
                    utmTerm,
                    utmContent,
                    gclid,
                });
            }
        }
    }, []);

    // 3. Scroll Depth Milestones Tracking (25%, 50%, 75%, 90%, 100%)
    useEffect(() => {
        const milestones = [25, 50, 75, 90, 100];

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) return;

            const scrollPercent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

            milestones.forEach((milestone) => {
                if (scrollPercent >= milestone && !trackedScrollMilestones.current.has(milestone)) {
                    trackedScrollMilestones.current.add(milestone);
                    trackScrollDepth(milestone, pathname);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    // 4. Active Engagement & Dwell Time Milestones (10s, 30s, 60s, 120s, 300s)
    useEffect(() => {
        const timeMilestones = [10, 30, 60, 120, 300];
        const triggeredTimeouts: NodeJS.Timeout[] = [];

        timeMilestones.forEach((seconds) => {
            const timer = setTimeout(() => {
                trackEngagementTime(seconds, pathname);
            }, seconds * 1000);
            triggeredTimeouts.push(timer);
        });

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                const totalSeconds = Math.round((Date.now() - pageStartTime.current) / 1000);
                if (totalSeconds >= 3) {
                    trackEngagementTime(totalSeconds, pathname);
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            triggeredTimeouts.forEach((t) => clearTimeout(t));
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            const totalSeconds = Math.round((Date.now() - pageStartTime.current) / 1000);
            if (totalSeconds >= 3) {
                trackEngagementTime(totalSeconds, pathname);
            }
        };
    }, [pathname]);

    // 5. Global Click Delegation for Outbound, Phone, and Map Links
    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            const target = (event.target as HTMLElement)?.closest("a") as HTMLAnchorElement | null;
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href) return;

            // Phone call click
            if (href.startsWith("tel:")) {
                const phoneNumber = href.replace("tel:", "");
                const locationText = target.closest("header")
                    ? "Header"
                    : target.closest("footer")
                        ? "Footer"
                        : "Page Content";
                trackPhoneCall(phoneNumber, locationText);
                return;
            }

            // Google Maps direction click
            if (href.includes("maps.google") || href.includes("goo.gl/maps")) {
                trackMapDirections("2161 Colorado Blvd, Los Angeles, CA 90041", "Map Link");
                return;
            }

            // Outbound external links
            if (href.startsWith("http://") || href.startsWith("https://")) {
                try {
                    const url = new URL(href);
                    if (url.hostname !== window.location.hostname) {
                        const linkText = target.innerText?.trim() || target.getAttribute("aria-label") || href;
                        let linkType = "external";
                        if (url.hostname.includes("facebook") || url.hostname.includes("instagram")) {
                            linkType = "social_media";
                        } else if (
                            url.hostname.includes("doordash") ||
                            url.hostname.includes("ubereats") ||
                            url.hostname.includes("grubhub")
                        ) {
                            linkType = "ordering_platform";
                        }
                        trackOutboundLink(href, linkText, linkType);
                    }
                } catch {
                    // ignore invalid URLs
                }
            }
        };

        document.addEventListener("click", handleGlobalClick, { capture: true });
        return () => document.removeEventListener("click", handleGlobalClick, { capture: true });
    }, [pathname]);

    return null;
}
