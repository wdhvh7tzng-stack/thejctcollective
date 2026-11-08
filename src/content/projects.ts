export type Recommendation = { title: string; description: string; touchpoints: string };
export type ProjectImage = {
  src: string; alt: string; caption?: string;
  placement?: 'direction' | 'recommendations' | 'campaign';
  crop?: { x: number; y: number; width: number; height: number; sourceWidth: number; sourceHeight: number };
};
export type Project = {
  id: string; slug: string; title: string; client: string; category: string; year: string;
  shortDescription: string; heroImage: string; thumbnailImage: string;
  galleryImages: ProjectImage[];
  heroVisual?: ProjectImage; thumbnailVisual?: ProjectImage;
  challenge: string; insight: string; approach: string; solution: string; outcome: string;
  services: string[]; featured: boolean; status: 'draft' | 'published';
  projectType?: string; headline?: string; audience?: string; research?: string;
  editorial?: {challengeTitle: string; audienceTitle: string; insightNote: string; directionTitle: string; recommendationsTitle: string; campaignTitle: string; campaignDescription: string; heroCaption: string};
  recommendations?: Recommendation[]; campaignLines?: string[];
};

const handAndStone: Project = {
  id: 'hand-and-stone', slug: 'hand-and-stone', title: 'Hand & Stone', client: 'Hand & Stone',
  category: 'Brand & Campaign Strategy', year: '', projectType: 'Strategy & creative proposal',
  headline: 'From occasional self-care to everyday recovery.',
  editorial: {challengeTitle: 'A clearer place\nin modern wellness.', audienceTitle: 'Self-care matters.\nMaking time is harder.', insightNote: 'A SHIFT FROM PERMISSION TO PURPOSE.', directionTitle: 'Recovery belongs\nin the routine.', recommendationsTitle: 'One idea.\nFour connected expressions.', campaignTitle: 'A new way\nto show up.', campaignDescription: 'Campaign language brings the strategy into everyday life. These concepts carry the recovery idea through brand storytelling and social communication.', heroCaption: 'SOCIAL CAMPAIGN CONCEPTS / FROM THE PROPOSAL'},
  shortDescription: 'Reframing the role of Hand & Stone in modern wellness—through consumer insight, routine-building, and a recovery-led campaign direction.',
  heroImage: '', thumbnailImage: '',
  heroVisual: {src: '/images/hand-and-stone/social-concepts.webp', alt: 'Three proposed Hand & Stone social ads: Track Your Stress, a stress-to-relief visual cycle, and Benefits of Stress Tracking.', crop: {x: 53, y: 258, width: 1830, height: 714, sourceWidth: 1920, sourceHeight: 1080}},
  thumbnailVisual: {src: '/images/hand-and-stone/campaign-mockups.webp', alt: 'Hand & Stone campaign concepts: Stress beyond the surface and More Than a Massage.', crop: {x: 617, y: 258, width: 1195, height: 714, sourceWidth: 1920, sourceHeight: 1080}},
  galleryImages: [
    {src: '/images/hand-and-stone/member-brochure.webp', alt: 'Proposed in-spa folded brochure introducing the Hand & Stone app and Apple Health connection.', caption: '01 / In-spa communication concept for the proposed Apple Health connection.', placement: 'direction', crop: {x: 108, y: 138, width: 1175, height: 865, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hand-and-stone/member-app.webp', alt: 'Member app concept reading Celebrate your milestones, with a circular tracker showing two of four visits completed.', caption: '02 / Member app concept: visit milestones and progress tracking.', placement: 'direction', crop: {x: 1295, y: 89, width: 570, height: 903, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hand-and-stone/fitness-partnership.webp', alt: 'Proposed Hand & Stone and Orangetheory co-branded phone, fitness towel, and water bottle mockups.', caption: '03 / Proposed Orangetheory partnership: co-branded touchpoints within a fitness routine.', placement: 'recommendations', crop: {x: 1127, y: 268, width: 722, height: 741, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hand-and-stone/campaign-mockups.webp', alt: 'Social campaign concept showing a spa guest with the headline Stress beyond the surface and the line Track Your Stress For Results You Can Feel.', caption: '04 / Social campaign concept: Stress beyond the surface.', placement: 'campaign', crop: {x: 617, y: 258, width: 571, height: 714, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hand-and-stone/campaign-mockups.webp', alt: 'Warm-toned close-up campaign concept with the headline More Than a Massage. It’s Measurable.', caption: '05 / Social campaign concept: More Than a Massage.', placement: 'campaign', crop: {x: 1241, y: 258, width: 571, height: 714, sourceWidth: 1920, sourceHeight: 1080}}
  ],
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

const hinge: Project = {
  id: 'hinge', slug: 'hinge', title: 'Hinge', client: 'Hinge', category: 'Brand & Campaign Strategy', year: '',
  projectType: 'Strategy & creative proposal', headline: 'Make trying attractive.',
  shortDescription: 'A strategy and campaign concept that reframes effort as attractive, giving intentional daters a reason to show up honestly and try again.',
  heroImage: '', thumbnailImage: '',
  editorial: {
    challengeTitle: 'A different app.\nThe same dating fatigue.', audienceTitle: 'Ready for connection.\nTired of performing.',
    insightNote: 'FROM PLAYING IT COOL TO SHOWING YOU CARE.', directionTitle: 'Hinge celebrates trying.',
    recommendationsTitle: 'One belief.\nFour ways to bring it to life.', campaignTitle: 'Effort, out in the open.',
    campaignDescription: 'The proposed outdoor campaign challenges the language of detachment. Everyday moments of closeness turn showing up, caring, and trying into something worth celebrating.',
    heroCaption: 'OUTDOOR CAMPAIGN MOCKUP / FROM THE PROPOSAL'
  },
  heroVisual: {src: '/images/hinge/street-campaign.webp', alt: 'Hinge outdoor advertising mockup at a street shelter, featuring a couple and the line You don’t find your person by playing it safe.'},
  thumbnailVisual: {src: '/images/hinge/wall-campaign.webp', alt: 'Proposed Hinge wall advertisement celebrating connection with the line You don’t find your person by playing it safe.'},
  galleryImages: [
    {src: '/images/hinge/off-the-hinge.webp', alt: 'Two proposed Off the Hinge app screens introducing spontaneous twenty-second video prompts and a countdown character.', caption: '01 / Off the Hinge: a proposed feature for unedited first impressions.', placement: 'direction', crop: {x: 800, y: 145, width: 1050, height: 830, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hinge/conversation-cards.webp', alt: 'Purple and white Hinge and We’re Not Really Strangers conversation-card and packaging concepts.', caption: '02 / Proposed We’re Not Really Strangers collaboration: prompts for more honest conversations.', placement: 'direction'},
    {src: '/images/hinge/community-concept.webp', alt: 'Concept mockups of singles seated together in social venues, using Hinge-branded conversation cards.', caption: '03 / Community-event concept imagery for the proposed partnership.', placement: 'recommendations', crop: {x: 115, y: 234, width: 1557, height: 615, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/hinge/trying-campaign.webp', alt: 'Outdoor Hinge campaign mockup showing a playful couple behind the crossed-out phrase don’t try so hard.', caption: '04 / Outdoor concept: challenge the pressure to seem detached.', placement: 'campaign'},
    {src: '/images/hinge/showing-up-campaign.webp', alt: 'Hinge campaign mockup on a brick wall with a couple and the line showing up, with showing crossed out to leave up.', caption: '05 / Outdoor concept: showing up is something to celebrate.', placement: 'campaign'}
  ],
  challenge: 'Hinge’s reputation is shaped by the wider experience of online dating. When the category feels repetitive, superficial, or exhausting, a different app can still feel like more of the same. The challenge was to position Hinge as an exception by changing what it means to try—not simply adding another reason to swipe.',
  audience: 'The proposal focuses on intentional daters aged 25–44 seeking real relationships. They want connection, but face empty conversations, stalled talking stages, and pressure to appear nonchalant. The opportunity is to make genuine effort feel appealing rather than embarrassing.',
  research: 'The strategy combines an original survey with category and competitor analysis, audience segmentation, secondary research, and Hinge’s published dating insights. The research explored app fatigue, emotional barriers, perceptions of vulnerability, and the behaviors that make effort feel attractive. Survey findings are treated as directional insight rather than population-wide claims.',
  insight: 'The audience isn’t embarrassed by Hinge as an app. They’re embarrassed they need it. In a culture that rewards detachment, wanting connection can feel like admitting too much.',
  approach: 'Make trying attractive. Replace the performance of not caring with a more honest invitation: show up as you are, including the imperfect moments. Give Hinge a role in celebrating effort through product experiences, public communication, and opportunities to connect beyond the screen.',
  solution: 'Hinge celebrates trying. The creative platform connects an unedited video-prompt feature, social storytelling, outdoor advertising, and a proposed conversation-led partnership.',
  recommendations: [
    {title: 'Make room for the unpolished.', description: 'Off the Hinge is a proposed twenty-second, unedited video-prompt feature. Daily prompts, a countdown, and a no-reshoot format encourage spontaneous first impressions rather than perfected performances.', touchpoints: 'Product concept / prompt experience / member participation'},
    {title: 'Show trying in public.', description: 'An outdoor campaign challenges the idea that detachment is attractive. Lines such as You don’t find your person by playing it safe pair intimate, playful imagery with a clear invitation to care.', touchpoints: 'Street shelters / outdoor placements / campaign messaging'},
    {title: 'Bring the feature into culture.', description: 'Proposed social storytelling introduces Off the Hinge through relatable moments of vulnerability and spontaneous responses, making the product idea part of the same creative story.', touchpoints: 'Feature introduction / social concepts / authentic first impressions'},
    {title: 'Start better conversations.', description: 'A proposed collaboration with We’re Not Really Strangers brings thoughtful prompts into first dates and community events for singles, connecting the campaign’s belief with an in-person experience.', touchpoints: 'Conversation-card concepts / first-date prompts / community events'}
  ],
  campaignLines: ['Make trying attractive.', 'You don’t find your person by playing it safe.', 'Hinge celebrates trying.'],
  outcome: 'The result is a connected strategy and creative proposal spanning brand positioning, a product concept, campaign communication, and an experiential partnership idea. Its objectives are to challenge dating burnout, celebrate genuine effort, and give hesitant or lapsed daters a reason to return with confidence.',
  services: ['Consumer Insight', 'Audience Segmentation', 'Brand Strategy', 'Campaign Strategy', 'Creative Direction'],
  featured: true, status: 'published'
};

const drafts: Project[] = ['Brand Strategy', 'Campaign Strategy'].map((category, i) => ({
  id: String(i + 1), slug: category.toLowerCase().replaceAll(' ', '-') + '-project',
  title: category + ' Project', category, client: '', year: '',
  shortDescription: '[Add approved project summary]', heroImage: '', thumbnailImage: '', galleryImages: [],
  challenge: '[Add approved challenge]', insight: '[Add approved insight]', approach: '[Add approved approach]',
  solution: '[Add approved creative execution]', outcome: '[Add approved outcome]', services: [], featured: false, status: 'draft'
}));
export const projects: Project[] = [handAndStone, hinge, ...drafts];
export const publishedProjects = projects.filter(p => p.status === 'published');
