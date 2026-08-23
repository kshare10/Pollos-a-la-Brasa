"use client";

import { useState, useEffect, useRef } from "react";
import { menuCategories } from "@/lib/menuData";
import MenuSection from "@/components/MenuSection";
import OrderModal from "@/components/OrderModal";
import PromoModal from "@/components/PromoModal";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
    const [showPromo, setShowPromo] = useState(false);

    // Specialty chicken combo banner pop-up on first visit to menu page
    useEffect(() => {
        const hasSeenPromo = sessionStorage.getItem("hasSeenMenuPromo");
        if (!hasSeenPromo) {
            const timer = setTimeout(() => {
                setShowPromo(true);
                sessionStorage.setItem("hasSeenMenuPromo", "true");
            }, 350);
            return () => clearTimeout(timer);
        }
    }, []);

    const isManualScroll = useRef(false);

    const scrollToCategory = (id: string) => {
        setActiveCategory(id);
        isManualScroll.current = true;

        const el = document.getElementById(id);
        if (el) {
            const offset = 180; // Adjust for sticky header + category nav
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setTimeout(() => {
                isManualScroll.current = false;
            }, 1000);
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id && !isManualScroll.current) {
                        setActiveCategory(id);

                        const button = document.querySelector(`button[data-category="${id}"]`) as HTMLElement;
                        const container = button?.parentElement;

                        if (button && container) {
                            const containerWidth = container.offsetWidth;
                            const buttonLeft = button.offsetLeft;
                            const buttonWidth = button.offsetWidth;
                            const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

                            container.scrollTo({
                                left: scrollLeft,
                                behavior: "smooth"
                            });
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        menuCategories.forEach((cat) => {
            const element = document.getElementById(cat.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const tabsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!tabsRef.current) return;

        const activeBtn = tabsRef.current.querySelector(`button[data-category="${activeCategory}"]`) as HTMLElement;
        if (activeBtn) {
            setPillStyle({
                left: activeBtn.offsetLeft,
                width: activeBtn.offsetWidth,
                opacity: 1
            });
        }
    }, [activeCategory]);

    return (
        <>
            <PromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />

            {/* Page Header */}
            <section className="pt-32 pb-14 relative text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/35 bg-[#090C12]/60 backdrop-blur-md mb-4 shadow-lg">
                        Authentic Peruvian Menu
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3.5 drop-shadow-md">
                        Our <span className="text-gradient">Menu</span>
                    </h1>
                    <p className="text-slate-100 max-w-xl mx-auto text-base sm:text-lg leading-relaxed drop-shadow">
                        Authentic Peruvian dishes prepared fresh daily with traditional recipes and slow-roasted Andean perfection.
                    </p>
                </div>
            </section>

            {/* Sticky Category Navigation */}
            <div className="sticky top-20 z-30 bg-[#090C12]/80 backdrop-blur-xl border-y border-amber-500/20 shadow-xl shadow-black/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={tabsRef}
                        className="relative flex overflow-x-auto gap-1.5 py-3 scrollbar-hide"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {/* Sliding Pill */}
                        <div
                            className="absolute top-3 bottom-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 shadow-md shadow-amber-500/30 transition-all duration-300 ease-out pointer-events-none will-change-transform"
                            style={{
                                transform: `translateX(${pillStyle.left}px)`,
                                width: `${pillStyle.width}px`,
                                opacity: pillStyle.opacity
                            }}
                        />

                        {menuCategories.map((cat) => (
                            <button
                                key={cat.id}
                                data-category={cat.id}
                                onClick={() => scrollToCategory(cat.id)}
                                className={`relative z-10 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex-shrink-0 cursor-pointer ${activeCategory === cat.id
                                    ? "text-white"
                                    : "text-slate-200 hover:text-white"
                                    }`}
                            >
                                {cat.nameEs}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <section className="py-14 min-h-screen relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {menuCategories.map((category) => (
                        <MenuSection key={category.id} category={category} />
                    ))}

                    {/* Price footnote */}
                    <div className="mt-12 pt-6 border-t border-white/10">
                        <p className="text-xs text-slate-300 italic leading-relaxed">
                            * Prices marked with an asterisk are approximate and may vary. Please contact the restaurant at{" "}
                            <a href="tel:+13232556322" className="text-[var(--color-gold)] font-medium hover:underline">(323) 255-6322</a>{" "}
                            or visit our ordering platforms for the most current pricing.
                        </p>
                    </div>
                </div>

                {/* Order Online CTA */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-amber-500/25 shadow-2xl">
                        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] bg-amber-500/10 border border-amber-500/20 mb-3">
                            Fast & Fresh
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-3">
                            Ready to Order?
                        </h2>
                        <p className="text-slate-200 mb-7 max-w-md mx-auto text-sm sm:text-base">
                            Skip the wait — order online for quick pickup or reliable delivery directly from our kitchen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <OrderModal className="btn-primary w-full sm:w-auto text-base" />
                            <a href="tel:+13232556322" className="btn-secondary w-full sm:w-auto text-base">
                                📞 Call (323) 255-6322
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
