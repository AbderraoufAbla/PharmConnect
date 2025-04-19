"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Briefcase, Filter, SlidersHorizontal } from "lucide-react"
import { jobListings } from "@/lib/sample-data"
import { MainNav } from "@/components/main-nav"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(jobListings)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const handleSearch = () => {
    const filtered = jobListings.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLocation = location === "" || job.location.toLowerCase().includes(location.toLowerCase())

      const matchesType = jobType === "" || job.type === jobType

      return matchesSearch && matchesLocation && matchesType
    })

    setFilteredJobs(filtered)
    setFiltersOpen(false)
  }

  // Filters component to be used in both desktop sidebar and mobile sheet
  const FiltersComponent = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Job Type</label>
        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Experience Level</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="entry" />
            <label htmlFor="entry" className="text-sm">
              Entry Level
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mid" />
            <label htmlFor="mid" className="text-sm">
              Mid Level
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="senior" />
            <label htmlFor="senior" className="text-sm">
              Senior Level
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Specialization</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="clinical" />
            <label htmlFor="clinical" className="text-sm">
              Clinical Pharmacy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="retail" />
            <label htmlFor="retail" className="text-sm">
              Retail Pharmacy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hospital" />
            <label htmlFor="hospital" className="text-sm">
              Hospital Pharmacy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="industry" />
            <label htmlFor="industry" className="text-sm">
              Pharmaceutical Industry
            </label>
          </div>
        </div>
      </div>

      <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleSearch}>
        Apply Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />

      <main className="flex-1 container py-4 md:py-6 px-4 md:px-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-2">Find Your Perfect Pharmacy Job</h1>
          <p className="text-gray-600">Discover opportunities tailored for pharmacy professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Desktop Filters */}
          <div className="hidden md:block md:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h2>
              </CardHeader>
              <CardContent>
                <FiltersComponent />
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="col-span-1 md:col-span-3">
            <Card className="mb-4 md:mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search job titles, companies, or keywords"
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Location"
                      className="pl-9"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    {/* Mobile Filters Button */}
                    <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="md:hidden">
                          <SlidersHorizontal className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <div className="py-6">
                          <h2 className="text-lg font-semibold mb-4">Filters</h2>
                          <FiltersComponent />
                        </div>
                      </SheetContent>
                    </Sheet>
                    <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSearch}>
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <Card key={index}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-800">
                            {job.company.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-between items-center border-t mt-4 gap-2">
                      <span className="text-sm text-gray-500">Posted {job.postedTime}</span>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                          variant="outline"
                          className="flex-1 sm:flex-none border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        >
                          Save
                        </Button>
                        <Button className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No jobs found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
