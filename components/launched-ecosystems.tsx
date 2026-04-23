import { FUNDERS, type Funder } from "./funders";
import { FunderBadge } from "./ui/funder-badge";
import { UsMap } from "./ui/us-map";
import type { StateRegionMap } from "./ui/us-map-interactive";

type Partner = { name: string; url?: string };

type District = {
  name: string;
  students: string;
  community: string;
  motivation: string;
};

type Stat = { label: string; value: string; sub?: string };

type Region = {
  id: string;
  name: string;
  status: "full" | "emerging";
  funders: string[];
  systems: number;
  blurb: string;
  orgs: Partner[];
  stats?: Stat[];
  districts?: District[];
  districtsHeading?: string;
};

const regions: Region[] = [
  {
    id: "tn",
    name: "Tennessee",
    status: "full",
    funders: ["google-org"],
    systems: 9,
    blurb:
      "Nine Tennessee school systems in the Google.org AI Ecosystems regional cohort, with SCORE co-leading local coordination and recruitment.",
    orgs: [{ name: "SCORE", url: "https://tnscore.org" }],
    stats: [
      { label: "Cohort students", value: "130,066" },
      { label: "Share of state", value: "~13%" },
      { label: "Statewide enrollment", value: "971,741" },
    ],
    districts: [
      {
        name: "Sumner County Schools",
        students: "30,000",
        community: "Rural/suburban district; ~60% free/reduced lunch",
        motivation:
          "Interested in preparing educators and students for the future through innovative AI integration and building AI capacity across the district.",
      },
      {
        name: "Oak Ridge Schools",
        students: "5,000",
        community:
          "Suburban; ~70% White, 11% African American, 11% Hispanic; ~20% economically disadvantaged",
        motivation:
          "Has begun targeted AI professional development and wants to expand teacher capacity to use AI ethically and effectively in teaching and learning.",
      },
      {
        name: "STEM Preparatory Academy",
        students: "1,000",
        community:
          "Urban Title I charter network; 29% English learners; 90%+ speak a second language at home; students from ~30 home countries",
        motivation:
          "Sees AI as a powerful way to strengthen STEM learning and computational thinking, particularly for historically underrepresented students.",
      },
      {
        name: "Valor Collegiate Academies",
        students: "1,950",
        community:
          "Diverse Nashville charter network; 27% Hispanic, 23% White, 19% Black, 16% MENA; 64% free/reduced lunch; 12% special education",
        motivation:
          "Has taken a “slow to go fast” approach and is now ready to launch an organization-wide AI vision, policy framework, and literacy plan.",
      },
      {
        name: "Nashville Public Schools",
        students: "80,000",
        community:
          "Large urban district; highly diverse and multilingual population with 100+ languages spoken; majority of schools Title I eligible",
        motivation:
          "Already piloting AI use cases in advising, scheduling, and data analysis and wants to scale responsible AI innovation across the system.",
      },
      {
        name: "University Schools (University of Memphis)",
        students: "1,166",
        community:
          "Urban district connected to a university lab school system; diverse student population",
        motivation:
          "Seeks to move from informal experimentation with AI tools to a research-informed districtwide AI strategy aligned with its innovation mission.",
      },
      {
        name: "Memphis School of Excellence",
        students: "1,800",
        community:
          "Urban Title I charter network; 100% free lunch; majority Hispanic and African American students",
        motivation:
          "Strong STEM focus and technology infrastructure; sees AI as the next step in expanding college and career readiness opportunities.",
      },
      {
        name: "Paris Special School District",
        students: "1,550",
        community:
          "PreK–8 district; 60% economically disadvantaged; ~31% students of color",
        motivation:
          "Interested in helping teachers understand AI and preparing students to use AI responsibly while improving classroom instruction.",
      },
      {
        name: "Kingsport City Schools",
        students: "7,600",
        community:
          "Small urban district; ~66.7% poverty rate; 250+ ESL students speaking 24+ languages",
        motivation:
          "Already providing AI tools and educator training and wants to deepen leadership capacity and expand meaningful AI implementation.",
      },
    ],
  },
  {
    id: "id",
    name: "Idaho",
    status: "full",
    funders: ["google-org"],
    systems: 8,
    blurb:
      "Eight Idaho school systems in the Google.org AI Ecosystems regional cohort, with the Idaho Department of Education co-leading statewide coordination.",
    orgs: [
      {
        name: "Idaho Department of Education",
        url: "https://www.sde.idaho.gov",
      },
    ],
    stats: [
      { label: "Cohort students", value: "29,331" },
      { label: "Share of state", value: "~10%" },
      { label: "Statewide enrollment", value: "294,132" },
    ],
    districts: [
      {
        name: "Basin School District #72",
        students: "269",
        community:
          "Rural district; 48% free/reduced lunch; about 45 minutes from Boise",
        motivation:
          "Already using AI for family communication and reporting, but wants to expand use across teaching, learning, and operations. As a very small district where staff wear many hats, they see AI as a way to work smarter and improve school systems.",
      },
      {
        name: "Boise Independent School District 1",
        students: "22,000",
        community:
          "Large district serving a wide area; 100+ languages spoken; under 50% free/reduced lunch",
        motivation:
          "Wants safe, meaningful AI opportunities for students and teachers and sees the project as a way to keep pace with rapid changes in AI and robotics despite budget constraints.",
      },
      {
        name: "Bliss School District #234",
        students: "115",
        community: "Rural, Title I schoolwide district; 72% free/reduced lunch",
        motivation:
          "Leadership feels urgency to prepare students for a changing world and has already started redesigning courses and teacher training around AI. Wants support to move forward thoughtfully and responsibly.",
      },
      {
        name: "Horseshoe Bend School District #73",
        students: "170",
        community:
          "Small rural district; 55% free/reduced lunch; elementary is schoolwide Title I",
        motivation:
          "Wants to prepare students for a rapidly changing future and sees AI as a tool to enhance creativity, thinking, and problem-solving while keeping use ethical and safe.",
      },
      {
        name: "Middleton School District #134",
        students: "4,451",
        community:
          "Rural district growing suburban; 4 Title I schools; 27.65% free/reduced lunch",
        motivation:
          "Wants to move from uneven experimentation to a coherent districtwide AI strategy focused on literacy, ethics, privacy, and sustainable systems.",
      },
      {
        name: "Wilder School District",
        students: "620",
        community:
          "Rural, high-need district; 55.1% Hispanic/Latino; 19% English Learners; 71% low-income; 19% homeless; 3% migrant; 11% special education",
        motivation:
          "Sees itself as a strong rural pilot site that can quickly implement and demonstrate how AI can help close opportunity gaps and empower educators to design student-centered AI tools.",
      },
      {
        name: "American Falls School District",
        students: "1,485",
        community:
          "Rural district; ~70% free/reduced lunch; many first-generation college-bound students",
        motivation:
          "Already investing in AI-related professional learning and wants to build long-term capacity so teachers can use AI to support instruction, student thinking, and career-relevant digital skills.",
      },
      {
        name: "Garden Valley School District",
        students: "221",
        community:
          "Rural Idaho district serving a small mountain community",
        motivation:
          "Interested in exploring how AI can expand opportunities for students in geographically isolated communities and support educators with limited resources.",
      },
    ],
  },
  {
    id: "in",
    name: "Indiana",
    status: "full",
    funders: ["google-org"],
    systems: 9,
    blurb:
      "Nine Indiana school systems in the Google.org AI Ecosystems regional cohort, with the Indiana Charter Innovation Center, IASP, and aiEDU co-leading district engagement.",
    orgs: [
      {
        name: "Indiana Charter Innovation Center",
        url: "https://www.incharterschools.org",
      },
      {
        name: "Indiana Association of School Principals (IASP)",
        url: "https://www.iasp.org",
      },
      { name: "aiEDU", url: "https://www.aiedu.org" },
    ],
    stats: [
      { label: "Cohort students", value: "47,103" },
      { label: "Share of state", value: "~4.7%" },
      { label: "Statewide enrollment", value: "1,036,625" },
    ],
    districts: [
      {
        name: "Northwest Indiana Lighthouse Charter Schools",
        students: "1,700",
        community:
          "Title I charter network; 77% African American, 18% Hispanic",
        motivation:
          "Wants to help students and educators understand how AI can transform learning and support a broader reimagining of schooling.",
      },
      {
        name: "Christel House Indianapolis",
        students: "2,600",
        community:
          "Urban network; 80%+ free/reduced lunch; 56% English learners",
        motivation:
          "Has formed an internal AI committee and wants to build educator expertise and scale AI learning across its schools.",
      },
      {
        name: "Lake Central School Corporation",
        students: "8,743",
        community:
          "Suburban district; 25.3% free/reduced lunch; 37% students of color",
        motivation:
          "Focused on helping educators move beyond fear of AI and understand how it can improve instruction and student outcomes.",
      },
      {
        name: "Randolph Central School Corporation",
        students: "1,325",
        community: "Rural district; elementary poverty rates 40–55%",
        motivation:
          "Sees AI as a potential equalizer for rural students by expanding access to personalized learning and advanced opportunities.",
      },
      {
        name: "Valparaiso Community Schools",
        students: "6,300",
        community:
          "Suburban district; 30% free/reduced lunch; 4 Title I elementary schools",
        motivation:
          "Interested in using AI to promote creativity, deeper learning, and postsecondary readiness.",
      },
      {
        name: "Madison-Grant United School Corporation",
        students: "955",
        community: "Rural Title I district; ~57% free/reduced lunch",
        motivation:
          "Wants to shift from reactive responses to AI toward a proactive strategy supported by professional learning and clear policies.",
      },
      {
        name: "M.S.D. of Wayne Township",
        students: "15,000",
        community:
          "Diverse suburban district; 71.8% free/reduced lunch; 77 languages spoken",
        motivation:
          "AI integration aligns with district strategic goals around equity, instructional innovation, and operational efficiency.",
      },
      {
        name: "Center Grove Community School Corporation",
        students: "9,760",
        community:
          "25% economically disadvantaged; large special education and ENL populations",
        motivation:
          "Wants to build educator capacity and use AI to support differentiated instruction and personalized learning.",
      },
      {
        name: "Jac-Cen-Del Community School Corporation",
        students: "720",
        community: "Rural Title I district; ~50% free/reduced lunch",
        motivation:
          "Interested in building foundational AI literacy among staff and students and improving instructional practices.",
      },
    ],
  },
  {
    id: "tx",
    name: "Texas",
    status: "full",
    funders: ["kle-foundation", "rainwater-foundation"],
    systems: 15,
    blurb:
      "Texas regional ecosystem co-funded by the KLE Foundation and the Rainwater Charitable Foundation. Launched with a local intermediary and Playlab support to build district AI capacity. One of the full-ecosystem regions (alongside DC/MD/VA) now engaging 50+ school systems with measurable growth in district AI capacity.",
    orgs: [],
    stats: [
      { label: "Partner school systems", value: "15" },
      { label: "Students reached", value: "~163,000" },
    ],
    districtsHeading: "Partner school systems",
    districts: [
      {
        name: "IDEA Public Schools",
        students: "80,000",
        community:
          "Weslaco-headquartered K–12 public charter network. 143 schools across multiple states, college-for-all mission.",
        motivation: "",
      },
      {
        name: "KIPP Texas",
        students: "34,111",
        community:
          "Open-enrollment charter network. 56 schools PreK–12 across Austin, Dallas–Fort Worth, Houston, and San Antonio.",
        motivation: "",
      },
      {
        name: "Pflugerville ISD",
        students: "25,000",
        community:
          "Public school district northeast of Austin. 35 schools PK–12.",
        motivation: "",
      },
      {
        name: "San Marcos CISD",
        students: "8,311",
        community:
          "Consolidated ISD in the Texas Hill Country. Known for dual-credit partnerships and college/career readiness.",
        motivation: "",
      },
      {
        name: "Cedar Hill ISD",
        students: "7,120",
        community: "Independent school district near Dallas.",
        motivation: "",
      },
      {
        name: "Austin Achieve Public Schools",
        students: "2,312",
        community:
          "Tuition-free charter in East Austin focused on top-university readiness.",
        motivation: "",
      },
      {
        name: "NYOS Charter School",
        students: "1,763",
        community:
          "Not Your Ordinary Charter School in Austin. Part of the CTX cohort.",
        motivation: "",
      },
      {
        name: "Wayside Schools",
        students: "1,759",
        community:
          "Austin-based CMO. 5 campuses serving PreK3–5 in a bilingual, culturally responsive environment.",
        motivation: "",
      },
      {
        name: "Ann Richards School for Young Women",
        students: "900",
        community:
          "Austin ISD. All-girls public school (grades 6–12) founded to empower young women from economically disadvantaged backgrounds.",
        motivation: "",
      },
      {
        name: "Doral Academy Texas",
        students: "370",
        community:
          "Tuition-free STEM-focused charter in Buda (near Austin). PK4–9, expanding through 12.",
        motivation: "",
      },
      {
        name: "Royal Public Schools",
        students: "345",
        community:
          "San Antonio K–8 charter. STREAMS 360 program with STEM and SEL emphasis.",
        motivation: "",
      },
      {
        name: "Treetops School International",
        students: "323",
        community:
          "International school in Euless offering a global academic experience.",
        motivation: "",
      },
      {
        name: "Celebrate Dyslexia School",
        students: "100",
        community:
          "San Antonio charter. Specialized, multisensory K–4 education for students with dyslexia.",
        motivation: "",
      },
      {
        name: "Texas Girls School",
        students: "100",
        community:
          "Austin all-girls public charter (grades 6–12). First-year school with STEM-focused curriculum.",
        motivation: "",
      },
      {
        name: "Compass Rose Public Schools",
        students: "72",
        community: "San Antonio-based charter group led by Mera.",
        motivation: "",
      },
    ],
  },
  {
    id: "dmv",
    name: "DC · MD · VA",
    status: "emerging",
    funders: ["amazon"],
    systems: 10,
    blurb:
      "DC, Maryland, and Virginia districts advancing AI agency together, anchored by the Fairfax County \"Seize the Moment\" Student AI Project Showcase with Playlab and Amazon. Students are building AI tools teachers adopt organically. Part of the full-ecosystem cohort engaging 50+ school systems with measurable growth in district AI capacity.",
    orgs: [
      {
        name: "Fairfax County Public Schools",
        url: "https://www.fcps.edu",
      },
    ],
    stats: [
      { label: "Partner school systems", value: "10" },
      { label: "Students reached", value: "~394,000" },
    ],
    districtsHeading: "Partner school systems",
    districts: [
      {
        name: "Fairfax County Public Schools",
        students: "180,000",
        community:
          "VA · 9th largest US school district. 199 schools and a highly diverse student body speaking 200+ languages.",
        motivation: "",
      },
      {
        name: "Prince George's County Public Schools",
        students: "133,000",
        community:
          "MD · Large public district in the DC metro area. 200+ schools and centers.",
        motivation: "",
      },
      {
        name: "DC Public Schools (DCPS)",
        students: "52,023",
        community:
          "DC · Main public school system. Partner on design-sprint work with Playlab.",
        motivation: "",
      },
      {
        name: "Alexandria City Public Schools (ACPS)",
        students: "16,406",
        community:
          "VA · 19 schools PK–12 serving a diverse student body from 145+ countries.",
        motivation: "",
      },
      {
        name: "KIPP DC",
        students: "7,300",
        community:
          "DC · Network of 20 high-performing public charter schools, primarily serving low-income students.",
        motivation: "",
      },
      {
        name: "Friendship Public Charter Schools",
        students: "6,000",
        community:
          "DC · 15 campuses PreK3–12 serving primarily economically disadvantaged and Black communities.",
        motivation: "",
      },
      {
        name: "Center City Public Charter",
        students: "2,800",
        community:
          "DC · Charter network known for character education, SEL, and top-5% campus rankings.",
        motivation: "",
      },
      {
        name: "Washington Leadership Academy",
        students: "398",
        community:
          "DC · Charter with an excellent CS program. Site of Playlab's first student hackathon.",
        motivation: "",
      },
      {
        name: "Garrison Elementary",
        students: "375",
        community:
          "DC · Influential DCPS elementary and a leader in science-of-reading implementation.",
        motivation: "",
      },
      {
        name: "Kingsman Academy",
        students: "326",
        community:
          "DC · Tuition-free, open-enrollment charter (grades 6–12). Therapeutic, project-based model for at-risk students.",
        motivation: "",
      },
    ],
  },
  {
    id: "nyc",
    name: "New York City",
    status: "emerging",
    funders: [
      "gates-foundation",
      "robin-hood-ltf",
      "fund-for-nycps",
      "gotham-gives",
    ],
    systems: 0,
    blurb:
      "NYCPS + Playlab reaches NYC community school districts 14, 29, 15, 7, and CIOB. The foundation is a CIOB partnership with nine Lab Schools across all five boroughs, 60+ AI Innovation Fellows, a Summer 2025 AI Design Institute, and 325+ students reached through Cornell Tech, Girls AI Buildathon, and Spring 2026 events. The 2026-27 plan scales citywide with an NYC AI Summer Institute for 500+ leaders, a Citywide Student AI Challenge at Day of AI in May 2027, 60 Fellows across NYCPS priority tracks (NYC Reads, NYC Solves, Future Ready, Portrait of a Graduate), up to 8 AI Innovation Schools, up to 5 AI Innovation Districts, and 2 to 4 NYCPS AI Application Collections.",
    stats: [
      { label: "Students reached", value: "~103,000" },
      {
        label: "NYC districts reached",
        value: "14, 29, 15, 7, CIOB",
      },
      { label: "AI Innovation Fellows", value: "60" },
    ],
    districtsHeading: "CIOB Lab Schools",
    districts: [
      {
        name: "Brooklyn Collaborative Studies",
        students: "645",
        community:
          "Brooklyn · grades 6–12 · student agency through metacognition and differentiation tools",
        motivation:
          "Apps built by teacher fellows include SMART Goal Coach, Math Thought Partner, Differentiation Toolkit, and BIP Bot. Completed a student AI literacy focus group in December 2025.",
      },
      {
        name: "East Side Community School",
        students: "695",
        community:
          "Manhattan · grades 6–12 · seamless AI for agency and metacognition",
        motivation:
          "Fellow-built apps include a Science PBAT Presentation Coach and a STEM Career Explorer.",
      },
      {
        name: "University Heights Secondary School",
        students: "558",
        community:
          "Bronx · grades 9–12 · student independence through self-guided experiences",
        motivation:
          "Fellow-built apps include ThinkPhys (physics) and EIP Support.",
      },
      {
        name: "Flushing International High School",
        students: "390",
        community:
          "Queens · serves recent immigrants learning English · part of the Internationals Network",
        motivation:
          "Fellow-built apps include Let's Do Peer Talk and Makers in Action!",
      },
      {
        name: "Virtual Innovators Academy (VIA)",
        students: "248",
        community:
          "Virtual high school · rubric-aligned feedback and SEL family outreach",
        motivation:
          "Home of the high-performing EchoSpace app for rubric-aligned feedback to students and families.",
      },
      {
        name: "Bronx Lab School",
        students: "214",
        community:
          "Bronx · grades 9–12 · robust AI policy paired with agency-building experiences",
        motivation:
          "Fellow-built apps include STEM Activity Creator, Math Knowledge Gap Assessment, Near-Peer Feedback, and Emotional Regulation Toolbox.",
      },
      {
        name: "A School Without Walls",
        students: "215",
        community:
          "Manhattan · NYC's first hybrid public school (2 days in-person + 3 days online) · passion-project learning",
        motivation:
          "AI tools help students explore interests through passion projects. A Student AI Leadership Council has been established. Key app: City Civics.",
      },
      {
        name: "Forsyth Academy",
        students: "195",
        community:
          "Manhattan · non-traditional transfer school · SEL, equity, and personalized learning",
        motivation:
          "Focus on affirmations and motivation tools, college prep FAQ systems, and career pathway exploration for students returning to school.",
      },
    ],
    orgs: [
      {
        name: "NYC Public Schools",
        url: "https://www.schools.nyc.gov",
      },
      {
        name: "NYC Community School District 7 (Bronx)",
        url: "https://csd7.org",
      },
      {
        name: "NYC Community School District 14 (Brooklyn)",
        url: "https://www.district14ny.com",
      },
      {
        name: "NYC Community School District 15 (Brooklyn)",
        url: "https://www.d15brooklyn.org",
      },
      {
        name: "NYC Community School District 29 (Queens)",
        url: "https://d29shines.org",
      },
      {
        name: "Consortium International Outward Bound District",
        url: "https://sites.google.com/schools.nyc.gov/ciob-citywide/about",
      },
      {
        name: "Leading Educators",
        url: "https://leadingeducators.org",
      },
      {
        name: "New Visions",
        url: "https://www.newvisions.org",
      },
      {
        name: "ASSISTments",
        url: "https://www.assistments.org",
      },
    ],
  },
];

function resolveFunders(keys: string[]): Funder[] {
  return keys
    .map((k) => FUNDERS[k])
    .filter((f): f is Funder => Boolean(f));
}

const fullStates = regions
  .filter((r) => r.status === "full")
  .map((r) => r.id.toUpperCase());

const emergingStates = ["NY", "DC", "MD", "VA"];

const stateRegionMap: StateRegionMap = (() => {
  const map: StateRegionMap = {};
  for (const region of regions) {
    const card = {
      name: region.name,
      status: region.status,
      funders: resolveFunders(region.funders),
      systems: region.systems,
    };
    if (region.id === "dmv") {
      for (const code of ["DC", "MD", "VA"]) map[code] = card;
    } else if (region.id === "nyc") {
      map["NY"] = card;
    } else {
      map[region.id.toUpperCase()] = card;
    }
  }
  return map;
})();

const statusStyles: Record<Region["status"], { pill: string; label: string }> = {
  full: {
    pill: "bg-cyan text-playlab-blue",
    label: "Full ecosystem",
  },
  emerging: {
    pill: "bg-yellow text-dark-green",
    label: "Emerging ecosystem",
  },
};

export function LaunchedEcosystems() {
  return (
    <div id="launched" className="scroll-mt-24">
      <h3 className="font-heading text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        Where we&apos;ve launched so far.
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-playlab-blue sm:text-lg">
        Full ecosystems are multi-year regional initiatives backed by a
        philanthropic partner and coordinated by a local nonprofit. Emerging
        ecosystems are partnerships already delivering AI agency at scale and on
        the path to full regional infrastructure.
      </p>
      <div className="mt-8">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
          Partner system composition · 59 systems across all regions as of April 2026
        </p>
        <div className="mt-3 rounded-2xl border border-dark-green/10 bg-cream p-5 sm:p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="relative w-40 shrink-0 sm:w-44">
              <svg viewBox="0 0 42 42" className="w-full">
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-robin)"
                  strokeWidth="4.5"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-dark-green)"
                  strokeWidth="4.5"
                  strokeDasharray="22 78"
                  strokeDashoffset="0"
                  transform="rotate(-90 21 21)"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-green)"
                  strokeWidth="4.5"
                  strokeDasharray="20 80"
                  strokeDashoffset="-22"
                  transform="rotate(-90 21 21)"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke="var(--color-cyan)"
                  strokeWidth="4.5"
                  strokeDasharray="58 42"
                  strokeDashoffset="-42"
                  transform="rotate(-90 21 21)"
                />
              </svg>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-3xl font-bold leading-none text-dark-green">
                  59
                </span>
                <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-dark-green/70">
                  systems
                </span>
              </div>
            </div>
            <ul className="flex-1 space-y-3 self-stretch sm:self-auto">
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-dark-green"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Rural districts
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  13
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  22%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-green"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Suburban districts
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  12
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  20%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm bg-cyan"
                />
                <span className="flex-1 font-sans text-sm text-playlab-blue">
                  Urban districts &amp; charter networks
                </span>
                <span className="font-heading text-lg font-bold text-dark-green">
                  34
                </span>
                <span className="w-10 text-right font-sans text-xs font-semibold text-playlab-blue/80">
                  58%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="overflow-hidden rounded-3xl bg-playlab-blue/5 p-4 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl">
            <UsMap
              highlightedStates={fullStates}
              emergingStates={emergingStates}
              regions={stateRegionMap}
              title="Regions where Playlab ecosystems are live"
              description="Tennessee, Idaho, Indiana, and Texas are shaded as full ecosystems. New York, DC, Maryland, and Virginia are shaded as emerging ecosystems. Hover over a shaded state to see its region card."
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-playlab-blue">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-3 w-3 rounded-sm bg-cyan"
              />
              Full ecosystem
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-3 w-3 rounded-sm bg-yellow"
              />
              Emerging ecosystem
            </span>
          </div>
        </div>

        <p className="mt-10 max-w-2xl font-sans text-sm leading-relaxed text-playlab-blue/80 sm:text-base">
          The cards below are snapshots of publicly visible work. More is
          always underway in each region, in the day-to-day of partners,
          educators, and students.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const status = statusStyles[region.status];
            return (
              <details
                key={region.id}
                className="group rounded-2xl border border-dark-green/10 bg-cream open:border-dark-green/20 open:md:col-span-2 open:lg:col-span-3"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${status.pill}`}
                    >
                      {status.label}
                    </span>
                    <h4 className="font-heading text-xl font-bold leading-tight text-dark-green sm:text-2xl">
                      {region.name}
                    </h4>
                    {region.systems > 0 && (
                      <p className="font-sans text-xs font-semibold text-playlab-blue/80">
                        {region.systems} school systems
                      </p>
                    )}
                    {region.funders.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {resolveFunders(region.funders).map((funder) => (
                          <FunderBadge key={funder.key} funder={funder} />
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-green text-cream transition-transform group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-dark-green/10 px-5 py-4">
                  <div className="space-y-3 text-sm leading-relaxed text-playlab-blue sm:text-base">
                    {region.blurb.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {region.orgs.length > 0 && (
                    <>
                      <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        Partners
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {region.orgs.map((org) => (
                          <li
                            key={org.name}
                            className="flex gap-2 text-sm text-playlab-blue"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dark-green"
                            />
                            {org.url ? (
                              <a
                                href={org.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-playlab-blue underline-offset-2 hover:text-link hover:underline"
                              >
                                {org.name}
                                <span aria-hidden className="ml-1">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <span>{org.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {region.stats && region.stats.length > 0 && (
                    <>
                      <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        Reach
                      </p>
                      <dl
                        className={`mt-2 grid grid-cols-1 gap-3 ${
                          region.stats.length >= 3
                            ? "sm:grid-cols-3"
                            : region.stats.length === 2
                              ? "sm:grid-cols-2"
                              : ""
                        }`}
                      >
                        {region.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl bg-playlab-blue/5 p-3"
                          >
                            <dt className="font-sans text-[10px] font-semibold uppercase tracking-wider text-dark-green/70">
                              {stat.label}
                            </dt>
                            <dd className="mt-1 font-heading text-xl font-bold text-dark-green">
                              {stat.value}
                            </dd>
                            {stat.sub && (
                              <p className="mt-0.5 font-sans text-xs font-semibold text-playlab-blue/80">
                                {stat.sub}
                              </p>
                            )}
                          </div>
                        ))}
                      </dl>
                    </>
                  )}
                  {region.districts && region.districts.length > 0 && (
                    <>
                      <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-green/70">
                        {region.districtsHeading ?? "Participating districts"}
                      </p>
                      <ul className="mt-3 divide-y divide-dark-green/5 rounded-xl border border-dark-green/10 bg-cream">
                        {region.districts.map((d) => (
                          <li
                            key={d.name}
                            className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-sans text-sm font-semibold text-dark-green">
                                {d.name}
                              </p>
                              <p className="mt-0.5 font-sans text-xs text-playlab-blue/80">
                                {d.community}
                              </p>
                            </div>
                            <span className="shrink-0 font-sans text-xs font-semibold text-playlab-blue">
                              {d.students} students
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}

