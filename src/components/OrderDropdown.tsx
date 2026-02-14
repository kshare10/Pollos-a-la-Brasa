"use client";

import { useState, useRef, useEffect } from "react";

export default function OrderDropdown({ className = "" }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const links = [
        {
            name: "Grubhub",
            url: "https://www.grubhub.com/restaurant/pollos-a-la-brasa-eagle-rock-2161-colorado-blvd-los-angeles/7029536?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnGEpGBrW5I9j0ThhaUxlGZ1oy6ZWG1VPvTIt73_iJfKDIpdv5SxheLPNTG_HK5LvExiKjB1QxEM4yZsftAjILB-BwZBdg%3D%3D",
            color: "hover:bg-[#F63440] hover:text-white", // Grubhub red
            icon: "🍖",
        },
        {
            name: "DoorDash",
            url: "https://www.doordash.com/store/pollos-a-la-brasa-eagle-rock-los-angeles-212561/14492153/?pickup=true&utm_campaign=gpa",
            color: "hover:bg-[#FF3008] hover:text-white", // DoorDash red
            icon: "🚗",
        },
    ];

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={`${className} flex items-center justify-center gap-2 transition-all duration-300 ${isOpen ? "ring-2 ring-white/50" : ""}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>🛒</span> Order Online
                <span className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>

            <div
                className={`absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 transition-all duration-200 transform ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="py-1">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${link.color}`}
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
                            <div className="flex flex-col">
                                <span className="font-semibold">{link.name}</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase tracking-wide">
                                    Delivery & Pickup
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
