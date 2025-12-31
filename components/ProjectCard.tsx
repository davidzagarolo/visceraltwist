import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export default function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  return (
    <div className="min-w-75 md:min-w-100 lg:min-w-125 shrink-0 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <Image src={image} alt={title} width={800} height={350} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}