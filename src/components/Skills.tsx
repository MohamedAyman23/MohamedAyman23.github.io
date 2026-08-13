const skillGroups = [
    {
        title: "Backend Development",
        description: "Core technologies I use to build backend applications and APIs.",
        skills: ["Java", "Spring Boot", "Spring Framework", "Spring Data JPA", "Hibernate", "REST APIs", "DTO Pattern", "Validation", "Exception Handling"],
    },
    {
        title: "Architecture & Design",
        description: "Practices I use to structure maintainable backend systems.",
        skills: ["Layered Architecture", "Modular Monolith", "SOLID Principles", "Design Patterns", "Clean Code", "Separation of Concerns", "Dependency Injection"],
    },
    {
        title: "Databases & Persistence",
        description: "Working with relational databases, persistence, and schema evolution.",
        skills: ["PostgreSQL", "MySQL", "Spring Data JPA", "Hibernate", "SQL", "Database Design", "Flyway"],
    },
    {
        title: "Caching & Messaging",
        description: "Tools for improving performance and processing asynchronous workloads.",
        skills: ["Redis", "RabbitMQ", "Caching", "Asynchronous Processing", "Message Queues"],
    },
    {
        title: "Security",
        description: "Backend security and authentication concepts.",
        skills: ["Spring Security", "JWT", "Authentication", "Authorization", "Password Hashing", "Role-Based Access Control"],
    },
    {
        title: "DevOps & Infrastructure",
        description: "Tools and technologies I use to run and deploy backend systems.",
        skills: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub", "CI/CD", "Cloudflare"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        Technical Skills
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Backend engineering toolkit
                    </h3>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
                        Technologies and engineering practices I use while designing, developing, testing, and deploying backend systems.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="card-glow-border relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-foreground">
                                {group.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-muted">
                                {group.description}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground hover:border-accent-1 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}