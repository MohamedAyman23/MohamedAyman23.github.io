const projects = [
    {
        title: "Raabit Platform",
        category: "B2B Export & Import Platform",
        featured: true,
        status: "Under Development",
        description:
            "A B2B platform designed to bridge Egyptian suppliers with importers around the world, providing a digital environment for discovering products, connecting businesses, managing inquiries, quotations, orders, shipping, payments, and business operations.",
        architecture: "Modular Monolith",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Spring Security", "JWT", "Docker"],
        domains: ["Authentication", "Supplier & Importer Profiles", "Products & Categories", "Inquiries & Messaging", "Quotations", "Sales Orders", "Shipping", "Payments", "Administration"],
    },
    {
        title: "Export Document Management System",
        category: "EDMS",
        featured: false,
        status: "Under Development",
        description:
            "A dedicated export document management system focused on organizing export documentation and supporting structured business workflows for export operations.",
        architecture: "Backend Application",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "Flyway", "Docker"],
        domains: ["Document Management", "Export Workflows", "REST APIs", "Authentication", "Caching", "Asynchronous Processing", "Database Migrations"],
    },
    {
        title: "Almanara Export Platform",
        category: "Agricultural Export Business Platform",
        featured: false,
        status: "Deployed",
        liveUrl: "https://www.almanaraeg.com/en/home",
        description:
            "A digital platform developed for an agricultural export business, supporting product and company content management, categories, blog content, newsletter functionality, and administrative operations.",
        architecture: "Backend Application",
        technologies: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "RabbitMQ", "Docker", "Cloudflare R2"],
        domains: ["Product Management", "Categories", "Company Content", "Blog Management", "Newsletter", "REST APIs", "Cloud Storage"],
    },
];

export default function Projects() {
    const featuredProject = projects.find((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        Featured Projects
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Backend systems I've built
                    </h3>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
                        A selection of backend-focused systems covering B2B platforms, export operations, document management, APIs, databases, messaging, caching, and application infrastructure.
                    </p>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <article className="card-glow-border relative mb-8 rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 group">
                        <div className="flex flex-col justify-between gap-6 sm:flex-row">
                            <div>
                                <div className="mb-3 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-3 py-1 text-xs font-medium text-white">
                                        Featured Project
                                    </span>
                                    <span className="rounded-full bg-surface-hover border border-border px-3 py-1 text-xs font-medium text-muted">
                                        {featuredProject.status}
                                    </span>
                                </div>
                                <p className="text-sm font-medium uppercase tracking-wider text-muted/80">
                                    {featuredProject.category}
                                </p>
                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    {featuredProject.title}
                                </h3>
                            </div>
                            <div className="shrink-0">
                                <span className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted">
                                    {featuredProject.architecture}
                                </span>
                            </div>
                        </div>
                        <p className="mt-8 max-w-4xl text-lg leading-8 text-muted">
                            {featuredProject.description}
                        </p>
                        <div className="mt-10">
                            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                                Core Business Domains
                            </h4>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {featuredProject.domains.map((domain) => (
                                    <div key={domain} className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted transition hover:border-accent-1/50">
                                        <span className="mr-2 text-accent-1">→</span>
                                        {domain}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 border-t border-border pt-8">
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                                Backend Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {featuredProject.technologies.map((technology) => (
                                    <span key={technology} className="rounded-full bg-surface-hover border border-border px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-accent-1/10 hover:border-accent-1">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#contact" className="rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-all duration-200 hover:scale-105 hover:shadow-accent-1/40 active:scale-95">
                                Request Case Study
                            </a>
                            <span className="rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition hover:border-accent-1/30 cursor-default">
                                Code Preview Soon
                            </span>
                        </div>
                    </article>
                )}

                {/* Other Projects */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {otherProjects.map((project) => (
                        <article key={project.title} className="card-glow-border relative flex h-full flex-col rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm font-medium uppercase tracking-wider text-muted/80">
                                        {project.category}
                                    </span>
                                    <span className="shrink-0 rounded-full bg-surface-hover border border-border px-3 py-1 text-xs font-medium text-muted">
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="mt-6 leading-7 text-muted">
                                {project.description}
                            </p>
                            <div className="mt-8">
                                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                                    Backend Focus
                                </h4>
                                <ul className="grid gap-3 sm:grid-cols-2">
                                    {project.domains.map((domain) => (
                                        <li key={domain} className="text-sm leading-6 text-muted transition hover:text-foreground">
                                            <span className="mr-2 text-accent-1">→</span>
                                            {domain}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 border-t border-border pt-6">
                                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span key={technology} className="rounded-full bg-surface-hover border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:bg-accent-1/10 hover:border-accent-1">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-8">
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-all duration-200 hover:scale-105 hover:shadow-accent-1/40 active:scale-95"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                                        Visit Live Site
                                    </a>
                                ) : (
                                    <span className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition hover:border-accent-1 cursor-default">
                                        Preview Coming
                                    </span>
                                )}
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}