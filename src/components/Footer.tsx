import Link from "next/link";
import Image from "next/image";
import OrderDropdown from "@/components/OrderDropdown";

export default function Footer() {
    return (
        <footer className="relative bg-[var(--color-charcoal)] border-t border-[var(--color-accent)]/10">
            {/* Top gold line accent */}
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/50">
                                <Image
                                    src="/images/updated_logo.png"
                                    alt="Pollos a la Brasa Logo"
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <span className="font-display text-xl font-bold text-[var(--color-gold)]">
                                Pollos a la Brasa
                            </span>
                        </div>
                        <p className="text-[var(--color-stone-light)] text-sm leading-relaxed">
                            Authentic Peruvian rotisserie chicken in the heart of Eagle Rock,
                            Los Angeles. Serving the community with love since 2020.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/menu", label: "Our Menu" },
                                { href: "/about", label: "About Us" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--color-stone-light)] hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-4">
                            Hours
                        </h3>
                        <ul className="space-y-2 text-sm text-[var(--color-stone-light)]">
                            <li className="flex justify-between gap-4">
                                <span>Monday – Tuesday</span>
                                <span className="text-white">11am – 9pm</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Wednesday</span>
                                <span className="text-[var(--color-primary-light)]">Closed</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Thursday – Sunday</span>
                                <span className="text-white">11am – 9pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-[var(--color-stone-light)]">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <a
                                    href="https://maps.google.com/?q=2161+Colorado+Blvd+Los+Angeles+CA+90041"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    2161 Colorado Blvd
                                    <br />
                                    Los Angeles, CA 90041
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a
                                    href="tel:+13232556322"
                                    className="hover:text-white transition-colors"
                                >
                                    (323) 255-6322
                                </a>
                            </li>
                        </ul>
                        <OrderDropdown className="btn-primary !py-2.5 !px-5 !text-sm mt-6 w-full" />
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-stone)]">
                        © {new Date().getFullYear()} Pollos a la Brasa · Eagle Rock, Los Angeles
                    </p>
                    <p className="text-xs text-[var(--color-stone)]">
                        Authentic Peruvian Cuisine Since 2020
                    </p>
                </div>
            </div>
        </footer>
    );
}
