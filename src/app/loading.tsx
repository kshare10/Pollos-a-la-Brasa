export default function Loading() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)] flex items-center justify-center">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-[var(--color-gold)]/20 rounded-full animate-ping"></div>
                <div className="absolute inset-2 border-4 border-t-[var(--color-gold)] border-r-[var(--color-gold)]/50 border-b-[var(--color-gold)]/20 border-l-[var(--color-gold)]/50 rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
