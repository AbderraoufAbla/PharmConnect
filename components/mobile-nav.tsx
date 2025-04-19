"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pill, Users, Briefcase, Bell, Menu, Home, LogOut, Settings, User } from "lucide-react"
import { applicantData, recruiterData } from "@/lib/sample-data"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const role = searchParams?.get("role") || "applicant"

  // Determine if we're on a logged-in page
  const isLoggedIn = pathname !== "/" && pathname !== "/login" && pathname !== "/register"

  // Get user data based on role
  const userData = role === "applicant" ? applicantData : recruiterData

  const handleLinkClick = () => {
    setOpen(false)
  }

  if (!isLoggedIn) {
    // Public navigation for homepage, login, register
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 py-4 border-b">
              <Pill className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold text-emerald-700">PharmConnect</span>
            </div>
            <nav className="flex flex-col gap-4 py-6">
              <Link
                href="/feed"
                className="flex items-center gap-3 px-3 py-2 text-base hover:bg-emerald-50 rounded-md"
                onClick={handleLinkClick}
              >
                <Home className="h-5 w-5 text-emerald-600" />
                Feed
              </Link>
              <Link
                href="/jobs"
                className="flex items-center gap-3 px-3 py-2 text-base hover:bg-emerald-50 rounded-md"
                onClick={handleLinkClick}
              >
                <Briefcase className="h-5 w-5 text-emerald-600" />
                Jobs
              </Link>
              <Link
                href="/network"
                className="flex items-center gap-3 px-3 py-2 text-base hover:bg-emerald-50 rounded-md"
                onClick={handleLinkClick}
              >
                <Users className="h-5 w-5 text-emerald-600" />
                Network
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-3 px-3 py-2 text-base hover:bg-emerald-50 rounded-md"
                onClick={handleLinkClick}
              >
                <Bell className="h-5 w-5 text-emerald-600" />
                About
              </Link>
            </nav>
            <div className="mt-auto border-t pt-4 flex flex-col gap-3">
              <Link href="/login" onClick={handleLinkClick}>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Sign In
                </Button>
              </Link>
              <Link href="/register" onClick={handleLinkClick}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Join Now</Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Logged-in navigation with icons
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 py-4 border-b">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{userData.name}</div>
                    <div className="text-sm text-gray-500">{userData.title.split(" at ")[0]}</div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link href={`/profile/${role}`} onClick={handleLinkClick}>
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/settings" onClick={handleLinkClick}>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/login" onClick={handleLinkClick}>
                  <DropdownMenuItem className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <nav className="flex flex-col gap-1 py-6">
            <Link
              href="/feed"
              className={`flex items-center gap-3 px-3 py-3 text-base hover:bg-emerald-50 rounded-md ${pathname === "/feed" ? "bg-emerald-50 text-emerald-700 font-medium" : ""}`}
              onClick={handleLinkClick}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/network"
              className={`flex items-center gap-3 px-3 py-3 text-base hover:bg-emerald-50 rounded-md ${pathname === "/network" ? "bg-emerald-50 text-emerald-700 font-medium" : ""}`}
              onClick={handleLinkClick}
            >
              <Users className="h-5 w-5" />
              Network
            </Link>
            <Link
              href="/jobs"
              className={`flex items-center gap-3 px-3 py-3 text-base hover:bg-emerald-50 rounded-md ${pathname === "/jobs" ? "bg-emerald-50 text-emerald-700 font-medium" : ""}`}
              onClick={handleLinkClick}
            >
              <Briefcase className="h-5 w-5" />
              Jobs
            </Link>
            <Link
              href="/notifications"
              className={`flex items-center gap-3 px-3 py-3 text-base hover:bg-emerald-50 rounded-md ${pathname === "/notifications" ? "bg-emerald-50 text-emerald-700 font-medium" : ""}`}
              onClick={handleLinkClick}
            >
              <Bell className="h-5 w-5" />
              Notifications
            </Link>
          </nav>
          <div className="mt-auto border-t pt-4">
            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-3 text-base text-red-600 hover:bg-red-50 rounded-md"
              onClick={handleLinkClick}
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
