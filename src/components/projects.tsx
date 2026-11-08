import Link from 'next/link';
import Image from 'next/image';
import { Project, publishedProjects } from '@/content/projects';
import { ContactCTA, Label, TextLink } from './editorial';

function ProjectArtwork({ compact = false }: { compact?: boolean }) {
  return <div className={`project-artwork${compact ? ' project-artwork-compact' : ''}`} aria-hidden="true">
    <span className="project-art-label">HAND & STONE / A NEW ROLE IN WELLNESS</span>
    <span className="project-art-title">recovery<span className="project-art-arrow">↘</span><br /><em>routine.</em></span>
    <span className="project-art-rule" />
    <span className="project-art-bottom">FROM A MOMENT AWAY. TO A WAY FORWARD.</span>
    <span className="project-art-index">01 — STRATEGIC DIRECTION</span>
  </div>;
}

const assetPath = (path: string) => path.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}` : path;

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <Link href={`/work/${project.slug}`} className="art-link" aria-label={`Read the ${project.title} case study`}>
      {project.thumbnailImage ? <Image src={assetPath(project.thumbnailImage)} alt={project.title} width={900} height={650} /> : <ProjectArtwork compact />}
    </Link>
    <div className="spotlight-caption"><span>01 / {project.category.toUpperCase()}</span><span>↗</span></div>
    <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
    <p>{project.shortDescription}</p>
    <TextLink href={`/work/${project.slug}`}>Explore the case study</TextLink>
  </article>;
}

export function CaseStudy({ project: p }: { project: Project }) {
  const related = publishedProjects.filter(x => x.id !== p.id);
  return <article className="case-study editorial-case-study">
    <div className="case-topline"><TextLink href="/#thinking">Back to selected thinking</TextLink><span className="label">STRATEGY IN PRACTICE / 01</span></div>
    <header className="case-header"><Label>{p.category.toUpperCase()}</Label><h1>{p.title}</h1><div className="case-intro"><h2>{p.headline || p.shortDescription}</h2><div><p>{p.shortDescription}</p><p className="case-type">{p.projectType || p.category}{p.year && ` / ${p.year}`}</p></div></div></header>
    <div className="case-facts"><div><span className="label">THE FOCUS</span><p>{p.client}</p></div><div><span className="label">THE DISCIPLINES</span><p>{p.services.join(' / ')}</p></div></div>
    {p.heroImage ? <Image src={assetPath(p.heroImage)} alt={p.title} width={1500} height={1000} priority /> : <ProjectArtwork />}
    <div className="case-art-caption"><span>THE JCT COLLECTIVE / STRATEGIC DIRECTION</span><span>TYPOGRAPHIC INTERPRETATION OF THE PROPOSAL</span></div>
    <section className="case-section"><Label>01 / THE CHALLENGE</Label><div className="case-section-grid"><h2>A clearer place<br />in modern wellness.</h2><p className="lead">{p.challenge}</p></div></section>
    {p.audience && <section className="case-section"><Label>02 / THE HUMAN CONTEXT</Label><div className="case-section-grid"><h2>Self-care matters.<br />Making time is harder.</h2><div className="prose"><p className="lead">{p.audience}</p>{p.research && <div className="case-research"><h3>Understanding the full picture.</h3><p>{p.research}</p></div>}</div></div></section>}
    <section className="case-insight"><Label>THE STRATEGIC INSIGHT</Label><blockquote>{p.insight}</blockquote><span className="case-insight-note">A SHIFT FROM PERMISSION TO PURPOSE.</span></section>
    <section className="case-section"><Label>03 / THE DIRECTION</Label><div className="case-section-grid"><h2>Recovery belongs<br />in the routine.</h2><div className="prose"><p className="lead">{p.approach}</p><p>{p.solution}</p></div></div></section>
    {p.recommendations && <section className="case-section"><Label>04 / THE RECOMMENDATIONS</Label><h2>One idea.<br />Four connected expressions.</h2><div className="recommendations">{p.recommendations.map((r, i) => <div className="recommendation" key={r.title}><span className="row-number">0{i + 1}</span><h3>{r.title}</h3><div><p>{r.description}</p><small>{r.touchpoints}</small></div></div>)}</div></section>}
    {p.campaignLines && <section className="case-section case-campaign"><Label>05 / CREATIVE EXPRESSION</Label><div className="case-section-grid"><h2>A new way<br />to show up.</h2><p className="lead">Campaign language brings the strategy into everyday life. These concepts carry the recovery idea through brand storytelling and social communication.</p></div><div className="campaign-studies">{p.campaignLines.map((line, i) => <figure key={line}><span className="label">CONCEPT STUDY / 0{i + 1}</span><p>{line}</p><figcaption>HAND & STONE / PROPOSED CAMPAIGN LANGUAGE</figcaption></figure>)}</div></section>}
    {p.galleryImages.length > 0 && <div className="case-gallery">{p.galleryImages.map(img => <figure key={img.src}><Image src={assetPath(img.src)} alt={img.alt} width={1200} height={800} />{img.caption && <figcaption>{img.caption}</figcaption>}</figure>)}</div>}
    <section className="case-section"><Label>06 / THE VALUE OF THE THINKING</Label><div className="case-section-grid"><h2>A connected direction<br />for what comes next.</h2><p className="lead">{p.outcome}</p></div></section>
    {related.length > 0 && <section className="case-section"><h2>Related work</h2><div className="spotlight-grid">{related.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>}
    <ContactCTA />
  </article>;
}
