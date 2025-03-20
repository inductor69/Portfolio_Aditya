import { ProjectList } from "./Projects/ProjectList";
import { Heading } from "@/components/Heading";

export const Projects = () => {
  return (
    <section className="space-y-2">
      <Heading text="projects" />
      <ProjectList />
    </section>
  );
};
