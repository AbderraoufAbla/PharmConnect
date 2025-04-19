"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import { applicantData, recruiterData, feedPosts, jobListings } from "@/lib/sample-data"
import { MainNav } from "@/components/main-nav"

export default function FeedPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "applicant"
  const [userData, setUserData] = useState(role === "applicant" ? applicantData : recruiterData)
  const [activeTab, setActiveTab] = useState("feed")

  useEffect(() => {
    // Update user data when role changes
    setUserData(role === "applicant" ? applicantData : recruiterData)
  }, [role])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />

      <main className="flex-1 container py-4 md:py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Profile Card - Hidden on mobile, shown at top on tablet/desktop */}
          <div className="hidden md:block md:col-span-1 order-1">
            <Card>
              <CardHeader className="relative p-0">
                <div className="h-24 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-t-lg" />
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback className="bg-emerald-200 text-emerald-800 text-xl">
                      {userData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="pt-12 pb-4 text-center">
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-500">{userData.title}</p>
                <p className="text-sm text-gray-500 mt-2">{userData.location}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-2 border-t px-6 py-4">
                <Link href={`/profile/${role}`}>
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    View Profile
                  </Button>
                </Link>
                {role === "recruiter" && (
                  <Link href="/post-job">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Post a Job</Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 order-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 md:mb-6">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-4 md:space-y-6">
                {/* Post Creation */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                        <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-200">
                        Start a post...
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Posts */}
                {feedPosts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{post.author}</h3>
                          <p className="text-sm text-gray-500">{post.authorTitle}</p>
                          <p className="text-xs text-gray-400">{post.timePosted}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-4">{post.content}</p>
                      {post.image && (
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post content"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover max-h-96"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-2 border-t flex justify-between">
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Like</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Comment</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Share</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="jobs" className="space-y-4 md:space-y-6">
                {jobListings.map((job, index) => (
                  <Card key={index}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-800">
                            {job.company.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{job.title}</h3>
                          <p className="text-sm">{job.company}</p>
                          <p className="text-xs text-gray-500">
                            {job.location} • {job.type}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-gray-600">{job.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                      <span className="text-xs text-gray-500">Posted {job.postedTime}</span>
                      <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Mobile Profile Card - Shown at bottom on mobile only */}
          <div className="md:hidden order-3 mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback className="bg-emerald-200 text-emerald-800">
                      {userData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold">{userData.name}</h2>
                    <p className="text-sm text-gray-500">{userData.title}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link href={`/profile/${role}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      View Profile
                    </Button>
                  </Link>
                  {role === "recruiter" && (
                    <Link href="/post-job" className="flex-1">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Post Job</Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
