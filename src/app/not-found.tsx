import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--color-charcoal)] flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-display text-9xl font-bold text-[var(--color-gold)] mb-4">
                404
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                This Plate is Empty
            </h2>
            <p className="text-[var(--color-stone-light)] max-w-md mb-8">
                We couldn't find the page you were looking for. It might have been eaten by a hungry customer.
            </p>
            <Link href="/" className="btn-primary">
                Return Home
            </Link>
        </div>
    );
}
