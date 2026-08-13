export default function Education() {
    return (
        <section id="education" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        Education
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Academic Background
                    </h3>
                </div>

                <div className="card-glow-border relative rounded-3xl border border-border bg-surface p-8 shadow-sm transition hover:shadow-lg sm:p-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wider text-muted">
                                Bachelor's Degree
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-foreground">
                                Electrical Engineering
                            </h3>
                            <p className="mt-2 text-lg text-muted/90">
                                Computer & Control Department
                            </p>
                            <p className="mt-4 text-muted/80">
                                Suez Canal University
                            </p>
                        </div>
                        <div className="shrink-0 rounded-full bg-surface-hover border border-border px-4 py-2 text-sm font-medium text-muted">
                            Engineering
                        </div>
                    </div>
                    <div className="mt-8 border-t border-border pt-8">
                        <p className="max-w-3xl leading-7 text-muted/90">
                            Studied electrical engineering with a specialization in computer and control systems, building a foundation in programming, computer systems, algorithms, and engineering problem solving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}