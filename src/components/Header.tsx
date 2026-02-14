"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import OrderModal from "@/components/OrderModal";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [headerOpacity, setHeaderOpacity] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 20);

            // Calculate opacity for smooth transition over first 50px
            // Max opacity is 0.95 (to match bg-charcoal/95)
            const opacity = Math.min(scrollY / 50, 0.95);
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
            style={{
                backgroundColor: `rgba(28, 28, 28, ${headerOpacity})`, // var(--color-charcoal) is usually #1C1C1C
                backdropFilter: `blur(${headerOpacity * 10}px)`,
                boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none"
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-gold)] transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/updated_logo.png"
                                alt="Pollos a la Brasa Logo"
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        </div>
                        <div className="flex flex-col justify-center h-10">
                            <span className="font-display text-xl sm:text-2xl font-bold text-[var(--color-gold)] leading-none">
                                Pollos a la Brasa
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${pathname === link.href
                                    ? "text-[var(--color-gold)]"
                                    : "text-[var(--color-stone-light)] hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full" />
                                )}
                            </Link>
                        ))}
                        <OrderModal className="btn-primary !py-2.5 !px-6 !text-sm" />
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass bg-[var(--color-charcoal)]/95 backdrop-blur-xl border-t border-[var(--color-accent)]/20 px-4 py-6 shadow-2xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-medium py-2 border-b border-white/5 transition-colors ${pathname === link.href
                                    ? "text-[var(--color-gold)]"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <OrderModal className="btn-primary text-center mt-2 w-full" />
                    </nav>
                </div>
            </div>
        </header>
    );
}
