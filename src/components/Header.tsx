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

            const opacity = Math.min(scrollY / 50, 0.92);
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
            style={{
                backgroundColor: `rgba(9, 12, 18, ${scrolled ? 0.85 : headerOpacity * 0.75})`,
                backdropFilter: `blur(${Math.max(headerOpacity * 14, 8)}px)`,
                borderColor: scrolled ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.08)",
                boxShadow: scrolled ? "0 8px 24px -8px rgba(0, 0, 0, 0.6)" : "none"
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/80 shadow-md shadow-amber-500/20">
                            <Image
                                src="/images/updated_logo.png"
                                alt="Pollos a la Brasa Logo"
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-display text-xl sm:text-2xl font-bold text-gradient-gold leading-none">
                                Pollos a la Brasa
                            </span>
                            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-slate-300 uppercase font-medium mt-0.5">
                                Peruvian Cuisine · Eagle Rock
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${pathname === link.href
                                    ? "text-[var(--color-gold)]"
                                    : "text-slate-200 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-gold rounded-full shadow-sm shadow-amber-400" />
                                )}
                            </Link>
                        ))}
                        <OrderModal className="btn-primary !py-2.5 !px-6 !text-sm" />
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
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
                className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass bg-[#090C12]/95 backdrop-blur-2xl border-t border-[var(--color-accent)]/25 px-5 py-6 shadow-2xl">
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-base font-semibold py-2.5 px-3 rounded-lg border-b border-white/5 transition-colors ${pathname === link.href
                                    ? "text-[var(--color-gold)] bg-amber-500/10"
                                    : "text-slate-200 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <OrderModal className="btn-primary text-center w-full !py-3 !text-sm" />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
