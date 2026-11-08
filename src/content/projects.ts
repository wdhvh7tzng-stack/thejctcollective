export type Recommendation = { title: string; description: string; touchpoints: string };
export type ProjectImage = {
  src: string; alt: string; caption?: string;
  placement?: 'direction' | 'recommendations' | 'campaign';
  crop?: { x: number; y: number; width: number; height: number; sourceWidth: number; sourceHeight: number };
};
export type Project = {
  id: string; slug: string; title: string; client: string; category: string; year: string;
  shortDescription: string; cardDescription?: string; heroImage: string; thumbnailImage: string;
  galleryImages: ProjectImage[];
  heroVisual?: ProjectImage; thumbnailVisual?: ProjectImage;
  challenge: string; insight: string; approach: string; solution: string; outcome: string;
  services: string[]; featured: boolean; status: 'draft' | 'published';
  projectType?: string; headline?: string; audience?: string; research?: string;
  editorial?: {recommendationsLabel?: string; researchTitle?: string; challengeTitle: string; audienceTitle: string; insightNote: string; directionTitle: string; recommendationsTitle: string; campaignTitle: string; campaignDescription: string; heroCaption: string};
  recommendations?: Recommendation[]; campaignLines?: string[];
};

const handAndStone: Project = {
  id: 'hand-and-stone', slug: 'hand-and-stone', cardDescription: 'Brand strategy and a recovery-led campaign direction.', title: 'Hand & Stone', client: 'Hand & Stone',
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
  id: 'hinge', slug: 'hinge', cardDescription: 'Turning dating fatigue into a reason to try again.', title: 'Hinge', client: 'Hinge', category: 'Brand & Campaign Strategy', year: '',
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

const goff: Project = {
  id: 'goff', slug: 'goff', cardDescription: 'A hospitality identity built around meaningful connection.', title: 'goff.', client: 'goff.', category: 'Brand Identity & Art Direction', year: '',
  projectType: 'Hospitality brand concept', headline: 'A place to connect. Together.',
  shortDescription: 'A hospitality identity built around meaningful connection, bringing the spirit of the conversation pit into a warm, expressive brand world.',
  heroImage: '', thumbnailImage: '',
  editorial: {
    challengeTitle: 'Give connection\na physical identity.', audienceTitle: 'Less passing through.\nMore coming together.',
    researchTitle: 'An architectural starting point.', insightNote: 'A CONVERSATION PIT. A SHARED POINT OF VIEW.',
    directionTitle: 'Build the brand\naround the conversation.', recommendationsLabel: '04 / THE IDENTITY IN PRACTICE',
    recommendationsTitle: 'One identity.\nA world of touchpoints.', campaignTitle: 'The same feeling,\nwherever you meet it.',
    campaignDescription: 'The identity extends from the street to the screen. Outdoor placements, a desktop website concept, and mobile layouts carry the same palette, framing, and conversational voice into each encounter.',
    heroCaption: 'BRAND CONCEPT / FROM THE IDENTITY PRESENTATION'
  },
  heroVisual: {src: '/images/goff/brand-cover.webp', alt: 'The cream goff. wordmark over a warm, wood-paneled mid-century interior with a sunken seating area.'},
  thumbnailVisual: {src: '/images/goff/outdoor-identity.webp', alt: 'Three outdoor goff. identity mockups with earthy green, warm cream, and burnt-orange graphics against a leafy street setting.'},
  galleryImages: [
    {src: '/images/goff/color-system.webp', alt: 'The goff. color system: deep green, pale blue, butter yellow, burnt orange, soft green, and dark brown.', caption: '01 / An expressive palette grounded in warmth and connection.', placement: 'direction', crop: {x: 0, y: 170, width: 1920, height: 815, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/goff/conversation-pit-symbol.webp', alt: 'Layered geometric conversation-pit symbols in the goff. palette, with circular variations.', caption: '02 / The conversation-pit motif becomes a flexible graphic identifier.', placement: 'direction', crop: {x: 720, y: 160, width: 1150, height: 820, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/goff/stationery.webp', alt: 'goff. stationery mockups including an orange folder, letterhead, envelope, and business cards on a pale-yellow background.', caption: '03 / Print identity: stationery, correspondence, and business cards.', placement: 'recommendations', crop: {x: 100, y: 145, width: 1620, height: 850, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/goff/merchandise.webp', alt: 'Two goff. lighter concepts: one wrapped in the layered conversation-pit pattern and one in burnt orange.', caption: '04 / Small-format merchandise carries the identity beyond the space.', placement: 'recommendations'},
    {src: '/images/goff/website-concept.webp', alt: 'goff. desktop website mockup on a laptop beside a branded cup, featuring the line this visit is long overdue.', caption: '05 / Desktop website concept: a warm invitation to visit.', placement: 'campaign', crop: {x: 0, y: 145, width: 1920, height: 850, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/goff/mobile-website.webp', alt: 'Mobile goff. website concept on a phone, carrying the orange palette, wordmark, and editorial image grid.', caption: '06 / Mobile website concept: the same visual language on a smaller screen.', placement: 'campaign'},
    {src: '/images/goff/outdoor-identity.webp', alt: 'Street-level goff. poster mockups showing the wordmark and a textured image treatment in the brand palette.', caption: '07 / Outdoor brand applications: recognizable before you step inside.', placement: 'campaign'}
  ],
  challenge: 'Create a recognizable identity for a hospitality concept centered on dialogue and meaningful connection. The brand needed to express a warm, welcoming sense of place while remaining distinctive across an environment, a printed object, and a digital experience.',
  audience: 'The concept invites people to slow down, gather, and have a real conversation. Its point of view is personal and open: a place that makes connection feel intentional, with a visual identity that is playful, bold, and approachable.',
  research: 'The design exploration takes its cue from Bruce Goff’s conversation pit and mid-century modern architecture. References to seventies and nineties advertising, vintage photography, and contemporary interiors inform the moodboards and visual guidelines. These references shape the brand’s atmosphere and graphic vocabulary.',
  insight: 'A space built for conversation can have an identity built the same way: layered, inviting, and centered on bringing people together.',
  approach: 'Turn the conversation pit into a visual system. A lowercase wordmark, Aileron typography, earthy color combinations, and a geometric pit motif create the foundation. Asymmetric frames echo the architecture, while a mix of vintage-inspired and modern imagery keeps the identity expressive.',
  solution: 'The resulting guidelines connect logo usage, clearspace, color, typography, image treatments, and framing into one flexible system. That system is explored across signage, print, merchandise, hospitality materials, outdoor communication, and website concepts.',
  recommendations: [
    {title: 'Make the foundation unmistakable.', description: 'The lowercase goff. wordmark pairs with a contrasting palette and a defined typographic hierarchy. Logo clearspace and color-use guidance keep the identity consistent without making it rigid.', touchpoints: 'Wordmark / color system / Aileron typography / usage guidelines'},
    {title: 'Let the architecture become the graphic.', description: 'The conversation-pit symbol and layered, uneven frames translate the spatial idea into repeatable design elements. Two-tone image treatments connect varied photography to the same visual world.', touchpoints: 'Graphic identifier / framing system / image direction'},
    {title: 'Carry the feeling beyond the visit.', description: 'Stationery, editorial print, candles, lighter concepts, and takeaway materials extend the brand into everyday objects, giving the identity a life beyond the physical space.', touchpoints: 'Print collateral / merchandise / packaging concepts'},
    {title: 'Keep every encounter connected.', description: 'Signage and outdoor applications establish recognition in the environment. Website and social concepts translate the same colors, typography, imagery, and voice into digital touchpoints.', touchpoints: 'Signage / outdoor identity / website concepts / social direction'}
  ],
  campaignLines: ['A place to connect. Together.', 'This visit is long overdue.', 'Dare to do something new.'],
  outcome: 'The result is a cohesive hospitality brand concept and a practical set of identity guidelines. The presentation demonstrates how a single spatial idea can connect brand expression across physical, printed, and digital applications, with mockups showing how the system could come to life.',
  services: ['Brand Identity', 'Art Direction', 'Brand Guidelines', 'Print Design', 'Digital Design Concepts'],
  featured: true, status: 'published'
};

const parksProject: Project = {
  id: 'parks-project', slug: 'parks-project', cardDescription: 'An interactive-film concept that turns attention into action.', title: 'Parks Project', client: 'Parks Project', category: 'Experience & Campaign Strategy', year: '',
  projectType: 'Integrated campaign concept', headline: 'Save the people who save the parks.',
  shortDescription: 'An interactive-film campaign concept connecting the human story of park workers with a proposed path from cultural attention to public action.',
  heroImage: '', thumbnailImage: '',
  editorial: {
    challengeTitle: 'Make the people\nbehind the parks visible.', audienceTitle: 'Move beyond watching.\nGive people a way to act.',
    researchTitle: 'A story shaped by the medium.', insightNote: 'FROM THE ILLUSION OF CHOICE TO A REAL NEXT STEP.',
    directionTitle: 'Introducing Miscast.', recommendationsLabel: '04 / THE EXPERIENCE IN PRACTICE',
    recommendationsTitle: 'One story.\nA connected path to action.', campaignTitle: 'Keep the story\nin the world.',
    campaignDescription: 'The proposed campaign extends beyond the film through outdoor communication and a merchandise collection. Each touchpoint carries the same story, connecting the cultural experience with the people at its center.',
    heroCaption: 'MISCAST POSTER MOCKUPS / PROPOSED A24 COLLABORATION'
  },
  heroVisual: {src: '/images/parks-project/miscast-posters.webp', alt: 'Miscast outdoor poster concepts pairing forest-green film artwork with the line Save the people who save the parks.', crop: {x: 108, y: 136, width: 1680, height: 878, sourceWidth: 1920, sourceHeight: 1080}},
  thumbnailVisual: {src: '/images/parks-project/miscast-posters.webp', alt: 'Street-poster mockup for the proposed Parks Project Miscast campaign.', crop: {x: 108, y: 136, width: 1680, height: 878, sourceWidth: 1920, sourceHeight: 1080}},
  galleryImages: [
    {src: '/images/parks-project/cinema-experience.webp', alt: 'Concept image of an interactive Miscast cinema screening, with an audience member holding a two-button voting device.', caption: '01 / Theater experience concept: audience votes determine the next scene.', placement: 'direction'},
    {src: '/images/parks-project/streaming-experience.webp', alt: 'At-home Miscast viewing concept on a laptop with a QR code on the screen.', caption: '02 / Streaming concept: carry the invitation to act into at-home viewing.', placement: 'direction'},
    {src: '/images/parks-project/mobile-action-flow.webp', alt: 'Two concept mobile screens showing ZIP-code entry and representative lookup for a proposed campaign action flow.', caption: '03 / Mobile journey concept: find representatives and choose the next step.', placement: 'recommendations', crop: {x: 60, y: 90, width: 855, height: 960, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/parks-project/mobile-action-flow.webp', alt: 'Two concept mobile screens showing an editable message to representatives and a confirmation screen.', caption: '04 / Mobile journey concept: review a message and continue participation.', placement: 'recommendations', crop: {x: 945, y: 90, width: 855, height: 960, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/parks-project/fleece-concept.webp', alt: 'Front and back views of a proposed Parks Project and A24 Yosemite fleece with mountain and forest graphics.', caption: '05 / Co-branded fleece concept for the proposed merchandise collection.', placement: 'campaign', crop: {x: 20, y: 180, width: 1200, height: 630, sourceWidth: 1920, sourceHeight: 1080}},
    {src: '/images/parks-project/soundtrack-concept.webp', alt: 'Proposed Miscast soundtrack artwork with a Yosemite landscape on the sleeve and a forest-green vinyl record.', caption: '06 / Soundtrack and packaging concept: a physical extension of the film world.', placement: 'campaign', crop: {x: 1000, y: 215, width: 800, height: 545, sourceWidth: 1920, sourceHeight: 1080}}
  ],
  challenge: 'The brief centers on funding pressures facing national park workers and the gap between affection for public lands and support for the people who maintain them. The creative challenge was to make an institutional issue feel human, immediate, and difficult to ignore.',
  audience: 'The proposed experience meets people as filmgoers, at-home viewers, and participants in outdoor culture. Instead of asking attention to do all the work, it connects a shared emotional moment with a clear opportunity to learn more, support the cause, or contact representatives.',
  research: 'The creative development draws on Nomadland’s human perspective and the branching storytelling of Black Mirror: Bandersnatch. The deck proposes A24 as a storytelling collaborator, pairing an immersive film format with Parks Project’s outdoor identity and a digital participation journey.',
  insight: 'An audience can choose what happens on screen without being able to change the outcome. That tension becomes the opening for a different question: what can we do once the film ends?',
  approach: 'Build an experience around the contrast between fictional choice and real participation. In Miscast, viewers influence the story through decision points, but each path reaches a shared ending of loss. The final moment shifts from storytelling to a proposed invitation to act, keeping the people behind the parks at the center.',
  solution: 'The concept connects a proposed interactive film, theater-to-streaming rollout, mobile action flow, outdoor promotion, and a co-branded merchandise collection under one campaign platform: Save the people who save the parks.',
  recommendations: [
    {title: 'Make the story participatory.', description: 'A proposed interactive screening lets the audience choose the next scene using in-theater voting devices. The shared ending challenges the feeling of control and makes the human stakes of the story harder to dismiss.', touchpoints: 'Interactive film concept / cinema experience / collective decision points'},
    {title: 'Make the next step clear.', description: 'A QR-led mobile journey would connect the final scene with representative lookup and an editable message. The deck proposes Phone2Action as the participation route, with the aim of reducing friction between emotional response and action.', touchpoints: 'QR entry point / mobile journey / representative contact concept'},
    {title: 'Carry the experience beyond the theater.', description: 'A proposed streaming phase extends the same narrative and participation idea to viewers at home. Outdoor posters and a trailer concept would create recognition and bring people into the film’s world.', touchpoints: 'Streaming proposal / outdoor campaign / trailer direction'},
    {title: 'Give the campaign a physical life.', description: 'Fleece designs, a ranger-inspired pin, and a soundtrack concept extend Miscast into a proposed Parks Project and A24 collection, connecting the campaign’s visual world with tangible objects.', touchpoints: 'Merchandise concepts / soundtrack packaging / co-branding direction'}
  ],
  campaignLines: ['Save the people who save the parks.', 'Miscast.', 'From screen to action.'],
  outcome: 'The result is an integrated experience and campaign proposal linking storytelling, participation design, promotion, and merchandise. The deck sets targets of $30 million in support for a year of Yosemite workforce salaries and 150,000 contacts to elected officials. These are proposed campaign goals, not achieved results; the film, partnerships, and rollout are presented as concepts.',
  services: ['Campaign Strategy', 'Experience Design', 'Creative Concept', 'Digital Journey Design', 'Art Direction'],
  featured: true, status: 'published'
};

const drafts: Project[] = ['Brand Strategy', 'Campaign Strategy'].map((category, i) => ({
  id: String(i + 1), slug: category.toLowerCase().replaceAll(' ', '-') + '-project',
  title: category + ' Project', category, client: '', year: '',
  shortDescription: '[Add approved project summary]', heroImage: '', thumbnailImage: '', galleryImages: [],
  challenge: '[Add approved challenge]', insight: '[Add approved insight]', approach: '[Add approved approach]',
  solution: '[Add approved creative execution]', outcome: '[Add approved outcome]', services: [], featured: false, status: 'draft'
}));
export const projects: Project[] = [handAndStone, hinge, goff, parksProject, ...drafts];
export const publishedProjects = projects.filter(p => p.status === 'published');
