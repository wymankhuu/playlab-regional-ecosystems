export type Component = {
  number: string;
  title: string;
  investment: string;
  keyOutcome: string;
  whatItLooksLike: string[];
  outcomes: string[];
  example: {
    name: string;
    body: string;
    links?: { label: string; url: string }[];
    image?: { src: string; alt: string };
  };
  accent: "yellow" | "green" | "cyan" | "light-green" | "sage" | "cream";
};

export const components: Component[] = [
  {
    number: "01",
    title: "Regional Exploration Event",
    investment: "Starts at $50K",
    keyOutcome:
      "Builds AI agency, shifts mindsets to what is possible with AI for schools and districts, and opens the door to a long-term partnership.",
    whatItLooksLike: [
      "1 to 2 day AI Institute convening for educators, leaders, and partners across the region.",
      "Hands-on AI learning: participants build and explore AI tools on the Playlab platform.",
      "Introduction to ecosystem pathways across student, teacher, school, and district tracks.",
      "Can serve as a kickoff for ongoing semester or quarterly engagement with attending districts.",
    ],
    outcomes: [
      "Builds AI agency and shifts mindsets around what is possible with AI in schools and districts.",
      "Participants leave with working AI tools and concrete implementation plans.",
      "Opens long-term partnership opportunities with attending districts.",
      "Creates regional alignment on AI strategy across participating systems.",
    ],
    example: {
      name: "NYCPS Summer 2025 AI Design Institute (with the Consortium International Outward Bound District)",
      body: "Two-day convening at Relay Graduate School of Education in NYC. Roughly 100 educators from Consortium International Outward Bound District schools, Leading Educators, New Visions, ASSISTments, and other city partners built custom AI applications hands-on, attended advanced workshops on Smart Referencing, Model Selection, and Designing for Usability, and showcased tools in an AI App Fair. Post-survey results: nearly all participants reported increased AI comfort, skill, knowledge, and implementation readiness. NPS scores were overwhelmingly 10 out of 10. Day 1 ratings were 5 out of 5 across the board. The institute catalyzed ongoing partnerships and served as the launchpad for NYCPS's broader AI innovation work with Playlab.",
      image: {
        src: "/components/01-nycps-institute.jpg",
        alt: "Educators at the NYCPS Summer 2025 AI Design Institute during a session at Relay Graduate School of Education",
      },
    },
    accent: "yellow",
  },
  {
    number: "02",
    title: "Student AI Agency Initiative",
    investment: "$50K to $5M",
    keyOutcome:
      "Students build AI applications for real problems. Can be as small as a citywide hackathon or as large as a statewide, school-facilitated AI challenge.",
    whatItLooksLike: [
      "Hackathons, design challenges, or full semester-long school-facilitated initiatives.",
      "Students build AI applications solving real-world problems in their communities.",
      "Public showcases and competitions with industry and community judges.",
      "Can align to national efforts such as the Presidential and ISTE AI Challenge.",
      "Optional ongoing student cohorts or showcases aligned to semester cadence.",
    ],
    outcomes: [
      "Students develop AI agency through creation, not consumption.",
      "High visibility and community engagement around student innovation.",
      "Pipeline of student-built tools with real classroom and community value.",
      "Increased career awareness and future readiness.",
    ],
    example: {
      name: "Fairfax County Public Schools 'Seize the Moment' Showcase (Playlab + Amazon)",
      body: "District-wide Student AI Challenge across all 25 high schools. 1,314 students built original AI applications addressing real community challenges, supported by 58 trained campus coaches. Student teams developed tools like StudyFlow (support for chronically absent students), an Accessible Health Guide (guidance for people with disabilities), and HydroKAI (early-warning water contamination tool). Tools were adopted organically by teachers across the district.",
      links: [
        { label: "See projects", url: "https://ai.fcps.edu/seize-the-moment" },
        {
          label: "Read the article",
          url: "https://www.fcps.edu/news/seizing-moment-fcps-students-compete-designing-solutions-real-world-problems-using-ai",
        },
      ],
      image: {
        src: "/components/02-fcps-showcase.jpg",
        alt: "A Fairfax County student (Campus Finalist) demonstrates her AI application to a judge at the 'Seize the Moment' showcase",
      },
    },
    accent: "green",
  },
  {
    number: "03",
    title: "Teacher AI Design Fellowship",
    investment: "$100K to $5M",
    keyOutcome:
      "Year-long teacher fellowship in priority subject areas. Fellows serve as proof points, catalyzing AI-enabled instruction and producing tangible artifacts, case studies, and city or statewide app collections.",
    whatItLooksLike: [
      "Cohorts of 20 to 50 educators across priority tracks aligned to system goals such as literacy, math, future-ready skills, or Portrait of a Graduate.",
      "Requires school leader recommendation and sign-off.",
      "Fellows design, build, and test AI tools and instructional models on the Playlab platform.",
      "Monthly development sessions with coaching and peer feedback.",
      "Collaboration across schools with progress shared in quarterly or semester convenings.",
      "Final showcase where fellows present tools, learnings, and use case recommendations.",
    ],
    outcomes: [
      "Teachers serve as proof points of what is possible in AI-enabled instruction, catalyzing innovation across the system.",
      "20 to 40+ educator-built AI tools designed, tested, and refined in real classroom contexts.",
      "10 to 15 classroom-tested use cases documented as tangible artifacts and case studies.",
      "Development of AI Innovation Fellows as recognized system leaders.",
      "Foundation for a city or statewide AI Application Collection.",
    ],
    example: {
      name: "NYCPS AI Innovation Fellows",
      body: "60 fellows across 4 priority tracks (NYC Reads, NYC Solves, Future Ready, and more). Fellows design and build custom AI tools, test them in classrooms, and contribute to system-wide AI tool collections that inform citywide AI strategy.",
      links: [
        { label: "See projects and more", url: "https://ciobaifellows.com/" },
      ],
      image: {
        src: "/components/03-nycps-fellows.jpg",
        alt: "NYCPS AI Innovation Fellows in a school library working session, with Playlab staff facilitating discussion",
      },
    },
    accent: "cyan",
  },
  {
    number: "04",
    title: "School & District AI Innovation Cohort",
    investment: "$500K+",
    keyOutcome:
      "Year-long cohort of schools and/or districts in priority geographies. Participants build custom AI implementation plans across instruction, operations, and student learning.",
    whatItLooksLike: [
      "Year-long cohort serving as innovation hubs for AI across instruction, operations, and student learning.",
      "Participants identify priority areas and build custom AI implementation plans for students, educators, and community-facing AI.",
      "Kickoff with a regional convening or summer institute to build capacity, share models, and design plans collaboratively.",
      "Ongoing coaching and regular convenings where participants share progress, prototypes, and learnings.",
      "Subsidized Playlab services and software. Participants serve as demonstration sites for the broader region.",
      "Regional nonprofit partner co-leads local coordination, recruitment, and sustainability planning.",
    ],
    outcomes: [
      "Each school or district develops custom AI applications and implementation models aligned to local priorities.",
      "School and district leads build capacity to design and deploy AI tools independently.",
      "Participants contribute proven use cases and tools to a shared regional AI Application Collection.",
      "Scalable implementation models tested and refined across diverse contexts: rural, suburban, and urban.",
      "Internal capacity to lead AI strategy and adoption beyond the initial investment period.",
      "A replicable cohort model that can grow from a handful of schools to statewide reach.",
    ],
    example: {
      name: "Google.org AI Ecosystems Project (in progress)",
      body: "26 schools and districts across Idaho (8), Indiana (9), and Tennessee (9) selected from 39 applicants to form regional AI innovation cohorts. Each participant builds a custom AI implementation plan, participates in regional convenings, and receives subsidized Playlab services through an 80% funding model. The cohort is 50% rural, 23% suburban, and 27% urban, serving 206,500+ students. Regional nonprofit partners (Idaho Dept. of Ed, ICCI/IASP in Indiana, SCORE in Tennessee) co-lead local coordination. Prior to launch, 1,252 educators were trained across the three states with 88 NPS and 97% reporting increased confidence teaching AI. Launch webinar: 100% positive ratings, 4.84/5 excitement to participate. The project reaches roughly 10% of Idaho's, 4.5% of Indiana's, and 13% of Tennessee's public school students. Regional convenings underway April 2026.",
      image: {
        src: "/components/04-google-ecosystems.jpg",
        alt: "Students and educators gathered in a large glass-walled convening space with city skyline views, mingling between sessions",
      },
    },
    accent: "light-green",
  },
  {
    number: "05",
    title: "AI Lab Schools",
    investment: "$250K per school over 2 years",
    keyOutcome:
      "A 24-month R&D incubator for future school models. Dedicated engineering, open-source outputs, quarterly convenings. Schools become a living portfolio of what is possible.",
    whatItLooksLike: [
      "Multi-year R&D incubator to build schools where student agency is central and AI is something communities build with, not consume.",
      "15 school teams per cohort across district, charter, microschool, independent, and private settings.",
      "Two tracks: new school founders launching from scratch, plus experienced leaders doing deep redesign.",
      "Quarterly in-person convenings, monthly virtual sessions, dedicated Playlab engineering support embedded in the work.",
      "All outputs are open source: tools, playbooks, and case studies become public infrastructure for the field.",
    ],
    outcomes: [
      "A living portfolio of future-ready school models that prove what is possible.",
      "Dedicated Playlab engineer and product designer working alongside each school.",
      "Open-source tools, playbooks, and case studies shared publicly as field infrastructure.",
      "Field-level evidence on what conditions enable success: publishable and actionable.",
      "A new generation of school leaders who know how to build with AI intentionally.",
    ],
    example: {
      name: "AI Lab Schools (inaugural cohort)",
      body: "Our first cohort of lab schools is being finalized now.",
      links: [
        {
          label: "Program website",
          url: "https://www.playlab.ai/ai-lab-schools",
        },
      ],
      image: {
        src: "/components/05-ai-lab-schools.jpg",
        alt: "Participants gathered at long tables during an evening AI Lab Schools working session, with laptops open and materials laid out",
      },
    },
    accent: "yellow",
  },
  {
    number: "06",
    title: "Full Ecosystem with Local Nonprofit Enablement",
    investment: "$750K+",
    keyOutcome:
      "Funds a local Playlab Learning Partner and Learning Engineer plus a non-profit partner leading coordination. Long-term local ownership and sustainability across all ecosystem components.",
    whatItLooksLike: [
      "A full-time Playlab Learning Partner and Learning Engineer embedded in the region to lead implementation, convene partners, and support schools and districts across all ecosystem components.",
      "A local nonprofit partner leads coordination, community building, and long-term regional ownership.",
      "Hosts convenings and an ongoing community of practice across the ecosystem.",
      "Connects schools, districts, funders, and partners into a coherent regional network.",
      "Builds toward long-term sustainability. The ecosystem becomes locally owned and self-sustaining beyond initial funding.",
    ],
    outcomes: [
      "Dedicated regional leadership ensuring coherence and quality across all components.",
      "Long-term sustainability through local ownership and stewardship.",
      "Strong regional coordination and participation across all programs.",
      "Continued engagement and momentum beyond the initial investment period.",
      "Ecosystem embedded in the region's education infrastructure, not dependent on a single external partner.",
    ],
    example: {
      name: "Google.org Ecosystem Model in IN, TN, and ID, Central Texas, DC/MD/VA",
      body: "In each region, a local nonprofit convenes districts and educators across the state, with Playlab providing a dedicated regional lead. The partnership sustains participation and momentum across initiatives and ensures the ecosystem is rooted in community priorities. Central Texas and DC/MD/VA ecosystems each launched with a local intermediary and Playlab support, engaging 50+ school systems and demonstrating measurable growth in district AI capacity.",
      image: {
        src: "/components/06-regional-ecosystem.jpg",
        alt: "A Playlab facilitator leads a regional convening session on AI pattern recognition, with educators seated at tables taking notes",
      },
    },
    accent: "green",
  },
];
