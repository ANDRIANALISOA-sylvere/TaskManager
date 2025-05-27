"use client";
import { useState, useEffect, ReactNode, ReactElement } from "react";
import {
  CheckCircle,
  BarChart2,
  Calendar,
  Users,
  MessageCircle,
  Lock,
  ChevronRight,
  Star,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Code,
  Megaphone,
  LineChart,
  Globe,
  Building2,
  Rocket,
  MessageCircleQuestion,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import AnimatedBadge from "@/components/AnimatedBadge";
type FeatureItem = {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  visual: ReactNode;
};

type BentoProps = {
  feature: FeatureItem;
  isWide?: boolean;
};
const BentoCard = ({ feature, isWide = false }: BentoProps): ReactElement => {
  return (
    <div
      className={`bg-gradient-to-br ${feature.bgColor} p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all group h-full relative overflow-hidden`}
    >
      {/* Effet visuel en arrière-plan */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>

      {/* En-tête */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="relative mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 relative z-10">
        {feature.description}
      </p>

      {/* Visualisation */}
      <div className="relative z-10">{feature.visual}</div>
    </div>
  );
};

type FaqProps = {
  question: string;
  answer: string;
};
const FAQItem = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
          isOpen ? "bg-accent/30" : "hover:bg-accent/10"
        }`}
      >
        <h3 className="text-lg font-medium text-foreground flex items-center gap-3">
          <span className="text-primary">
            <MessageCircleQuestion size={20} />
          </span>
          {question}
        </h3>
        <span className="text-primary flex-shrink-0 cursor-pointer">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="p-5 pt-2 border-t border-border/40">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};
function ImprovedFAQSection() {
  const faqs = [
    {
      question: "Is TaskManager really free?",
      answer:
        "Yes! TaskManager is 100% free with no hidden costs, trials, or premium plans. Enjoy all features without paying anything.",
    },
    {
      question: "Are there any limits on tasks or projects?",
      answer:
        "No, you can create unlimited tasks and projects. No restrictions—use it as much as you need!",
    },
    {
      question: "Do I need a credit card to sign up?",
      answer:
        "Nope! Just sign up with your email (or Google/GitHub), and you’re ready to go. No payment details required.",
    },
    {
      question: "How does TaskManager stay free?",
      answer:
        "We prioritize simplicity and user experience over monetization. If we ever introduce paid features, the core task management will always remain free.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We offer community support via forums and email. Since we’re free, responses may take longer than paid tools, but we’re here to help!",
    },
  ];

  return (
    <>
      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedBadge text="FAQ" />
            <h2 className="text-3xl md:text-5xl font-bold pt-2 mb-4 text-foreground">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Everything you need to know about TaskManager. Can't find the
              answer you're looking for?{" "}
              <a href="#contact" className="text-primary hover:underline">
                Contact our support team
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block p-3 bg-primary/10 text-primary rounded-full">
              <ArrowRight size={24} />
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join your teams who manage their work with TaskManager.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="cursor-pointer px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
              Start free trial
            </button>
            <button className="cursor-pointer px-8 py-4 border border-border bg-background rounded-lg font-medium hover:bg-accent/50 transition-all duration-300">
              Request demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Détection du défilement pour l'animation de la barre de navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const features: FeatureItem[] = [
    {
      icon: <BarChart2 size={24} className="text-blue-400" />,
      title: "Kanban Boards",
      description: "Organize tasks visually with drag-and-drop simplicity",
      bgColor: "from-blue-900/40 to-blue-900/10",
      visual: (
        <div className="w-full h-32 rounded-lg bg-blue-900/20 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 p-2 w-5/6">
            <div className="bg-blue-800/40 rounded p-1">
              <div className="h-3 w-12 bg-blue-400/30 rounded mb-1"></div>
              <div className="h-2 w-8 bg-blue-400/20 rounded"></div>
            </div>
            <div className="bg-blue-800/40 rounded p-1">
              <div className="h-3 w-12 bg-blue-400/30 rounded mb-1"></div>
              <div className="h-2 w-8 bg-blue-400/20 rounded"></div>
            </div>
            <div className="bg-blue-800/40 rounded p-1">
              <div className="h-3 w-12 bg-blue-400/30 rounded mb-1"></div>
              <div className="h-2 w-8 bg-blue-400/20 rounded"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Calendar size={24} className="text-purple-400" />,
      title: "Calendar View",
      description: "Plan deadlines and visualize team events intuitively",
      bgColor: "from-purple-900/40 to-purple-900/10",
      visual: (
        <div className="w-full h-32 rounded-lg bg-purple-900/20 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1 p-2 w-5/6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-8 bg-purple-800/40 rounded flex items-center justify-center"
              >
                <div className="h-2 w-2 rounded-full bg-purple-400/40"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: <Users size={24} className="text-green-400" />,
      title: "Real-Time Collaboration",
      description: "Assign tasks and communicate seamlessly in real-time",
      bgColor: "from-green-900/40 to-green-900/10",
      visual: (
        <div className="w-full h-32 rounded-lg bg-green-900/20 flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="h-10 w-10 rounded-full bg-green-400/30 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-green-400/50"></div>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-400/30 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-green-400/50"></div>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-400/30 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-green-400/50"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageCircle size={24} className="text-yellow-400" />,
      title: "Integrated Discussions",
      description:
        "Keep all project-related conversations organized where work happens",
      bgColor: "from-yellow-900/40 to-yellow-900/10",
      visual: (
        <div className="w-full h-32 rounded-lg bg-yellow-900/20 flex items-center justify-center">
          <div className="w-5/6 space-y-2">
            <div className="h-6 bg-yellow-800/40 rounded w-full"></div>
            <div className="h-6 bg-yellow-800/40 rounded w-4/5"></div>
            <div className="h-6 bg-yellow-800/40 rounded w-5/6"></div>
          </div>
        </div>
      ),
    },
    {
      icon: <CheckCircle size={24} className="text-red-400" />,
      title: "Custom Workflows",
      description: "Create workflows tailored to your team's unique processes",
      bgColor: "from-red-900/40 to-red-900/10",
      visual: (
        <div className="w-full h-32 rounded-lg bg-red-900/20 flex items-center justify-center">
          <div className="space-y-2 w-5/6">
            <div className="h-4 bg-red-800/40 rounded flex items-center">
              <div className="h-3 w-3 ml-1 rounded-full bg-red-400/50"></div>
            </div>
            <div className="h-4 bg-red-800/40 rounded flex items-center">
              <div className="h-3 w-3 ml-1 rounded-full bg-red-400/50"></div>
            </div>
            <div className="h-4 bg-red-800/40 rounded flex items-center">
              <div className="h-3 w-3 ml-1 rounded-full bg-red-400/50"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Software Development",
      description:
        "Plan sprints, manage backlogs, and track bugs with tools designed for agile development teams.",
      icon: Code,
      features: [
        "Agile boards",
        "Git integration",
        "Automated testing",
        "CI/CD pipeline",
      ],
      accentColor: "from-blue-600/20 to-cyan-400/20",
    },
    {
      title: "Marketing Teams",
      description:
        "Coordinate campaigns, manage content calendars, and streamline approval processes.",
      icon: Megaphone,
      features: [
        "Campaign tracking",
        "Content calendar",
        "Asset management",
        "Analytics integration",
      ],
      accentColor: "from-purple-600/20 to-pink-400/20",
    },
    {
      title: "Product Management",
      description:
        "Define roadmaps, gather feedback, and turn ideas into shippable products.",
      icon: LineChart,
      features: [
        "Roadmap planning",
        "Feature prioritization",
        "User feedback",
        "Release management",
      ],
      accentColor: "from-amber-600/20 to-yellow-400/20",
    },
    {
      title: "Remote Teams",
      description:
        "Keep distributed teams aligned with transparent goals and clear communication.",
      icon: Globe,
      features: [
        "Virtual meetings",
        "Time zone management",
        "Async communication",
        "Team dashboard",
      ],
      accentColor: "from-emerald-600/20 to-green-400/20",
    },
    {
      title: "Startups",
      description:
        "Move fast and stay organized with flexible tools that grow with your company.",
      icon: Rocket,
      features: [
        "Quick setup",
        "Flexible workflows",
        "Investor reporting",
        "Resource allocation",
      ],
      accentColor: "from-rose-600/20 to-red-400/20",
    },
    {
      title: "Enterprise",
      description:
        "Scale project management across your organization with advanced security and controls.",
      icon: Building2,
      features: [
        "SSO integration",
        "Advanced permissions",
        "Audit logging",
        "Custom workflows",
      ],
      accentColor: "from-indigo-600/20 to-blue-400/20",
    },
  ];
  return (
    <div className="bg-background">
      <div className="absolute inset-0 opacity-5 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full"></div>
      {/* Navigation améliorée */}
      <div className="relative w-full h-full">
        {/* Top Scroll Indicator */}
        <div
          className={`z-[99] fixed pointer-events-none inset-x-0 h-20 
        dark:bg-[rgba(10,10,10,0.7)] bg-[rgba(255,255,255,0.7)]
        backdrop-blur-md transition-all duration-300
        [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]
        ${scrolled ? "opacity-100" : "opacity-90"}`}
        ></div>

        {/* Main Navigation Header */}
        <header
          className={`fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform transition-all duration-300 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <div
            className="size-full mx-auto max-w-6xl backdrop-blur-lg rounded-xl lg:rounded-2xl 
          border dark:border-border border-border
          dark:bg-background/40 bg-background/40
          px-4 md:px-6 py-3 flex items-center justify-start shadow-sm"
          >
            <div className="flex items-center justify-between w-full">
              {/* Logo and Desktop Navigation */}
              <div className="flex items-center flex-1 lg:flex-none">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    src="/logo-transparent-copy.png"
                    className="h-12 w-16"
                    alt="Logo"
                  />
                </div>

                {/* Desktop Navigation Links */}
                <div className="items-center hidden ml-8 lg:flex">
                  <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                    <div className="hidden md:flex md:space-x-8">
                      <Link
                        href="#features"
                        className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Features
                      </Link>
                      <Link
                        href="#solutions"
                        className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Solutions
                      </Link>
                      <Link
                        href="#pricing"
                        className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                      >
                        FAQ
                      </Link>
                      <Link
                        href="#testimonials"
                        className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="items-center flex gap-2 lg:gap-4">
                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden text-foreground p-1 rounded-md hover:bg-accent focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Desktop Action Buttons */}
                <Link
                  className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none text-foreground hover:bg-accent h-9 px-4"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none bg-primary text-primary-foreground hover:opacity-90 h-9 px-4 hidden sm:flex"
                  href="/signup"
                >
                  Explore for free
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 inset-x-0 mx-4 p-4 rounded-lg shadow-lg dark:bg-background bg-background border dark:border-border border-border lg:hidden">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#solutions"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="border-t dark:border-border border-border my-2 pt-2">
                  <Link
                    className="block w-full text-center px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    className="block w-full text-center mt-2 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 rounded-md"
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Explore for free
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-42 overflow-hidden">
        {/* Pill Badge */}
        <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-6 inline-flex items-center shadow-sm">
          <Star className="w-4 h-4 mr-2" /> New Release: Team Dashboards
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
          Bring your team Together <br className="hidden md:block" />
          <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
            Effortlessly
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-2xl">
          TaskManager helps teams collaborate, assign tasks, and track progress
          with ease — all in one powerful, intuitive platform.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-5">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all w-full shadow-sm hover:shadow-md">
            Start for free
          </button>
          <button className="px-6 py-3 border border-input bg-background hover:bg-accent transition-colors w-full rounded-lg font-medium shadow-sm hover:shadow-md">
            View demo
          </button>
        </div>
        <div
          className="relative pt-20 pb-20 flex justify-center md:py-32 px-2 bg-transparent w-full"
          style={{
            opacity: 1,
            transform: "none",
            willChange: "opacity, transform",
          }}
        >
          <div
            className="absolute md:top-[10%] left-1/2 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem]"
            style={{
              background: `conic-gradient(
            from 230.29deg at 51.63% 52.16%, 
            var(--primary) 0deg, 
            oklch(0.65 0.2 268.05) 67.5deg,
            oklch(0.6 0.24 313.72) 198.75deg,
            oklch(0.58 0.12 283.29) 251.25deg,
            oklch(0.6 0.17 345.04) 301.88deg,
            var(--chart-5) 1turn
          )`,
            }}
          ></div>
          {/* Dashboard Image */}
          <div className="-m-2 dark:bg-background/50 bg-background/50 shadow-lg p-2 rounded-xl border dark:border-border border-border w-full max-w-5xl transform transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1">
            <img
              src="/dashboard.PNG"
              alt="TaskManager Dashboard"
              className="rounded-lg w-full shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6 dark:bg-background bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedBadge text="FEATURES"></AnimatedBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-2 text-white">
            Everything you need to manage projects
          </h2>
          <p className="text-muted-foreground">
            Powerful tools designed to boost your productivity and help your
            team stay in sync.
          </p>
        </div>
        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Première rangée - 3 cartes */}
          {features.slice(0, 3).map((feature, index) => (
            <BentoCard key={index} feature={feature} />
          ))}

          {/* Deuxième rangée - 2 cartes (dont une large) */}
          <div className="md:col-span-2">
            <BentoCard feature={features[3]} isWide={true} />
          </div>
          <div>
            <BentoCard feature={features[4]} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedBadge text="HOW IT WORKS"></AnimatedBadge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-2 text-white">
              Start managing projects in minutes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              TaskManager is designed to be intuitive and easy to use, with a
              minimal learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-3">
                <img
                  src="/illustration-copy.png"
                  alt="Illustration"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Create your workspace",
                    description:
                      "Sign up for a free account and set up your team workspace in seconds.",
                  },
                  {
                    step: "2",
                    title: "Invite your team",
                    description:
                      "Add team members with role-based permissions to collaborate together.",
                  },
                  {
                    step: "3",
                    title: "Customize your workflow",
                    description:
                      "Set up boards, columns, and automations that match your work style.",
                  },
                  {
                    step: "4",
                    title: "Start managing tasks",
                    description:
                      "Create, assign, and track tasks to meet your deadlines with ease.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-foreground blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-primary-foreground blur-3xl"></div>
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-primary-foreground blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">
              New features available now
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground tracking-tight">
            Ready to transform how your team works?
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams already using TaskManager to streamline
            their workflows and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              className="cursor-pointer group px-8 py-4 bg-background text-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start your free trial
              <ArrowRight
                size={18}
                className={`transform transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </button>

            <button className="cursor-pointer px-8 py-4 border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar size={18} />
              Schedule a demo
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedBadge text="SOLUTIONS" />
            <h2 className="text-3xl md:text-5xl font-bold pt-2 mb-4 text-foreground">
              TaskManager for every team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Adaptable solutions for teams of all sizes across different
              industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={index}
                  className={`relative bg-card overflow-hidden p-8 rounded-xl border border-border shadow-md group`}
                >
                  {/* Gradient background that appears on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.accentColor}`}
                  />

                  {/* Icon with circular background */}
                  <div className="relative mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="relative text-xl font-semibold mb-3 text-foreground group-hover:text-foreground/90">
                    {solution.title}
                  </h3>

                  <p className="relative text-muted-foreground mb-6 group-hover:text-muted-foreground/90">
                    {solution.description}
                  </p>

                  {/* Feature list that appears on hover */}
                  <div className="relative space-y-2 mb-6 transition-all duration-300 opacity-100 max-h-40">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="relative mt-4">
                    <span className="inline-flex items-center text-sm font-medium text-primary gap-2">
                      Learn more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ImprovedFAQSection></ImprovedFAQSection>

      {/* Footer */}
      <footer className="py-12 px-6 dark:bg-background border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="/logo-transparent-copy.png"
                className="h-12 w-16"
                alt="Logo"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="#features"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                Solutions
              </a>
              <a
                href="#solutions"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
          <Separator className="mt-12"></Separator>
          <div className="mt-12 pt-8 border-gray-100 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} TaskManager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
