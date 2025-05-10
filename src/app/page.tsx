"use client"
import { useState } from "react";
import {
  CheckCircle,
  BarChart2,
  Calendar,
  Users,
  MessageCircle,
  Lock,
  ChevronRight,
  Star,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-black text-xl font-bold">
                  TaskManager
                </span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#solutions"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#pricing"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign up
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Testimonials
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-4">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 pt-32">
        <div className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-flex items-center">
          <Star className="w-4 h-4 mr-2" /> New Release: Team Dashboards
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Project Management <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-gray-600">
          TaskManager helps teams collaborate, assign tasks, and track progress
          with ease — all in one powerful, intuitive platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors w-full">
            Start for free
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors w-full">
            View demo
          </button>
        </div>
        <div className="mt-16 bg-white p-1 rounded-xl shadow-lg w-full max-w-5xl border border-gray-100">
          <img
            src="/dashboard.PNG"
            alt="TaskManager Dashboard"
            className="rounded-lg w-full"
          />
        </div>
        <div className="mt-16 text-gray-500">
          <p className="mb-4">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["ACME Inc", "Globex", "Stark Industries", "Waystar"].map(
              (company) => (
                <div
                  key={company}
                  className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage projects
          </h2>
          <p className="text-gray-600">
            Powerful tools designed to boost your productivity and help your
            team stay in sync.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <BarChart2 size={20} className="text-blue-600" />,
              title: "Kanban Boards",
              description:
                "Organize tasks visually and move them through customizable workflows with drag-and-drop simplicity.",
            },
            {
              icon: <Calendar size={20} className="text-green-600" />,
              title: "Calendar View",
              description:
                "Plan and visualize upcoming deadlines, milestones, and team events with an intuitive calendar interface.",
            },
            {
              icon: <Users size={20} className="text-purple-600" />,
              title: "Real-Time Collaboration",
              description:
                "Assign tasks, track progress, and communicate with your team seamlessly in real-time.",
            },
            {
              icon: <MessageCircle size={20} className="text-yellow-600" />,
              title: "Integrated Discussions",
              description:
                "Keep all project-related conversations organized and accessible right where the work happens.",
            },
            {
              icon: <CheckCircle size={20} className="text-red-600" />,
              title: "Custom Workflows",
              description:
                "Create and manage custom workflows tailored to your team's unique processes and needs.",
            },
            {
              icon: <Lock size={20} className="text-indigo-600" />,
              title: "Advanced Security",
              description:
                "Enterprise-grade security features to keep your data protected at all times.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start managing projects in minutes
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              TaskManager is designed to be intuitive and easy to use, with a
              minimal learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gray-50 p-2 rounded-xl border border-gray-100">
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
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-medium">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform how your team works?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using TaskManager to streamline
            their workflows and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start your free trial
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Schedule a demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600">
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
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
              SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TaskManager for every team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
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
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              See why thousands of teams trust TaskManager to manage their
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "TaskManager has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 30%.",
                name: "Sarah Johnson",
                role: "Product Manager, Acme Inc",
              },
              {
                quote:
                  "We switched from three different tools to just TaskManager. Now everything is in one place, and our team feels more connected than ever.",
                name: "Mark Wilson",
                role: "CTO, Globex",
              },
              {
                quote:
                  "As a remote team, TaskManager keeps us aligned and focused. The customizable workflows have been a game-changer for our processes.",
                name: "Elena Rodriguez",
                role: "Team Lead, Stark Industries",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
              PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose the plan that works best for your team. All plans include a
              14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">
                Perfect for individuals and small teams
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Up to 3 projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Basic task management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>1GB storage</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-black rounded-xl p-8 hover:shadow-sm transition-all relative">
              <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">
                For growing teams and organizations
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$12</span>
                <span className="text-gray-500">/user/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Custom workflows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>10GB storage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Start free trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-sm transition-all">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                For large organizations with complex needs
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-gray-500"></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>SAML SSO</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Advanced security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact sales
              </button>
            </div>
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
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold">TaskManager</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="#features"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} TaskManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}