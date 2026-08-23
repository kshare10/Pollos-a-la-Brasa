import type { MenuCategory } from "@/lib/menuData";

export default function MenuSection({ category }: { category: MenuCategory }) {
    return (
        <section id={category.id} className="scroll-mt-36">
            {/* Category Header */}
            <div className="mb-6">
                <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                        {category.nameEs}
                    </h2>
                    <span className="text-[var(--color-gold-light)] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                        {category.nameEn}
                    </span>
                </div>
                {category.description && (
                    <p className="text-slate-300 text-sm sm:text-base mt-1.5 leading-relaxed font-normal">
                        {category.description}
                    </p>
                )}
                <div className="mt-3.5 h-0.5 bg-gradient-to-r from-[var(--color-gold)] via-amber-500/50 to-transparent rounded-full opacity-60" />
            </div>

            {/* Menu Items Grid */}
            <div className="grid gap-4">
                {category.items.map((item) => (
                    <div key={item.id} className="menu-card group">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-[var(--color-gold-light)] transition-colors duration-200">
                                        {item.nameEs}
                                    </h3>
                                    {item.nameEn && (
                                        <span className="text-xs sm:text-sm text-amber-200/90 font-medium tracking-wide">
                                            / {item.nameEn}
                                        </span>
                                    )}
                                </div>
                                {item.description && (
                                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex-shrink-0 text-right flex flex-col items-end gap-1 pl-3">
                                {item.prices ? (
                                    item.prices.map((p, idx) => (
                                        <div key={idx} className="flex items-baseline justify-end gap-2">
                                            <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                                                {p.size}
                                            </span>
                                            <span className="text-base sm:text-lg font-bold text-[var(--color-gold)] font-display">
                                                ${p.price.toFixed(2)}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <span className="text-lg sm:text-xl font-bold text-[var(--color-gold)] font-display">
                                        {item.price !== undefined ? `$${item.price.toFixed(2)}` : ""}
                                        {item.uncertainPrice && <span className="text-amber-400 text-sm align-super">*</span>}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
