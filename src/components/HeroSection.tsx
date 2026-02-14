"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrderDropdown from "@/components/OrderDropdown";

export default function HeroSection() {
    const [isBouncing, setIsBouncing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsBouncing(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background Image with Ken Burns animation */}
            <div className="absolute inset-0 animate-kenBurns">
                <Image
                    src="/images/hero-banner.jpg"
                    alt="Delicious Peruvian cuisine at Pollos a la Brasa"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                />
            </div>

            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 hero-overlay" />

            {/* Decorative warm glow accents */}
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[var(--color-accent)]/8 blur-3xl animate-float" />
            <div
                className="absolute bottom-40 right-10 w-56 h-56 rounded-full bg-[var(--color-primary)]/10 blur-3xl animate-float"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative z-10 flex-grow flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12 sm:pb-32">
                {/* Logo */}
                <div className="animate-fadeInUp mb-6">
                    <Image
                        src="/images/updated_logo.png"
                        alt="Pollos A La Brasa - Eagle Rock Peruvian Restaurant"
                        width={180}
                        height={180}
                        className="mx-auto drop-shadow-2xl rounded-full ring-2 ring-[var(--color-gold)]/30"
                        priority
                    />
                </div>

                {/* Location badge */}
                <div className="animate-fadeInUp stagger-1" style={{ opacity: 0 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 mb-6">
                        Eagle Rock · Los Angeles
                    </span>
                </div>

                {/* Title */}
                <h1
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fadeInUp stagger-2"
                    style={{ opacity: 0 }}
                >
                    <span className="text-white">Pollos</span>{" "}
                    <span className="text-gradient">a la Brasa</span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-lg sm:text-xl md:text-2xl text-[var(--color-cream)] max-w-2xl mx-auto mb-3 animate-fadeInUp stagger-3"
                    style={{ opacity: 0 }}
                >
                    Authentic Peruvian Rotisserie Chicken
                </p>

                {/* Description */}
                <p
                    className="text-sm text-[var(--color-stone-light)] max-w-lg mx-auto mb-10 animate-fadeInUp stagger-4"
                    style={{ opacity: 0 }}
                >
                    Serving the Eagle Rock community with traditional Peruvian flavors,
                    wood-fired rotisserie chicken, and recipes passed down through
                    generations.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp stagger-5"
                    style={{ opacity: 0 }}
                >
                    <Link href="/menu" className="btn-primary text-lg">
                        View Our Menu
                    </Link>
                    <OrderDropdown className="btn-secondary text-lg" />
                </div>

                {/* Food image showcase — 3 circular previews */}
                <div
                    className="flex items-center justify-center gap-4 sm:gap-6 animate-fadeInUp stagger-6"
                    style={{ opacity: 0 }}
                >
                    {[
                        {
                            src: "/images/food1.jpg",
                            alt: "Papa a la Huancaína",
                            label: "Papa a la Huancaína",
                        },
                        {
                            src: "/images/food2.jpg",
                            alt: "Empanada",
                            label: "Empanada",
                        },
                        {
                            src: "/images/food3.jpg",
                            alt: "Bistec a lo Pobre",
                            label: "Bistec a lo Pobre",
                        },
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            href="/menu"
                            className="group flex flex-col items-center gap-2"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-[var(--color-gold)]/40 group-hover:ring-[var(--color-gold)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                                />
                            </div>
                            <span className="text-[10px] sm:text-xs text-[var(--color-stone-light)] group-hover:text-[var(--color-gold)] transition-colors uppercase tracking-wider font-medium hidden sm:block">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom info bar — glass overlay with essential info */}
            <div className="relative z-10 w-full glass border-t border-[var(--color-gold)]/10 border-x-0 border-b-0 md:absolute md:bottom-0 md:left-0 md:right-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                        {/* Address */}
                        <div className="flex items-center gap-2">
                            <span className="text-base">📍</span>
                            <span className="text-xs sm:text-sm text-[var(--color-stone-light)]">
                                2161 Colorado Blvd, Los Angeles, CA 90041
                            </span>
                        </div>

                        {/* Phone */}
                        <a
                            href="tel:+13232556322"
                            className="flex items-center gap-2 text-[var(--color-gold)] hover:text-white transition-colors"
                        >
                            <span className="text-base">📞</span>
                            <span className="text-sm font-semibold">(323) 255-6322</span>
                        </a>

                        {/* Hours */}
                        <div className="flex items-center gap-2">
                            <span className="text-base">🕐</span>
                            <span className="text-xs sm:text-sm text-[var(--color-stone-light)]">
                                Open Daily 11am–9pm{" "}
                                <span className="text-[var(--color-stone)]">(Wed Closed)</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => {
                    document.getElementById("featured-dishes")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`absolute bottom-32 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 hover:opacity-80 ${isBouncing ? "animate-bounce" : "opacity-50"}`}
                aria-label="Scroll to featured dishes"
            >
                <div className="w-6 h-10 rounded-full border-2 border-[var(--color-stone-light)]/50 flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                </div>
            </button>
        </section>
    );
}
