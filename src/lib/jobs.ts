type TechType = "Frontend" | "Backend" | "Tool";
export type Tech = {
  name: string;
  type: TechType;
};
export type JobNote = {
  note: string;
};
export type Job = {
  company: string;
  jobTitle: string;
  jobNotes: JobNote[];
  tech: Record<string, string[]>;
  fromDate: Date;
  toDate: Date | "present";
};

export const myJobsBeLike: Job[] = [
  {
    company: "Auro Digital",
    jobTitle: "Frontend Engineer",
    fromDate: new Date(2023, 5),
    toDate: "present",
    jobNotes: [
      {
        note: "Developed a React application for an Order Management System (OMS) in the crypto trading domain",
      },
      {
        note: "Implemented various components, including order placement forms, trade history, and real-time market data displays.",
      },
      {
        note: "Integrated Redux into the application to manage and synchronize the global state across different components, Utilized Redux actions, reducers, and selectors to handle complex data flows and ensure data consistency throughout the application.",
      },
      {
        note: "Addressed performance bottlenecks by identifying and resolving issues related to rendering, data fetching, and state management.",
      },
      {
        note: "Integrated WebSockets into the application to establish real-time communication between the frontend and backend servers.",
      }
    ],
    tech: {
      Frontend: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "BlueprintJS",
        "HTML",
        "CSS",
        "Javascript",
      ],
      Backend: ["Python", "Django", "Flask", "SQL"],
      Tools: ["Snowflake DB", "AWS Lambda", "AWS S3"],
    },
  },
 
];
