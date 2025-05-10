"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle, LineChart } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function TrialPage() {
  const searchParams = useSearchParams()
  const planFromUrl = searchParams.get("plan")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    employees: "",
    plan: planFromUrl || "professional",
    agreeTerms: false,
    agreePrivacy: false,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  const plans = [
    {
      id: "starter",
      title: "Starter",
      price: "$29",
      description: "Perfect for small teams just getting started",
      features: ["Up to 5 team members", "10GB storage", "Basic analytics"],
    },
    {
      id: "professional",
      title: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with more needs",
      features: ["Up to 20 team members", "50GB storage", "Advanced analytics", "Priority support"],
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: "$199",
      description: "For large organizations with complex requirements",
      features: ["Unlimited team members", "500GB storage", "Enterprise analytics", "24/7 dedicated support"],
    },
  ]

  if (formSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container flex h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <LineChart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">StreamLine</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 py-16 md:py-24 lg:py-32">
          <motion.div
            className="container flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="rounded-full bg-primary/10 p-3 mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Signing Up!</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              We've sent a confirmation email to <span className="font-medium">{formData.email}</span>. Please check
              your inbox to activate your account and start your free trial.
            </p>
            <div className="space-y-4 max-w-md w-full">
              <Button size="lg" className="w-full" asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StreamLine</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <motion.div className="flex-1" initial="hidden" animate="visible" variants={fadeIn}>
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to homepage
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your Free Trial</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience all the features of StreamLine for 14 days, no credit card required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input id="employees" name="employees" value={formData.employees} onChange={handleChange} required />
                </div>

                <div className="space-y-3">
                  <Label>Select a Plan</Label>
                  <RadioGroup
                    value={formData.plan}
                    onValueChange={handleRadioChange}
                    className="grid gap-4 sm:grid-cols-3"
                  >
                    {plans.map((plan) => (
                      <div
                        key={plan.id}
                        className={`flex flex-col p-4 rounded-lg border ${
                          formData.plan === plan.id ? "border-primary bg-primary/5" : "border-border"
                        }`}
                      >
                        <div className="flex items-start">
                          <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                          <div className="ml-3">
                            <Label htmlFor={plan.id} className="text-base font-medium cursor-pointer">
                              {plan.title}
                            </Label>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                            <p className="text-lg font-bold mt-1">
                              {plan.price}
                              <span className="text-sm font-normal text-muted-foreground">/month</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="agreeTerms" className="ml-3 text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-start">
                    <Checkbox
                      id="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onCheckedChange={(checked) => handleCheckboxChange("agreePrivacy", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="agreePrivacy" className="ml-3 text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Start Your Free Trial
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </motion.div>

            <motion.div
              className="flex-1 md:max-w-sm lg:max-w-md"
              initial="hidden"
              animate="visible"
              variants={{ ...fadeIn, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl overflow-hidden border shadow-sm">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">What's included in your trial</h2>
                    <ul className="space-y-3">
                      {[
                        "Full access to all features",
                        "Unlimited projects",
                        "Team collaboration tools",
                        "Analytics and reporting",
                        "Integration capabilities",
                        "Priority support",
                        "Customization options",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-6 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Duration</span>
                      <span>14 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Payment</span>
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-6">
                  <h3 className="font-medium mb-3">Need help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our team is available to answer any questions you might have about StreamLine.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
