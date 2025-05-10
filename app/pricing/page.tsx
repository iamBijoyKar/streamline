"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, LineChart, X } from "lucide-react"

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

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  // Pricing plans data
  const pricingPlans = [
    {
      id: "starter",
      title: "Starter",
      description: 'Perfect for small teams just getting started",mall teams just getting started',
      monthlyPrice: "$29",
      yearlyPrice: "$290",
      features: {
        users: "Up to 5 team members",
        storage: "10GB storage",
        analytics: "Basic analytics",
        support: "Standard support",
        integrations: "5 integrations",
        customization: "Limited customization",
        api: "Basic API access",
        security: "Standard security",
        updates: "Regular updates",
        backups: "Weekly backups",
      },
      cta: "Start Free Trial",
    },
    {
      id: "professional",
      title: "Professional",
      description: "Ideal for growing businesses with more needs",
      monthlyPrice: "$79",
      yearlyPrice: "$790",
      features: {
        users: "Up to 20 team members",
        storage: "50GB storage",
        analytics: "Advanced analytics",
        support: "Priority support",
        integrations: "20 integrations",
        customization: "Advanced customization",
        api: "Full API access",
        security: "Enhanced security",
        updates: "Priority updates",
        backups: "Daily backups",
      },
      cta: "Start Free Trial",
      popular: true,
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "For large organizations with complex requirements",
      monthlyPrice: "$199",
      yearlyPrice: "$1,990",
      features: {
        users: "Unlimited team members",
        storage: "500GB storage",
        analytics: "Enterprise analytics",
        support: "24/7 dedicated support",
        integrations: "Unlimited integrations",
        customization: "Custom development",
        api: "Advanced API with higher rate limits",
        security: "Enterprise-grade security",
        updates: "Early access to new features",
        backups: "Real-time backups",
      },
      cta: "Start Free Trial",
    },
  ]

  // Feature comparison data
  const featureCategories = [
    {
      name: "Core Features",
      features: [
        { name: "Team members", starter: "Up to 5", professional: "Up to 20", enterprise: "Unlimited" },
        { name: "Storage", starter: "10GB", professional: "50GB", enterprise: "500GB" },
        { name: "Projects", starter: "Up to 10", professional: "Up to 50", enterprise: "Unlimited" },
        { name: "API access", starter: "Basic", professional: "Full", enterprise: "Advanced" },
      ],
    },
    {
      name: "Analytics",
      features: [
        { name: "Basic reporting", starter: true, professional: true, enterprise: true },
        { name: "Advanced analytics", starter: false, professional: true, enterprise: true },
        { name: "Custom dashboards", starter: false, professional: true, enterprise: true },
        { name: "Data export", starter: true, professional: true, enterprise: true },
        { name: "AI-powered insights", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      name: "Support",
      features: [
        { name: "Email support", starter: true, professional: true, enterprise: true },
        { name: "Priority support", starter: false, professional: true, enterprise: true },
        { name: "Phone support", starter: false, professional: false, enterprise: true },
        { name: "Dedicated account manager", starter: false, professional: false, enterprise: true },
        { name: "SLA guarantees", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      name: "Security",
      features: [
        { name: "Two-factor authentication", starter: true, professional: true, enterprise: true },
        { name: "SSO integration", starter: false, professional: true, enterprise: true },
        { name: "Advanced permissions", starter: false, professional: true, enterprise: true },
        { name: "Audit logs", starter: false, professional: true, enterprise: true },
        { name: "Custom security policies", starter: false, professional: false, enterprise: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StreamLine</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-primary">
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
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing</h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>

              <div className="flex justify-center">
                <div className="bg-background rounded-lg p-1 inline-flex">
                  <Button
                    variant={billingCycle === "monthly" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setBillingCycle("monthly")}
                    className="rounded-md"
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={billingCycle === "yearly" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setBillingCycle("yearly")}
                    className="rounded-md"
                  >
                    Yearly (Save 20%)
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="grid gap-8 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  id={plan.id}
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
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold">
                        {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>
                    <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href={`/trial?plan=${plan.id}`}>{plan.cta}</Link>
                    </Button>
                    <div className="space-y-3">
                      {Object.entries(plan.features)
                        .slice(0, 6)
                        .map(([key, value], j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div className="text-center space-y-4 mb-16" variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compare Plans</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See which plan is right for your business with our detailed feature comparison.
              </p>
            </motion.div>

            <motion.div
              className="overflow-x-auto"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-muted-foreground w-1/4">Features</th>
                    <th className="p-4 font-medium">Starter</th>
                    <th className="p-4 font-medium bg-primary/5 border-x border-primary/10">Professional</th>
                    <th className="p-4 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, i) => (
                    <>
                      <tr key={`category-${i}`} className="bg-muted/50">
                        <td colSpan={4} className="p-4 font-semibold">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, j) => (
                        <tr key={`feature-${i}-${j}`} className="border-b">
                          <td className="p-4 text-muted-foreground">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )
                            ) : (
                              feature.starter
                            )}
                          </td>
                          <td className="p-4 text-center bg-primary/5 border-x border-primary/10">
                            {typeof feature.professional === "boolean" ? (
                              feature.professional ? (
                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )
                            ) : (
                              feature.professional
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )
                            ) : (
                              feature.enterprise
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div className="text-center space-y-4 mb-16" variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our pricing and plans.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  question: "Can I switch plans later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available and we'll prorate your billing. When downgrading, the changes will take effect at the start of your next billing cycle.",
                },
                {
                  question: "What happens after my free trial?",
                  answer:
                    "After your 14-day free trial ends, your account will automatically switch to your selected plan. You can cancel anytime during the trial if you decide StreamLine isn't right for you, and you won't be charged.",
                },
                {
                  question: "Do you offer discounts for nonprofits or educational institutions?",
                  answer:
                    "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs.",
                },
                {
                  question: "Can I add more users to my plan?",
                  answer:
                    "Yes, you can add additional users to any plan for an extra fee per user. The Starter plan supports up to 5 team members, the Professional plan supports up to 20, and the Enterprise plan includes unlimited users.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we also offer invoicing with net-30 payment terms.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee for your selected plan.",
                },
              ].map((faq, i) => (
                <motion.div key={i} className="rounded-lg border p-6" variants={fadeInUp}>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to get started?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of companies already using StreamLine to boost productivity and scale their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/trial">Start Your Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link href="#">Contact Sales</Link>
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
