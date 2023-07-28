export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aditya K.",
  description:
    "Never build your apps with invalid environment variables again. Validate and transform your environment with the full power of Zod.",
  mainNav: [
    // {
    //   title: "Projects",
    //   href: "/projects",
    // },
  ] as { title: string; href: string }[],
  sidebarNav: [
    {
      title: "Experience",
      items: [
        {
          title: "Work Experience",
          href: "/#resume",
          items: [],
        },
        // {
        //   title: "Projects",
        //   href: "/projects",
        //   items: [],
        // },
      ],
    },
    {
      title: "Social Links",
      items: [
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/aditya-kumar-inductor/",
          items: [],
        },
        {
          title: "Github",
          href: "https://github.com/inductor69",
          items: [],
        },
        {
          title: "Email",
          href: "mailto:adityakiitdelhi@gmail.com",
          items: [],
        },
      ],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/aditya-kumar-inductor/",
    github: "https://github.com/inductor69",
  },
  locale: "en-US",
};
