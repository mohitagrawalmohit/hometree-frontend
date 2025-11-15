import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;   // ⭐ FIX: unwrap params

  const property = projects.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="text-white p-12 text-3xl">
        Project not found: {slug}
      </div>
    );
  }

  return <ProjectDetail property={property} />;
}
