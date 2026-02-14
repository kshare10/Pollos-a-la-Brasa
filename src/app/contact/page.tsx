import type { Metadata } from "next";
import OrderDropdown from "@/components/OrderDropdown";

export const metadata: Metadata = {
    title: "Contact & Location | Pollos a la Brasa Eagle Rock",
    description:
        "Find Pollos a la Brasa at 2161 Colorado Blvd in Eagle Rock, Los Angeles. Call (323) 255-6322 for orders. Open Mon-Tue & Thu-Sun, 11am-9pm.",
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-28 pb-12 bg-gradient-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 mb-4">
                        Find Us
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
                        Contact & <span className="text-gradient">Location</span>
                    </h1>
                    <p className="text-[var(--color-stone-light)] max-w-xl mx-auto">
                        We&apos;d love to see you. Come visit us in Eagle Rock!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Map */}
                        <div className="glass rounded-2xl overflow-hidden min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1!2d-118.2134!3d34.1369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e1e3d7e4a9%3A0x44b3c4c3c5e8e3a0!2s2161%20Colorado%20Blvd%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "400px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pollos a la Brasa Location Map"
                            />
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="glass-light rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">📍</span>
                                    <div>
                                        <h2 className="font-display text-xl text-white font-bold mb-1">
                                            Address
                                        </h2>
                                        <p className="text-[var(--color-accent-light)] text-xs uppercase tracking-widest mb-3">
                                            Dirección
                                        </p>
                                        <p className="text-[var(--color-stone-light)]">
                                            2161 Colorado Blvd
                                            <br />
                                            Los Angeles, CA 90041
                                            <br />
                                            <span className="text-[var(--color-stone)]">
                                                (Eagle Rock neighborhood)
                                            </span>
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=2161+Colorado+Blvd+Los+Angeles+CA+90041"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-3 text-sm text-[var(--color-accent-light)] hover:text-white transition-colors"
                                        >
                                            Open in Google Maps →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="glass-light rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">📞</span>
                                    <div>
                                        <h2 className="font-display text-xl text-white font-bold mb-1">
                                            Phone
                                        </h2>
                                        <p className="text-[var(--color-accent-light)] text-xs uppercase tracking-widest mb-3">
                                            Teléfono
                                        </p>
                                        <a
                                            href="tel:+13232556322"
                                            className="text-2xl font-bold text-[var(--color-gold)] hover:text-white transition-colors font-display"
                                        >
                                            (323) 255-6322
                                        </a>
                                        <p className="text-[var(--color-stone)] text-sm mt-2">
                                            Call for takeout orders, catering inquiries, or questions
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="glass-light rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">🕐</span>
                                    <div className="flex-1">
                                        <h2 className="font-display text-xl text-white font-bold mb-1">
                                            Hours of Operation
                                        </h2>
                                        <p className="text-[var(--color-accent-light)] text-xs uppercase tracking-widest mb-4">
                                            Horario
                                        </p>
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {[
                                                    { day: "Monday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Tuesday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Wednesday", hours: "Closed", closed: true },
                                                    { day: "Thursday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Friday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Saturday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Sunday", hours: "11:00 AM – 9:00 PM" },
                                                ].map((row) => (
                                                    <tr
                                                        key={row.day}
                                                        className="border-b border-white/5 last:border-0"
                                                    >
                                                        <td className="py-2.5 text-[var(--color-stone-light)]">
                                                            {row.day}
                                                        </td>
                                                        <td
                                                            className={`py-2.5 text-right font-medium ${row.closed
                                                                ? "text-[var(--color-primary-light)]"
                                                                : "text-white"
                                                                }`}
                                                        >
                                                            {row.hours}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Order Online */}
                            <div className="glass rounded-2xl p-8 text-center">
                                <h2 className="font-display text-2xl text-white font-bold mb-2">
                                    Order Online
                                </h2>
                                <p className="text-[var(--color-stone-light)] text-sm mb-6">
                                    Skip the wait — order directly for pickup or delivery
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <OrderDropdown className="btn-primary w-full sm:w-auto" />
                                    <a
                                        href="tel:+13232556322"
                                        className="btn-secondary w-full sm:w-auto justify-center"
                                    >
                                        📞 Call Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
