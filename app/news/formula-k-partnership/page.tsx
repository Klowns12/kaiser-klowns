import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Formula K Partnership — Kaiser Klowns",
    description: "Kaiser Klowns announces a groundbreaking strategic partnership with Formula K Racing.",
};

export default function FormulaKPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "News", href: "/press" }, { label: "Formula K Partnership" }]}
                title="Kaiser Klowns × Formula K"
                subtitle="February 14, 2026"
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <div className="space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        <p className="text-[16px] text-foreground/70 font-medium">Kaiser Klowns is proud to announce a multi-year strategic partnership with Formula K Racing, marking the conglomerate's first major entry into international motorsport.</p>
                        <p>The partnership will see Kaiser Klowns' Houses collaborate across the Formula K experience — from Maventine-designed team apparel to Aurelic Systems' data analytics platform powering race strategy. KurenTengu will provide exclusive hospitality experiences, while Velvessence Studios will produce docu-series content capturing the season.</p>
                        <p>Lokovox Media will serve as the exclusive editorial partner, delivering in-depth coverage and analysis to a global audience of 50 million readers.</p>
                        <p>"This partnership represents everything Kaiser Klowns stands for — the convergence of creativity, technology, and performance at the highest level," said the group in a statement. "Formula K shares our belief that excellence is not a destination, but a relentless pursuit."</p>
                        <p>The partnership launches with the 2026 Formula K season opener in Monaco.</p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-foreground/8">
                        <Link href="/press" className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back to Press
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
