"use client";

import { useState, useEffect, useRef } from "react";
import { menuCategories } from "@/lib/menuData";
import MenuSection from "@/components/MenuSection";
import OrderModal from "@/components/OrderModal";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

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

            // Re-enable observer after scroll animation (approx 1000ms)
            setTimeout(() => {
                isManualScroll.current = false;
            }, 1000);
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Find the category ID from the section ID
                    // Assuming MenuSection renders a div with id={category.id}
                    // We need to ensure MenuSection passes the ID to the DOM element
                    const id = entry.target.id;
                    if (id) {
                        // Only update state if we're not manually scrolling
                        if (!isManualScroll.current) {
                            setActiveCategory(id);

                            // Scroll the category button into view if needed
                            // manually using scrollLeft to prevent window jumping
                            const button = document.querySelector(`button[data-category="${id}"]`) as HTMLElement;
                            const container = button?.parentElement;

                            if (button && container) {
                                const containerWidth = container.offsetWidth;
                                const buttonLeft = button.offsetLeft;
                                const buttonWidth = button.offsetWidth;

                                // Center the button in the container
                                const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

                                container.scrollTo({
                                    left: scrollLeft,
                                    behavior: "smooth"
                                });
                            }
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all category sections
        menuCategories.forEach((cat) => {
            const element = document.getElementById(cat.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const tabsRef = useRef<HTMLDivElement>(null);

    // Update pill position when activeCategory changes
    useEffect(() => {
        if (!tabsRef.current) return;

        const activeBtn = tabsRef.current.querySelector(`button[data-category="${activeCategory}"]`) as HTMLElement;
        if (activeBtn) {
            // Use transform for smoother animation, keep left as 0 in state initial
            setPillStyle({
                left: activeBtn.offsetLeft, // We still need this value, but we apply it via transform
                width: activeBtn.offsetWidth,
                opacity: 1
            });
        }
    }, [activeCategory]);

    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 mb-4">
                        Pollos a la Brasa
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
                        Our <span className="text-gradient">Menu</span>
                    </h1>
                    <p className="text-[var(--color-stone-light)] max-w-xl mx-auto">
                        Authentic Peruvian dishes prepared fresh daily with traditional recipes
                        and the finest ingredients.
                    </p>
                </div>
            </section>

            {/* Sticky Category Navigation */}
            <div className="sticky top-20 z-30 bg-[var(--color-charcoal)]/95 backdrop-blur-md border-b border-[var(--color-accent)]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={tabsRef}
                        className="relative flex overflow-x-auto gap-1 py-3 scrollbar-hide"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {/* Sliding Pill */}
                        <div
                            className="absolute top-3 bottom-3 rounded-lg bg-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/30 transition-all duration-300 ease-out pointer-events-none will-change-transform"
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
                                className={`relative z-10 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex-shrink-0 ${activeCategory === cat.id
                                    ? "text-white"
                                    : "text-[var(--color-stone-light)] hover:text-white"
                                    }`}
                            >
                                {cat.nameEs}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <section className="py-12 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {menuCategories.map((category) => (
                        <MenuSection key={category.id} category={category} />
                    ))}
                    {/* Price footnote */}
                    <div className="mt-12 pt-6 border-t border-white/5">
                        <p className="text-xs text-[var(--color-stone)] italic">
                            * Prices marked with an asterisk are approximate and may vary. Please contact the restaurant at{" "}
                            <a href="tel:+13232556322" className="text-[var(--color-accent-light)] hover:text-white transition-colors">(323) 255-6322</a>{" "}
                            or visit{" "}
                            <a href="https://www.pollosalabrasaca.com/pollos-a-la-brasa/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-light)] hover:text-white transition-colors">our online ordering page</a>{" "}
                            for the most current pricing.
                        </p>
                    </div>
                </div>

                {/* Order Online CTA */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="glass rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="font-display text-3xl text-white font-bold mb-3">
                            Ready to Order?
                        </h2>
                        <p className="text-[var(--color-stone-light)] mb-6 max-w-md mx-auto">
                            Skip the wait — order online for pickup or delivery directly from
                            our kitchen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <OrderModal className="btn-primary" />
                            <a href="tel:+13232556322" className="btn-secondary">
                                📞 Call (323) 255-6322
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
