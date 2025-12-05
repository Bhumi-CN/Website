// client/lib/serviceData.ts
export type ServiceSlug =
  | "ai-automation"
  | "cloud-services"
  | "app-development"
  | "cybersecurity"
  | "iot-automation"
  | "saas-solutions";

export type ServiceMetric = {
  label: string;
  value: number; // 0–100 for bar width
  helper: string;
};

export type ServiceData = {
  slug: ServiceSlug;
  name: string;
  shortName?: string;
  heroTagline: string;
  heroSubheading: string;
  heroImage: string; // background image for hero
  accentFrom: string; // tailwind gradient from
  accentTo: string;   // tailwind gradient to
  summaryBullets: string[];
  highlightStat: string;
  metrics: ServiceMetric[];
  pieLabel: string;
  piePrimary: number; // %
  pieSecondaryLabel: string;
  leadQuote: {
    quote: string;
    name: string;
    role: string;
  };
  detailHeading: string;
  detailSubheading: string;
  detailImage: string; // used in “About” section
};

export const services: Record<ServiceSlug, ServiceData> = {
  "cloud-services": {
    slug: "cloud-services",
    name: "Cloud Services",
    shortName: "Cloud",
    heroTagline: "Scale without limits. Operate without friction.",
    heroSubheading:
      "Design, migrate and optimize your cloud landscape for reliability, performance and cost-efficiency — without slowing your business down.",
    heroImage: "/image/services-cloud.jpeg",
    accentFrom: "from-cyan-400",
    accentTo: "to-sky-500",
    summaryBullets: [
      "Multi-cloud & hybrid architectures",
      "Enterprise-grade security & compliance",
      "Cost optimization with real-time visibility"
    ],
    highlightStat: "Up to 45% reduction in infrastructure costs.",
    metrics: [
      { label: "Downtime Reduction", value: 80, helper: "High-availability designs" },
      { label: "Deployment Speed", value: 70, helper: "CI/CD and infra as code" },
      { label: "Cost Optimization", value: 65, helper: "Rightsizing & autoscaling" }
    ],
    pieLabel: "Cloud-native adoption",
    piePrimary: 72,
    pieSecondaryLabel: "Legacy workloads",
    leadQuote: {
      quote:
        "Consistency in delivery is our first non-negotiable. We’d rather ship one reliable release than ten incomplete ones.",
      name: "Amit Verma",
      role: "Founder & CEO, CloudNexus"
    },
    detailHeading: "Cloud isn’t just a platform — it’s your new operating model.",
    detailSubheading:
      "From audit to migration to continuous optimization, we help you modernize in a way that aligns engineering realities with business goals.",
    detailImage: "/image/service-cloud.jpeg"
  },

  "ai-automation": {
    slug: "ai-automation",
    name: "AI & Automation",
    shortName: "AI & Automation",
    heroTagline: "Automate the routine. Amplify the human.",
    heroSubheading:
      "Apply AI and automation where it truly matters — augmenting teams, reducing manual work and unlocking better decisions.",
    heroImage: "/image/services-ai.jpeg",
    accentFrom: "from-fuchsia-400",
    accentTo: "to-cyan-400",
    summaryBullets: [
      "Intelligent workflows & RPA",
      "Predictive insights & recommendation engines",
      "Real-time anomaly detection & alerting"
    ],
    highlightStat: "Up to 60% time saved on repetitive processes.",
    metrics: [
      { label: "Process Automation", value: 75, helper: "Bots & workflow engines" },
      { label: "Error Reduction", value: 68, helper: "Rule-based & ML validation" },
      { label: "Decision Speed", value: 80, helper: "AI-assisted insights" }
    ],
    pieLabel: "Tasks automated",
    piePrimary: 64,
    pieSecondaryLabel: "Still manual",
    leadQuote: {
      quote:
        "We don’t chase trends. We chase reliability. Every AI workflow we build must be explainable, observable and upgradeable.",
      name: "Kaustubh Singh",
      role: "CEO, CloudNexus"
    },
    detailHeading: "Automation that still feels human.",
    detailSubheading:
      "We map your processes, identify impact hotspots and design automations that support — not replace — your teams.",
    detailImage: "/image/service-ai.jpeg"
  },

  // TODO: you can copy the above blocks and customize for remaining services
  "app-development": {
    slug: "app-development",
    name: "App Development",
    heroTagline: "From idea to production-ready experiences.",
    heroSubheading:
      "Design and build apps that feel fast, intuitive and reliable — on web, mobile or both.",
    heroImage: "/image/services-app.jpeg",
    accentFrom: "from-indigo-400",
    accentTo: "to-cyan-400",
    summaryBullets: [
      "Cloud-native backends",
      "Pixel-perfect frontends",
      "Performance & security baked-in"
    ],
    highlightStat: "Release features 3x faster with modern pipelines.",
    metrics: [
      { label: "Time-to-Market", value: 70, helper: "Agile sprints & CI/CD" },
      { label: "User Satisfaction", value: 78, helper: "UX research & testing" },
      { label: "Release Stability", value: 82, helper: "Automated QA" }
    ],
    pieLabel: "New vs legacy stack",
    piePrimary: 58,
    pieSecondaryLabel: "Legacy modules",
    leadQuote: {
      quote:
        "Code is our craft — but consistency is our discipline. We’d rather refactor twice than ship something brittle.",
      name: "Harsh Dwivedi",
      role: "Team Lead, CloudNexus"
    },
    detailHeading: "We treat every application like a long-term product.",
    detailSubheading:
      "From architecture decisions to component patterns, we design for stability, scale and future features.",
    detailImage: "/image/service-app.jpeg"
  },

  // temporary placeholders so TS stops shouting – customise later:
  "cybersecurity": {
    slug: "cybersecurity",
    name: "Cybersecurity",
    heroTagline: "Secure by design, not by patch.",
    heroSubheading:
      "Protect your cloud, applications and data with layered security controls and continuous monitoring.",
    heroImage: "/image/services-security.jpeg",
    accentFrom: "from-emerald-400",
    accentTo: "to-cyan-400",
    summaryBullets: [
      "Security assessments & hardening",
      "24/7 monitoring & alerting",
      "Compliance-ready architectures"
    ],
    highlightStat: "Reduce critical incidents by up to 55%.",
    metrics: [
      { label: "Threat Detection", value: 78, helper: "Proactive monitoring" },
      { label: "Vulnerability Coverage", value: 72, helper: "Regular scans" },
      { label: "Incident Response Speed", value: 80, helper: "Defined playbooks" }
    ],
    pieLabel: "Secured surface",
    piePrimary: 69,
    pieSecondaryLabel: "Pending review",
    leadQuote: {
      quote:
        "Security isn’t a checkbox. It’s a constant commitment to small, consistent improvements.",
      name: "Yash Singh",
      role: "CTO, CloudNexus"
    },
    detailHeading: "Security engineered into every layer.",
    detailSubheading:
      "We help you build a living security posture — one that grows with your systems, not against them.",
    detailImage: "/image/service-security.jpeg"
  },

  "iot-automation": {
    slug: "iot-automation",
    name: "IoT & Automation",
    heroTagline: "Connect the physical and digital worlds.",
    heroSubheading:
      "Bring devices, data and dashboards together so your teams can act in real-time.",
    heroImage: "/image/services/iot.jpeg",
    accentFrom: "from-amber-400",
    accentTo: "to-cyan-400",
    summaryBullets: [
      "Edge-to-cloud architectures",
      "Real-time streaming & analytics",
      "Predictive maintenance"
    ],
    highlightStat: "Cut unplanned downtime by up to 40%.",
    metrics: [
      { label: "Connected Devices", value: 76, helper: "Unified visibility" },
      { label: "Alert Accuracy", value: 71, helper: "Signal over noise" },
      { label: "Ops Efficiency", value: 69, helper: "Automated actions" }
    ],
    pieLabel: "Connected operations",
    piePrimary: 61,
    pieSecondaryLabel: "Disconnected",
    leadQuote: {
      quote:
        "We design systems that stay reliable even when the network doesn’t.",
      name: "Rohan Mehta",
      role: "CTO, CloudNexus"
    },
    detailHeading: "IoT that creates decisions, not dashboards only.",
    detailSubheading:
      "We design data flows that turn sensor streams into meaningful actions.",
    detailImage: "/image/service/iot.jpeg"
  },

  "saas-solutions": {
    slug: "saas-solutions",
    name: "SaaS Solutions",
    heroTagline: "Launch, scale and secure your SaaS.",
    heroSubheading:
      "From multi-tenant architectures to billing and observability, we help you ship SaaS the right way.",
    heroImage: "/image/services-data.jpeg",
    accentFrom: "from-sky-400",
    accentTo: "to-indigo-400",
    summaryBullets: [
      "Multi-tenant architectures",
      "Usage-based billing integrations",
      "SLI/SLO-driven observability"
    ],
    highlightStat: "Improve platform uptime to 99.9% and beyond.",
    metrics: [
      { label: "Tenant Isolation", value: 82, helper: "Secure by design" },
      { label: "Release Velocity", value: 74, helper: "Feature flags & canaries" },
      { label: "Customer Retention", value: 77, helper: "Reliable experiences" }
    ],
    pieLabel: "SaaS workloads",
    piePrimary: 66,
    pieSecondaryLabel: "On-premise",
    leadQuote: {
      quote:
        "Consistency is how trust looks in production. Your customers should feel that every time they log in.",
      name: "Neha Sharma",
      role: "VP, AI & Automation, CloudNexus"
    },
    detailHeading: "Turn your platform into a product your customers rely on.",
    detailSubheading:
      "We combine strong engineering practices with product thinking to help your SaaS grow sustainably.",
    detailImage: "/image/service-data.jpeg"
  }
};
