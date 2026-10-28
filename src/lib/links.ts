// ==========================================================================
// MASTER LINK CONTROL PANEL
// --------------------------------------------------------------------------
// Every button and link on the website reads its destination from here.
//
//  - href   : where the link goes.
//  - active : true  -> the link opens normally.
//             false -> the link stays closed. Clicking it shows a small
//                      "Coming soon" note instead of opening the page.
//
// The pages for every closed link already exist (see src/app/...).
// When a page is ready to go public, just change `active: false` to
// `active: true` here — nothing else needs to change anywhere.
// ==========================================================================

export type SiteLink = { href: string; active: boolean };

export const LINKS = {
  // ---------- Home page sections (always open) ----------
  home: { href: "/#home", active: true },
  about: { href: "/#about", active: true },
  books: { href: "/#books", active: true },
  research: { href: "/#research", active: true },
  publications: { href: "/#publications", active: true },
  insights: { href: "/#insights", active: true },
  journey: { href: "/#journey", active: true },
  media: { href: "/#media", active: true },
  support: { href: "/#support", active: true },
  contact: { href: "/#contact", active: true },
  reviews: { href: "/#reviews", active: true },

  // ---------- Separate pages (closed until you open them) ----------
  profile: { href: "/profile", active: false },
  vocabDecode: { href: "/vocab-decode", active: false },
  signedCopy: { href: "/signed-copy", active: false },
  publicationsPage: { href: "/publications", active: false },
  researchArchive: { href: "/research", active: false },
  insightsArchive: { href: "/insights", active: false },

  // Media & Press pages
  mediaArticles: { href: "/media/articles", active: false },
  mediaInterviews: { href: "/media/interviews", active: false },
  mediaPodcasts: { href: "/media/podcasts", active: false },
  mediaHonors: { href: "/media/honors", active: false },

  // Legal pages
  privacy: { href: "/privacy-policy", active: false },
  terms: { href: "/terms", active: false },
  cookies: { href: "/cookies", active: false },
  disclaimer: { href: "/disclaimer", active: false },
} satisfies Record<string, SiteLink>;

// Individual research papers and essays get their own pages too.
// Open them one by one here when their full text is ready.
export const RESEARCH_PAGES_ACTIVE = false;
export const ESSAY_PAGES_ACTIVE = false;

// ==========================================================================
// CONTACT DETAILS — one place, used everywhere on the site
// ==========================================================================
export const CONTACT = {
  email: "divyagautam.author@gmail.com",
  pressEmail: "dginsightpress@gmail.com",
  location: "India",
  responseTime: "Within 24 Hours",
};

// Social profiles. Set `active: false` to hide a profile that isn't live yet.
export const SOCIALS = {
  linkedin: { href: "https://linkedin.com/in/divya-gautam", handle: "linkedin.com/in/divya-gautam", active: true },
  twitter: { href: "https://twitter.com/DivyaGautam_", handle: "@DivyaGautam_", active: true },
  instagram: { href: "https://instagram.com/divyagautam.author", handle: "@divyagautam.author", active: true },
  youtube: { href: "#", handle: "", active: false },
  github: { href: "https://github.com/divyagautamin", handle: "divyagautamin", active: false },
};
