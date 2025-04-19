"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { UserPlus } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function NetworkPage() {
  const [activeTab, setActiveTab] = useState("connections")
  const [searchTerm, setSearchTerm] = useState("")

  // Sample connections data
  const connections = [
    {
      id: 1,
      name: "Dr. Fatima Zahra",
      title: "Hospital Pharmacy Director at National Medical Center",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 12,
    },
    {
      id: 2,
      name: "Mohammed Larbi",
      title: "Clinical Pharmacist at University Hospital",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 8,
    },
    {
      id: 3,
      name: "Leila Benhamida",
      title: "Pharmacy Student at University of Algiers",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 5,
    },
  ]

  // Sample pending connections
  const pendingConnections = [
    {
      id: 4,
      name: "Karim Hadj",
      title: "Clinical Director at Central Hospital",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 15,
      sentDate: "2 days ago",
    },
    {
      id: 5,
      name: "Amina Bouaziz",
      title: "Pharmaceutical Research Scientist",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 7,
      sentDate: "1 week ago",
    },
  ]

  // Sample connection suggestions
  const suggestions = [
    {
      id: 6,
      name: "Nadia Rahal",
      title: "Pharmacy Director at MedPharma Group",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 18,
    },
    {
      id: 7,
      name: "Youcef Benmoussa",
      title: "Pharmaceutical Quality Assurance Manager",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 10,
    },
    {
      id: 8,
      name: "Samira Khelifi",
      title: "Clinical Pharmacist - Oncology",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 6,
    },
    {
      id: 9,
      name: "Omar Benali",
      title: "Pharmacy Educator at University of Algiers",
      image: "/placeholder.svg?height=100&width=100",
      mutualConnections: 14,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />

      <main className="flex-1 container py-4 md:py-6 px-4 md:px-6">
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl font-bold text-emerald-800">My Network</h1>
          <p className="text-gray-600">Manage your professional connections</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 md:mb-6">
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {connections.map((connection) => (
                <Card key={connection.id}>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={connection.image || "/placeholder.svg"} alt={connection.name} />
                        <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{connection.name}</h3>
                        <p className="text-sm text-gray-600">{connection.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{connection.mutualConnections} mutual connections</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="p-4 pt-2 flex flex-col sm:flex-row justify-between gap-2">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto text-gray-600">
                      Message
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingConnections.map((connection) => (
                <Card key={connection.id}>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={connection.image || "/placeholder.svg"} alt={connection.name} />
                        <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{connection.name}</h3>
                        <p className="text-sm text-gray-600">{connection.title}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <p className="text-xs text-gray-500">{connection.mutualConnections} mutual connections</p>
                          <Badge variant="outline" className="text-xs">
                            Sent {connection.sentDate}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="p-4 pt-2 flex flex-col sm:flex-row justify-between gap-2">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto text-gray-600">
                      Withdraw
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion) => (
                <Card key={suggestion.id}>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={suggestion.image || "/placeholder.svg"} alt={suggestion.name} />
                        <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{suggestion.name}</h3>
                        <p className="text-sm text-gray-600">{suggestion.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{suggestion.mutualConnections} mutual connections</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="p-4 pt-2 flex flex-col sm:flex-row justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      View Profile
                    </Button>
                    <Button size="sm" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
