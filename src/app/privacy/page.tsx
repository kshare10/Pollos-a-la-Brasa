import React from "react";

export const metadata = {
    title: "Privacy Policy | Pollos a la Brasa",
    description: "Privacy Policy for Pollos a la Brasa website.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/30 bg-[#0B0E14]/70 backdrop-blur-md mb-4">
                        Legal Information
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                </div>

                <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 text-slate-200 space-y-6 shadow-2xl">
                    <p className="text-xs text-[var(--color-gold-light)] uppercase tracking-wider font-semibold">Last Updated: {new Date().getFullYear()}</p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            Welcome to Pollos a la Brasa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Information We Collect</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300">
                            <li>Names and contact details</li>
                            <li>Phone numbers for orders</li>
                            <li>Email addresses for promotions or inquiries</li>
                            <li>Delivery addresses (for online orders)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. How We Use Your Information</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            We use personal information collected via our website for authentic service delivery, including:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300">
                            <li>Fulfilling and managing your takeout and delivery orders.</li>
                            <li>Customer support and inquiries.</li>
                            <li>Sending you updates and promotional communications when requested.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Contact Us</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                            If you have questions or comments about this policy, please reach out to us at:
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
