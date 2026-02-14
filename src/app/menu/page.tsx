"use client";

import { useState } from "react";
import { menuCategories } from "@/lib/menuData";
import MenuSection from "@/components/MenuSection";
import OrderDropdown from "@/components/OrderDropdown";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

    const scrollToCategory = (id: string) => {
        setActiveCategory(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                    <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                        {menuCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => scrollToCategory(cat.id)}
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-shrink-0 ${activeCategory === cat.id
                                    ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/30"
                                    : "text-[var(--color-stone-light)] hover:text-white hover:bg-white/5"
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
                            <OrderDropdown className="btn-primary" />
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
