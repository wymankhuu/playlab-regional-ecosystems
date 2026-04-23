export type Funder = {
  key: string;
  name: string;
  logo: string;
  alt: string;
  url?: string;
};

export const FUNDERS: Record<string, Funder> = {
  "google-org": {
    key: "google-org",
    name: "Google.org",
    logo: "/funders/google-org.svg",
    alt: "Google.org logo",
    url: "https://www.google.org",
  },
  "kle-foundation": {
    key: "kle-foundation",
    name: "KLE Foundation",
    logo: "/funders/kle-foundation.svg",
    alt: "KLE Foundation logo",
  },
  "rainwater-foundation": {
    key: "rainwater-foundation",
    name: "Rainwater Charitable Foundation",
    logo: "/funders/rainwater-foundation.png",
    alt: "Rainwater Charitable Foundation logo",
    url: "https://rainwatercharitablefoundation.org",
  },
  amazon: {
    key: "amazon",
    name: "Amazon",
    logo: "/funders/amazon.svg",
    alt: "Amazon logo",
    url: "https://www.amazon.com",
  },
  "gotham-gives": {
    key: "gotham-gives",
    name: "Gotham Gives",
    logo: "/funders/gotham-gives.svg",
    alt: "Gotham Gives logo",
    url: "https://gothamgives.org",
  },
  "gates-foundation": {
    key: "gates-foundation",
    name: "Gates Foundation",
    logo: "/funders/gates-foundation.svg",
    alt: "Gates Foundation logo",
    url: "https://www.gatesfoundation.org",
  },
  "robin-hood-ltf": {
    key: "robin-hood-ltf",
    name: "Robin Hood Learning + Technology Fund",
    logo: "/funders/robin-hood-ltf.svg",
    alt: "Robin Hood Learning + Technology Fund logo",
    url: "https://robinhood.org/programs/learning-technology-fund/",
  },
  "fund-for-nycps": {
    key: "fund-for-nycps",
    name: "Fund for New York City Public Schools",
    logo: "/funders/fund-for-nycps.png",
    alt: "Fund for New York City Public Schools logo",
    url: "https://www.fundfornycps.org",
  },
};

export function getFunder(key: string): Funder | undefined {
  return FUNDERS[key];
}
