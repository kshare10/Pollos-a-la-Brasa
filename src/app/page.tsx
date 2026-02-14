import Link from "next/link";
import { menuCategories } from "@/lib/menuData";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  // Pick a few featured dishes to highlight
  const featuredDishes = [
    {
      nameEs: "Pollo a la Brasa",
      nameEn: "Rotisserie Chicken",
      description: "Our signature Peruvian-style rotisserie chicken, marinated with aromatic spices and slow-roasted to golden perfection. Served with your choice of two sides.",
      price: "16.35",
      tag: "Signature Dish",
    },
    {
      nameEs: "Lomo Saltado",
      nameEn: "Sautéed Loin",
      description: "Classic Peruvian stir-fry with tender beef, onions, and tomatoes in a savory soy sauce, served with rice and crispy fries.",
      price: "16.50",
      tag: "Chef's Pick",
    },
    {
      nameEs: "Ceviche de Camarones",
      nameEn: "Shrimp Ceviche",
      description: "Fresh shrimp marinated in citrus lime juice with a blend of Peruvian spices. A refreshing, zesty appetizer.",
      price: "19.50",
      tag: "Fan Favorite",
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
      <section id="featured-dishes" className="py-20 bg-[var(--section-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[var(--color-accent)] text-sm uppercase tracking-[0.2em] font-medium">
              From Our Kitchen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              Featured Dishes
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-gradient-gold rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="glass-light rounded-2xl p-8 group hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent)]/20 shadow-sm">
                    {dish.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-bold group-hover:text-[var(--color-gold)] transition-colors">
                  {dish.nameEs}
                </h3>
                <p className="text-xs text-[var(--color-stone-light)] uppercase tracking-widest mt-1">
                  {dish.nameEn}
                </p>
                <p className="text-[var(--color-stone-light)] text-sm mt-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-[var(--color-gold)]">
                    ${dish.price}
                  </span>
                  <Link
                    href="/menu"
                    className="text-sm text-[var(--color-accent-light)] hover:text-white transition-colors"
                  >
                    See full menu →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INFO STRIP
          ═══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center">
              <span className="text-3xl mb-3 block">📍</span>
              <h3 className="font-display text-xl text-white font-bold mb-2">
                Visit Us
              </h3>
              <p className="text-[var(--color-stone-light)] text-sm">
                2161 Colorado Blvd
                <br />
                Los Angeles, CA 90041
                <br />
                <span className="text-[var(--color-stone)]">(Eagle Rock)</span>
              </p>
              <Link
                href="/contact"
                className="inline-block mt-3 text-sm text-[var(--color-accent-light)] hover:text-white transition-colors"
              >
                Get directions →
              </Link>
            </div>

            {/* Hours */}
            <div className="text-center border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0 md:px-8">
              <span className="text-3xl mb-3 block">🕐</span>
              <h3 className="font-display text-xl text-white font-bold mb-2">
                Hours
              </h3>
              <div className="text-[var(--color-stone-light)] text-sm space-y-1">
                <p>Mon–Tue: 11am – 9pm</p>
                <p className="text-[var(--color-primary-light)]">Wed: Closed</p>
                <p>Thu–Sun: 11am – 9pm</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <span className="text-3xl mb-3 block">📞</span>
              <h3 className="font-display text-xl text-white font-bold mb-2">
                Call Us
              </h3>
              <a
                href="tel:+13232556322"
                className="text-[var(--color-gold)] text-lg font-semibold hover:text-white transition-colors"
              >
                (323) 255-6322
              </a>
              <p className="text-[var(--color-stone)] text-xs mt-2">
                Dine-in · Takeout · Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MENU TEASER
          ═══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--section-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-[var(--color-stone-light)] mb-8 max-w-2xl mx-auto">
            From our signature rotisserie chicken to fresh ceviches, hearty stews,
            and classic Peruvian favorites — {categoryCount} dishes crafted with authentic flavors.
          </p>
          <Link href="/menu" className="btn-primary text-lg">
            View Complete Menu
          </Link>
        </div>
      </section>
    </>
  );
}
