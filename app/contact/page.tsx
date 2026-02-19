import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export const metadata = {
    title: "Contact — Kaiser Klowns",
    description: "Get in touch with Kaiser Klowns. Offices worldwide.",
};

const offices = [
    { city: "NEW YORK", role: "Global Headquarters", address: "One World Trade Center, Suite 8500\nNew York, NY 10007", phone: "+1 (212) 555-0100" },
    { city: "PARIS", role: "European Operations", address: "22 Avenue Montaigne\n75008 Paris, France", phone: "+33 1 55 00 00 00" },
    { city: "TOKYO", role: "Asia-Pacific", address: "Roppongi Hills Mori Tower, 40F\nMinato-ku, Tokyo 106-6140", phone: "+81 3 5555 0000" },
    { city: "BANGKOK", role: "Southeast Asia", address: "Sathorn Square Tower, 32F\nBangkok 10120, Thailand", phone: "+66 2 555 0000" },
];

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Contact" }]}
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out to our team at any of our global locations."
            />

            {/* Contact form area */}
            <section className="pb-16 md:pb-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-6">
                            General Inquiries
                        </h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">Email</label>
                                <input type="email" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">Subject</label>
                                <select className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground/60 outline-none focus:border-foreground/40 transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Investor Relations</option>
                                    <option>Press</option>
                                    <option>Careers</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">Message</label>
                                <textarea rows={5} className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors resize-none" />
                            </div>
                            <button className="mt-2 px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-80 transition-opacity">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global offices */}
            <section className="pb-24 md:pb-32 bg-background border-t border-foreground/8">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-10">
                        Global Offices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offices.map((office) => (
                            <div key={office.city} className="border-l border-foreground/10 pl-6">
                                <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground">
                                    {office.city}
                                </h3>
                                <p className="mt-1 text-[10px] tracking-[0.1em] uppercase text-red">
                                    {office.role}
                                </p>
                                <p className="mt-3 text-[12px] text-foreground/40 leading-[1.7] font-sans whitespace-pre-line">
                                    {office.address}
                                </p>
                                <p className="mt-2 text-[12px] text-foreground/50 font-sans">
                                    {office.phone}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
