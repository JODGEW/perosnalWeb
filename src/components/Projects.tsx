import { projects } from '@/data/projects';
import SectionHead from './SectionHead';
import ProjectRow from './ProjectCard';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHead num="02" title="Selected work" aside="One product, four builds" />

      {projects.map((project, i) => (
        <ProjectRow key={project.title} project={project} flip={i % 2 === 1} />
      ))}
    </section>
  );
}
