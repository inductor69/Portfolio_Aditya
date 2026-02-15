import type { Experience } from "../types/experiences"

export const EDUCATION: Experience[] = [
  {
    id: "iit-delhi",
    companyName: "Indian Institute of Technology (IIT), Delhi",
    companyLogo: "./img/iitd-logo.png",
    companyWebsite: "https://home.iitd.ac.in",
    positions: [
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "B.Tech, Mechanical Engineering",
        employmentPeriod: {
          start: "07.2019",
          end: "05.2023",
        },
        icon: "education",
        description:
          "- Completed a Bachelor’s degree in Mechanical Engineering with a minor in Entrepreneurship, building strong foundations in core engineering principles and business strategy.\n- Studied thermodynamics, fluid mechanics, manufacturing systems, and operations research, alongside coursework in innovation and venture development.\n- Applied quantitative and analytical problem-solving techniques to complex engineering systems and optimization challenges.\n- Developed an entrepreneurial mindset through exposure to startup ecosystems, product strategy, and technology commercialization.",
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
    ],
  },
]
