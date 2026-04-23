export const CONTACT_EMAIL = "partnerships@playlab.ai";

export const PARTNERSHIP_REQUEST_URL =
  "https://u694o.share.hsforms.com/2WT-4aa2lTtW5aSd12wymYg";

const DEFAULT_SUBJECT = "Regional AI Innovation Ecosystem Partnership";

export function contactMailto(regionName?: string): string {
  const subject = regionName
    ? `${DEFAULT_SUBJECT} — ${regionName}`
    : DEFAULT_SUBJECT;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
