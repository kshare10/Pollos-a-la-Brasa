import Link from "next/link";
import Image from "next/image";
import OrderModal from "@/components/OrderModal";

export default function Footer() {
    return (
        <footer className="relative bg-[#090C12]/85 backdrop-blur-xl border-t border-amber-500/20 z-20">
            {/* Top gold line accent */}
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand - 4 cols */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/60 shadow-md shadow-amber-500/20">
                                <Image
                                    src="/images/updated_logo.png"
                                    alt="Pollos a la Brasa Logo"
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <span className="font-display text-xl font-bold text-gradient-gold">
                                Pollos a la Brasa
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Authentic Peruvian rotisserie chicken in the heart of Eagle Rock,
                            Los Angeles. Dedicated to preserving authentic Andean culinary traditions.
                        </p>
                    </div>

                    {/* Quick Links - 2 cols */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4">
                            Explore
                        </h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/menu", label: "Our Menu" },
                                { href: "/about", label: "About Us" },
                                { href: "/contact", label: "Location & Hours" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-[var(--color-gold)] transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours - 3.5 cols with ample room for single-line times */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4">
                            Hours
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-center justify-between gap-4 whitespace-nowrap">
                                <span>Sunday – Tuesday</span>
                                <span className="text-white font-medium">11am – 8:30pm</span>
                            </li>
                            <li className="flex items-center justify-between gap-4 whitespace-nowrap">
                                <span>Wednesday</span>
                                <span className="text-red-400 font-bold">Closed</span>
                            </li>
                            <li className="flex items-center justify-between gap-4 whitespace-nowrap">
                                <span>Thursday – Saturday</span>
                                <span className="text-white font-medium">11am – 9pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - 3 cols */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <a
                                    href="https://maps.google.com/?q=2161+Colorado+Blvd+Los+Angeles+CA+90041"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--color-gold)] transition-colors"
                                >
                                    2161 Colorado Blvd, Los Angeles, CA
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a
                                    href="tel:+13232556322"
                                    className="hover:text-[var(--color-gold)] transition-colors font-semibold text-[var(--color-gold)]"
                                >
                                    (323) 255-6322
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <OrderModal className="btn-primary !py-2.5 !px-5 !text-sm w-full" />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400 text-center md:text-left">
                        © {new Date().getFullYear()} Pollos a la Brasa · Eagle Rock, Los Angeles
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400">
                        <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
