import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About | Pollos a la Brasa Eagle Rock",
    description:
        "Learn about Pollos a la Brasa, an authentic Peruvian rotisserie chicken restaurant in Eagle Rock, Los Angeles. Serving the community since 2020.",
};

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 mb-4">
                        Our Story
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
                        About <span className="text-gradient">Us</span>
                    </h1>
                    <p className="text-[var(--color-stone-light)] max-w-xl mx-auto">
                        A taste of Peru in the heart of Eagle Rock
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {/* Origin Story */}
                        <div className="glass-light rounded-2xl p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                                    <Image
                                        src="/images/updated_logo.png"
                                        alt="Pollos a la Brasa Heritage"
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        sizes="(max-width: 640px) 64px, 80px"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-display text-3xl text-white font-bold">
                                        Our Heritage
                                    </h2>
                                    <p className="text-[var(--color-accent-light)] text-sm uppercase tracking-widest mt-1">
                                        Nuestra Herencia
                                    </p>
                                </div>
                            </div>
                            <div className="text-[var(--color-stone-light)] space-y-4 leading-relaxed">
                                <p>
                                    Since opening our doors in <strong className="text-white">2020</strong>, Pollos a la Brasa
                                    has been bringing the authentic flavors of Peru to the
                                    vibrant Eagle Rock neighborhood of Los Angeles. Our rotisserie
                                    chicken — marinated in a traditional blend of Peruvian spices
                                    and slow-roasted over an open flame — is the centerpiece of a
                                    menu built on generations of culinary heritage.
                                </p>
                                <p>
                                    What started as a small family dream to share the tastes of
                                    home has grown into a beloved neighborhood destination where
                                    locals and visitors alike come for the warm hospitality,
                                    generous portions, and flavors that transport you straight to
                                    the streets of Lima.
                                </p>
                            </div>
                        </div>

                        {/* Peruvian Cuisine */}
                        <div className="glass-light rounded-2xl p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-5xl">🇵🇪</span>
                                <div>
                                    <h2 className="font-display text-3xl text-white font-bold">
                                        Peruvian Cuisine
                                    </h2>
                                    <p className="text-[var(--color-accent-light)] text-sm uppercase tracking-widest mt-1">
                                        Cocina Peruana
                                    </p>
                                </div>
                            </div>
                            <div className="text-[var(--color-stone-light)] space-y-4 leading-relaxed">
                                <p>
                                    Peru is home to one of the world&apos;s most diverse and celebrated
                                    culinary traditions. Peruvian cuisine blends Indigenous,
                                    Spanish, African, Chinese, and Japanese influences into a
                                    uniquely delicious fusion that has earned international
                                    recognition.
                                </p>
                                <p>
                                    <strong className="text-white">Pollo a la Brasa</strong> —
                                    Peruvian rotisserie chicken — was created in Lima in the 1950s
                                    and has since become Peru&apos;s most iconic dish, with its own
                                    national holiday (<em>Día del Pollo a la Brasa</em>, the third
                                    Sunday of July). The secret lies in the marinade — a blend of
                                    cumin, paprika, garlic, soy sauce, and chili peppers — and the
                                    slow, charcoal-fired cooking that gives the chicken its
                                    distinctive smoky, juicy character.
                                </p>
                                <p>
                                    Our menu goes beyond chicken to include beloved classics like
                                    <strong className="text-white"> Ceviche</strong> (fresh seafood cured in lime juice),
                                    <strong className="text-white"> Lomo Saltado</strong> (a Chifa-inspired beef stir-fry),
                                    <strong className="text-white"> Ají de Gallina</strong> (creamy chicken in spicy nut sauce),
                                    and <strong className="text-white">Picarones</strong> (sweet potato donuts with chancaca syrup).
                                </p>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "🌿",
                                    title: "Fresh Ingredients",
                                    titleEs: "Ingredientes Frescos",
                                    text: "We source the freshest ingredients daily to ensure every dish bursts with authentic flavor.",
                                },
                                {
                                    icon: "👨‍🍳",
                                    title: "Traditional Recipes",
                                    titleEs: "Recetas Tradicionales",
                                    text: "Our recipes honor Peruvian tradition, passed down through generations of skilled cooks.",
                                },
                                {
                                    icon: "❤️",
                                    title: "Community First",
                                    titleEs: "Comunidad Primero",
                                    text: "Eagle Rock is our home. We take pride in serving our neighbors with warmth and generosity.",
                                },
                            ].map((value, idx) => (
                                <div key={idx} className="glass-light rounded-2xl p-8 text-center">
                                    <span className="text-4xl mb-4 block">{value.icon}</span>
                                    <h3 className="font-display text-xl text-white font-bold mb-1">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs text-[var(--color-accent-light)] uppercase tracking-widest mb-3">
                                        {value.titleEs}
                                    </p>
                                    <p className="text-[var(--color-stone-light)] text-sm leading-relaxed">
                                        {value.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center py-8">
                            <h2 className="font-display text-3xl text-white font-bold mb-4">
                                Come Taste the Difference
                            </h2>
                            <p className="text-[var(--color-stone-light)] max-w-md mx-auto mb-8">
                                We invite you to experience the warmth of Peruvian hospitality
                                and the bold flavors of our kitchen.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/menu" className="btn-primary">
                                    View Our Menu
                                </Link>
                                <Link href="/contact" className="btn-secondary">
                                    📍 Find Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
