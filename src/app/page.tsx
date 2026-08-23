import Link from "next/link";
import { menuCategories } from "@/lib/menuData";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  // Featured dishes
  const featuredDishes = [
    {
      nameEs: "Pollo a la Brasa",
      nameEn: "Rotisserie Chicken",
      description: "Our signature Peruvian-style rotisserie chicken, marinated with aromatic Andean spices and slow-roasted to golden perfection. Served with your choice of two sides.",
      price: "14.50",
      tag: "Signature Dish",
    },
    {
      nameEs: "Lomo Saltado",
      nameEn: "Sautéed Beef Loin",
      description: "Classic Peruvian stir-fry with tender beef strips, red onions, and ripe tomatoes in a rich savory soy reduction, served over white rice and crispy fries.",
      price: "14.50",
      tag: "Chef's Favorite",
    },
    {
      nameEs: "Ceviche de Camarones",
      nameEn: "Shrimp Ceviche",
      description: "Fresh tender shrimp marinated in zesty fresh lime juice, tossed with red onion, cilantro, and Peruvian rocoto chilies. A refreshing classic.",
      price: "16.99",
      tag: "Coastal Classic",
    },
  ];

  const categoryCount = menuCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <HeroSection />

      {/* ═══════════════════════════════════════
          FEATURED DISHES
          ═══════════════════════════════════════ */}
      <section id="featured-dishes" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] bg-amber-500/10 border border-amber-500/25 mb-3 shadow-sm">
              Peruvian Specialties
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Dishes
            </h2>
            <div className="mt-3.5 mx-auto h-1 w-20 bg-gradient-gold rounded-full" />
            <p className="text-slate-300 max-w-xl mx-auto mt-3.5 text-sm sm:text-base">
              Handcrafted with authentic Peruvian ingredients and time-honored recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 sm:p-8 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-3.5 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold bg-amber-500/15 text-[var(--color-gold-light)] border border-amber-500/30 shadow-sm">
                      {dish.tag}
                    </span>
                    <span className="font-display text-2xl font-bold text-[var(--color-gold)]">
                      ${dish.price}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white font-bold group-hover:text-[var(--color-gold-light)] transition-colors">
                    {dish.nameEs}
                  </h3>
                  <p className="text-xs text-amber-200/80 uppercase tracking-widest mt-1 font-semibold">
                    {dish.nameEn}
                  </p>
                  <p className="text-slate-300 text-sm mt-3.5 leading-relaxed font-normal">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-end">
                  <Link
                    href="/menu"
                    className="text-sm font-semibold text-[var(--color-gold)] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    View on menu <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INFO STRIP / LOCATION & HOURS
          ═══════════════════════════════════════ */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 border border-amber-500/20 shadow-2xl">
            {/* Location */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl mb-3.5 shadow-inner">
                📍
              </div>
              <h3 className="font-display text-xl text-white font-bold mb-1.5">
                Visit Our Restaurant
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                2161 Colorado Blvd
                <br />
                Los Angeles, CA 90041
                <br />
                <span className="text-amber-300 font-semibold">(Eagle Rock)</span>
              </p>
              <Link
                href="/contact"
                className="mt-3.5 text-sm font-semibold text-[var(--color-gold)] hover:text-white transition-colors"
              >
                Get Directions →
              </Link>
            </div>

            {/* Hours */}
            <div className="text-center flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-7 md:py-0 md:px-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl mb-3.5 shadow-inner">
                🕐
              </div>
              <h3 className="font-display text-xl text-white font-bold mb-1.5">
                Operating Hours
              </h3>
              <div className="text-slate-300 text-sm space-y-1 font-medium">
                <p>Sun–Tue: 11:00 AM – 8:30 PM</p>
                <p className="text-red-400 font-semibold">Wednesday: Closed</p>
                <p>Thu–Sat: 11:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl mb-3.5 shadow-inner">
                📞
              </div>
              <h3 className="font-display text-xl text-white font-bold mb-1.5">
                Phone & Orders
              </h3>
              <a
                href="tel:+13232556322"
                className="text-[var(--color-gold)] text-xl font-bold hover:text-white transition-colors tracking-wide font-display"
              >
                (323) 255-6322
              </a>
              <p className="text-slate-400 text-xs mt-1.5 font-medium">
                Dine-in · Takeout · Fast Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MENU TEASER & CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/25 shadow-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)] bg-amber-500/15 border border-amber-500/30 mb-3.5">
              Tradición Peruana
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3.5">
              Explore Our Full Menu
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              From our famous rotisserie chicken to savory lomo saltado, fresh ceviches, and sweet alfajores — over {categoryCount} dishes prepared with true Andean passion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/menu" className="btn-primary text-base w-full sm:w-auto">
                View Complete Menu
              </Link>
              <Link href="/about" className="btn-secondary text-base w-full sm:w-auto">
                Our Story & Heritage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
