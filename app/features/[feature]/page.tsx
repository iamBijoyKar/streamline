"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Code, Database, LineChart, MessageSquare, Shield, Zap } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Feature data
const features = {
  security: {
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption, two-factor authentication, and regular security audits to keep your data safe.",
    icon: <Shield className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=Security+Feature",
    benefits: [
      "End-to-end encryption for all data",
      "Two-factor authentication",
      "Regular security audits",
      "Role-based access controls",
      "Compliance with industry standards",
    ],
    details: [
      {
        title: "End-to-End Encryption",
        description:
          "All data is encrypted both in transit and at rest using AES-256 encryption, ensuring that your sensitive information remains secure at all times.",
        image: "/placeholder.svg?height=300&width=500&text=Encryption",
      },
      {
        title: "Two-Factor Authentication",
        description:
          "Add an extra layer of security with two-factor authentication, requiring both a password and a verification code to access your account.",
        image: "/placeholder.svg?height=300&width=500&text=2FA",
      },
      {
        title: "Regular Security Audits",
        description:
          "Our platform undergoes regular security audits by third-party security experts to identify and address potential vulnerabilities.",
        image: "/placeholder.svg?height=300&width=500&text=Security+Audits",
      },
    ],
    testimonial: {
      quote:
        "StreamLine's security features give us peace of mind knowing our sensitive data is protected with enterprise-grade encryption and authentication.",
      name: "Michael Chen",
      title: "CTO",
      company: "SecureTech",
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
    },
  },
  performance: {
    title: "Lightning Fast Performance",
    description: "Optimized for speed with global CDN distribution and intelligent caching for instant access.",
    icon: <Zap className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=Performance+Feature",
    benefits: [
      "Global CDN distribution",
      "Intelligent caching",
      "Optimized database queries",
      "Minimal load times",
      "Real-time updates",
    ],
    details: [
      {
        title: "Global CDN Distribution",
        description:
          "Our content delivery network ensures that your data is served from the closest geographic location, reducing latency and improving load times.",
        image: "/placeholder.svg?height=300&width=500&text=Global+CDN",
      },
      {
        title: "Intelligent Caching",
        description:
          "Smart caching mechanisms store frequently accessed data for quick retrieval, significantly improving performance for common operations.",
        image: "/placeholder.svg?height=300&width=500&text=Caching",
      },
      {
        title: "Optimized Infrastructure",
        description:
          "Our infrastructure is built on cutting-edge technology, optimized for speed and reliability even under heavy loads.",
        image: "/placeholder.svg?height=300&width=500&text=Infrastructure",
      },
    ],
    testimonial: {
      quote:
        "The speed of StreamLine is impressive. Our team can access data instantly, which has significantly improved our workflow efficiency.",
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "FastTrack",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
  },
  analytics: {
    title: "Powerful Data Analytics",
    description:
      "Comprehensive dashboards and reports to track performance, identify trends, and make data-driven decisions.",
    icon: <Database className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=Analytics+Feature",
    benefits: ["Real-time dashboards", "Custom reports", "Trend analysis", "Performance metrics", "Data visualization"],
    details: [
      {
        title: "Real-time Dashboards",
        description:
          "Monitor key metrics in real-time with customizable dashboards that provide instant visibility into your business performance.",
        image: "/placeholder.svg?height=300&width=500&text=Dashboards",
      },
      {
        title: "Custom Reports",
        description:
          "Create tailored reports to analyze specific aspects of your business, with flexible filtering and sorting options.",
        image: "/placeholder.svg?height=300&width=500&text=Reports",
      },
      {
        title: "Advanced Data Visualization",
        description:
          "Transform complex data into clear, actionable insights with our advanced visualization tools, including charts, graphs, and heat maps.",
        image: "/placeholder.svg?height=300&width=500&text=Visualization",
      },
    ],
    testimonial: {
      quote:
        "The analytics capabilities in StreamLine have transformed how we make decisions. We now have clear visibility into our performance metrics and can identify trends quickly.",
      name: "Emily Rodriguez",
      title: "Data Analyst",
      company: "InsightCorp",
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
    },
  },
  "api-integration": {
    title: "Flexible API Integration",
    description:
      "Connect with your favorite tools through our robust API and pre-built integrations with popular services.",
    icon: <Code className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=API+Integration+Feature",
    benefits: [
      "RESTful API",
      "Webhook support",
      "Pre-built integrations",
      "Custom integration development",
      "Extensive documentation",
    ],
    details: [
      {
        title: "RESTful API",
        description:
          "Our comprehensive API allows you to integrate StreamLine with your existing systems and automate workflows with ease.",
        image: "/placeholder.svg?height=300&width=500&text=API",
      },
      {
        title: "Pre-built Integrations",
        description:
          "Connect with popular tools and services using our library of pre-built integrations, saving development time and effort.",
        image: "/placeholder.svg?height=300&width=500&text=Integrations",
      },
      {
        title: "Webhook Support",
        description:
          "Set up webhooks to trigger actions in external systems when specific events occur in StreamLine, enabling real-time data synchronization.",
        image: "/placeholder.svg?height=300&width=500&text=Webhooks",
      },
    ],
    testimonial: {
      quote:
        "The API capabilities of StreamLine have allowed us to seamlessly integrate with our existing tech stack, creating a unified workflow across all our systems.",
      name: "David Park",
      title: "Integration Specialist",
      company: "TechConnect",
      avatar: "/placeholder.svg?height=80&width=80&text=DP",
    },
  },
  collaboration: {
    title: "Team Collaboration",
    description: "Real-time collaboration tools, shared workspaces, and seamless communication channels for your team.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=Collaboration+Feature",
    benefits: ["Real-time editing", "Shared workspaces", "In-app messaging", "Task assignment", "Activity tracking"],
    details: [
      {
        title: "Real-time Editing",
        description:
          "Multiple team members can work on the same document simultaneously, with changes reflected in real-time for all users.",
        image: "/placeholder.svg?height=300&width=500&text=Real-time+Editing",
      },
      {
        title: "Shared Workspaces",
        description:
          "Organize your work into shared spaces where team members can collaborate on projects, share resources, and track progress.",
        image: "/placeholder.svg?height=300&width=500&text=Workspaces",
      },
      {
        title: "In-app Communication",
        description:
          "Communicate with your team directly within the platform, reducing the need to switch between different tools and keeping conversations in context.",
        image: "/placeholder.svg?height=300&width=500&text=Communication",
      },
    ],
    testimonial: {
      quote:
        "StreamLine has revolutionized how our team works together. The real-time collaboration features have eliminated silos and improved our communication significantly.",
      name: "Jennifer Lee",
      title: "Team Lead",
      company: "CollabWorks",
      avatar: "/placeholder.svg?height=80&width=80&text=JL",
    },
  },
  scalability: {
    title: "Scalable Infrastructure",
    description: "Built to grow with your business, from startup to enterprise, with no performance compromises.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=500&width=800&text=Scalability+Feature",
    benefits: [
      "Elastic infrastructure",
      "Automatic scaling",
      "High availability",
      "Load balancing",
      "Disaster recovery",
    ],
    details: [
      {
        title: "Elastic Infrastructure",
        description:
          "Our platform automatically scales resources up or down based on your usage, ensuring optimal performance during peak times without unnecessary costs during quiet periods.",
        image: "/placeholder.svg?height=300&width=500&text=Elastic+Infrastructure",
      },
      {
        title: "High Availability",
        description:
          "Built on a distributed architecture with redundancy at every level, ensuring your data and services remain available even in the event of hardware failures.",
        image: "/placeholder.svg?height=300&width=500&text=High+Availability",
      },
      {
        title: "Disaster Recovery",
        description:
          "Comprehensive backup and recovery systems protect your data against loss, with regular backups and rapid restoration capabilities.",
        image: "/placeholder.svg?height=300&width=500&text=Disaster+Recovery",
      },
    ],
    testimonial: {
      quote:
        "As our company grew from 10 to 500 employees, StreamLine scaled seamlessly with us. We never had to worry about outgrowing the platform or experiencing performance issues.",
      name: "Robert Chen",
      title: "COO",
      company: "GrowthScale",
      avatar: "/placeholder.svg?height=80&width=80&text=RC",
    },
  },
}

export default function FeaturePage() {
  const params = useParams()
  const featureSlug = params.feature as string

  // Check if feature exists
  if (!features[featureSlug as keyof typeof features]) {
    notFound()
  }

  const feature = features[featureSlug as keyof typeof features]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StreamLine</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#features" className="text-sm font-medium text-primary">
              Features
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/trial">Start Trial</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="container px-4 md:px-6 relative">
            <Link
              href="/#features"
              className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all features
            </Link>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div className="space-y-4" initial="hidden" animate="visible" variants={fadeIn}>
                <div className="rounded-full bg-primary/10 p-3 w-fit">{feature.icon}</div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{feature.title}</h1>
                <p className="text-xl text-muted-foreground">{feature.description}</p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/trial">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.2 } }}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div className="text-center space-y-4 mb-16" initial="hidden" animate="visible" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how {feature.title} can transform your workflow and boost productivity.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {feature.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border/50"
                  variants={fadeInUp}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg font-medium">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Details Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div className="text-center space-y-4 mb-16" initial="hidden" animate="visible" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into the details of our {feature.title} feature.
              </p>
            </motion.div>

            <div className="space-y-24">
              {feature.details.map((detail, i) => (
                <motion.div
                  key={i}
                  className={`grid gap-8 items-center ${i % 2 === 1 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"}`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className={`space-y-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold">{detail.title}</h3>
                    <p className="text-lg text-muted-foreground">{detail.description}</p>
                  </div>
                  <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={detail.image || "/placeholder.svg"}
                        alt={detail.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto bg-background rounded-xl p-8 shadow-sm border border-border/50"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30" />
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-background">
                    <Image
                      src={feature.testimonial.avatar || "/placeholder.svg"}
                      alt={feature.testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-xl italic mb-6">"{feature.testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold">{feature.testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.testimonial.title}, {feature.testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to experience {feature.title}?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of companies already using StreamLine to boost productivity and scale their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/trial">Start Your Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link href="/pricing">View Pricing Plans</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-muted/30 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <LineChart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Streamline your workflow, boost productivity, and scale your business with our all-in-one platform.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="grid gap-2">
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Roadmap
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="grid gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="grid gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Licenses
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
