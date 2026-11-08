import type {MetadataRoute} from 'next';
import {publishedProjects} from '@/content/projects';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL;if(!base)return [];return ['','/studio','/expertise','/inquiries',...publishedProjects.map(p=>`/work/${p.slug}`)].map(path=>({url:base.replace(/\/$/, '') + path}));}

export const dynamic = 'force-static';
