"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pill } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login authentication
    setTimeout(() => {
      if (
        (email === "applicant@pharmacy.dz" && password === "password123") ||
        (email === "recruiter@pharmacy.dz" && password === "password123")
      ) {
        toast({
          title: "Login successful",
          description: "Welcome back to PharmConnect!",
        })

        // Redirect based on user role
        if (email === "applicant@pharmacy.dz") {
          router.push("/feed?role=applicant")
        } else {
          router.push("/feed?role=recruiter")
        }
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        })
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <Pill className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-emerald-700">PharmConnect</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="mx-auto w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md border border-emerald-100">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-emerald-800">Sign In</h1>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <p className="text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-emerald-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
          <div className="pt-4 text-center text-xs text-gray-500 border-t">
            <p>Demo Credentials:</p>
            <p>Applicant: applicant@pharmacy.dz / password123</p>
            <p>Recruiter: recruiter@pharmacy.dz / password123</p>
          </div>
        </div>
      </div>
    </div>
  )
}
