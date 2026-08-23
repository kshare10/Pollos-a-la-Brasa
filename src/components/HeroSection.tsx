"use client";

import Image from "next/image";
import Link from "next/link";
import OrderModal from "@/components/OrderModal";

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden">
            {/* Ambient Andean Sun & Flame Glow Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[320px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-red-600/10 blur-[80px] pointer-events-none animate-float" />
            <div
                className="absolute top-32 right-10 w-64 h-64 rounded-full bg-amber-400/10 blur-[90px] pointer-events-none animate-float"
                style={{ animationDelay: "2s" }}
            />

            {/* Main Content Area */}
            <div className="relative z-10 flex-grow flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-36 pb-12 sm:pb-16">
                {/* Restaurant Logo */}
                <div className="animate-fadeInUp mb-5">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 via-red-500/20 to-amber-500/30 rounded-full blur-md" />
                        <Image
                            src="/images/updated_logo.png"
                            alt="Pollos A La Brasa - Eagle Rock Peruvian Restaurant"
                            width={160}
                            height={160}
                            className="relative mx-auto drop-shadow-2xl rounded-full ring-2 ring-[var(--color-gold)]/60 bg-[#090C12]/80 p-1"
                            priority
                        />
                    </div>
                </div>

                {/* Andean Heritage Badge */}
                <div className="animate-fadeInUp stagger-1" style={{ opacity: 0 }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/35 bg-[#0D121B]/80 backdrop-blur-md mb-5 shadow-lg shadow-black/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                        Eagle Rock · Los Angeles · Since 2020
                    </div>
                </div>

                {/* Hero Title */}
                <h1
                    className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-3 tracking-tight animate-fadeInUp stagger-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
                    style={{ opacity: 0 }}
                >
                    <span>Pollos</span>{" "}
                    <span className="text-gradient">a la Brasa</span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-lg sm:text-xl md:text-2xl text-[var(--color-cream)] max-w-2xl mx-auto mb-3 font-medium tracking-wide drop-shadow-md animate-fadeInUp stagger-3"
                    style={{ opacity: 0 }}
                >
                    Authentic Peruvian Rotisserie Chicken & Andean Flavors
                </p>

                {/* Description */}
                <p
                    className="text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed drop-shadow animate-fadeInUp stagger-4"
                    style={{ opacity: 0 }}
                >
                    Bringing the rich culinary soul of Peru to Eagle Rock. Marinated with aromatic Andean spices and slow-roasted over wood embers to juicy, crispy perfection.
                </p>

                {/* Action CTAs */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fadeInUp stagger-5"
                    style={{ opacity: 0 }}
                >
                    <Link href="/menu" className="btn-primary text-base w-full sm:w-auto shadow-lg">
                        Explore Full Menu
                    </Link>
                    <OrderModal className="btn-secondary text-base w-full sm:w-auto shadow-md" />
                </div>

                {/* Food image showcase */}
                <div
                    className="flex items-center justify-center gap-4 sm:gap-8 animate-fadeInUp stagger-6"
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
                            alt: "Papa Rellena",
                            label: "Papa Rellena",
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
                            <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[var(--color-gold)]/40 group-hover:ring-[var(--color-gold)]/80 transition-all duration-300 group-hover:scale-[1.03] shadow-xl shadow-black/60">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 72px, (max-width: 768px) 88px, 96px"
                                />
                            </div>
                            <span className="text-[11px] sm:text-xs text-slate-200 group-hover:text-[var(--color-gold-light)] transition-colors uppercase tracking-wider font-semibold mt-1 drop-shadow-md">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Translucent horizontal divider distinguishing top hero from following section */}
            <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />
            </div>
        </section>
    );
}
