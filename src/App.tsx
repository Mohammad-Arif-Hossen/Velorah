/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';

export default function App() {
  const [showHireMessage, setShowHireMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleNavLinkClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowHireMessage(true);
    setShowEmail(false);
  };

  const handleHireMeClick = () => {
    setShowEmail(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background font-body selection:bg-white/20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navigation Bar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <span 
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Arif<sup className="text-xs">®</sup>
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-foreground transition-colors">Home</a>
          <a href="#" onClick={handleNavLinkClick} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Studio</a>
          <a href="#" onClick={handleNavLinkClick} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#" onClick={handleNavLinkClick} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Journal</a>
          <a href="#" onClick={handleNavLinkClick} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Reach Us</a>
        </div>

        <div>
          <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]">
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Hero Content Wrapper for Vertical Centering */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center">
        <section className="flex flex-col items-center px-6 pt-32 pb-40 text-center md:py-[90px]">
          {showHireMessage ? (
            <div className="animate-fade-rise flex flex-col items-center gap-8">
              <h2 
                className="text-4xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Hire me to unlock <br /> My full potential
              </h2>
              
              {!showEmail ? (
                <button 
                  onClick={handleHireMeClick}
                  className="liquid-glass rounded-full px-12 py-4 text-lg font-medium text-foreground transition-transform hover:scale-[1.05]"
                >
                  Hire Me
                </button>
              ) : (
                <div className="animate-fade-rise flex flex-col items-center gap-4">
                  <p className="text-xl font-medium text-foreground selection:bg-white/30">
                    mohammad.arif.hossen@proton.me
                  </p>
                  <button 
                    onClick={() => setShowHireMessage(false)}
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Back to home
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <h1 
                className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Where <em className="not-italic text-muted-foreground">dreams</em> rise <br className="hidden sm:block" />
                through the <em className="not-italic text-muted-foreground">silence.</em>
              </h1>

              <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                We're designing tools for deep thinkers, bold creators, and quiet rebels. 
                Amid the chaos, we build digital spaces for sharp focus and inspired work.
              </p>

              <button className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base font-medium text-foreground transition-transform hover:scale-[1.03]">
                Begin Journey
              </button>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
