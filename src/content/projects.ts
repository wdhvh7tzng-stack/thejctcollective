export type Recommendation = { title: string; description: string; touchpoints: string };
export type Project = {
  id: string; slug: string; title: string; client: string; category: string; year: string;
  shortDescription: string; heroImage: string; thumbnailImage: string;
  galleryImages: { src: string; alt: string; caption?: string }[];
  challenge: string; insight: string; approach: string; solution: string; outcome: string;
  services: string[]; featured: boolean; status: 'draft' | 'published';
  projectType?: string; headline?: string; audience?: string; research?: string;
  recommendations?: Recommendation[]; campaignLines?: string[];
};

const handAndStone: Project = {
  id: 'hand-and-stone', slug: 'hand-and-stone', title: 'Hand & Stone', client: 'Hand & Stone',
  category: 'Brand & Campaign Strategy', year: '', projectType: 'Strategy & creative proposal',
  headline: 'From occasional self-care to everyday recovery.',
  shortDescription: 'Reframing the role of Hand & Stone in modern wellness—through consumer insight, routine-building, and a recovery-led campaign direction.',
  heroImage: '', thumbnailImage: '', galleryImages: [],
  challenge: 'Wellness is moving beyond occasional relaxation toward personalized, routine-based recovery. The strategic challenge was to give Hand & Stone a clearer role in that shift: make its services feel relevant to everyday life, rather than an indulgence that can always wait.',
  audience: 'The proposal focuses on high-performing Gen X women, aged 45–60, balancing career, family, and personal wellbeing. For this audience, consistency, convenience, and trusted results matter. Self-care is valued, but time spent on it can still feel like time taken away from other responsibilities.',
  research: 'The strategy draws on a five-part analysis of the company, category, competitors, culture, and consumer, supported by secondary research and five qualitative interview summaries. The research was used to explore routines, barriers to booking, perceptions of value, and the role of self-care in daily life.',
  insight: 'When care feels indulgent, it becomes negotiable. When it feels necessary to keep showing up for everyday life, it earns a place in the routine.',
  approach: 'Move the conversation from permission to purpose. Rather than asking people to justify a break, position recovery as something that supports the life they already lead. Connect the brand with existing fitness habits, make membership more purposeful, and carry the same idea through social communication.',
  solution: 'Make Hand & Stone part of the recovery routine. Four connected recommendations translate the positioning into potential partnerships, product experiences, membership behaviors, and campaign communication.',
  recommendations: [
    {title: 'Meet the recovery moment.', description: 'A proposed Orangetheory partnership would connect Hand & Stone with an existing fitness routine, making recovery a natural next step after a workout.', touchpoints: 'Post-class offers / co-membership concepts / in-studio touchpoints'},
    {title: 'Make recovery more visible.', description: 'A proposed Apple Health connection would bring spa visits into the context of everyday health tracking, giving members a more connected view of their recovery habits.', touchpoints: 'App experience / member education / in-spa communication'},
    {title: 'Build a ritual, not just a membership.', description: 'Reframe membership around repeat behavior, with visit milestones, streaks, and incentives designed to make recovery easier to prioritize.', touchpoints: 'Visit milestones / progress prompts / rewards concepts'},
    {title: 'Give the strategy a public voice.', description: 'Use a recovery-led social campaign to connect Hand & Stone with how people want to feel and function in daily life. Proposed Facebook and Instagram activity would pair brand storytelling with locally relevant acquisition messaging.', touchpoints: 'Social storytelling / paid media direction / local consideration'}
  ],
  campaignLines: ['Recovery is what keeps you performing.', 'Hand & Stone supports how you show up.', 'Stress beyond the surface.'],
  outcome: 'The work brings positioning, audience understanding, campaign direction, and member experience into one connected proposal. Stronger relevance, consideration, trial, and repeat visits provide the strategic objectives. A clear role for recovery connects every recommendation, from the first campaign message to the next member visit.',
  services: ['Consumer Insight', 'Brand Positioning', 'Campaign Strategy', 'Creative Direction', 'Member Experience'],
  featured: true, status: 'published'
};

const drafts: Project[] = ['Brand Strategy', 'Campaign Strategy'].map((category, i) => ({
  id: String(i + 1), slug: category.toLowerCase().replaceAll(' ', '-') + '-project',
  title: category + ' Project', category, client: '', year: '',
  shortDescription: '[Add approved project summary]', heroImage: '', thumbnailImage: '', galleryImages: [],
  challenge: '[Add approved challenge]', insight: '[Add approved insight]', approach: '[Add approved approach]',
  solution: '[Add approved creative execution]', outcome: '[Add approved outcome]', services: [], featured: false, status: 'draft'
}));
export const projects: Project[] = [handAndStone, ...drafts];
export const publishedProjects = projects.filter(p => p.status === 'published');
