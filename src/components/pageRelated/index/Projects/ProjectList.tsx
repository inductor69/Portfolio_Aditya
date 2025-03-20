import { Project } from "./Project";
import { GiLipstick } from "react-icons/gi";
import { FaStickyNote } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa6";
import Link from "next/link";

export const ProjectList = () => {
  const projectData = [
    {
      id: 1,
      icon: <FaStickyNote />,
      title: "algorithms visualiser",
      description:
        "a data structures and algorithms visualizer app",
      link: "https://github.com/inductor69/Algorithms-Visualiser-App",
      timeframe: "2020",
    },
    // {
    //   id: 2,
    //   icon: <FaBrain />,
    //   title: "brainthink",
    //   description:
    //     "a media platform that fights brainrot by prioritizing intellectual growth and meaningful content.",
    //   link: "https://brainth.ink",
    //   timeframe: "2025 - Present",
    // },
    // {
    //   id: 3,
    //   icon: <RiFilePaper2Fill />,
    //   title: "papergram next",
    //   description: "scroll ai papers instead of tiktok.",
    //   link: "https://papergramnext.vercel.app/",
    //   timeframe: "2025",
    // },
    // {
    //   id: 4,
    //   icon: <GiLipstick />,
    //   title: "talente",
    //   description: "local business landing page design and implementation.",
    //   link: "https://talente-first.vercel.app/",
    //   timeframe: "2025",
    // },
  ] satisfies {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    timeframe?: string;
  }[];

  return (
    <div className="space-y-3">
      {projectData.map((project) => (
        <Project
          key={project.id}
          icon={project.icon}
          title={project.title}
          description={project.description}
          link={project.link}
          timeframe={project.timeframe}
        />
      ))}
      <Link
        href="https://github.com/inductor69?tab=repositories"
        className="block mt-4 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        all projects →
      </Link>
    </div>
  );
};
