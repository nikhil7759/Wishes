import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  /** The canonical URL for this page. Defaults to current window.location.href */
  canonical?: string;
}

const BASE_URL = 'https://www.wishesindia.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo/wishes%20logo.png`;
const DEFAULT_KEYWORDS =
  'Wishes by Om Sweets, luxury gifting India, artisanal chocolates, floral couture, gift boxes, gourmet sweets, corporate gifting, Gurugram, Faridabad, luxury confections, handcrafted chocolates, premium gift hampers';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  canonical,
}) => {
  useEffect(() => {
    // ── Document title ───────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: upsert <meta> tag ─────────────────────────────────────────────
    const setMeta = (attribute: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Helper: upsert <link> tag ─────────────────────────────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Resolve canonical URL
    const pageUrl = canonical ?? (BASE_URL + window.location.pathname);

    // ── Canonical & og:url ────────────────────────────────────────────────────
    setLink('canonical', pageUrl);
    setMeta('property', 'og:url', pageUrl);

    // ── Primary meta ─────────────────────────────────────────────────────────
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);

    // ── Open Graph ────────────────────────────────────────────────────────────
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Wishes by Om Sweets');
    setMeta('property', 'og:locale', 'en_IN');

    // ── Twitter / X ───────────────────────────────────────────────────────────
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEO;
