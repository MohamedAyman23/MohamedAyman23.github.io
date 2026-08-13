"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "About", href: "#about" }, // Added back!
    { label: "Work", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl transition-all duration-300">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                {/* Reverted to your exact name */}
                <a href="#home" className="font-bold text-foreground tracking-tight text-lg whitespace-nowrap">
                    Mohamed Ayman
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted transition-all duration-300 hover:text-foreground border-b-2 border-transparent hover:border-accent-1"
                        >
                            {item.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:bg-surface-hover"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-border/50 bg-background/80 backdrop-blur-md md:hidden transition-all duration-300">
                    <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}