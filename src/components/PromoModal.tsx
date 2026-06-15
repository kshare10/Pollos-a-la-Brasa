"use client";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface PromoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PromoModal({ isOpen, onClose }: PromoModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle click outside and Escape key to close
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
            {/* Backdrop with fade-in animation */}
            <div
                className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px] transition-opacity duration-300 animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content Box with scale-in animation */}
            <div
                ref={modalRef}
                className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[var(--color-charcoal)] border border-[var(--color-gold)]/30 shadow-2xl p-6 sm:p-8 animate-scale-in flex flex-col items-center text-center"
            >
                {/* Close 'X' Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[var(--color-stone-light)] hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all duration-200"
                    aria-label="Close promotion modal"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Badge Header */}
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 animate-pulse-glow">
                        Special Offer · Especial
                    </span>


                </div>

                {/* Heading */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    Limited Time <span className="text-gradient">Deal</span>
                </h3>

                {/* Offer Highlight Box */}
                <div className="w-full bg-gradient-to-br from-[var(--color-primary-dark)]/40 to-black/20 border border-[var(--color-primary)]/30 rounded-xl p-5 sm:p-6 mb-6">
                    <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                        Buy two chicken combos, get a 2-liter drink free!
                    </p>
                    <div className="mt-2 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
                    <p className="text-xs sm:text-sm text-[var(--color-stone-light)] mt-2 italic">
                        Compra dos pollos en combo y llévate gratis una bebida de 2 litros!
                    </p>
                </div>

                {/* Call-to-action Button to close */}
                <button
                    onClick={onClose}
                    className="w-full btn-primary justify-center text-sm font-semibold tracking-wide py-3 hover:scale-[1.02] transition-transform duration-200"
                >
                    Great, Let's Order!
                </button>
            </div>
        </div>,
        document.body
    );
}
