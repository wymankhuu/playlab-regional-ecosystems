export type Funder = {
  key: string;
  name: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
};

export const FUNDERS: Record<string, Funder> = {
  "google-org": {
    key: "google-org",
    name: "Google.org",
    logo: "/funders/google-org.svg",
    alt: "Google.org logo",
    width: 630,
    height: 140,
    url: "https://www.google.org",
  },
  "kle-foundation": {
    key: "kle-foundation",
    name: "KLE Foundation",
    logo: "/funders/kle-foundation.svg",
    alt: "KLE Foundation logo",
    width: 100,
    height: 48,
  },
  "rainwater-foundation": {
    key: "rainwater-foundation",
    name: "Rainwater Charitable Foundation",
    logo: "/funders/rainwater-foundation.png",
    alt: "Rainwater Charitable Foundation logo",
    width: 1500,
    height: 745,
    url: "https://rainwatercharitablefoundation.org",
  },
  amazon: {
    key: "amazon",
    name: "Amazon",
    logo: "/funders/amazon.svg",
    alt: "Amazon logo",
    width: 603,
    height: 182,
    url: "https://www.amazon.com",
  },
  "gotham-gives": {
    key: "gotham-gives",
    name: "Gotham Gives",
    logo: "/funders/gotham-gives.svg",
    alt: "Gotham Gives logo",
    width: 312,
    height: 49,
    url: "https://gothamgives.org",
  },
  "gates-foundation": {
    key: "gates-foundation",
    name: "Gates Foundation",
    logo: "/funders/gates-foundation.svg",
    alt: "Gates Foundation logo",
    width: 800,
    height: 200,
    url: "https://www.gatesfoundation.org",
  },
  "robin-hood-ltf": {
    key: "robin-hood-ltf",
    name: "Robin Hood Learning + Technology Fund",
    logo: "/funders/robin-hood-ltf.svg",
    alt: "Robin Hood Learning + Technology Fund logo",
    width: 174,
    height: 32,
    url: "https://robinhood.org/programs/learning-technology-fund/",
  },
  "fund-for-nycps": {
    key: "fund-for-nycps",
    name: "Fund for New York City Public Schools",
    logo: "/funders/fund-for-nycps.png",
    alt: "Fund for New York City Public Schools logo",
    width: 1000,
    height: 400,
    url: "https://www.fundfornycps.org",
  },
  edtx: {
    key: "edtx",
    name: "Educate Texas",
    logo: "/funders/edtx.png",
    alt: "Educate Texas logo",
    width: 1272,
    height: 266,
    url: "https://edtx.org",
  },
  "leon-levine-foundation": {
    key: "leon-levine-foundation",
    name: "The Leon Levine Foundation",
    logo: "/funders/leon-levine-foundation.png",
    alt: "The Leon Levine Foundation logo",
    width: 226,
    height: 120,
    url: "https://www.leonlevinefoundation.org",
  },
};

export function getFunder(key: string): Funder | undefined {
  return FUNDERS[key];
}
