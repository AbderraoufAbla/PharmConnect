import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Pill, Building, Users, Briefcase } from "lucide-react"
import { Suspense } from "react"
import { MainNavWrapper } from "@/components/main-nav-wrapper"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<NavFallback />}>
        <MainNavWrapper />
      </Suspense>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
          <div className="container grid gap-8 md:grid-cols-2 items-center px-4 md:px-6">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800">
                Connect with Pharmacy Professionals Worldwide
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                PharmConnect is the professional network exclusively for pharmacists, pharmacy technicians, and
                pharmaceutical industry professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Join Now
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg border border-emerald-100 mt-4 md:mt-0">
              <Image
                src="/images/pharmacy-team.png"
                alt="Pharmacy professionals in a modern pharmacy"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-emerald-800">
              Why Join PharmConnect?
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md border border-emerald-100">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <Building className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-700">Industry Connections</h3>
                <p className="text-gray-600">
                  Connect with pharmacies, hospitals, and pharmaceutical companies looking for qualified professionals.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md border border-emerald-100">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-700">Skill Verification</h3>
                <p className="text-gray-600">
                  Get your skills verified by previous employers and stand out to potential recruiters.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md border border-emerald-100">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-700">Exclusive Opportunities</h3>
                <p className="text-gray-600">
                  Access pharmacy-specific job postings and career advancement opportunities not found elsewhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-emerald-50">
          <div className="container text-center px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-emerald-800">
              Ready to advance your pharmacy career?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of pharmacy professionals who are already connecting, sharing knowledge, and finding new
              opportunities.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Pill className="h-5 w-5 text-emerald-600" />
              <span className="text-lg font-bold text-emerald-700">PharmConnect</span>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} PharmConnect. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavFallback() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Pill className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-emerald-700">PharmConnect</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-9 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-9 w-20 bg-emerald-200 rounded animate-pulse"></div>
        </div>
      </div>
    </header>
  )
}
