"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function OrderModal({ className = "" }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.style.overflow = "unset";
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleModal = () => setIsOpen(!isOpen);

    const deliveryServices = [
        {
            name: "Grubhub",
            url: "https://www.grubhub.com/restaurant/pollos-a-la-brasa-eagle-rock-2161-colorado-blvd-los-angeles/7029536?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnGEpGBrW5I9j0ThhaUxlGZ1oy6ZWG1VPvTIt73_iJfKDIpdv5SxheLPNTG_HK5LvExiKjB1QxEM4yZsftAjILB-BwZBdg%3D%3D",
            color: "hover:border-[#F63440] hover:bg-[#F63440]/10",
            logo: "/images/grubhub.svg",
        },
        {
            name: "DoorDash",
            url: "https://www.doordash.com/store/pollos-a-la-brasa-eagle-rock-los-angeles-212561/14492153/?pickup=true&utm_campaign=gpa",
            color: "hover:border-[#FF3008] hover:bg-[#FF3008]/10",
            logo: "/images/doordash.svg",
        },
    ];

    return (
        <>
            <button
                onClick={toggleModal}
                className={`${className} flex items-center justify-center gap-2`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>🛒</span> Order Online
            </button>

            {/* Modal Portal */}
            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-sm rounded-2xl bg-[var(--color-charcoal)] border border-[var(--color-gold)]/20 shadow-2xl p-8 animate-scale-in"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-[var(--color-stone)] hover:text-white transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="font-display text-2xl font-bold text-white mb-2">
                                Pickup / Delivery
                            </h2>
                            <p className="text-sm text-[var(--color-stone-light)]">
                                Choose your preferred service
                            </p>
                        </div>

                        <div className="space-y-4">
                            {deliveryServices.map((service) => (
                                <a
                                    key={service.name}
                                    href={service.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-[1.02] ${service.color}`}
                                >
                                    <div className="relative h-12 w-full flex-shrink-0">
                                        <Image
                                            src={service.logo}
                                            alt={`${service.name} Logo`}
                                            fill
                                            className="object-contain object-center"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-[var(--color-stone-dark)]">
                                External links open in new tab
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
