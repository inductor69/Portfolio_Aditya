import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Aditya",
  lastName: "Kumar",
  displayName: "Aditya Kumar",
  username: "inductor69",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Open Source Contributor",
  ],
  address: "New Delhi, India",
  phoneNumber: "KzkxOTY1MDA5Mzc1MQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWRpdHlha2lpdGRsZWhpQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://meaditya.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Kryptos",
      website: "https://kryptos.io",
    },
    {
      title: "Software Engineer",
      company: "Auro Digital",
      website: "https://aurodigital.ai",
    },
  ],
  about: `
- **Software Engineer** with strong experience in building low-latency trading systems, exchange integrations, and high-performance backend services.
- Skilled in **C++**, **Go**, **Python**, **TypeScript**, and distributed systems design; focused on reliability, throughput, and real-time data processing. 
- Experienced in architecting OMS/PMS platforms, multi-exchange reconciliation engines, and event-driven microservices using Redis, NATS, gRPC, and WebSockets..
`,
  avatar: "./img/ak.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=6",
  affiliateBadge: {
    name: "Shadcraft",
    url: "https://shadcraft.com",
    logo: "https://assets.chanhdai.com/images/companies/shadcraft.svg?v=2",
  },
  timeZone: "Asia/Kolkata",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User
