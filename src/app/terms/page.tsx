import React from "react";

export const metadata = {
    title: "Terms and Conditions | Pollos a la Brasa",
    description: "Terms and Conditions for Pollos a la Brasa website.",
};

export default function TermsPage() {
    return (
        <div className="bg-[var(--color-charcoal)] min-h-screen pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-8 text-center">
                    Terms and Conditions
                </h1>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 text-[var(--color-stone-light)] space-y-6">
                    <p className="text-sm text-[var(--color-stone)]">Last Updated: {new Date().getFullYear()}</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
                        <p>
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Pollos a la Brasa ("we," "us" or "our"), concerning your access to and use of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. User Representations</h2>
                        <p>
                            By using the website, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Products and Services</h2>
                        <p>
                            All products and services are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Modifications and Interruptions</h2>
                        <p>
                            We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Governing Law</h2>
                        <p>
                            These conditions are governed by and interpreted following the laws of the State of California, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
                        </p>
                        <address className="mt-2 not-italic">
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
