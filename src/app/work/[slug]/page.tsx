import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { CaseStudySection } from "@/components/CaseStudySection";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study by Jimmy Arikawe`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study by Jimmy Arikawe`,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  return (
    <CaseStudySection
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
