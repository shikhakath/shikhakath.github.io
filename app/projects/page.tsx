// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getProject } from "./projectsData";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);

  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-6xl space-y-8 py-6">

      {/* back link */}
      <Link
        href="/projects"
        className="text-sm text-sky-300 hover:underline"
      >
        ← Back to projects
      </Link>

      {/* title block */}
      <div className="space-y-2">
        <p className="text-slate-300">{project.timeline}</p>

        <h1 className="text-4xl font-bold text-white">
          {project.title}
        </h1>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* summary */}
      <div className="space-y-3 text-slate-200 max-w-4xl">
        {project.summary?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.documents?.[0] && (
        <iframe
          src={project.documents[0].href}
          style={{ width: "100%", height: "90vh", border: "none" }}
        />
      )}
    </div>
  );
}
