"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Database,
  LineChart,
  Menu,
  MessageSquare,
  Play,
  Shield,
  X,
  Zap,
} from "lucide-react"
import VideoModal from "@/components/video-modal"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

import googleSvg from "@/assets/google.svg"
import digitalOceanSvg from "@/assets/digital-ocean.svg"
import bmwSvg from "@/assets/bmw.svg"
import macdonaldSvg from "@/assets/mcdonald.svg"
import microsoftSvg from "@/assets/microsoft.svg"
import productivitySvg from "@/assets/productivity.svg"
import collaborationSvg from "@/assets/collaboration.svg"
import reduceCostSvg from "@/assets/reduce-cost.svg"

// Animation variants
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

export default function LandingPage() {
  const { toast } = useToast()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Handle scroll event for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "StreamLine has transformed how we manage our projects. The intuitive interface and powerful features have boosted our productivity by 40%.",
      name: "Michael Chen",
      title: "CEO",
      company: "TechStart",
      avatar: "/darshan-patel.jpg?height=80&width=80&text=SJ",
    },
    {
      quote:
        "The analytics capabilities are outstanding. We can now make data-driven decisions faster than ever before, giving us a competitive edge.",
      name: "Sarah Johnson",

      title: "CTO",
      company: "GrowthLabs",
      avatar: "/jake-nackos.jpg?height=80&width=80&text=MC",
    },
    {
      quote:
        "The customer support is exceptional. Whenever we've had questions, the team has been responsive and helpful. Highly recommend!",
      name: "Jonas Kakaroto",
      title: "Operations Manager",
      company: "ScaleUp",
      avatar: "/jonas-kakaroto.jpg?height=80&width=80&text=ER",
    },
    {
      quote:
        "We've cut our workflow time in half since implementing StreamLine. The automation features are game-changing for our team.",
      name: "David Park",
      title: "Product Manager",
      company: "InnovateX",
      avatar: "/leilani-angel.jpg?height=80&width=80&text=DP",
    },
  ]

  // Features data
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise-Grade Security",
      description:
        "Bank-level encryption, two-factor authentication, and regular security audits to keep your data safe.",
      slug: "security",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with global CDN distribution and intelligent caching for instant access.",
      slug: "performance",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Powerful Data Analytics",
      description:
        "Comprehensive dashboards and reports to track performance, identify trends, and make data-driven decisions.",
      slug: "analytics",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Flexible API Integration",
      description:
        "Connect with your favorite tools through our robust API and pre-built integrations with popular services.",
      slug: "api-integration",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools, shared workspaces, and seamless communication channels for your team.",
      slug: "collaboration",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Scalable Infrastructure",
      description: "Built to grow with your business, from startup to enterprise, with no performance compromises.",
      slug: "scalability",
    },
  ]

  // Pricing plans data
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small teams just getting started",
      features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Standard support", "Core features"],
      cta: "Start Free Trial",
      popular: false,
      slug: "starter",
    },
    {
      title: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Up to 20 team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "All core features",
        "Advanced integrations",
        "Custom workflows",
      ],
      cta: "Start Free Trial",
      popular: true,
      slug: "professional",
    },
    {
      title: "Enterprise",
      price: "$199",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "500GB storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "All features",
        "Custom development",
        "SLA guarantees",
        "Dedicated account manager",
      ],
      cta: "Start Free Trial",
      popular: false,
      slug: "enterprise",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    toast({
      title: "This is a UI showcase site",
      description: "This website is a showcase site and it is not a real product. ",
    })
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Video Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      <Toaster />
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <LineChart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block">
              Sign In
            </Link>
            <Button className="hidden md:flex" asChild>
              <Link href="/trial">
                Start Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col p-6"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <LineChart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="#features"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/pricing"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Link href="#" className="text-center font-medium hover:text-primary transition-colors">
              Sign In
            </Link>
            <Button className="w-full" asChild>
              <Link href="/trial">
                Start Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full py-20 md:py-28  2xl:py-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-8"
              variants={fadeIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Introducing StreamLine
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Streamline Your Workflow <span className="text-primary">Like Never Before</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Boost productivity, reduce overhead, and focus on what matters most with our all-in-one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/trial">
                    Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => setVideoModalOpen(true)}>
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-3">Trusted by innovative companies</p>
                <div className="flex flex-wrap justify-center gap-8 opacity-70">
                  <Image src={googleSvg} alt="Google" width={30} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  <Image src={microsoftSvg} alt="Google" width={30} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  <Image src={bmwSvg} alt="Google" width={30} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  <Image src={macdonaldSvg} alt="Google" width={30} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  <Image src={digitalOceanSvg} alt="Google" width={30} height={30} className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              variants={fadeIn}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Everything you need to scale your business
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform provides all the tools you need to manage your workflow, collaborate with your team, and
                grow your business.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                  variants={fadeInUp}
                >
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/features/${feature.slug}`}>
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" ref={benefitsRef} className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              variants={fadeIn}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why choose StreamLine?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages that thousands of companies are already enjoying.
              </p>
            </motion.div>

            <div className="space-y-24">
              {[
                {
                  title: "Boost Productivity by 40%",
                  description:
                    "Automate repetitive tasks, streamline workflows, and eliminate bottlenecks to help your team focus on what matters most.",
                  image: productivitySvg,
                  stats: [
                    { value: "40%", label: "Productivity Increase" },
                    { value: "25+", label: "Hours Saved Weekly" },
                    { value: "3x", label: "Faster Deployment" },
                  ],
                  reverse: false,
                },
                {
                  title: "Reduce Operational Costs",
                  description:
                    "Consolidate your tech stack, eliminate redundant tools, and optimize resource allocation to significantly cut operational expenses.",
                  image: reduceCostSvg,
                  stats: [
                    { value: "30%", label: "Cost Reduction" },
                    { value: "60%", label: "Less Tool Overlap" },
                    { value: "$10k+", label: "Annual Savings" },
                  ],
                  reverse: true,
                },
                {
                  title: "Enhance Team Collaboration",
                  description:
                    "Break down silos with real-time collaboration features, centralized communication, and transparent project management.",
                  image: collaborationSvg,
                  stats: [
                    { value: "85%", label: "Improved Clarity" },
                    { value: "50%", label: "Fewer Meetings" },
                    { value: "100%", label: "Team Visibility" },
                  ],
                  reverse: false,
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  className={`grid gap-8 items-center ${benefit.reverse ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"}`}
                  variants={fadeIn}
                  initial="hidden"
                  animate={benefitsInView ? "visible" : "hidden"}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className={`space-y-6 ${benefit.reverse ? "md:order-2" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground">{benefit.description}</p>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {benefit.stats.map((stat, j) => (
                        <div key={j} className="space-y-2">
                          <div className="text-3xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-4">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`${benefit.reverse ? "md:order-1" : ""}`}>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="w-full py-20 md:py-32 bg-muted/50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              variants={fadeIn}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by thousands of companies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers have to say about StreamLine.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeIn}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
            >
              <div className="overflow-hidden relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <div className="max-w-3xl mx-auto bg-background rounded-xl p-8 shadow-sm border border-border/50">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative mb-6">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30" />
                            <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-background">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeTestimonial ? "bg-primary" : "bg-primary/20"
                    }`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" ref={pricingRef} className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              variants={fadeIn}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
            >
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    plan.popular
                      ? "border-2 border-primary shadow-lg shadow-primary/10"
                      : "border border-border/50 shadow-sm"
                  }`}
                  variants={fadeInUp}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href={`/trial?plan=${plan.slug}`}>{plan.cta}</Link>
                    </Button>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="w-full p-0" asChild>
                      <Link href={`/pricing#${plan.slug}`}>
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  Compare All Plans <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" ref={faqRef} className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center space-y-4 mb-16"
              variants={fadeIn}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about StreamLine.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              variants={fadeIn}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the 14-day free trial work?",
                    answer:
                      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime. At the end of the trial, you can choose to subscribe or your account will automatically downgrade to our limited free tier.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available and we'll prorate your billing. When downgrading, the changes will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "Is there a limit to how many users I can add?",
                    answer:
                      "The Starter plan supports up to 5 team members, the Professional plan supports up to 20 team members, and the Enterprise plan supports unlimited team members. If you need more users on the Starter or Professional plans, you can add additional seats for an extra fee.",
                  },
                  {
                    question: "How secure is my data with StreamLine?",
                    answer:
                      "We take security very seriously. StreamLine uses bank-level encryption for all data, both in transit and at rest. We implement two-factor authentication, regular security audits, and follow industry best practices for data protection. Our platform is SOC 2 compliant and we offer detailed security documentation upon request.",
                  },
                  {
                    question: "Do you offer custom integrations?",
                    answer:
                      "Yes, we offer custom integrations with a wide range of tools and services. The Professional plan includes our most popular integrations, while the Enterprise plan includes custom integration development to connect with your specific tech stack and workflows.",
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer:
                      "All plans include access to our help center and community forum. The Starter plan includes standard email support with a 24-hour response time. The Professional plan includes priority support with a 4-hour response time during business hours. The Enterprise plan includes 24/7 dedicated support with a 1-hour response time and a dedicated account manager.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section ref={ctaRef} className="w-full py-20 md:py-32 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-8"
              variants={fadeIn}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to streamline your workflow?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of companies already using StreamLine to boost productivity and scale their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/trial">
                    Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => setVideoModalOpen(true)}>
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">YouTube</span>
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
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="grid gap-2">
                <Link
                  href="#features"
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
