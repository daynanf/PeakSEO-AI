import { homeHowItWorksData } from "../../assets/assets";

export default function HowItWorks() {
    return (
        <section className="relative  md:min-h-screen mx-auto px-4 py-24">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 -top-105 -translate-x-1/2 w-300 h-300 rounded-full bg-[#03289f] opacity-15 blur-[150px]" />
            <div className="absolute left-[42%] -top-70 w-175 h-175 rounded-full bg-[#6b9be6] opacity-15 blur-[120px]" />
            <div className="absolute right-[28%] -top-55 w-75 h-75 rounded-full bg-[#eda312] opacity-10 blur-[90px]" />
           </div>
            <div className="text-center mb-16 animate-slide-up">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-foreground">
                    How It <span className="gradient-text">Works</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Rank Pilot uses advanced browser automation and AI to simulate a real user experience and provide deep SEO insights.</p>
            </div>

             <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-27.5 left-[15%] right-[15%] h-px border-t border-dashed border-border pointer-events-none z-0"></div>

                {homeHowItWorksData.map((step: any , i:number) => (
                    <div key={step.num} className="relative z-10 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="bg-card border border-border rounded-2xl p-8 text-center h-full hover:bg-muted transition-all group/step">
                            <div className="text-5xl font-bold text-primary/10 mb-4 group-hover/step:text-primary/20 transition-colors">{step.num}</div>
                            <div className="size-14 rounded-xl flex items-center justify-center mx-auto mb-5 text-primary/80 border border-primary/20 bg-muted/40 group-hover/step:border-primary/40 transition-all">{step.icon}</div>
                            <h3 className=" mb-2 text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

    