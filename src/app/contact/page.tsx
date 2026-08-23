import type { Metadata } from "next";
import OrderModal from "@/components/OrderModal";

export const metadata: Metadata = {
    title: "Contact & Location | Pollos a la Brasa Eagle Rock",
    description:
        "Find Pollos a la Brasa at 2161 Colorado Blvd in Eagle Rock, Los Angeles. Call (323) 255-6322 for orders. Open Sun-Tue 11am-8:30pm & Thu-Sat 11am-9pm.",
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-14 relative text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] border border-[var(--color-gold)]/35 bg-[#090C12]/60 backdrop-blur-md mb-3.5 shadow-lg">
                        Find Us In Eagle Rock
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3.5 drop-shadow-md">
                        Contact & <span className="text-gradient">Location</span>
                    </h1>
                    <p className="text-slate-100 max-w-xl mx-auto text-base sm:text-lg leading-relaxed drop-shadow">
                        We&apos;d love to welcome you to our table. Come visit us in Los Angeles!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10 pb-24 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Map */}
                        <div className="glass-card rounded-3xl overflow-hidden min-h-[400px] p-2 border border-amber-500/20 shadow-2xl flex flex-col">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1!2d-118.2134!3d34.1369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e1e3d7e4a9%3A0x44b3c4c3c5e8e3a0!2s2161%20Colorado%20Blvd%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "380px", borderRadius: "1.25rem" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pollos a la Brasa Location Map"
                                className="flex-1"
                            />
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-6 flex flex-col justify-between">
                            {/* Address */}
                            <div className="glass-card rounded-3xl p-7 border border-amber-500/20 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h2 className="font-display text-xl text-white font-bold mb-0.5">
                                            Address
                                        </h2>
                                        <p className="text-[var(--color-gold-light)] text-xs uppercase tracking-widest mb-2 font-semibold">
                                            Dirección
                                        </p>
                                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                                            2161 Colorado Blvd
                                            <br />
                                            Los Angeles, CA 90041
                                            <br />
                                            <span className="text-amber-300 font-semibold">
                                                (Eagle Rock neighborhood)
                                            </span>
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=2161+Colorado+Blvd+Los+Angeles+CA+90041"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2.5 text-sm font-semibold text-[var(--color-gold)] hover:text-white transition-colors"
                                        >
                                            Open in Google Maps →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="glass-card rounded-3xl p-7 border border-amber-500/20 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h2 className="font-display text-xl text-white font-bold mb-0.5">
                                            Phone & Orders
                                        </h2>
                                        <p className="text-[var(--color-gold-light)] text-xs uppercase tracking-widest mb-2 font-semibold">
                                            Teléfono
                                        </p>
                                        <a
                                            href="tel:+13232556322"
                                            className="text-2xl font-bold text-[var(--color-gold)] hover:text-white transition-colors font-display tracking-wide"
                                        >
                                            (323) 255-6322
                                        </a>
                                        <p className="text-slate-300 text-xs sm:text-sm mt-1.5 font-medium">
                                            Call for takeout orders, catering inquiries, or questions
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="glass-card rounded-3xl p-7 border border-amber-500/20 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                                        🕐
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-xl text-white font-bold mb-0.5">
                                            Hours of Operation
                                        </h2>
                                        <p className="text-[var(--color-gold-light)] text-xs uppercase tracking-widest mb-3 font-semibold">
                                            Horario
                                        </p>
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {[
                                                    { day: "Sunday", hours: "11:00 AM – 8:30 PM" },
                                                    { day: "Monday", hours: "11:00 AM – 8:30 PM" },
                                                    { day: "Tuesday", hours: "11:00 AM – 8:30 PM" },
                                                    { day: "Wednesday", hours: "Closed", closed: true },
                                                    { day: "Thursday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Friday", hours: "11:00 AM – 9:00 PM" },
                                                    { day: "Saturday", hours: "11:00 AM – 9:00 PM" },
                                                ].map((row) => (
                                                    <tr
                                                        key={row.day}
                                                        className="border-b border-white/10 last:border-0"
                                                    >
                                                        <td className="py-1.5 text-slate-200 font-medium">
                                                            {row.day}
                                                        </td>
                                                        <td
                                                            className={`py-1.5 text-right font-semibold ${row.closed
                                                                ? "text-red-400 font-bold"
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
