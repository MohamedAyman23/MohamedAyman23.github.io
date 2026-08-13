export default function About() {
    return (
        <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        About Me
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Building backend systems with Java & Spring Boot
                    </h3>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    <div className="space-y-5 text-muted text-lg leading-8">
                        <p>I'm a Software Engineer focused on backend development, with a strong foundation in Java and object-oriented programming.</p>
                        <p>I enjoy designing APIs, working with databases, and building maintainable backend applications using Spring Boot and related technologies.</p>
                        <p>I'm continuously improving my understanding of software architecture, system design, design patterns, and backend engineering practices.</p>
                    </div>

                    <div className="rounded-[2rem] border border-border bg-surface p-8 backdrop-blur-sm transition hover:shadow-lg">
                        <h3 className="mb-6 text-lg font-semibold text-foreground">What I focus on</h3>
                        <ul className="space-y-4 text-muted text-base">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                Java & Spring Boot backend development
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                RESTful API design
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                Database design & persistence
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                Clean and maintainable code
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                Software architecture & design patterns
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></span>
                                Docker & deployment
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}