"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, LineChart } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function DemoPage() {
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
        <div className="container px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to homepage
          </Link>

          <motion.div className="max-w-4xl mx-auto space-y-8" initial="hidden" animate="visible" variants={fadeIn}>
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">StreamLine Product Demo</h1>
              <p className="text-xl text-muted-foreground">
                Watch our comprehensive demo to see how StreamLine can transform your workflow.
              </p>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="StreamLine Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-bold">Key Features Highlighted in the Demo</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Enterprise-Grade Security",
                    description:
                      "See how our security features protect your sensitive data with end-to-end encryption and two-factor authentication.",
                  },
                  {
                    title: "Lightning Fast Performance",
                    description:
                      "Experience the speed of our platform with global CDN distribution and intelligent caching for instant access.",
                  },
                  {
                    title: "Powerful Data Analytics",
                    description:
                      "Discover how our analytics tools provide comprehensive dashboards and reports for data-driven decisions.",
                  },
                  {
                    title: "Team Collaboration",
                    description:
                      "Learn how our collaboration features enable real-time editing, shared workspaces, and seamless communication.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="rounded-lg border p-6">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/trial">Start Your Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <LineChart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
