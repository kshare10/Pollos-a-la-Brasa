export const GA_MEASUREMENT_ID = "G-8C73DDHRHL";

declare global {
    interface Window {
        gtag?: (
            command: "config" | "event" | "js" | "set",
            targetIdOrAction: string | Date,
            configOrParams?: Record<string, unknown>
        ) => void;
        dataLayer?: Array<Record<string, unknown> | unknown[]>;
    }
}

/**
 * Send a custom GA4 event safely
 */
export function sendGAEvent(
    eventName: string,
    eventParams: Record<string, unknown> = {}
) {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", eventName, {
        ...eventParams,
        send_to: GA_MEASUREMENT_ID,
    });
}

/**
 * Track page view with URL, path, and page title
 */
export function trackPageView(url: string, title?: string) {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", "page_view", {
        page_location: url,
        page_path: window.location.pathname + window.location.search,
        page_title: title || document.title,
        send_to: GA_MEASUREMENT_ID,
    });
}

/**
 * Track scroll depth milestone (e.g. 25%, 50%, 75%, 90%, 100%)
 */
export function trackScrollDepth(depthPercent: number, pagePath: string) {
    sendGAEvent("scroll", {
        percent_scrolled: depthPercent,
        page_path: pagePath,
        event_category: "Engagement",
        event_label: `${depthPercent}% Scroll on ${pagePath}`,
    });
}

/**
 * Track user active dwell time on page
 */
export function trackEngagementTime(seconds: number, pagePath: string) {
    sendGAEvent("user_engagement", {
        engagement_time_msec: seconds * 1000,
        page_path: pagePath,
        event_category: "Engagement",
        event_label: `${seconds}s on ${pagePath}`,
    });
}

/**
 * Track outbound link clicks (social, delivery platforms, map links)
 */
export function trackOutboundLink(url: string, linkText?: string, linkType?: string) {
    sendGAEvent("click", {
        event_category: "Outbound Link",
        event_label: linkText || url,
        link_url: url,
        link_domain: getDomain(url),
        link_type: linkType || "external",
        outbound: true,
    });
}

/**
 * Track phone number call clicks
 */
export function trackPhoneCall(phoneNumber: string, clickLocation: string) {
    sendGAEvent("generate_lead", {
        event_category: "Contact",
        event_label: `Call ${phoneNumber} from ${clickLocation}`,
        lead_type: "phone_call",
        phone_number: phoneNumber,
        click_location: clickLocation,
    });
}

/**
 * Track map and direction clicks
 */
export function trackMapDirections(address: string, clickLocation: string) {
    sendGAEvent("select_content", {
        content_type: "map_directions",
        item_id: "google_maps_directions",
        address: address,
        click_location: clickLocation,
    });
}

/**
 * Track ordering intent and platform selection
 */
export function trackOrderIntent(
    action: "modal_open" | "platform_click" | "direct_order_click",
    platformName?: string,
    location?: string
) {
    sendGAEvent("begin_checkout", {
        event_category: "Ecommerce",
        event_label: platformName ? `Order via ${platformName}` : "Open Order Modal",
        action: action,
        platform_name: platformName || "Order Modal",
        click_location: location || "Website",
    });
}

/**
 * Track promotional modal impression, click, or dismissal
 */
export function trackPromoInteraction(
    action: "impression" | "cta_click" | "dismiss",
    promoTitle: string
) {
    sendGAEvent("select_promotion", {
        promotion_name: promoTitle,
        creative_name: "Specialty Chicken Combo Banner",
        action: action,
    });
}

/**
 * Track menu category navigation tab click
 */
export function trackMenuCategoryClick(categoryName: string, categoryId: string) {
    sendGAEvent("select_content", {
        content_type: "menu_category",
        item_id: categoryId,
        category_name: categoryName,
    });
}

/**
 * Track traffic source & acquisition parameters
 */
export function trackTrafficAcquisition(params: {
    referrer?: string;
    utmSource?: string | null;
    utmMedium?: string | null;
    utmCampaign?: string | null;
    utmTerm?: string | null;
    utmContent?: string | null;
    gclid?: string | null;
}) {
    sendGAEvent("session_attribution", {
        referrer: params.referrer || "direct",
        utm_source: params.utmSource || undefined,
        utm_medium: params.utmMedium || undefined,
        utm_campaign: params.utmCampaign || undefined,
        utm_term: params.utmTerm || undefined,
        utm_content: params.utmContent || undefined,
        gclid: params.gclid || undefined,
    });
}

function getDomain(url: string): string {
    try {
        return new URL(url).hostname;
    } catch {
        return "";
    }
}
