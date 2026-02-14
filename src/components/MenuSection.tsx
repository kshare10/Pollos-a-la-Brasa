import type { MenuCategory } from "@/lib/menuData";

export default function MenuSection({ category }: { category: MenuCategory }) {
    return (
        <section id={category.id} className="scroll-mt-24">
            {/* Category Header */}
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                        {category.nameEs}
                    </h2>
                </div>
                <p className="text-[var(--color-accent-light)] text-sm uppercase tracking-widest font-medium">
                    {category.nameEn}
                </p>
                {category.description && (
                    <p className="text-[var(--color-stone-light)] text-sm mt-2 italic">
                        {category.description}
                    </p>
                )}
                <div className="mt-4 h-px bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-gold)] to-transparent opacity-40" />
            </div>

            {/* Menu Items */}
            <div className="grid gap-4">
                {category.items.map((item) => (
                    <div key={item.id} className="menu-card group">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    <h3 className="font-semibold text-white group-hover:text-[var(--color-gold)] transition-colors">
                                        {item.nameEs}
                                    </h3>
                                    <span className="text-xs text-[var(--color-stone-light)] italic">
                                        / {item.nameEn}
                                    </span>
                                </div>
                                {item.description && (
                                    <p className="text-sm text-[var(--color-stone-light)] mt-1 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex-shrink-0">
                                <span className="text-lg font-bold text-[var(--color-gold)] font-display">
                                    ${item.price.toFixed(2)}{item.uncertainPrice && <span className="text-[var(--color-stone)] text-sm align-super">*</span>}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
