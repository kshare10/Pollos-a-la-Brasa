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
            <section className="pt-32 pb-14 relative text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/35 bg-[#090C12]/60 backdrop-blur-md mb-3.5 shadow-lg">
                        Our Story & Roots
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3.5 drop-shadow-md">
                        About <span className="text-gradient">Us</span>
                    </h1>
                    <p className="text-slate-100 max-w-xl mx-auto text-base sm:text-lg leading-relaxed drop-shadow">
                        A taste of Peru and the majesty of the Andes in the heart of Eagle Rock
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-10 pb-24 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {/* Origin Story */}
                        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 shadow-2xl">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-[var(--color-gold)]/40 p-1 bg-[#090C12]/80">
                                    <Image
                                        src="/images/updated_logo.png"
                                        alt="Pollos a la Brasa Heritage"
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        sizes="96px"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl sm:text-4xl text-white font-bold">
                                        Our Heritage
                                    </h2>
                                    <p className="text-[var(--color-gold-light)] text-xs sm:text-sm uppercase tracking-widest mt-1 font-semibold">
                                        Nuestra Herencia
                                    </p>
                                </div>
                            </div>
                            <div className="text-slate-200 space-y-4 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Since opening our doors in <strong className="text-white font-semibold">2020</strong>, Pollos a la Brasa
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
                                    the streets of Lima and the historic Andean highlands.
                                </p>
                            </div>
                        </div>

                        {/* Peruvian Cuisine */}
                        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl sm:text-5xl">🇵🇪</span>
                                <div>
                                    <h2 className="font-display text-2xl sm:text-4xl text-white font-bold">
                                        Peruvian Cuisine
                                    </h2>
                                    <p className="text-[var(--color-gold-light)] text-xs sm:text-sm uppercase tracking-widest mt-1 font-semibold">
                                        Cocina Peruana
                                    </p>
                                </div>
                            </div>
                            <div className="text-slate-200 space-y-4 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Peru is home to one of the world&apos;s most celebrated and diverse
                                    culinary traditions. Peruvian cuisine blends Indigenous,
                                    Spanish, African, Chinese, and Japanese culinary influences into a
                                    uniquely delicious fusion recognized globally.
                                </p>
                                <p>
                                    <strong className="text-white font-semibold">Pollo a la Brasa</strong> —
                                    Peruvian rotisserie chicken — was created in Lima in the 1950s
                                    and has since become Peru&apos;s national dish. The secret lies in the marinade — a blend of
                                    cumin, paprika, garlic, soy sauce, and aromatic Andean chili peppers — and the
                                    slow, wood-fired roasting that gives the chicken its
                                    distinctive smoky, juicy character.
                                </p>
                                <p>
                                    Our menu also includes beloved classics like
                                    <strong className="text-white font-semibold"> Ceviche</strong> (fresh seafood cured in lime juice),
                                    <strong className="text-white font-semibold"> Lomo Saltado</strong> (savory beef stir-fry with fries and rice),
                                    <strong className="text-white font-semibold"> Papa a la Huancaína</strong> (tender potatoes in spicy creamy cheese sauce),
                                    and <strong className="text-white font-semibold">Alfajores</strong>.
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
                                    text: "We source the freshest ingredients daily to ensure every dish bursts with authentic Andean flavor.",
                                },
                                {
                                    icon: "👨‍🍳",
                                    title: "Traditional Recipes",
                                    titleEs: "Recetas Tradicionales",
                                    text: "Our recipes honor Peruvian tradition, passed down through generations of passionate cooks.",
                                },
                                {
                                    icon: "❤️",
                                    title: "Community First",
                                    titleEs: "Comunidad Primero",
                                    text: "Eagle Rock is our home. We take great pride in welcoming our guests with warmth and hospitality.",
                                },
                            ].map((value, idx) => (
                                <div key={idx} className="glass-card rounded-2xl p-7 text-center border border-amber-500/15">
                                    <span className="text-4xl mb-3.5 block">{value.icon}</span>
                                    <h3 className="font-display text-xl text-white font-bold mb-1">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs text-[var(--color-gold-light)] uppercase tracking-widest mb-3 font-semibold">
                                        {value.titleEs}
                                    </p>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {value.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center py-6">
                            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-3">
                                Come Taste the Difference
                            </h2>
                            <p className="text-slate-300 max-w-md mx-auto mb-8 text-sm sm:text-base">
                                Experience authentic Peruvian rotisserie chicken and bold Andean recipes today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/menu" className="btn-primary w-full sm:w-auto text-base">
                                    View Our Menu
                                </Link>
                                <Link href="/contact" className="btn-secondary w-full sm:w-auto text-base">
                                    📍 Visit Restaurant
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
