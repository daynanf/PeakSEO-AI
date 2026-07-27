import { SearchIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeWave } from "../../assets/assets";

export function Hero(){
    const [url, setUrl] = useState<string>("");
    const navigate = useNavigate();

    const handleQuickAnalyze = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/analyze?url=${encodeURIComponent(url)}`);
    }

    return (
        <section className="max-w-2xl mx-auto px-4 py-40 sm:py-44 min-h-screen text-center">
            {/* glowing effect */}
           <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 -top-105 -translate-x-1/2 w-300 h-300 rounded-full bg-[#03289f] opacity-15 blur-[150px]" />
            <div className="absolute left-[42%] -top-70 w-175 h-175 rounded-full bg-[#6b9be6] opacity-15 blur-[120px]" />
            <div className="absolute right-[28%] -top-55 w-75 h-75 rounded-full bg-[#eda312] opacity-10 blur-[90px]" />
           </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/2 rounded-full text-xs text-primary mb-6 border border-primary/10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute bg-blue-600 size-2 rounded-full animate-ping"></div>
                    <div className="bg-blue-600 size-1.5 rounded-full"></div>
                </div>
                Powered by BrowserBase & Gemini AI
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6 text-foreground">
                The AI Workspace for <span className="gradient-text dm-serif">Smarter SEO</span>
            </h1>
            <p className="text-sm  text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">Analyze any website in seconds, discover hidden SEO opportunities, monitor keyword rankings, and receive actionable AI recommendations that help you climb search results with confidence.</p>

            <form onSubmit={handleQuickAnalyze} className="max-w-2xl mx-auto relative">
               <div className="bg-card border border-border rounded-full px-2 py-1.5 flex items-center gap-2 animate-pulse-glow">
                    <div className="flex items-center gap-2 flex-1 px-3">
                        <SearchIcon size={16} className="text-muted-foreground shrink-0" />
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter website URL (e.g., example.com)" className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm py-2" id="hero-url-input" />
                    </div>

                    <button type="submit" className="bg-primary px-5 py-2.5 rounded-full text-primary-foreground text-sm hover:opacity-90 transition-opacity shrink-0 flex items-center gap-2" id="hero-analyze-btn" style={{ color: "var(--background)" }}>
                        Analyze
                        <ArrowRightIcon size={14} />
                    </button>
                </div>
            </form>

            <p className="text-muted-foreground text-sm mt-6 ">Free — No credit card required • 5 analyses per day</p>

            {/* Animated Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none -z-1">
                <HomeWave />
            </div>
        </section>
    );
}



