import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center px-6 pt-20 pb-10 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent-1/15 to-accent-2/15 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Image */}
                <div className="col-span-1 flex justify-center lg:justify-start relative order-1 lg:order-1 animate-fade-in-up">
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 p-1.5 bg-gradient-to-br from-accent-1 to-accent-2 rounded-[35%] shadow-2xl shadow-accent-1/20 transition hover:scale-105 duration-500">
                        <div className="relative w-full h-full bg-surface rounded-[35%] overflow-hidden border-4 border-background">
                            <Image
                                src="/profile.jpg"
                                alt="Mohamed Ayman Mohamed"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: Text & Links */}
                <div className="col-span-1 flex flex-col justify-center space-y-6 order-2 lg:order-2">
                    <div className="space-y-4 animate-fade-in-up animate-delay-100">
                        <p className="text-sm font-medium tracking-wider text-accent-1 uppercase">
                            Backend Engineer
                        </p>
                        {/* ✅ Reduced size slightly + whitespace-nowrap forces all 3 words onto 1 line */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground whitespace-nowrap">
                            Mohamed Ayman Mohamed
                        </h1>
                    </div>

                    <p className="max-w-2xl text-lg leading-9 text-muted animate-fade-in-up animate-delay-200">
                        I architect and build high-performance backend systems and business applications.
                        From services and data pipelines to seamless, user-facing dashboards.
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up animate-delay-300">
                        {["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-surface border border-border px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:border-accent-2 hover:text-foreground hover:-translate-y-1"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-400">
                        <a
                            href="#projects"
                            className="rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-1/25 transition-all duration-200 hover:scale-105 hover:shadow-accent-1/40 active:scale-95"
                        >
                            Explore Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-border bg-surface/50 px-8 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:border-accent-1"
                        >
                            Let's Connect
                        </a>
                    </div>

                    {/* Social Pills */}
                    <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up animate-delay-500">
                        <a href="mailto:mohamedaymankhater270@gmail.com" className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-surface hover:text-foreground">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Email
                        </a>
                        <a href="https://github.com/MohamedAyman23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-surface hover:text-foreground">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-ayman-5a886b214/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-surface hover:text-foreground">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}