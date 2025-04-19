"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Edit } from "lucide-react"
import { applicantData, recruiterData } from "@/lib/sample-data"
import { MainNav } from "@/components/main-nav"

export default function ProfilePage() {
  const params = useParams()
  const role = params.role as string
  const [userData, setUserData] = useState(role === "applicant" ? applicantData : recruiterData)
  const [activeTab, setActiveTab] = useState("about")

  useEffect(() => {
    // Update user data when role changes
    setUserData(role === "applicant" ? applicantData : recruiterData)
  }, [role])

  const handleVerifySkill = (skillIndex: number) => {
    if (role === "applicant" && userData === applicantData) {
      // This would be a server action in a real app
      const updatedSkills = [...userData.skills]
      updatedSkills[skillIndex] = {
        ...updatedSkills[skillIndex],
        verified: true,
        verifiedBy: "Sarah Johnson, PharmD",
      }

      setUserData({
        ...userData,
        skills: updatedSkills,
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />

      <main className="flex-1 container py-4 md:py-6 px-4 md:px-6">
        {/* Profile Header */}
        <Card className="mb-4 md:mb-6">
          <CardHeader className="relative p-0">
            <div className="h-24 md:h-32 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-t-lg" />
            <div className="absolute top-16 md:top-20 left-4 md:left-8">
              <Avatar className="h-16 w-16 md:h-24 md:w-24 border-4 border-white">
                <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.name} />
                <AvatarFallback className="bg-emerald-200 text-emerald-800 text-xl md:text-2xl">
                  {userData.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </CardHeader>
          <CardContent className="pt-12 md:pt-16 pb-4 md:pb-6 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">{userData.name}</h1>
                <p className="text-gray-600">{userData.title}</p>
                <p className="text-sm text-gray-500 mt-1">{userData.location}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {userData.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-4 md:mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education" className="hidden md:block">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="hidden md:block">
              Skills
            </TabsTrigger>
            <TabsTrigger value="more" className="md:hidden">
              More
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">About</h2>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{userData.about}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Work Experience</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {userData.experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <Avatar className="h-10 w-10 md:h-12 md:w-12">
                        <AvatarImage src={exp.companyLogo || "/placeholder.svg"} alt={exp.company} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-800">
                          {exp.company.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.date}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                      <p className="mt-2 text-sm md:text-base">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Education</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {userData.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <Avatar className="h-10 w-10 md:h-12 md:w-12">
                        <AvatarImage src={edu.schoolLogo || "/placeholder.svg"} alt={edu.school} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-800">
                          {edu.school.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.date}</p>
                      {edu.description && <p className="mt-2 text-sm md:text-base">{edu.description}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Skills</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.skills.map((skill, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{skill.name}</h3>
                        {role === "recruiter" && !skill.verified && (
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => handleVerifySkill(index)}
                          >
                            Verify
                          </Button>
                        )}
                        {skill.verified && (
                          <div className="flex items-center text-emerald-600">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            <span className="text-xs">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                      {skill.verified && skill.verifiedBy && (
                        <p className="text-xs text-gray-500 mt-2">Verified by {skill.verifiedBy}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mobile-only tab for Education and Skills */}
          <TabsContent value="more" className="space-y-4 md:hidden">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Education</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {userData.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={edu.schoolLogo || "/placeholder.svg"} alt={edu.school} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-800">
                          {edu.school.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.date}</p>
                      {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Skills</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {userData.skills.map((skill, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{skill.name}</h3>
                        {role === "recruiter" && !skill.verified && (
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => handleVerifySkill(index)}
                          >
                            Verify
                          </Button>
                        )}
                        {skill.verified && (
                          <div className="flex items-center text-emerald-600">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            <span className="text-xs">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                      {skill.verified && skill.verifiedBy && (
                        <p className="text-xs text-gray-500 mt-2">Verified by {skill.verifiedBy}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
