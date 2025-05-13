"use client";
import { useState, useEffect } from "react";
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
} from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import AnimatedBadge from "@/components/AnimatedBadge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                    src="/logo.png"
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
                        Pricing
                      </Link>
                      <Link
                        href="#testimonials"
                        className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Testimonials
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
                  Start for free
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
                  Pricing
                </Link>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
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
                    Start for free
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <BarChart2
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
              ),
              title: "Kanban Boards",
              description:
                "Organize tasks visually and move them through customizable workflows with drag-and-drop simplicity.",
            },
            {
              icon: (
                <Calendar
                  size={20}
                  className="text-green-600 dark:text-green-400"
                />
              ),
              title: "Calendar View",
              description:
                "Plan and visualize upcoming deadlines, milestones, and team events with an intuitive calendar interface.",
            },
            {
              icon: (
                <Users
                  size={20}
                  className="text-purple-600 dark:text-purple-400"
                />
              ),
              title: "Real-Time Collaboration",
              description:
                "Assign tasks, track progress, and communicate with your team seamlessly in real-time.",
            },
            {
              icon: (
                <MessageCircle
                  size={20}
                  className="text-yellow-600 dark:text-yellow-400"
                />
              ),
              title: "Integrated Discussions",
              description:
                "Keep all project-related conversations organized and accessible right where the work happens.",
            },
            {
              icon: (
                <CheckCircle
                  size={20}
                  className="text-red-600 dark:text-red-400"
                />
              ),
              title: "Custom Workflows",
              description:
                "Create and manage custom workflows tailored to your team's unique processes and needs.",
            },
            {
              icon: (
                <Lock
                  size={20}
                  className="text-indigo-600 dark:text-indigo-400"
                />
              ),
              title: "Advanced Security",
              description:
                "Enterprise-grade security features to keep your data protected at all times.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl border border-input hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
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
              <div className="bg-accent/30 p-3 rounded-xl border border-input shadow-md">
                <img
                  src="/api/placeholder/600/400"
                  alt="TaskManager Setup"
                  className="rounded-lg w-full"
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
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to transform how your team works?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using TaskManager to streamline
            their workflows and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
              Start your free trial
            </button>
            <button className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors">
              Schedule a demo
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedBadge text="SOLUTIONS"></AnimatedBadge>
            <h2 className="text-3xl md:text-4xl font-bold pt-2 mb-4 text-white">
              TaskManager for every team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Adaptable solutions for teams of all sizes across different
              industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                description:
                  "Plan sprints, manage backlogs, and track bugs with tools designed for agile development teams.",
              },
              {
                title: "Marketing Teams",
                description:
                  "Coordinate campaigns, manage content calendars, and streamline approval processes.",
              },
              {
                title: "Product Management",
                description:
                  "Define roadmaps, gather feedback, and turn ideas into shippable products.",
              },
              {
                title: "Remote Teams",
                description:
                  "Keep distributed teams aligned with transparent goals and clear communication.",
              },
              {
                title: "Startups",
                description:
                  "Move fast and stay organized with flexible tools that grow with your company.",
              },
              {
                title: "Enterprise",
                description:
                  "Scale project management across your organization with advanced security and controls.",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-input shadow-md transition-all group cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 dark:bg-zinc-900/50 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedBadge text="FAQ"></AnimatedBadge>
            <h2 className="text-3xl md:text-4xl font-bold pt-2 mb-4 text-white">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about TaskManager.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long is the free trial?",
                answer:
                  "Our free trial lasts for 14 days with no credit card required. You'll have full access to all features during this period.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade, downgrade, or cancel your plan at any time through your account settings.",
              },
              {
                question: "Is there a limit to how many tasks I can create?",
                answer:
                  "No, all plans include unlimited tasks. The Free plan has a limit on projects and team members, but not on the number of tasks within those projects.",
              },
              {
                question:
                  "Do you offer discounts for nonprofits or educational institutions?",
                answer:
                  "Yes, we offer special pricing for nonprofit organizations, educational institutions, and open-source projects. Contact our sales team to learn more.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "All plans include email support. Pro and Enterprise plans also include priority support with faster response times, and Enterprise plans come with a dedicated account manager.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-b border-border pb-6 hover:bg-accent/20 p-4 -mx-4 rounded-lg transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who manage their work with TaskManager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Start free trial
            </button>
            <button className="px-8 py-3 border border-gray-300 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Request demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 dark:bg-background border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="/logo.png"
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
                href="#pricing"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-500  text-sm font-medium transition-colors hover:text-foreground"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-gray-500 text-sm font-medium transition-colors hover:text-foreground"
              >
                Blog
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
