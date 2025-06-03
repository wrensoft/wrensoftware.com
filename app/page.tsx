"use client";

import { useEffect, useState } from "react";
import { GiHorseHead } from "react-icons/gi";
import { HiTrendingUp } from "react-icons/hi";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen tech-subtle-grid relative flex flex-col">
      {/* Thick grid lines around cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(66, 153, 225, 0.15) 2px, transparent 2px),
            linear-gradient(90deg, rgba(66, 153, 225, 0.15) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          mask: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px,
            black 0%,
            black 20%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.1) 80%,
            transparent 100%)`,
          WebkitMask: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px,
            black 0%,
            black 20%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.1) 80%,
            transparent 100%)`
        }}
      />
      {/* Header */}
      <header className="relative z-10 border-b border-[var(--tech-border)] bg-[var(--tech-surface)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="tech-status-dot"></div>
            <span className="font-mono text-sm text-[var(--tech-text-dim)]">System Online</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/mhoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--tech-text-dim)] hover:text-[var(--tech-secondary)] transition-colors w-5 h-5 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/mhoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--tech-text-dim)] hover:text-[var(--tech-text)] transition-colors w-5 h-5 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://hockerman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--tech-text-dim)] hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 py-8 pb-24">
        
        {/* Hero section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--tech-accent)] to-[var(--tech-secondary)] bg-clip-text text-transparent">
            Wren Software
          </h1>
          <div className="tech-divider max-w-24 mx-auto mb-8"></div>
          <p className="text-xl text-[var(--tech-text-dim)] max-w-2xl mx-auto leading-relaxed">
            Professional software engineering solutions that strengthen communities and drive positive impact
          </p>
        </section>

        {/* Portfolio section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-[var(--tech-text)]">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Take The Reins",
                desc: "Take the Reins is a central Indiana-based nonprofit which offers underserved youth the opportunity to learn and help themselves through horsemanship and animal husbandry in a safe, structured environment.",
                logo: "horse",
                website: "https://take-the-reins.org"
              },
              {
                name: "Women Investors Network",
                desc: "WIN provides networking events, mentorship opportunities, and other programming to connect, empower, and promote women in the investment industry in the central Indiana area",
                logo: "finance",
                website: "https://womeninvestorsnetwork.org"
              }
            ].map((client, index) => (
              <div key={index} className="tech-card rounded-lg p-6 select-none">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4 p-3 bg-[var(--tech-hover)] rounded-lg w-12 h-12 flex items-center justify-center">
                    {client.logo === "horse" ? (
                      <GiHorseHead size={24} className="text-[var(--tech-text)]" />
                    ) : client.logo === "finance" ? (
                      <HiTrendingUp size={24} className="text-[var(--tech-text)]" />
                    ) : (
                      client.logo
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--tech-text)] whitespace-nowrap">
                      {client.name}
                    </h3>
                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--tech-accent)] hover:text-[var(--tech-secondary)] transition-colors"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[var(--tech-text-muted)] leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--tech-text)]">Get In Touch</h2>
          <p className="text-[var(--tech-text-dim)] mb-8 max-w-xl mx-auto">
            Ready to discuss your next project? Let&apos;s build something great together.
          </p>
          <a
            href="mailto:mike@hockerman.com"
            className="tech-gradient text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-[var(--tech-border)] bg-[var(--tech-surface)]">
        <div className="max-w-6xl mx-auto px-6 py-3 text-center">
          <div className="font-mono text-sm text-[var(--tech-text-muted)]">
            © {new Date().getFullYear()} Wren Software. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
