import React from 'react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-24 md:pt-28 pb-20 font-jost select-none">
      <SEO
        title="Contact Us | Wishes by Om Sweets Studios"
        description="Get in touch with Wishes by Om Sweets. Visit our luxury studios in Gurugram and Faridabad or reach out for custom gifting inquiries."
      />

      {/* ── Signature Blush Pink Hero Banner (matching Shop & Bulk Order) ── */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-24 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          {/* Main Title matching Shop / Bulk Order Section Pattern */}
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[65px] uppercase mr-0">
              G
            </span>
            et In Touch With Us
          </h1>

          {/* Subtitle */}
          <p className="font-jost text-[15px] md:text-[17px] text-black/85 font-light leading-relaxed max-w-[960px] mx-auto tracking-wide mt-4">
            We would love to hear from you — visit one of our luxury studios in Gurugram and Faridabad or write to us for bespoke gifting experiences and custom orders.
          </p>
        </div>

        {/* Scalloped Bottom Edge matching Shop & Bulk Order Page pattern */}
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[16px] pointer-events-none z-20"
          style={{
            backgroundImage: "radial-gradient(circle at 15px 15px, #f8f0e5 14.5px, transparent 15px)",
            backgroundSize: "30px 15px",
            backgroundRepeat: "repeat-x"
          }}
        />
      </div>

      {/* ── Studios ── */}
      <section className="contact-studios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="flex items-center gap-5 mb-12">
            <span className="contact-section-rule" />
            <span className="contact-section-label">Our Studios</span>
            <span className="contact-section-rule" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">

            {/* Studio 1 */}
            <div className="sc-card group">
              {/* Full-bleed image */}
              <img src="/Images/store image.png" alt="Gurugram Studio" className="sc-img" loading="lazy" decoding="async" />

              {/* Number badge */}
              <div className="sc-num">01</div>

              {/* Gradient overlay */}
              <div className="sc-overlay" />

              {/* Static content — always visible */}
              <div className="sc-content">
                <p className="sc-eyebrow">Gurugram</p>
                <h2 className="sc-name">Studio One</h2>
                <p className="sc-address">
                  S.C.F 86, First Floor, Sector 14,<br />
                  Gurugram, Haryana &ndash; 122001
                </p>

                {/* Action drawer — slides up on hover */}
                <div className="sc-drawer">
                  <div className="sc-drawer-inner">
                    <a href="tel:+919289714461" className="sc-action-btn">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                      +91‑92897 14461
                    </a>
                    <a
                      href="https://maps.google.com/?q=SCF+86+First+Floor+Sector+14+Gurugram+Haryana"
                      target="_blank" rel="noopener noreferrer"
                      className="sc-action-btn sc-action-gold"
                    >
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio 2 */}
            <div className="sc-card group">
              <img src="/Images/store image2.jpg" alt="Faridabad Studio" className="sc-img" loading="lazy" decoding="async" />
              <div className="sc-num">02</div>
              <div className="sc-overlay" />


              <div className="sc-content">
                <p className="sc-eyebrow">New Delhi</p>
                <h2 className="sc-name">Studio Two</h2>
                <p className="sc-address">
                  DLF Avenue Mall, Central Atrium, <br />
                  Ground Floor, Saket, New Delhi, Delhi &ndash; 110017
                </p>

                <div className="sc-drawer">
                  <div className="sc-drawer-inner">
                    <a href="tel:+919289714461" className="sc-action-btn">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                      +91‑92897 14461
                    </a>
                    <a
                      href="https://maps.app.goo.gl/hzw5xJHdzoFfzRn9A"
                      target="_blank" rel="noopener noreferrer"
                      className="sc-action-btn sc-action-gold"
                    >
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio 3 */}
            <div className="sc-card group">
              <img src="/Images/store image.png" alt="Faridabad Studio" className="sc-img" loading="lazy" decoding="async" />
              <div className="sc-num">03</div>
              <div className="sc-overlay" />

              <div className="sc-content">
                <p className="sc-eyebrow">Faridabad</p>
                <h2 className="sc-name">Studio Three</h2>
                <p className="sc-address">
                  54b, Ground Floor, Omaxe World Street,<br />
                  Sector 79, Faridabad &ndash; 121004
                </p>

                <div className="sc-drawer">
                  <div className="sc-drawer-inner">
                    <a href="tel:+919289714461" className="sc-action-btn">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                      +91‑92897 14461
                    </a>
                    <a
                      href="https://maps.google.com/?q=54b+Ground+Floor+Omaxe+World+Street+Sector+79+Faridabad"
                      target="_blank" rel="noopener noreferrer"
                      className="sc-action-btn sc-action-gold"
                    >
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Email CTA ── */}


      {/* ── Scoped Styles ── */}
      <style>{`
        /* ─── Studios section ─── */
        .contact-studios-section { padding: 80px 0 60px; }
        .contact-section-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #d5b896, transparent);
        }
        .contact-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #b2957a;
          white-space: nowrap;
        }

        /* ─── Studio card — full-bleed portrait ─── */
        .sc-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          aspect-ratio: 4/5;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .sc-card { aspect-ratio: 3/4; }
        }
        .sc-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .sc-card:hover .sc-img { transform: scale(1.07); }

        /* Gold number badge */
        .sc-num {
          position: absolute;
          top: 20px; right: 20px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          color: #c19e6e;
          border: 1px solid rgba(193,158,110,0.55);
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(10,6,4,0.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 3;
        }

        /* Deep multi-stop gradient overlay */
        .sc-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(8,4,2,0.95) 0%,
              rgba(8,4,2,0.72) 28%,
              rgba(8,4,2,0.25) 55%,
              transparent 100%
            );
          z-index: 2;
          transition: opacity 0.5s ease;
        }

        /* Text content block */
        .sc-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 4;
          padding: 0 20px 24px;
        }
        .sc-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #c19e6e;
          margin-bottom: 6px;
        }
        .sc-name {
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 300;
          color: #f5ede0;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .sc-address {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 12.5px;
          color: rgba(245,237,224,0.7);
          line-height: 1.65;
          margin-bottom: 0;
        }

        /* Action drawer — hidden below, slides up on hover */
        .sc-drawer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.48s cubic-bezier(.22,1,.36,1);
        }
        .sc-card:hover .sc-drawer { max-height: 120px; }
        .sc-drawer-inner {
          display: flex;
          gap: 10px;
          padding-top: 18px;
          flex-wrap: wrap;
        }
        .sc-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 9px 16px;
          border-radius: 2px;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(245,237,224,0.88);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .sc-action-btn:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: rgba(255,255,255,0.35);
        }
        .sc-action-gold {
          border-color: rgba(193,158,110,0.5);
          color: #c19e6e;
          background: rgba(193,158,110,0.1);
        }
        .sc-action-gold:hover {
          background: rgba(193,158,110,0.22);
          border-color: rgba(193,158,110,0.8);
          color: #d4ad70;
        }

        /* ─── Email CTA ─── */
        .contact-email-section { padding: 40px 24px 100px; }
        .contact-email-inner {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          background: linear-gradient(160deg, #1e1512 0%, #2a1d15 100%);
          border-radius: 6px;
          border: 1px solid rgba(193,158,110,0.2);
          padding: 64px 40px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.18);
        }
        .contact-email-ring {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(193,158,110,0.1);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .contact-email-ring::after {
          content: '';
          position: absolute;
          width: 350px; height: 350px;
          border-radius: 50%;
          border: 1px solid rgba(193,158,110,0.08);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .contact-email-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: rgba(193,158,110,0.15);
          border: 1px solid rgba(193,158,110,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #c19e6e;
          margin-bottom: 24px;
        }
        .contact-email-heading {
          font-family: 'Burgues Script', 'Sloop', cursive;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #f5ede0;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .contact-email-sub {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245,237,224,0.4);
          margin-bottom: 28px;
        }
        .contact-email-link {
          font-family: 'Jost', sans-serif;
          font-size: clamp(15px, 2.5vw, 20px);
          color: #c19e6e;
          text-decoration: none;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(193,158,110,0.35);
          padding-bottom: 3px;
          margin-bottom: 36px;
          transition: color 0.25s, border-color 0.25s;
        }
        .contact-email-link:hover { color: #f5ede0; border-color: rgba(245,237,224,0.5); }
        .contact-email-btn {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffffff;
          background: #b49377;
          padding: 14px 36px;
          border-radius: 2px;
          text-decoration: none;
          transition: background-color 0.25s, transform 0.25s;
        }
        .contact-email-btn:hover { background: #9a7b60; color: #ffffff; transform: translateY(-2px); }

        @media (max-width: 640px) {
          .contact-ornament-left,
          .contact-ornament-right { display: none; }
          .contact-card-body { padding: 24px 20px 20px; }
          .contact-email-inner { padding: 48px 24px; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
