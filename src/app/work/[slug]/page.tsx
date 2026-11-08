import {notFound} from 'next/navigation';
import {publishedProjects} from '@/content/projects';
import {CaseStudy} from '@/components/projects';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=publishedProjects.find(p=>p.slug===slug);if(!p)return {};return {title:p.title,description:p.shortDescription};}
export default async function Work({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=publishedProjects.find(p=>p.slug===slug);if(!project)notFound();return <CaseStudy project={project}/>}
