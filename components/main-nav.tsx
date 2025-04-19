"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pill, Users, Briefcase, Bell, Search, Settings, LogOut, User } from "lucide-react"
import { applicantData, recruiterData } from "@/lib/sample-data"
import { MobileNav } from "./mobile-nav"

export function MainNav() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const role = searchParams?.get("role") || "applicant"

  // Determine if we're on a logged-in page
  const isLoggedIn = pathname !== "/" && pathname !== "/login" && pathname !== "/register"

  // Get user data based on role
  const userData = role === "applicant" ? applicantData : recruiterData

  if (!isLoggedIn) {
    // Public navigation for homepage, login, register
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Pill className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-700">PharmConnect</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/feed" className="text-sm font-medium hover:text-emerald-600">
              Feed
            </Link>
            <Link href="/jobs" className="text-sm font-medium hover:text-emerald-600">
              Jobs
            </Link>
            <Link href="/network" className="text-sm font-medium hover:text-emerald-600">
              Network
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-emerald-600">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Join Now</Button>
            </Link>
          </div>
          <MobileNav />
        </div>
      </header>
    )
  }

  // Logged-in navigation with icons
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Pill className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-700">PharmConnect</span>
          </Link>
          <div className="hidden md:flex relative rounded-full bg-gray-100 px-3 py-1.5 w-64">
            <Search className="h-4 w-4 absolute left-3 top-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none pl-7 w-full text-sm"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/feed"
            className={`flex flex-col items-center ${pathname === "/feed" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-700"}`}
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/network"
            className={`flex flex-col items-center ${pathname === "/network" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-700"}`}
          >
            <Users className="h-6 w-6" />
            <span className="text-xs">Network</span>
          </Link>
          <Link
            href="/jobs"
            className={`flex flex-col items-center ${pathname === "/jobs" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-700"}`}
          >
            <Briefcase className="h-6 w-6" />
            <span className="text-xs">Jobs</span>
          </Link>
          <Link
            href="/notifications"
            className={`flex flex-col items-center ${pathname === "/notifications" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-700"}`}
          >
            <Bell className="h-6 w-6" />
            <span className="text-xs">Notifications</span>
          </Link>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col items-center focus:outline-none">
              <Avatar className="h-6 w-6">
                <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs">Me</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{userData.name}</span>
                    <span className="text-xs text-gray-500">{userData.title.split(" at ")[0]}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={`/profile/${role}`}>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/login">
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
