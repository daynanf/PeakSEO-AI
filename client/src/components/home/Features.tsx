/* eslint-disable @typescript-eslint/no-explicit-any */
import { homeFeaturesData } from "../../assets/assets";

export default function Features() {
    return (
        <section className="relative md:min-h-screen flex flex-col justify-center items-center max-lg:py-24 overflow-hidden -mt-16">
            {/* glowing effect */}
           <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 -top-105 -translate-x-1/2 w-300 h-300 rounded-full bg-[#03289f] opacity-15 blur-[150px]" />
            <div className="absolute left-[42%] -top-70 w-175 h-175 rounded-full bg-[#6b9be6] opacity-15 blur-[120px]" />
            <div className="absolute right-[28%] -top-55 w-75 h-75 rounded-full bg-[#eda312] opacity-10 blur-[90px]" />
           </div>
            <div className="bg-dot-pattern absolute inset-0 -z-1 opacity-10"></div>
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4 ">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-foreground">
                        Everything You Need to <span className="gradient-text">Rank Higher</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive SEO analysis powered by real browser rendering and artificial intelligence.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                    {homeFeaturesData.map((f: any) => (
                        <div key={f.title} className="bg-card border border-border rounded-2xl p-6 hover:bg-muted/30 backdrop-blur transition-all group">
                            <div className="text-primary mb-4 group-hover:translate-y-1 transition-transform duration-300 inline-block">{f.icon}</div>
                            <h3 className="text-lg font-medium mb-2 text-foreground">{f.title}</h3>
                            <p className="w-5/6 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
