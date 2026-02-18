import React from "react";

export const metadata = {
    title: "Privacy Policy | Pollos a la Brasa",
    description: "Privacy Policy for Pollos a la Brasa website.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-[var(--color-charcoal)] min-h-screen pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-8 text-center">
                    Privacy Policy
                </h1>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 text-[var(--color-stone-light)] space-y-6">
                    <p className="text-sm text-[var(--color-stone)]">Last Updated: {new Date().getFullYear()}</p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                        <p>
                            Welcome to Pollos a la Brasa ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Names</li>
                            <li>Phone numbers</li>
                            <li>Email addresses</li>
                            <li>Billing addresses (for online orders)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To post testimonials.</li>
                            <li>To request feedback.</li>
                            <li>To send you marketing and promotional communications.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Sharing Your Information</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Cookie Policy</h2>
                        <p>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this notice, you may contact us by post at:
                        </p>
                        <address className="mt-2 not-italic">
                            Pollos a la Brasa<br />
                            2161 Colorado Blvd<br />
                            Los Angeles, CA 90041<br />
                            United States
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
}
