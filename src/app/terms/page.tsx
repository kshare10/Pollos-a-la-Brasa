import React from "react";

export const metadata = {
    title: "Terms and Conditions | Pollos a la Brasa",
    description: "Terms and Conditions for Pollos a la Brasa website.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/30 bg-[#0B0E14]/70 backdrop-blur-md mb-4">
                        Terms of Service
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                        Terms & <span className="text-gradient">Conditions</span>
                    </h1>
                </div>

                <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 text-slate-200 space-y-6 shadow-2xl">
                    <p className="text-xs text-[var(--color-gold-light)] uppercase tracking-wider font-semibold">Last Updated: {new Date().getFullYear()}</p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Agreement to Terms</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            These Terms and Conditions constitute a legally binding agreement made between you and Pollos a la Brasa (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Products and Pricing</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            All products and menu items are subject to availability. Prices and item descriptions are subject to change. Online orders placed through third-party platforms are subject to their respective terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Contact Us</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            For any inquiries regarding our terms, please contact:
                        </p>
                        <address className="mt-2 not-italic text-sm text-[var(--color-gold)] font-medium">
                            Pollos a la Brasa<br />
                            2161 Colorado Blvd<br />
                            Los Angeles, CA 90041<br />
                            (323) 255-6322
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
}
