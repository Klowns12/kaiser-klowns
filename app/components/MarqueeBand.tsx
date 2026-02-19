"use client";

const items = [
    "MAVENTINE",
    "AURELIC SYSTEMS",
    "KURENTENGU",
    "VELVESSENCE STUDIOS",
    "LOKOVOX MEDIA",
];

// Triple the items for seamless loop
const repeated = [...items, ...items, ...items];

export default function MarqueeBand() {
    return (
        <section className="relative py-6 bg-[#0a0a0a] overflow-hidden border-y border-white/[0.04]">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
                {repeated.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-12">
                        <span className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-white/20 font-bold">
                            {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red/40 shrink-0" />
                    </span>
                ))}
            </div>
        </section>
    );
}
