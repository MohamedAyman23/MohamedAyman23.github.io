"use client";

export default function Contact() {
    // Simple handler to prevent page reload (Connect this to EmailJS or a backend later)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted! Connect this to your email service in the future.");
    };

    return (
        <section id="contact" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <div className="card-glow-border relative rounded-3xl bg-surface border border-border px-6 py-12 text-center sm:px-10 transition hover:shadow-xl">

                    {/* Header */}
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-3">
                        Contact
                    </h2>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Send me a message
                    </h3>

                    {/* Form Container */}
                    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl text-left">

                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* Name */}
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border border-border bg-background px-11 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent-1 focus:outline-none focus:ring-1 focus:ring-accent-1/50 transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full rounded-xl border border-border bg-background px-11 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent-1 focus:outline-none focus:ring-1 focus:ring-accent-1/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative mt-4">
                            <div className="absolute left-4 top-4 text-muted">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" /></svg>
                            </div>
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full rounded-xl border border-border bg-background px-11 py-3.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent-1 focus:outline-none focus:ring-1 focus:ring-accent-1/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                type="submit"
                                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-1/25 transition-all duration-200 hover:scale-105 hover:shadow-accent-1/40 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                Send Message
                            </button>

                            {/* Download CV Button */}
                            <a
                                href="/cv.pdf"
                                download
                                className="w-full sm:w-auto rounded-full border border-border bg-surface/50 px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-hover hover:border-accent-1 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                Download CV
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}