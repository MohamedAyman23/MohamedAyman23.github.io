export default function Experience() {
    return (
        <section id="experience" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-14">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        Experience
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Backend Engineering Experience
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                        My experience combines hands-on backend development with software testing and real-world business applications.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="relative border-l border-border pl-8">
                    {/* Backend Development */}
                    <div className="relative pb-14">
                        <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent-1 shadow-lg shadow-accent-1/40" />
                        <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row">
                            <h3 className="text-xl font-semibold text-foreground">
                                Java Backend Software Engineer
                            </h3>
                            <span className="text-sm text-muted">
                                Projects & Professional Development
                            </span>
                        </div>
                        <p className="mb-5 font-medium text-muted/80">
                            Java • Spring Boot • Backend Engineering
                        </p>
                        <p className="mb-5 max-w-3xl leading-7 text-muted">
                            Building production-oriented backend applications using Java and Spring Boot, with a focus on RESTful APIs, database design, authentication, caching, asynchronous processing, and maintainable software architecture.
                        </p>
                        <ul className="mb-6 max-w-3xl space-y-3 text-muted">
                            <li>→ Designed and implemented REST APIs using Spring Boot.</li>
                            <li>→ Worked with relational databases and Spring Data JPA for persistence and data access.</li>
                            <li>→ Implemented caching solutions using Redis to improve application performance.</li>
                            <li>→ Used RabbitMQ for asynchronous processing and decoupling background operations.</li>
                            <li>→ Worked with Flyway database migrations and structured database versioning.</li>
                            <li>→ Containerized backend applications and supporting services using Docker.</li>
                            <li>→ Applied clean code, layered architecture, DTOs, exception handling, validation, and design patterns.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {["Java", "Spring Boot", "Spring Data JPA", "REST API", "PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Flyway", "Docker"].map((technology) => (
                                <span key={technology} className="rounded-full bg-surface border border-border px-3 py-1 text-sm text-muted">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* QA / Testing Experience */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-muted/60" />
                        <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row">
                            <h3 className="text-xl font-semibold text-foreground">
                                Software Tester
                            </h3>
                            <span className="text-sm text-muted">
                                Specialized Business Solutions
                            </span>
                        </div>
                        <p className="mb-5 font-medium text-muted/80">
                            Software Testing & Quality Assurance
                        </p>
                        <p className="mb-5 max-w-3xl leading-7 text-muted">
                            Working with business applications and APIs, validating application behavior and identifying issues through functional and API testing.
                        </p>
                        <ul className="mb-6 max-w-3xl space-y-3 text-muted">
                            <li>→ Tested REST APIs using Postman and Swagger.</li>
                            <li>→ Performed functional testing and validated business requirements.</li>
                            <li>→ Reported and tracked issues using ClickUp.</li>
                            <li>→ Worked with development teams to investigate and reproduce application issues.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {["Postman", "Swagger", "API Testing", "Functional Testing", "ClickUp"].map((technology) => (
                                <span key={technology} className="rounded-full bg-surface border border-border px-3 py-1 text-sm text-muted">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}