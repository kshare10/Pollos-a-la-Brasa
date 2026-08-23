"use client";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface PromoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PromoModal({ isOpen, onClose }: PromoModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            aria-modal="true"
            role="dialog"
        >
            {/* Backdrop with smooth fade */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content Box */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#0B0E15] border border-amber-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-7 sm:p-10 animate-fadeInUp flex flex-col items-center text-center z-10"
            >
                {/* Close 'X' Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200 cursor-pointer"
                    aria-label="Close promotion modal"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Badge Header */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] bg-amber-500/15 border border-amber-500/30">
                        Special Offer · Especial
                    </span>
                </div>

                {/* Heading */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                    Limited Time <span className="text-gradient">Deal</span>
                </h3>

                {/* Offer Highlight Box */}
                <div className="w-full bg-gradient-to-br from-red-950/50 to-black/60 border border-red-700/40 rounded-2xl p-6 sm:p-7 mb-7 shadow-inner">
                    <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        Buy two chicken combos, get a 2-liter drink free!
                    </p>
                    <div className="mt-3.5 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
                    <p className="text-sm sm:text-base text-slate-200 mt-3.5 italic font-medium">
                        ¡Compra dos pollos en combo y llévate gratis una bebida de 2 litros!
                    </p>
                </div>

                {/* Call-to-action Button to close */}
                <button
                    onClick={onClose}
                    className="w-full btn-primary justify-center text-base font-semibold tracking-wide py-3.5"
                >
                    Great, Let&apos;s Order!
                </button>
            </div>
        </div>,
        document.body
    );
}
