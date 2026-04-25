import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

function DatabaseIcon({ className }) {
  return (
    <IconBase className={className}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </IconBase>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

function SparklesIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" />
      <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
      <path d="M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z" />
    </IconBase>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

function ActivityIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 12h4l3-7 4 14 3-7h4" />
    </IconBase>
  );
}

function CloudIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 18a4 4 0 1 1 .8-7.9A5.5 5.5 0 1 1 18 18H7Z" />
    </IconBase>
  );
}

function CpuIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </IconBase>
  );
}

function BarChart3Icon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 20h18" />
      <path d="M7 16V8" />
      <path d="M12 16V4" />
      <path d="M17 16v-6" />
    </IconBase>
  );
}

function Layers3Icon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </IconBase>
  );
}

function WorkflowIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M12 10v4" />
    </IconBase>
  );
}

function DownloadIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </IconBase>
  );
}

function LinkedinIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7" />
      <path d="M8 7h.01" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M12 10v7" />
    </IconBase>
  );
}

function GithubIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 18c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.1a3.3 3.3 0 0 0-.9-2.6c3 0 6-1.8 6-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.7 3.5 5.7 3.8 5.7 3.8A4.3 4.3 0 0 0 5.6 7a4.7 4.7 0 0 0-1.3 3.3c0 4.2 3 6 6 6a3.3 3.3 0 0 0-.9 2.6V22" />
    </IconBase>
  );
}

function SearchIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

function XIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

function MenuIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

function MoonIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </IconBase>
  );
}

function SunIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </IconBase>
  );
}

function CNLogoMark({ className = "h-10 w-10" }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-blue-400/30 bg-[#0a1020] shadow-[0_0_24px_rgba(96,165,250,0.18)]",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl border border-blue-300/70 shadow-[inset_0_0_18px_rgba(125,211,252,0.2),0_0_14px_rgba(96,165,250,0.25)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_45%),linear-gradient(180deg,#111827,#0a1020)]" />
      <div className="relative z-10 flex h-full w-full items-center justify-center text-[0.95rem] font-extrabold tracking-[-0.08em] text-white">
        <span className="bg-gradient-to-r from-sky-200 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,197,253,0.35)]">
          CN
        </span>
      </div>
    </div>
  );
}

function ScrollToTopButton({ visible, isLight }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={[
            "fixed bottom-6 right-6 z-50 rounded-full border px-4 py-3 text-sm shadow-2xl backdrop-blur-xl transition",
            isLight
              ? "border-slate-200 bg-white/90 text-slate-900"
              : "border-white/15 bg-slate-950/80 text-white",
          ].join(" ")}
        >
          ↑ Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function ProjectModal({ project, onClose, isLight }) {
  useEffect(() => {
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close case study"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 14 }}
            transition={{ duration: 0.25 }}
            className={[
              "relative z-10 max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem] border p-8 shadow-2xl",
              isLight
                ? "border-slate-200 bg-white text-slate-900"
                : "border-white/10 bg-[#08131f] text-white",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p
                  className={[
                    "text-xs uppercase tracking-[0.28em]",
                    isLight ? "text-blue-700" : "text-blue-200",
                  ].join(" ")}
                >
                  {project.category}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p
                  className={[
                    "mt-4 max-w-2xl text-base leading-8",
                    isLight ? "text-slate-600" : "text-slate-300",
                  ].join(" ")}
                >
                  {project.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={[
                  "rounded-full border p-3",
                  isLight
                    ? "border-slate-200 bg-slate-50"
                    : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { label: "Outcome", value: project.metric },
                { label: "Impact", value: project.impact },
                { label: "Role", value: "Data Engineering / System Design" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={[
                    "rounded-3xl border p-5",
                    isLight
                      ? "border-slate-200 bg-slate-50"
                      : "border-white/10 bg-white/5",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "text-xs uppercase tracking-[0.24em]",
                      isLight ? "text-slate-500" : "text-slate-400",
                    ].join(" ")}
                  >
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <section>
                  <h4 className="text-xl font-semibold">The problem</h4>
                  <p
                    className={[
                      "mt-3 leading-8",
                      isLight ? "text-slate-600" : "text-slate-300",
                    ].join(" ")}
                  >
                    {project.problem}
                  </p>
                </section>

                <section className="mt-8">
                  <h4 className="text-xl font-semibold">Approach</h4>
                  <ul
                    className={[
                      "mt-3 space-y-3",
                      isLight ? "text-slate-600" : "text-slate-300",
                    ].join(" ")}
                  >
                    {project.approach.map((item) => (
                      <li key={item} className="flex gap-3 leading-8">
                        <span
                          className={[
                            "mt-3 h-1.5 w-1.5 rounded-full",
                            isLight ? "bg-blue-600" : "bg-blue-300",
                          ].join(" ")}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-8">
                  <h4 className="text-xl font-semibold">Result</h4>
                  <p
                    className={[
                      "mt-3 leading-8",
                      isLight ? "text-slate-600" : "text-slate-300",
                    ].join(" ")}
                  >
                    {project.result}
                  </p>
                </section>
              </div>

              <div>
                <div
                  className={[
                    "rounded-[1.75rem] border p-6",
                    isLight
                      ? "border-slate-200 bg-slate-50"
                      : "border-white/10 bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className={[
                        "text-xs uppercase tracking-[0.24em]",
                        isLight ? "text-slate-500" : "text-slate-400",
                      ].join(" ")}
                    >
                      System view
                    </p>
                    <WorkflowIcon
                      className={
                        isLight
                          ? "h-5 w-5 text-blue-700"
                          : "h-5 w-5 text-blue-200"
                      }
                    />
                  </div>

                  <div className="mt-5 space-y-4">
                    {project.system.map((step, index) => (
                      <div key={step.label}>
                        <div
                          className={[
                            "rounded-2xl border p-4",
                            isLight
                              ? "border-slate-200 bg-white"
                              : "border-white/10 bg-slate-950/40",
                          ].join(" ")}
                        >
                          <p
                            className={[
                              "text-xs uppercase tracking-[0.24em]",
                              isLight ? "text-slate-500" : "text-slate-400",
                            ].join(" ")}
                          >
                            {step.label}
                          </p>
                          <p className="mt-2 text-sm">{step.value}</p>
                        </div>
                        {index < project.system.length - 1 ? (
                          <div className="flex justify-center py-2">
                            <div
                              className={
                                isLight
                                  ? "h-6 w-px bg-slate-300"
                                  : "h-6 w-px bg-white/20"
                              }
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold">Tech stack</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className={[
                          "rounded-full px-3 py-1 text-sm",
                          isLight
                            ? "bg-slate-100 text-slate-700"
                            : "bg-white/8 text-slate-200",
                        ].join(" ")}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function createProjects() {
  return [
    {
      title: "Enterprise Data Ingestion Optimisation",
      category: "Performance",
      summary:
        "Redesigned a large-scale ingestion workflow by moving from full daily loads to incremental partition-based processing.",
      impact:
        "Reduced runtime from ~24 hours to ~1 hour and improved downstream data availability.",
      stack: ["PySpark", "AWS S3", "EC2", "SQL", "Partitioning"],
      metric: "95% faster runtime",
      problem:
        "A large ingestion workflow was originally designed around daily full loads, even though only a small portion of the overall data changed each day. That meant long runtimes, unnecessary compute, and slower access for the teams relying on refreshed data.",
      approach: [
        "Reviewed the actual rate of change in the source data rather than assuming a full refresh was needed.",
        "Shifted the workflow toward incremental partition-based loading using date logic.",
        "Reduced unnecessary processing by aligning the pipeline design with the real business usage pattern.",
      ],
      result:
        "The revised design cut runtime dramatically and made updated data available much earlier for downstream users. It is the kind of change I enjoy most because it improves both technical efficiency and business usability.",
      system: [
        { label: "Source", value: "Enterprise warehouse data" },
        { label: "Process", value: "PySpark incremental partition logic" },
        { label: "Deliver", value: "Faster daily access in the data lake" },
      ],
    },
    {
      title: "HDFS to AWS Migration",
      category: "Migration",
      summary:
        "Supported migration from legacy on-prem data storage to AWS, improving scalability, accessibility, and long-term maintainability.",
      impact:
        "Helped modernise data infrastructure and support cloud-based analytics workflows.",
      stack: ["HDFS", "AWS", "Data Migration", "ETL", "Data Lake"],
      metric: "Cloud-ready architecture",
      problem:
        "Legacy storage environments can become difficult to scale, maintain, and integrate with newer workflows. Migration work needs more than lift-and-shift thinking. It needs an approach that preserves reliability while moving toward a better long-term architecture.",
      approach: [
        "Assessed how existing data workflows mapped into AWS-based storage and processing patterns.",
        "Supported migration planning with a focus on scalability, accessibility, and operational simplicity.",
        "Treated the move as an opportunity to improve architecture rather than only replicate old constraints in a new environment.",
      ],
      result:
        "The migration work contributed to a more modern platform foundation and enabled cloud-based analytics workflows that were easier to scale and maintain over time.",
      system: [
        { label: "Source", value: "On-prem HDFS environment" },
        { label: "Process", value: "Migration and ETL redesign" },
        { label: "Deliver", value: "AWS-aligned storage and access patterns" },
      ],
    },
    {
      title: "Mobi Bikes Forecasting",
      category: "Analytics",
      summary:
        "Built a predictive workflow combining historical and real-time bike-share data to forecast station-level availability one hour ahead.",
      impact:
        "Created a more operationally useful view of demand and availability across stations.",
      stack: [
        "Python",
        "Databricks",
        "Forecasting",
        "GBFS",
        "Feature Engineering",
      ],
      metric: "1-hour station forecast",
      problem:
        "Real-time operational data is useful, but it becomes much more valuable when teams can anticipate what happens next rather than simply react to the current state. Forecasting station availability makes the data more decision-ready.",
      approach: [
        "Combined historical usage patterns with real-time feeds from the bike-share network.",
        "Built a station-level forecasting workflow focused on short-horizon operational insight.",
        "Used feature engineering and model-ready data preparation to make the predictions more useful in practice.",
      ],
      result:
        "The project turned raw operational signals into a forward-looking view of demand and availability. It also gave me a strong opportunity to work across ingestion, preparation, and practical forecasting design.",
      system: [
        { label: "Source", value: "Historical + GBFS real-time feeds" },
        { label: "Process", value: "Python feature engineering and forecasting" },
        { label: "Deliver", value: "1-hour station-level availability insight" },
      ],
    },
  ];
}

function getSkillGroups() {
  return {
    All: [
      "Python",
      "SQL",
      "PySpark",
      "Spark SQL",
      "AWS S3",
      "EC2",
      "Hive",
      "Teradata",
      "Iceberg",
      "ETL Pipelines",
      "Data Lakes",
      "Performance Optimisation",
      "Incremental Loading",
      "Git",
    ],
    Languages: ["Python", "SQL"],
    Data: [
      "PySpark",
      "Spark SQL",
      "ETL Pipelines",
      "Incremental Loading",
      "Data Lakes",
      "Hive",
      "Teradata",
      "Iceberg",
    ],
    Cloud: ["AWS S3", "EC2", "Git"],
  };
}

function runSanityChecks(projects, skillGroups, navItems) {
  const checks = [
    {
      name: "projects exist",
      pass: Array.isArray(projects) && projects.length >= 3,
    },
    {
      name: "every project has stack",
      pass: projects.every(
        (project) => Array.isArray(project.stack) && project.stack.length > 0,
      ),
    },
    {
      name: "every project has system view",
      pass: projects.every(
        (project) => Array.isArray(project.system) && project.system.length >= 3,
      ),
    },
    {
      name: "skill groups include All",
      pass: Array.isArray(skillGroups.All) && skillGroups.All.length > 0,
    },
    {
      name: "nav items exist",
      pass: Array.isArray(navItems) && navItems.length > 0,
    },
  ];

  if (checks.some((check) => !check.pass)) {
    console.warn("Portfolio sanity checks failed", checks);
  }

  return checks;
}

export default function CalumPortfolioWebsite() {
  const projects = useMemo(() => createProjects(), []);
  const skillGroups = useMemo(() => getSkillGroups(), []);

  const focusAreas = [
    {
      icon: DatabaseIcon,
      title: "Pipeline Development",
      description:
        "Designing efficient ETL workflows for large-scale datasets with a strong focus on reliability and performance.",
    },
    {
      icon: CloudIcon,
      title: "Cloud & Data Platforms",
      description:
        "Working with AWS and modern data platform concepts including data lakes, migration, and scalable storage patterns.",
    },
    {
      icon: CpuIcon,
      title: "Performance Optimisation",
      description:
        "Finding bottlenecks, improving runtime, and making data more accessible to the teams who depend on it.",
    },
  ];

  const timeline = [
    {
      year: "01",
      title: "Understand the system",
      text: "Start with the business problem, where the data flows, and where the pain points actually are.",
    },
    {
      year: "02",
      title: "Simplify the architecture",
      text: "Reduce unnecessary load, improve workflow design, and move toward more scalable patterns.",
    },
    {
      year: "03",
      title: "Measure the impact",
      text: "Focus on runtime, reliability, usability, and clear value for downstream teams.",
    },
  ];

  const stats = [
    { label: "Years in data", value: "4" },
    { label: "Runtime improvement", value: "24h → 1h" },
    { label: "Core focus", value: "PySpark · SQL · AWS" },
  ];

  const educationItems = [
    {
      title: "M.Sc. Artificial Intelligence",
      school: "University",
      detail:
        "Focused on machine learning, data systems, and applied AI concepts.",
    },
    {
      title: "B.Sc. Computing & IT",
      school: "University",
      detail:
        "Strong foundation in programming, databases, and system design.",
    },
  ];

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "process", label: "Process" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  runSanityChecks(projects, skillGroups, navItems);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkillGroup, setActiveSkillGroup] = useState("All");
  const [skillQuery, setSkillQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let link = document.getElementById("dynamic-favicon");

    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-favicon";
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }

    const faviconPath = isLight ? "/favicon-light.png" : "/favicon-dark.png";
    link.setAttribute("href", `${faviconPath}?v=${isLight ? "light" : "dark"}`);
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowTopButton(scrollTop > 500);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "about";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [navItems]);

  const filteredSkills = useMemo(() => {
    const skills = skillGroups[activeSkillGroup] || skillGroups.All;
    return skills.filter((skill) =>
      skill.toLowerCase().includes(skillQuery.toLowerCase()),
    );
  }, [activeSkillGroup, skillGroups, skillQuery]);

  const themeClasses = isLight
    ? {
        page: "bg-[#fafafa] text-slate-900",
        header: "border-slate-200 bg-white/80",
        panel: "border-slate-200 bg-white/80",
        muted: "text-slate-600",
        soft: "text-slate-500",
        pill: "border-slate-200 bg-slate-100 text-slate-700",
        footer: "border-slate-200 bg-white text-slate-600",
        footerLine: "border-slate-200",
        footerText: "text-slate-500",
        footerHeading: "text-slate-900",
      }
    : {
        page: "bg-[#05070f] text-slate-100",
        header: "border-white/10 bg-black/60",
        panel: "border-white/10 bg-white/5",
        muted: "text-slate-300",
        soft: "text-slate-400",
        pill: "border-white/10 bg-white/5 text-slate-200",
        footer: "border-white/10 bg-[#0a1020] text-white/70",
        footerLine: "border-white/10",
        footerText: "text-white/50",
        footerHeading: "text-white",
      };

  const navLinkClass = (itemId) => {
    const active = activeSection === itemId;
    if (active) {
      return isLight
        ? "rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition"
        : "rounded-full bg-white px-4 py-2 text-sm text-slate-950 transition";
    }
    return `rounded-full px-4 py-2 text-sm transition ${themeClasses.soft} hover:text-current`;
  };

  const primaryButtonClass = isLight
    ? "group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-2xl transition hover:-translate-y-0.5"
    : "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-2xl transition hover:-translate-y-0.5";

  const primaryContactClass = isLight
    ? "inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-medium text-white"
    : "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950";

  return (
    <div
      className={`min-h-screen overflow-x-hidden selection:bg-blue-300 selection:text-slate-950 ${themeClasses.page}`}
    >
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${themeClasses.header}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <CNLogoMark className="h-11 w-11" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-blue-400/80">
                Portfolio
              </p>
              <h1 className="text-lg font-semibold tracking-wide">
                Calum Nairn
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={navLinkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsLight((value) => !value)}
              className={`rounded-full border p-2.5 ${themeClasses.panel}`}
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className={`rounded-full border p-2.5 md:hidden ${themeClasses.panel}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XIcon className="h-4 w-4" />
              ) : (
                <MenuIcon className="h-4 w-4" />
              )}
            </button>

            <a
              href="#contact"
              className={`hidden rounded-full border px-4 py-2 text-sm transition md:block ${themeClasses.panel}`}
            >
              Let’s connect
            </a>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-inherit md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm ${themeClasses.panel}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pt-28">
          <div className="grid items-center gap-12">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-500 ${themeClasses.panel}`}
              >
                <SparklesIcon className="h-3.5 w-3.5" />
                Data Engineer · Vancouver
              </div>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                Building data systems that are fast, scalable, and genuinely useful.
              </h2>

              <p
                className={`mt-6 max-w-2xl text-lg leading-8 md:text-xl ${themeClasses.muted}`}
              >
                I’m a data engineer from Northern Ireland, now based in Vancouver, with experience across enterprise data workflows, cloud migration, AWS, PySpark, SQL, and large-scale data platforms. I enjoy simplifying systems, improving performance, and building solutions that have a clear business outcome.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className={primaryButtonClass}>
                  View Projects
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>

                <a
                  href="mailto:calumnairn99@gmail.com"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg ${themeClasses.panel}`}
                >
                  Get in Touch
                  <MailIcon className="h-4 w-4" />
                </a>

                <a
                  href="/Calum-Nairn-CV.pdf"
                  download
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition ${themeClasses.panel}`}
                >
                  Download CV
                  <DownloadIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index + 0.2, duration: 0.6 }}
                    className={`rounded-3xl border p-5 backdrop-blur-sm ${themeClasses.panel}`}
                  >
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`mt-1 text-sm ${themeClasses.soft}`}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className={`mt-12 flex items-center gap-2 text-sm ${themeClasses.soft}`}>
                <ChevronDownIcon className="h-4 w-4 animate-bounce" />
                Scroll to explore selected work and experience
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                About
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A practical, impact-driven approach to data engineering.
              </h3>
            </div>
            <div className={`rounded-[2rem] border p-8 backdrop-blur-sm ${themeClasses.panel}`}>
              <p className={`text-base leading-8 ${themeClasses.muted}`}>
                My background is in building and improving data workflows in enterprise environments, particularly where scale, reliability, and efficiency matter. I’m most interested in work that goes beyond simply moving data from one place to another.
              </p>
              <p className={`mt-5 text-base leading-8 ${themeClasses.muted}`}>
                I like understanding the system, spotting where it can be improved, and making changes that have a clear outcome for the business or the teams using the data.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                  Focus
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  What I focus on most
                </h3>
              </div>
              <p className={`max-w-2xl text-sm leading-7 ${themeClasses.soft}`}>
                The strongest work usually comes from combining technical depth with good judgement. These are the areas I naturally lean into.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className={`group rounded-[2rem] border p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-300/30 ${themeClasses.panel}`}
                  >
                    <div className={`inline-flex rounded-2xl border p-3 ${themeClasses.panel}`}>
                      <Icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <h4 className="mt-5 text-xl font-semibold">{item.title}</h4>
                    <p className={`mt-3 text-sm leading-7 ${themeClasses.soft}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                Education
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Education & qualifications
              </h3>
            </div>
            <p className={`max-w-xl text-sm leading-7 ${themeClasses.soft}`}>
              Academic foundation focused on AI, data systems, and software engineering principles.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-6 rounded-[2rem] border p-8 md:grid-cols-2 ${themeClasses.panel}`}
          >
            {educationItems.map((item) => (
              <div key={item.title} className={`rounded-3xl border p-5 ${themeClasses.panel}`}>
                <p className={`text-xs uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                  {item.school}
                </p>
                <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                <p className={`mt-2 text-sm leading-7 ${themeClasses.muted}`}>
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`rounded-[2rem] border p-8 backdrop-blur-sm ${themeClasses.panel}`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                  Skills
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Interactive stack
                </h3>
              </div>
              <p className={`max-w-2xl text-sm leading-7 ${themeClasses.soft}`}>
                Filter by area, search by keyword, and keep the section feeling a little more alive than a static list.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3">
                {Object.keys(skillGroups).map((group) => {
                  const isActive = activeSkillGroup === group;
                  const className = isActive
                    ? isLight
                      ? "rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition"
                      : "rounded-full bg-white px-4 py-2 text-sm text-slate-950 transition"
                    : `rounded-full px-4 py-2 text-sm transition ${themeClasses.pill}`;

                  return (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setActiveSkillGroup(group)}
                      className={className}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>

              <label className={`flex items-center gap-3 rounded-full border px-4 py-2 text-sm ${themeClasses.panel}`}>
                <SearchIcon className={`h-4 w-4 ${themeClasses.soft}`} />
                <input
                  value={skillQuery}
                  onChange={(event) => setSkillQuery(event.target.value)}
                  placeholder="Search skills"
                  className="w-40 bg-transparent outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {filteredSkills.map((skill) => (
                <motion.span
                  layout
                  key={skill}
                  className={`rounded-full border px-4 py-2 text-sm shadow-sm backdrop-blur-sm ${themeClasses.pill}`}
                >
                  {skill}
                </motion.span>
              ))}
              {filteredSkills.length === 0 ? (
                <p className={`text-sm ${themeClasses.soft}`}>No matching skills found.</p>
              ) : null}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                Projects
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Featured work
              </h3>
            </div>
            <p className={`max-w-2xl text-sm leading-7 ${themeClasses.soft}`}>
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-300/30 ${themeClasses.panel}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/[0.06] via-transparent to-indigo-300/[0.03] opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                      {project.category}
                    </p>
                    <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-[11px] font-medium text-blue-500">
                      {project.metric}
                    </span>
                  </div>
                  <h4 className="mt-4 text-2xl font-semibold leading-8">
                    {project.title}
                  </h4>
                  <p className={`mt-4 text-sm leading-7 ${themeClasses.muted}`}>
                    {project.summary}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7">{project.impact}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className={`rounded-full px-3 py-1 text-xs ${themeClasses.pill}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    View Case Study
                    <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div>
              <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                Process
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                How I think through engineering problems.
              </h3>
            </div>
            <div className="space-y-5">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`grid gap-4 rounded-[2rem] border p-6 backdrop-blur-sm md:grid-cols-[84px_1fr] ${themeClasses.panel}`}
                >
                  <div className="text-3xl font-semibold text-blue-500">{item.year}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className={`mt-2 text-sm leading-7 ${themeClasses.soft}`}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden rounded-[2rem] border px-8 py-12 shadow-2xl ${themeClasses.panel}`}
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="relative z-10">
              <p className={`text-sm uppercase tracking-[0.24em] ${themeClasses.soft}`}>
                Contact
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Open to data engineering opportunities.
              </h3>
              <p className={`mt-4 max-w-2xl text-base leading-8 ${themeClasses.muted}`}>
                I’m currently based in Vancouver and interested in roles where I can contribute to scalable data systems, cloud-based platforms, and performance-focused engineering work.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:calumnairn99@gmail.com"
                  className={`${primaryContactClass} hover:-translate-y-0.5 hover:shadow-lg transition`}
                >
                  <MailIcon className="h-4 w-4" />
                  calumnairn99@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/calum-nairn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white bg-[#0A66C2] hover:bg-[#004182] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/calum-nairn99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white bg-slate-900 hover:bg-black transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

            <footer className={`border-t ${themeClasses.footerLine} ${themeClasses.footer}`}>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className={`grid gap-10 rounded-[2rem] border p-8 backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr_0.9fr] ${themeClasses.panel}`}>
            <div>
              <div className="flex items-center gap-3">
                <CNLogoMark className="h-11 w-11" />
                <div>
                  <p className={`text-base font-semibold ${themeClasses.footerHeading}`}>
                    Calum Nairn
                  </p>
                  <p className={`text-sm ${themeClasses.footerText}`}>
                    Data Engineer · Vancouver
                  </p>
                </div>
              </div>

              <p className={`mt-5 max-w-md text-sm leading-7 ${themeClasses.footerText}`}>
                Building scalable data systems, improving performance, and turning complex workflows into practical business value.
              </p>
            </div>

            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${themeClasses.footerText}`}>
                Navigation
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="#projects" className="transition hover:text-blue-400">
                  Projects
                </a>
                <a href="#about" className="transition hover:text-blue-400">
                  About
                </a>
                <a href="#process" className="transition hover:text-blue-400">
                  Process
                </a>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${themeClasses.footerText}`}>
                Connect
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="mailto:calumnairn99@gmail.com"
                  className="transition hover:text-blue-400"
                >
                  calumnairn99@gmail.com
                </a>
                <a
                  href="https://github.com/calum-nairn99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/calum-nairn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-6 flex flex-col gap-3 border-t ${themeClasses.footerLine} pt-6 text-xs ${themeClasses.footerText} md:flex-row md:items-center md:justify-between`}>
            <p>© {new Date().getFullYear()} Calum Nairn - Built with React & Vite.</p>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isLight={isLight}
      />
      <ScrollToTopButton visible={showTopButton} isLight={isLight} />
    </div>
  );
}
