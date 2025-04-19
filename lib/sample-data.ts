// Sample data for the PharmConnect application

// Applicant profile data
export const applicantData = {
  name: "Ahmed Benali",
  title: "Clinical Pharmacist",
  location: "Algiers, Algeria",
  profileImage: "/images/applicant-profile.png",
  tags: ["Clinical Pharmacy", "Hospital Pharmacy", "Medication Safety"],
  about:
    "Dedicated clinical pharmacist with 5+ years of experience in hospital settings. Specialized in medication therapy management and patient counseling. Passionate about improving medication safety and patient outcomes through evidence-based practice.\n\nStrong background in antimicrobial stewardship and chronic disease management. Seeking opportunities to leverage my clinical expertise in a collaborative healthcare environment.",
  experience: [
    {
      title: "Clinical Pharmacist",
      company: "Mustapha Pacha University Hospital",
      companyLogo: "/placeholder.svg?height=100&width=100",
      date: "Jan 2020 - Present",
      location: "Algiers, Algeria",
      description:
        "• Provide comprehensive medication therapy management for patients in the internal medicine department\n• Collaborate with physicians to optimize drug therapy and minimize adverse effects\n• Implement antimicrobial stewardship protocols resulting in 15% reduction in inappropriate antibiotic use\n• Conduct medication reconciliation for all new admissions to prevent medication errors",
    },
    {
      title: "Staff Pharmacist",
      company: "El-Kettar Hospital",
      companyLogo: "/placeholder.svg?height=100&width=100",
      date: "Jun 2017 - Dec 2019",
      location: "Algiers, Algeria",
      description:
        "• Managed pharmacy inventory and medication dispensing for a 150-bed hospital\n• Provided drug information services to healthcare professionals\n• Participated in multidisciplinary rounds to optimize patient care\n• Supervised pharmacy interns and technicians",
    },
  ],
  education: [
    {
      degree: "Doctor of Pharmacy (PharmD)",
      school: "University of Algiers Faculty of Pharmacy",
      schoolLogo: "/placeholder.svg?height=100&width=100",
      date: "2012 - 2017",
      description:
        "Graduated with honors. Thesis: 'Impact of Pharmacist Interventions on Medication Safety in Hospitalized Patients'",
    },
    {
      degree: "Residency in Clinical Pharmacy",
      school: "Mustapha Pacha University Hospital",
      schoolLogo: "/placeholder.svg?height=100&width=100",
      date: "2017 - 2019",
      description: "Specialized in internal medicine and critical care pharmacy",
    },
  ],
  skills: [
    {
      name: "Medication Therapy Management",
      description: "Expert in comprehensive medication reviews and therapy optimization",
      verified: true,
      verifiedBy: "Dr. Karim Hadj, Clinical Director",
    },
    {
      name: "Antimicrobial Stewardship",
      description: "Experienced in implementing protocols to optimize antibiotic use",
      verified: true,
      verifiedBy: "Prof. Leila Meziane, Infectious Disease Specialist",
    },
    {
      name: "Patient Counseling",
      description: "Skilled in educating patients about medications and adherence",
      verified: false,
    },
    {
      name: "Drug Information Services",
      description: "Proficient in researching and providing evidence-based drug information",
      verified: false,
    },
    {
      name: "Pharmacokinetics",
      description: "Experienced in dosing adjustments based on pharmacokinetic principles",
      verified: true,
      verifiedBy: "Dr. Karim Hadj, Clinical Director",
    },
    {
      name: "Medication Safety",
      description: "Skilled in identifying and preventing medication errors",
      verified: false,
    },
  ],
}

// Recruiter profile data
export const recruiterData = {
  name: "Sarah Johnson, PharmD",
  title: "Pharmacy Recruitment Manager at MedPharma Group",
  location: "Algiers, Algeria",
  profileImage: "/images/recruiter-profile.png",
  tags: ["Pharmacy Recruitment", "Talent Acquisition", "Healthcare HR"],
  about:
    "Experienced pharmacy recruitment manager with a background in clinical pharmacy. Passionate about connecting talented pharmacy professionals with opportunities that match their skills and career goals.\n\nAs a former clinical pharmacist, I understand the unique challenges and requirements of the pharmacy profession, allowing me to better identify qualified candidates for healthcare organizations.",
  experience: [
    {
      title: "Pharmacy Recruitment Manager",
      company: "MedPharma Group",
      companyLogo: "/placeholder.svg?height=100&width=100",
      date: "Mar 2019 - Present",
      location: "Algiers, Algeria",
      description:
        "• Lead recruitment efforts for pharmacist positions across 12 hospitals and 30 retail pharmacies\n• Develop and implement recruitment strategies to attract top pharmacy talent\n• Collaborate with pharmacy directors to understand staffing needs and requirements\n• Conduct preliminary interviews and assessments of pharmacy candidates\n• Reduced time-to-hire by 25% through streamlined recruitment processes",
    },
    {
      title: "Clinical Pharmacist",
      company: "Central Hospital of Algiers",
      companyLogo: "/placeholder.svg?height=100&width=100",
      date: "Jul 2015 - Feb 2019",
      location: "Algiers, Algeria",
      description:
        "• Provided clinical pharmacy services in the internal medicine department\n• Participated in multidisciplinary healthcare teams\n• Mentored pharmacy students and new pharmacists\n• Developed training programs for pharmacy staff",
    },
  ],
  education: [
    {
      degree: "Doctor of Pharmacy (PharmD)",
      school: "University of Algiers Faculty of Pharmacy",
      schoolLogo: "/placeholder.svg?height=100&width=100",
      date: "2010 - 2015",
    },
    {
      degree: "Certificate in Human Resources Management",
      school: "Algiers Business School",
      schoolLogo: "/placeholder.svg?height=100&width=100",
      date: "2018 - 2019",
    },
  ],
  skills: [
    {
      name: "Pharmacy Recruitment",
      description: "Expert in identifying and recruiting qualified pharmacy professionals",
      verified: true,
      verifiedBy: "Hamid Bouaziz, HR Director",
    },
    {
      name: "Talent Assessment",
      description: "Skilled in evaluating pharmacy candidates' technical skills and cultural fit",
      verified: true,
      verifiedBy: "Hamid Bouaziz, HR Director",
    },
    {
      name: "Healthcare Regulations",
      description: "Knowledgeable about pharmacy practice regulations and licensing requirements",
      verified: true,
      verifiedBy: "Hamid Bouaziz, HR Director",
    },
    {
      name: "Interview Techniques",
      description: "Proficient in behavioral and situational interviewing methods",
      verified: true,
      verifiedBy: "Hamid Bouaziz, HR Director",
    },
    {
      name: "Pharmacy Operations",
      description: "Understanding of hospital and retail pharmacy workflows and requirements",
      verified: true,
      verifiedBy: "Dr. Nadia Rahal, Pharmacy Director",
    },
    {
      name: "Networking",
      description: "Strong ability to build and maintain professional relationships",
      verified: false,
    },
  ],
}

// Feed posts data
export const feedPosts = [
  {
    author: "Dr. Fatima Zahra",
    authorTitle: "Hospital Pharmacy Director at National Medical Center",
    authorImage: "/placeholder.svg?height=100&width=100",
    timePosted: "2 hours ago",
    content:
      "Excited to announce that our hospital pharmacy has been recognized for excellence in medication safety practices! This achievement reflects the dedication and hard work of our entire pharmacy team. #PharmacyExcellence #MedicationSafety",
    image: "/images/feed-image-1.png",
  },
  {
    author: "Mohammed Larbi",
    authorTitle: "Clinical Pharmacist at University Hospital",
    authorImage: "/placeholder.svg?height=100&width=100",
    timePosted: "5 hours ago",
    content:
      "Just published my research on antibiotic stewardship in the Journal of Clinical Pharmacy. Grateful for all the support from my colleagues and mentors throughout this journey. Link to the article in comments!",
    image: null,
  },
  {
    author: "PharmConnect",
    authorTitle: "Official Account",
    authorImage: "/placeholder.svg?height=100&width=100",
    timePosted: "1 day ago",
    content:
      "We're hosting a virtual conference on 'The Future of Pharmacy Practice' next month! Join leading experts to discuss emerging trends and opportunities in the pharmacy profession. Registration is now open - link in comments!",
    image: "/images/feed-image-2.jpg",
  },
  {
    author: "Leila Benhamida",
    authorTitle: "Pharmacy Student at University of Algiers",
    authorImage: "/placeholder.svg?height=100&width=100",
    timePosted: "1 day ago",
    content:
      "Looking for advice from experienced pharmacists: What are the most important skills I should focus on developing during my final year of pharmacy school? Any recommendations for elective rotations that would be particularly valuable?",
    image: "/images/feed-image-3.png",
  },
]

// Job listings data
export const jobListings = [
  {
    title: "Clinical Pharmacist - Oncology",
    company: "National Cancer Center",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Algiers, Algeria",
    type: "Full-time",
    description:
      "Seeking an experienced clinical pharmacist to join our oncology department. The ideal candidate will have experience in chemotherapy preparation and monitoring, patient counseling, and collaborative practice with the oncology team.",
    skills: ["Oncology", "Chemotherapy", "Patient Counseling", "Medication Safety"],
    postedTime: "2 days ago",
  },
  {
    title: "Hospital Pharmacy Manager",
    company: "MedPharma Group",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Oran, Algeria",
    type: "Full-time",
    description:
      "MedPharma Group is looking for a Hospital Pharmacy Manager to oversee pharmacy operations at our new 200-bed hospital in Oran. Responsibilities include staff management, inventory control, and ensuring compliance with regulations.",
    skills: ["Pharmacy Management", "Leadership", "Regulatory Compliance", "Inventory Management"],
    postedTime: "1 week ago",
  },
  {
    title: "Retail Pharmacist",
    company: "PharmaCare Network",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Constantine, Algeria",
    type: "Full-time",
    description:
      "Join our growing network of community pharmacies! We're seeking a licensed pharmacist to provide medication dispensing, patient counseling, and medication therapy management services in a busy retail setting.",
    skills: ["Retail Pharmacy", "Patient Counseling", "Medication Therapy Management", "Customer Service"],
    postedTime: "3 days ago",
  },
  {
    title: "Pharmaceutical Quality Assurance Specialist",
    company: "Algerian Pharmaceutical Industries",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Algiers, Algeria",
    type: "Full-time",
    description:
      "Responsible for ensuring compliance with GMP standards and regulatory requirements in pharmaceutical manufacturing. Will conduct audits, review documentation, and implement quality improvement initiatives.",
    skills: ["Quality Assurance", "GMP", "Regulatory Affairs", "Pharmaceutical Manufacturing"],
    postedTime: "5 days ago",
  },
]
