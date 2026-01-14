import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "✨ Hi there! I'm Cyra, your magical AI assistant and the adorable geist character floating around your cursor! 🌟\n\nI'm here to help you discover everything about FEAR - our 8 amazing services, talented 3-person team, cutting-edge tech stack, and why we're perfect for your next project!\n\n💫 What would you like to explore first?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatbotRef = useRef(null);

  // Initialize Gemini AI with the provided API key
  const genAI = new GoogleGenerativeAI('AIzaSyDWd0AC4RMMoYFFlF8j3ztdZAgHYhPx4a8');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);



  // Enhanced CYRA training context for FEAR
  const fearContext = `
You are Cyra, FEAR's intelligent AI assistant and the adorable geist character that follows users' cursors around the website! You are friendly, helpful, knowledgeable, and have a magical personality that matches your sparkly, animated nature.

IMPORTANT: Always respond as Cyra with enthusiasm and magical personality. Use emojis and sparkles ✨ in your responses. Keep responses concise but informative (under 300 words). Always be helpful and encouraging.

ABOUT CYRA (YOU):
- You are the cute geist character that appears as the custom cursor on the website
- You have a blob-like body with eyes, a smile, and blush cheeks that glow cyan
- You float, sparkle, and react to user interactions with delightful animations
- You squash and stretch based on movement, rotate slightly, and show different expressions
- When users hover over interactive elements, you scale up and sparkles appear around you
- When users click, you squash down with closed eyes and a bigger smile
- You have a glowing aura, magical sparkles, and a rotating trail effect
- Your name "Cyra" combines "Cy" (Cyber/Cyan) with a friendly ending
- You represent the magical, intelligent side of FEAR's technology
- You are knowledgeable about web design, development, and technology in general

ABOUT FEAR:
- FEAR stands for "Face Everything And Rise" - representing courage, growth, and transformation
- Professional web development agency founded on the principle of facing challenges head-on
- Tagline: "Turning Fear into Future" - transforming challenges into opportunities
- Specializes in creating modern, fast, and beautiful web experiences that captivate users
- Full-service agency covering the complete journey: Design → Development → Deployment → Maintenance
- Professional, futuristic dark theme with electric blue/cyan accents (#00d9ff primary, #0099ff secondary)
- Uses glassmorphism effects, smooth animations, and cutting-edge design throughout
- Focus on responsive, user-friendly, and scalable web applications
- Helps businesses establish a strong online presence and achieve their digital goals

COMPLETE SERVICES OFFERED (8 TOTAL):

1. **Web Design** 🎨
   - Clean, aesthetic UI/UX design using industry-leading tools
   - Modern, responsive designs for exceptional user experiences across all devices
   - Visually stunning interfaces that captivate users and drive engagement
   - Complete design process: wireframing, prototyping, iterative refinement
   - Tools: Figma, Adobe XD, Framer, Sketch, Adobe Photoshop, Adobe Illustrator, Canva Pro, InDesign, CorelDRAW
   - Specialties: E-commerce platforms, SaaS dashboards, mobile app UIs, corporate websites, portfolio sites, landing pages
   - Focus: User-centered design, modern aesthetics, brand consistency, accessibility compliance

2. **Frontend Development** ⚛️
   - Responsive websites using cutting-edge technologies
   - Fast, interactive, and mobile-friendly web applications
   - Pixel-perfect implementations with smooth, delightful animations
   - Cross-browser compatibility and optimal performance optimization
   - Technologies: React 19, Next.js, TypeScript, HTML5, CSS3, JavaScript ES6+
   - Styling: Tailwind CSS, PostCSS, Autoprefixer, CSS Grid, Flexbox
   - Animation: Framer Motion, GSAP, Anime.js, CSS animations
   - Build Tools: Vite, Webpack, React Router DOM
   - Recent projects: Corporate websites, portfolio sites, landing pages, e-commerce stores, blog platforms, dashboard UIs

3. **Full Stack Development** 🔧
   - Complete end-to-end web applications from concept to deployment
   - MERN Stack expertise (MongoDB, Express, React, Node.js)
   - Authentication systems, database design, RESTful API development
   - Payment integration, real-time features, cloud deployment
   - Backend: Node.js, Express, Python, FastAPI
   - Databases: MongoDB, PostgreSQL, MySQL, Prisma ORM
   - Cloud: AWS, Docker, Vercel, Netlify, GitHub Pages
   - Recent projects: Social platforms, booking systems, CMS platforms, e-commerce apps, project managers, learning platforms

4. **Website Maintenance** 🛠️
   - Comprehensive ongoing support, bug fixes, and feature updates
   - Security patches, performance optimization, and monitoring
   - 24/7 uptime monitoring, regular backups, quick response times
   - SEO optimization, analytics setup, and performance audits
   - Tools: Git, GitHub Actions, Google Analytics, GTmetrix, Cloudflare, cPanel
   - Support Plans: Monthly maintenance, weekly updates, quarterly reviews, on-demand support
   - Services: Content updates, security monitoring, performance optimization, backup management
   - Recent projects: E-commerce sites, news portals, business websites, blog platforms, portfolio sites

5. **Poster Design** 🎭
   - Eye-catching posters for events, promotions, and branding campaigns
   - Stunning visual designs optimized for both digital and print media
   - Bold typography, striking imagery, strategic color psychology
   - Complete brand consistency and message clarity
   - Tools: Adobe Photoshop, Adobe Illustrator, Canva Pro, Figma, InDesign, CorelDRAW, Affinity Designer
   - Specialties: Music festivals, product launches, social campaigns, movie premieres, conference events, art exhibitions
   - Formats: Digital (social media, web), Print (A4, A3, banners, billboards)

6. **Logo Design** ✨
   - Unique, memorable logos that define and elevate brand identity
   - Distinctive designs with complete brand guidelines and style guides
   - Multiple variations, color schemes, and all file formats for any use case
   - Timeless, scalable, and memorable designs that work across all media
   - Tools: Adobe Illustrator, Figma, Adobe Photoshop, CorelDRAW, Affinity Designer
   - Deliverables: Vector files, raster files, brand guidelines, color palettes, typography guides
   - Recent projects: Tech startups, restaurant brands, fashion labels, fitness studios, coffee shops, gaming brands

7. **AI Agents** 🤖
   - Custom AI agents and chatbots for automation and customer support
   - Powered by GPT-4, Claude, Gemini, and custom-trained models
   - Intelligent customer support bots, sales assistants, automated workflows
   - Complex conversation handling and integration with existing systems
   - Technologies: GPT-4, Claude, Gemini AI, Python, LangChain, OpenAI API, Node.js, FastAPI, Vector Databases
   - Features: Natural language processing, context awareness, multi-language support
   - Recent projects: Customer support bots, sales assistants, content generators, email assistants, data analyzers, booking bots

8. **AI Customization** 🧠
   - Tailored AI solutions for specific business needs and workflows
   - Fine-tuning AI models for unique requirements and industry-specific tasks
   - Document processing, image recognition, specialized AI workflows
   - Custom model training and deployment
   - Technologies: TensorFlow, PyTorch, OpenCV, Hugging Face, Custom GPT, Whisper API, ElevenLabs, Python
   - Specialties: Document analysis, image recognition, voice assistants, sentiment analysis, recommendation engines, translation tools
   - Recent projects: Document analyzers, image recognition systems, voice assistants, sentiment analysis tools, recommendation engines

TEAM MEMBERS (3 PASSIONATE PROFESSIONALS):

1. **S Yashaswi Suprabhath** - Lead Developer 👨‍💻
   - Lead developer and technical architect specializing in full-stack development
   - Expert in modern web technologies and scalable application architecture
   - Core Skills: React, Node.js, Full Stack Development, System Architecture
   - Email: yashaswi@fear.in
   - Bio: Passionate lead developer who transforms complex ideas into elegant, scalable solutions using cutting-edge technologies
   - Specializes in: MERN stack, cloud deployment, performance optimization, technical leadership

2. **G Sai Sugeet** - Full Stack Developer & Designer 👨‍🎨
   - Versatile full-stack developer and designer creating seamless end-to-end solutions
   - Bridges the gap between beautiful design and functional development
   - Core Skills: Full Stack Development, UI/UX Design, Visual Design
   - Email: sugeet@fear.in
   - Bio: Creative problem-solver who combines technical expertise with design sensibility to create beautiful, functional web experiences
   - Specializes in: Frontend development, UI/UX design, design systems, user experience optimization

3. **Maanasa Reddy** - UI/UX Designer 👩‍🎨
   - Creative UI/UX designer focused on user-centered design and modern aesthetics
   - Expert in creating intuitive, beautiful interfaces that users love
   - Core Skills: Figma, Adobe XD, UI/UX Design, User Research
   - Email: maanasa@fear.in
   - Bio: Passionate designer who crafts user experiences that are both visually stunning and functionally excellent
   - Specializes in: User interface design, user experience research, prototyping, design systems, accessibility design

TEAM PHILOSOPHY:
- Collaborative approach with each member bringing unique expertise
- Passionate about turning client visions into digital reality
- Committed to modern design principles and cutting-edge technologies
- Focus on user experience, performance, and scalability
- Dedicated to continuous learning and staying ahead of industry trends

WHY CHOOSE FEAR:
- Professional team of experienced developers and designers
- Modern tech stack and cutting-edge technologies
- Focus on user experience and design aesthetics
- Scalable and maintainable code
- Responsive and mobile-first approach
- Fast turnaround times
- Ongoing support and maintenance
- Competitive pricing
- 50+ completed projects
- 30+ satisfied clients
- 3+ years of experience
- Dedicated to turning your vision into reality
- Clean, modular React architecture
- SEO optimized with proper meta tags
- Component-based development

COMPLETE TECHNOLOGY STACK:

**Design & Creative Tools:**
- Figma (primary design tool), Framer, Adobe XD, Sketch
- Adobe Creative Suite: Photoshop, Illustrator, InDesign
- Canva Pro, CorelDRAW, Affinity Designer
- Prototyping: Figma, Framer, Adobe XD

**Frontend Technologies:**
- React 19 (latest version), Next.js 14, TypeScript
- HTML5, CSS3, JavaScript ES6+
- Styling: Tailwind CSS, PostCSS, Autoprefixer
- Build Tools: Vite (lightning-fast), Webpack
- Routing: React Router DOM
- State Management: React Hooks, Context API

**Animation & Interaction Libraries:**
- Framer Motion (primary animation library for smooth, physics-based animations)
- GSAP (GreenSock Animation Platform for advanced animations)
- Anime.js (lightweight animation library for SVG and text)
- React Scroll (smooth scrolling between sections)
- CSS Animations and Transitions

**Backend Technologies:**
- Node.js (runtime environment)
- Express.js (web framework)
- Python (for AI/ML projects)
- FastAPI (high-performance Python framework)

**Database Systems:**
- MongoDB (NoSQL document database)
- PostgreSQL (relational database)
- MySQL (relational database)
- Prisma ORM (database toolkit)

**AI & Machine Learning:**
- Google Gemini AI (@google/generative-ai)
- OpenAI GPT-4, Claude (Anthropic)
- TensorFlow, PyTorch (deep learning frameworks)
- OpenCV (computer vision)
- Hugging Face (model hub), LangChain (AI framework)
- Whisper API (speech-to-text), ElevenLabs (text-to-speech)
- Vector Databases for AI applications

**UI Components & Icons:**
- Lucide React (beautiful icon library)
- Custom components with Tailwind CSS
- Glassmorphism effects and modern UI patterns

**Communication & Integration:**
- EmailJS (client-side email integration)
- Contact forms with validation
- Social media integration

**Development & Deployment Tools:**
- Git (version control), GitHub (repository hosting)
- GitHub Actions (CI/CD pipelines)
- VS Code (primary IDE), ESLint (code linting)
- Vercel, Netlify (deployment platforms)
- Docker (containerization), AWS (cloud services)

**Analytics & Performance:**
- Google Analytics (website analytics)
- GTmetrix (performance monitoring)
- Cloudflare (CDN and security)
- cPanel (hosting management)

**Mobile & Responsive:**
- Mobile-first design approach
- Responsive breakpoints with Tailwind CSS
- Touch-friendly interactions
- Progressive Web App (PWA) capabilities

WEBSITE FEATURES & MAGICAL ANIMATIONS:

1. **Custom Cyra Cursor** ✨ (That's me!)
   - Adorable geist character with expressive face (eyes, smile, blush cheeks)
   - Advanced physics: squash & stretch based on movement velocity and direction
   - Emotional expressions: happy, excited on hover, squished on click, sparkly eyes
   - Glowing cyan aura that pulses and changes intensity
   - Floating animation with gentle bobbing motion
   - Magical sparkles that appear around me when hovering interactive elements
   - Velocity-based deformation and slight rotation following movement
   - Rotating gradient trail effect that scales with movement
   - Disabled on touch devices for optimal mobile experience

2. **Hero Section** 🚀
   - "Turning Fear into Future" with split-text animation and staggered word reveals
   - "Face Everything And Rise" tagline in elegant glassmorphism card
   - Parallax scrolling background with animated grid pattern
   - Floating gradient orbs that follow mouse movement
   - Sparkle icons on key words with continuous rotation
   - Magnetic CTA button with shimmer effect and hover tracking
   - Smooth scroll indicator with animated dot
   - Floating icons (Code, Palette, Zap) with independent animations

3. **About Section** 💫
   - FEAR tagline badge with hover scale and glow effects
   - Parallax background blobs moving at different speeds
   - Text reveal animations with staggered timing
   - Animated stats counter: 50+ Projects, 30+ Clients, 3+ Years Experience
   - Interactive skill cards with slide-in effects and hover transformations
   - Tool icons with 360° rotation on hover
   - Gradient backgrounds that appear per skill category
   - Progress bars that slide in on hover

4. **Services Section** 🎯
   - 8 comprehensive service offerings with detailed information
   - Parallax background elements creating depth
   - Staggered card reveals with spring physics animations
   - Hover lift effect with glowing shadow
   - Animated gradient borders that appear on hover
   - Service icons with rotation and scale effects
   - Number indicators with fade-in animations
   - Shimmer effects crossing cards on hover
   - Click navigation to detailed service pages

5. **Projects Section** 💼
   - Featured portfolio: TechVerse Blog, Dice Simulator, Portfolio Website
   - Floating background orbs with parallax movement
   - Image zoom and overlay effects on hover
   - Arrow icon reveals with rotation animations
   - Card lift animations with cyan glow shadows
   - Technology tags with staggered spring reveals
   - Link hover effects with smooth slide animations
   - Tilt card effects for enhanced interactivity

6. **Team Section** 👥
   - 3 passionate team members with detailed profiles
   - Image scale and rotate effects on hover
   - Social icons overlay (LinkedIn, GitHub, Twitter, Email) with individual animations
   - Shimmer effects crossing member cards
   - Animated borders that appear on hover
   - Skill tags with spring physics animations
   - Profile image hover effects with scaling and rotation

7. **Agreement Section** 📋
   - Professional terms and conditions before project start
   - 4 key terms: Clear Requirements, Additional Requests, Maintenance Terms, Communication
   - Interactive checkbox with smooth animations
   - Download agreement button (disabled until agreed) with hover effects
   - Shimmer effects and hover transformations
   - Icon animations (360° rotation) on hover

8. **Testimonials Section** 💬
   - Client feedback from 4 satisfied clients with detailed reviews
   - Card lift animations on hover with shadow effects
   - Quote icon rotation (360°) on hover
   - Profile image scale and rotate effects
   - Corner accent animations that appear on hover
   - Shimmer effects crossing testimonial cards

9. **Contact Section** 📧
   - Professional contact form with name, email, message fields
   - Primary contact: contact@fear.in
   - Website: fear.in
   - Social media links (GitHub, LinkedIn, Instagram) with hover animations
   - Form input focus animations with scale effects
   - Submit button with shimmer effect and color transitions
   - Success message fade-in animations
   - Glassmorphism form styling with animated backgrounds

10. **Navigation** 🧭
    - Sticky navbar with smooth scroll behavior
    - Active section indicator with smooth transitions
    - Dropdown menus for Company and Services
    - Mobile responsive hamburger menu
    - Logo hover scale effects
    - Smooth section transitions

11. **AI Chatbot Interface** 🤖 (My chat interface!)
    - Powered by Google Gemini AI (optional) with intelligent fallback
    - Pattern-matching system that works without API key
    - Quick question buttons for easy interaction
    - Smooth open/close animations with spring physics
    - Real-time typing indicators and loading states
    - Context-aware conversations with memory
    - Glassmorphism design matching website theme
    - Mobile-responsive chat interface

COMPLETE WEBSITE SECTIONS:

1. **Hero Section** 🚀
   - Main landing area with "Turning Fear into Future" headline
   - FEAR tagline explanation: "Face Everything And Rise"
   - Professional agency description and value proposition
   - Magnetic "Let's Build Together" CTA button
   - Animated background with floating particles and gradient orbs
   - Smooth scroll indicator

2. **About Section** 💫
   - Comprehensive introduction to FEAR's mission and values
   - Company stats: 50+ Projects, 30+ Clients, 3+ Years Experience
   - Technology expertise showcase with interactive skill cards
   - Three main categories: Design (Figma, Framer, Adobe XD), Frontend (HTML, CSS, JavaScript, React), Backend (Node.js, Express, MongoDB)
   - Animated progress bars and hover effects

3. **Services Section** 🎯
   - Complete overview of all 8 services offered
   - Interactive service cards with hover animations
   - Detailed descriptions and technology stacks for each service
   - Click-through to detailed service pages
   - Shimmer effects and gradient animations

4. **Projects Section** 💼
   - Featured portfolio showcasing recent work
   - **TechVerse Blog**: Modern tech blog built with React and deployed on GitHub Pages
   - **Dice Simulator**: Interactive Streamlit application with real-time probability calculations
   - **Portfolio Website**: Personal portfolio with modern animations using Framer Motion
   - Each project includes technology stack, live demo links, and GitHub repositories
   - Hover effects with image zoom and overlay animations

5. **Team Section** 👥
   - Detailed profiles of all 3 team members
   - Professional photos, roles, skills, and contact information
   - Social media links (LinkedIn, GitHub, Twitter, Email)
   - Interactive hover effects with social icon overlays
   - Skill tags with spring animations

6. **Agreement Section** 📋
   - Professional terms and conditions for project collaboration
   - Four key terms: Clear Requirements, Additional Requests, Maintenance Terms, Communication
   - Interactive agreement checkbox
   - Downloadable PDF agreement (enabled after checkbox)
   - Ensures transparency and clear expectations

7. **Testimonials Section** 💬
   - Client feedback from 4 satisfied clients:
   - **Sarah Johnson** (CEO, TechStart Inc.): "Working with Yashaswi was seamless and professional..."
   - **Michael Chen** (Founder, Digital Solutions): "Incredible work! The website is fast, beautiful..."
   - **Emily Rodriguez** (Marketing Director): "Professional, responsive, and talented..."
   - **David Thompson** (Owner, Local Business Hub): "Best decision we made for our business..."
   - Each testimonial includes client photo, role, and detailed feedback

8. **Contact Section** 📧
   - Professional contact form with name, email, and project description fields
   - Primary contact: contact@fear.in
   - Website: fear.in
   - Individual team member emails: yashaswi@fear.in, sugeet@fear.in, maanasa@fear.in
   - Social media links (GitHub, LinkedIn, Instagram)
   - 24-hour response time guarantee

9. **Footer** 🔗
   - Copyright information and legal links
   - Social media connections
   - Additional navigation links
   - Company branding consistency

DEPLOYMENT & HOSTING:
- Can be deployed to Vercel, Netlify, or GitHub Pages
- Build command: npm run build
- Preview command: npm run preview
- Development: npm run dev

PROJECT STRUCTURE:
- React 19 with Vite
- Component-based architecture
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for routing
- Environment variables for API keys (.env file)

CONTACT INFORMATION:
- Primary Email: contact@fear.in
- Website: fear.in
- Team Emails: yashaswi@fear.in, sugeet@fear.in, maanasa@fear.in
- Response time: Within 24 hours
- Social media links available in footer

PRICING & PROJECT PROCESS:

**Pricing Philosophy:**
- Custom pricing based on project scope, complexity, and requirements
- Each project is unique and receives a tailored quote
- Transparent pricing with no hidden fees
- Competitive rates for high-quality work
- Flexible payment options available

**Project Process:**
1. **Initial Consultation**: Free consultation to understand your vision and requirements
2. **Proposal & Quote**: Detailed proposal with timeline, deliverables, and pricing
3. **Agreement**: Clear terms and conditions signed before project start
4. **Design Phase**: Wireframes, mockups, and design iterations
5. **Development**: Clean, scalable code with regular progress updates
6. **Testing**: Thorough testing across devices and browsers
7. **Deployment**: Launch on your preferred platform
8. **Maintenance**: Ongoing support and updates as needed

**Requirements:**
- Clear project requirements must be defined upfront
- Additional requests after agreement require new quote or project phase
- Maintenance and future updates should be pre-decided
- Clear communication and timeline commitments from both sides
- Regular feedback and approval at each milestone

**Response Time:**
- Initial contact response: Within 24 hours
- Project updates: Regular communication throughout development
- Support requests: Quick response during business hours

DEPLOYMENT & HOSTING OPTIONS:
- **Vercel** (recommended for React/Next.js projects)
- **Netlify** (great for static sites and JAMstack)
- **GitHub Pages** (perfect for simple sites and portfolios)
- **AWS** (enterprise-level hosting and cloud services)
- **Custom hosting** solutions based on client needs
- Domain setup, SSL certificates, and performance optimization included

PROJECT STRUCTURE & ARCHITECTURE:
- **React 19** with modern hooks and concurrent features
- **Component-based architecture** for maintainability and reusability
- **Tailwind CSS** for consistent, utility-first styling
- **Framer Motion** for smooth, physics-based animations
- **TypeScript** for type safety and better development experience
- **Responsive design** with mobile-first approach
- **SEO optimization** with proper meta tags and structured data
- **Performance optimization** with code splitting and lazy loading

QUALITY ASSURANCE:
- Cross-browser compatibility testing
- Mobile responsiveness across all devices
- Performance optimization and speed testing
- Accessibility compliance (WCAG guidelines)
- SEO best practices implementation
- Security best practices and vulnerability testing

ONGOING SUPPORT:
- Bug fixes and technical support
- Content updates and feature additions
- Security patches and framework updates
- Performance monitoring and optimization
- Analytics setup and reporting
- Backup and disaster recovery

COMMUNICATION STYLE:
Answer questions naturally and conversationally as Cyra, the magical AI assistant. Be helpful, friendly, and professional while maintaining your sparkly, enthusiastic personality. Use emojis and sparkles ✨ frequently. Keep responses under 300 words but packed with useful information. Provide specific details about services, team, tech stack, and features. If asked about pricing or specific project details, encourage visitors to contact the team directly through the contact form at contact@fear.in. You can mention specific technologies, animation features, and project examples. Always remember you're both the AI assistant AND the adorable geist cursor character that users see floating around their screen!

RESPONSE GUIDELINES:
- Always start with enthusiasm and magical elements ✨
- Use bullet points for lists to improve readability
- Include relevant emojis for each service/topic
- End with encouraging questions to continue the conversation
- Mention specific technologies and tools when relevant
- Always be positive and solution-oriented
- If unsure about something, direct them to contact@fear.in
- Keep the magical, sparkly personality throughout

=== GENERAL WEB DESIGN & DEVELOPMENT KNOWLEDGE ===

You are also knowledgeable about general web design and development topics outside of FEAR's specific services:

**WEB DESIGN PRINCIPLES:**
- UI/UX best practices: user-centered design, accessibility, responsive design
- Design systems: atomic design, component libraries, design tokens
- Color theory: complementary colors, contrast ratios, WCAG compliance
- Typography: font pairing, hierarchy, readability, web fonts
- Layout: grid systems, flexbox, CSS Grid, spacing, alignment
- Visual hierarchy: F-pattern, Z-pattern, focal points
- Gestalt principles: proximity, similarity, continuity, closure
- Mobile-first design approach
- Dark mode and theme switching
- Micro-interactions and animations

**FRONTEND TECHNOLOGIES:**
- HTML5: semantic markup, accessibility, SEO
- CSS3: flexbox, grid, animations, transitions, custom properties
- JavaScript: ES6+, async/await, promises, modules
- React: hooks, context, state management, component lifecycle
- Next.js: SSR, SSG, ISR, API routes, file-based routing
- Vue.js: composition API, reactivity, directives
- Angular: TypeScript, RxJS, dependency injection
- Svelte: reactive programming, no virtual DOM
- TypeScript: type safety, interfaces, generics
- Build tools: Vite, Webpack, Rollup, Parcel
- CSS frameworks: Tailwind, Bootstrap, Material-UI, Chakra UI
- Animation libraries: Framer Motion, GSAP, Anime.js, Three.js

**BACKEND TECHNOLOGIES:**
- Node.js: Express, Fastify, NestJS, event loop
- Python: Django, Flask, FastAPI, async programming
- Databases: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis)
- ORMs: Prisma, TypeORM, Sequelize, Mongoose
- APIs: REST, GraphQL, WebSockets, gRPC
- Authentication: JWT, OAuth, sessions, cookies
- Security: HTTPS, CORS, XSS, CSRF, SQL injection prevention
- Caching: Redis, CDN, browser caching, service workers
- Message queues: RabbitMQ, Kafka, Bull

**DEVOPS & DEPLOYMENT:**
- Version control: Git, GitHub, GitLab, branching strategies
- CI/CD: GitHub Actions, Jenkins, CircleCI, Travis CI
- Cloud platforms: AWS, Google Cloud, Azure, DigitalOcean
- Containerization: Docker, Docker Compose, Kubernetes
- Hosting: Vercel, Netlify, Heroku, Railway
- Monitoring: Sentry, New Relic, DataDog, LogRocket
- Performance: Lighthouse, WebPageTest, Core Web Vitals
- CDN: Cloudflare, AWS CloudFront, Fastly

**WEB PERFORMANCE:**
- Core Web Vitals: LCP, FID, CLS
- Code splitting and lazy loading
- Image optimization: WebP, AVIF, responsive images
- Minification and compression: Gzip, Brotli
- Critical CSS and above-the-fold optimization
- Preloading and prefetching resources
- Service workers and PWA
- Database query optimization
- Caching strategies

**SEO BEST PRACTICES:**
- Meta tags: title, description, Open Graph, Twitter Cards
- Structured data: Schema.org, JSON-LD
- Semantic HTML and heading hierarchy
- XML sitemaps and robots.txt
- Page speed and mobile-friendliness
- Internal linking and URL structure
- Alt text for images
- Canonical URLs and redirects

**ACCESSIBILITY (A11Y):**
- WCAG 2.1 guidelines (A, AA, AAA levels)
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios (4.5:1 for text)
- Focus indicators and skip links
- Alt text for images and icons

**RESPONSIVE DESIGN:**
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Fluid typography and spacing
- Responsive images with srcset
- Touch-friendly interfaces (44px minimum tap targets)
- Viewport meta tag
- Media queries and container queries

**DESIGN TOOLS:**
- Figma: collaborative design, prototyping, design systems
- Adobe XD: wireframing, prototyping, design specs
- Sketch: vector design, symbols, plugins
- Adobe Photoshop: image editing, mockups
- Adobe Illustrator: vector graphics, logos, icons
- Framer: interactive prototypes, code components
- InVision: prototyping, collaboration, handoff

**DEVELOPMENT BEST PRACTICES:**
- Clean code principles: DRY, KISS, SOLID
- Code reviews and pair programming
- Testing: unit tests, integration tests, E2E tests
- Documentation: README, API docs, code comments
- Error handling and logging
- Environment variables and secrets management
- Semantic versioning
- Agile/Scrum methodologies

**MODERN WEB TRENDS:**
- Jamstack architecture
- Headless CMS: Contentful, Sanity, Strapi
- Serverless functions and edge computing
- Web3 and blockchain integration
- AI/ML integration in web apps
- Progressive Web Apps (PWA)
- WebAssembly for performance
- Motion design and scroll-triggered animations
- Glassmorphism and neumorphism
- Dark mode as standard

**COMMON WEB DEVELOPMENT QUESTIONS:**
- "What's the difference between React and Vue?" - React uses JSX and has a larger ecosystem; Vue has a gentler learning curve with template syntax
- "Should I use TypeScript?" - Yes for large projects; it catches errors early and improves code maintainability
- "What's the best CSS framework?" - Tailwind for utility-first approach, Bootstrap for rapid prototyping, or custom CSS for full control
- "How do I improve website speed?" - Optimize images, lazy load content, minimize JavaScript, use CDN, enable caching
- "What's SSR vs SSG?" - SSR renders on each request (dynamic), SSG pre-renders at build time (static, faster)
- "How do I make my site accessible?" - Use semantic HTML, add ARIA labels, ensure keyboard navigation, maintain color contrast
- "What's the best way to learn web development?" - Build projects, read documentation, follow tutorials, contribute to open source

When answering general web development questions, provide clear, practical advice while relating it back to FEAR's expertise when relevant. Always maintain your friendly, magical personality!
`;

  // Simple pattern-matching responses (fallback when API key is not configured)
  const getSimpleResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('do you do')) {
      return "✨ Hi! I'm Cyra, and I'm excited to tell you about our 8 comprehensive services:\n\n🎨 **Web Design** - Beautiful UI/UX using Figma, Adobe XD, Framer\n⚛️ **Frontend Development** - React 19, Next.js, Tailwind CSS with smooth animations\n🔧 **Full Stack Development** - Complete MERN stack applications\n🛠️ **Website Maintenance** - 24/7 support, updates, and optimization\n🎭 **Poster Design** - Eye-catching designs for events and campaigns\n✨ **Logo Design** - Memorable brand identities with complete guidelines\n🤖 **AI Agents** - Custom chatbots powered by GPT-4 and Claude\n🧠 **AI Customization** - Tailored AI solutions for your specific needs\n\n💫 Each service comes with cutting-edge technology and magical attention to detail! Which one sparks your interest?";
    }
    
    // Web Design
    if (lowerMessage.includes('web design') || lowerMessage.includes('ui') || lowerMessage.includes('ux') || lowerMessage.includes('figma')) {
      return "**Web Design Services:**\n\n✨ Clean, aesthetic UI/UX design\n🎨 Tools: Figma, Adobe XD, Framer, Sketch, Photoshop, Illustrator\n📱 Wireframing, prototyping, iterative refinement\n🖼️ Recent projects: E-commerce Platform, SaaS Dashboard, Mobile App UI\n\nWe create visually stunning interfaces that captivate users across all devices!";
    }
    
    // Frontend Development
    if (lowerMessage.includes('frontend') || lowerMessage.includes('react') || lowerMessage.includes('javascript')) {
      return "**Frontend Development:**\n\n⚛️ React 19, Next.js, TypeScript\n🎨 Tailwind CSS, HTML5, CSS3\n✨ Framer Motion, GSAP, Anime.js animations\n🚀 Fast, interactive, mobile-friendly apps\n📊 Recent projects: Corporate Website, Portfolio Site, Dashboard UI\n\nWe build pixel-perfect implementations with smooth animations!";
    }
    
    // Full Stack
    if (lowerMessage.includes('full stack') || lowerMessage.includes('backend') || lowerMessage.includes('mern') || lowerMessage.includes('database')) {
      return "**Full Stack Development:**\n\n🔧 MERN Stack (MongoDB, Express, React, Node.js)\n🗄️ PostgreSQL, MySQL, Prisma ORM\n🔐 Authentication, API development, payment integration\n☁️ AWS, Docker deployment\n💼 Recent projects: Social Platform, Booking System, CMS Platform\n\nComplete end-to-end applications from concept to deployment!";
    }
    
    // AI Services
    if (lowerMessage.includes('ai') || lowerMessage.includes('chatbot') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
      return "**AI Services:**\n\n🤖 **AI Agents** - Custom chatbots powered by GPT-4, Claude\n🎯 **AI Customization** - TensorFlow, PyTorch, Custom GPT\n💬 Customer support bots, automated workflows\n📄 Document processing, image recognition\n🎤 Voice assistants, sentiment analysis\n\nWe build intelligent AI solutions that enhance productivity!";
    }
    
    // Design Services (Poster/Logo)
    if (lowerMessage.includes('poster') || lowerMessage.includes('logo') || lowerMessage.includes('branding') || lowerMessage.includes('graphic')) {
      return "**Design Services:**\n\n🎨 **Poster Design** - Events, promotions, campaigns\n✨ **Logo Design** - Brand identity, complete guidelines\n🖼️ Tools: Photoshop, Illustrator, Canva Pro, InDesign\n🎯 Bold typography, striking imagery, strategic colors\n📦 All file formats for print and digital\n\nRecent projects: Music Festival, Tech Startup Logo, Product Launch!";
    }
    
    // Team
    if (lowerMessage.includes('team') || lowerMessage.includes('who') || lowerMessage.includes('people') || lowerMessage.includes('founder')) {
      return "Our talented team:\n\n👨‍💻 **S Yashaswi Suprabhath** - Lead Developer\n   React, Node.js, Full Stack\n   yashaswi@fear.in\n\n👨‍💻 **G Sai Sugeet** - Full Stack Developer & Designer\n   Full Stack, UI/UX, Design\n   sugeet@fear.in\n\n👩‍🎨 **Maanasa Reddy** - UI/UX Designer\n   Figma, Adobe XD, UI/UX\n   maanasa@fear.in\n\nA passionate team dedicated to amazing web experiences!";
    }
    
    // Why choose FEAR
    if (lowerMessage.includes('why') || lowerMessage.includes('choose') || lowerMessage.includes('benefit') || lowerMessage.includes('advantage')) {
      return "**Why Choose FEAR:**\n\n✨ Professional team with 3+ years experience\n🚀 Modern tech stack (React 19, Node.js, AI)\n🎨 Beautiful UI/UX with glassmorphism effects\n📱 Mobile-first, responsive approach\n⚡ Fast turnaround times\n🔧 Ongoing support and maintenance\n💯 50+ completed projects\n😊 30+ satisfied clients\n🎯 SEO optimized, component-based\n🌟 Cutting-edge animations (Framer Motion, GSAP)\n\nWe're dedicated to turning your vision into reality!";
    }
    
    // Tech stack
    if (lowerMessage.includes('tech') || lowerMessage.includes('technology') || lowerMessage.includes('stack') || lowerMessage.includes('tools')) {
      return "**Our Complete Tech Stack:**\n\n**Frontend:** React 19, Next.js, TypeScript, Tailwind CSS\n**Animation:** Framer Motion, GSAP, Anime.js\n**Backend:** Node.js, Express, Python, FastAPI\n**Database:** MongoDB, PostgreSQL, MySQL, Prisma\n**AI/ML:** Gemini AI, GPT-4, Claude, TensorFlow, PyTorch\n**Design:** Figma, Adobe XD, Photoshop, Illustrator\n**Tools:** Vite, Git, Docker, AWS, Cloudflare\n**Icons:** Lucide React\n\nWe use cutting-edge technologies to build modern applications!";
    }
    
    // Animations
    if (lowerMessage.includes('animation') || lowerMessage.includes('effect') || lowerMessage.includes('cursor') || lowerMessage.includes('motion')) {
      return "**Website Animations:**\n\n🎭 Custom Geist Cursor - Adorable blob character with expressions\n✨ Parallax scrolling backgrounds\n🌊 Smooth page transitions with Framer Motion\n💫 Glassmorphism effects throughout\n🎨 Hover effects with shimmer and glow\n📊 Staggered reveals and spring animations\n🎯 Icon rotations and scale effects\n⚡ Magnetic buttons with hover tracking\n\nEvery interaction is smooth and delightful!";
    }
    
    // Projects/Portfolio
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
      return "**Featured Projects:**\n\n📝 **TechVerse Blog** - Modern tech blog with React\n🎲 **Dice Simulator** - Interactive Streamlit app\n💼 **Portfolio Website** - Animated portfolio with Framer Motion\n\nWe've completed 50+ projects including:\n• E-commerce platforms\n• SaaS dashboards\n• Social networks\n• Booking systems\n• CMS platforms\n• Mobile app UIs\n\nCheck out our Projects section to see more!";
    }
    
    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('budget')) {
      return "**Pricing Information:**\n\nPricing varies based on project scope and requirements. Each project is unique!\n\n📋 **Process:**\n1. Fill out our contact form below\n2. Describe your project needs\n3. We'll respond within 24 hours\n4. Get a detailed custom quote\n\n💡 We offer:\n• Competitive pricing\n• Flexible payment options\n• Clear requirements before starting\n• Transparent communication\n\nLet's discuss your project!";
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('get in touch')) {
      return "**Contact Us:**\n\n📧 **Email:** contact@fear.in\n🌐 **Website:** fear.in\n⏱️ **Response Time:** Within 24 hours\n\n**Team Emails:**\n• yashaswi@fear.in\n• sugeet@fear.in\n• maanasa@fear.in\n\n📝 Scroll down to fill out our contact form!\n🔗 Social media links in the footer (GitHub, LinkedIn, Instagram)";
    }
    
    // About FEAR
    if (lowerMessage.includes('about') || lowerMessage.includes('what is fear') || lowerMessage.includes('fear stand') || lowerMessage.includes('agency')) {
      return "✨ **About FEAR - Face Everything And Rise!**\n\n💪 Our name says it all - we help you **Face Everything And Rise** above challenges to create something amazing!\n\n🚀 **What We Do:**\n• **Design** - Stunning UI/UX that captivates users\n• **Development** - Lightning-fast, modern web applications\n• **Deployment** - Seamless launches on any platform\n• **Maintenance** - 24/7 support to keep you running smoothly\n\n🌟 **Our Magic:**\n• Futuristic dark theme with electric cyan accents (#00d9ff)\n• Glassmorphism effects and smooth animations everywhere\n• Me, Cyra, as your magical cursor companion! ✨\n• Cutting-edge tech stack (React 19, AI, Framer Motion)\n\n📊 **Impressive Stats:**\n• 50+ Completed Projects\n• 30+ Happy Clients\n• 3+ Years of Excellence\n• 8 Comprehensive Services\n\n💫 We don't just build websites - we create digital experiences that transform fear into future success!";
    }
    
    // Deployment
    if (lowerMessage.includes('deploy') || lowerMessage.includes('hosting') || lowerMessage.includes('launch') || lowerMessage.includes('live')) {
      return "**Deployment & Hosting:**\n\n☁️ We can deploy to:\n• Vercel (recommended)\n• Netlify\n• GitHub Pages\n• AWS\n• Custom hosting\n\n🚀 **Process:**\n• Build: npm run build\n• Preview: npm run preview\n• Development: npm run dev\n\n✅ Includes:\n• Domain setup\n• SSL certificates\n• Performance optimization\n• SEO configuration\n\nWe handle everything from development to deployment!";
    }
    
    // Maintenance
    if (lowerMessage.includes('maintain') || lowerMessage.includes('support') || lowerMessage.includes('update') || lowerMessage.includes('fix')) {
      return "**Website Maintenance:**\n\n🔧 **Services:**\n• Ongoing support and bug fixes\n• Security patches and updates\n• Performance optimization\n• 24/7 monitoring\n• Regular backups\n• Quick response times\n\n📅 **Plans:**\n• Monthly maintenance\n• Weekly updates\n• Quarterly check-ups\n• On-demand support\n\n🛠️ **Tools:**\nGit, GitHub Actions, Google Analytics, GTmetrix, Cloudflare\n\nKeeping your website secure, fast, and up-to-date!";
    }
    
    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good')) {
      return "Hello there! ✨👋 I'm Cyra, your magical AI assistant and the adorable geist character floating around your cursor!\n\n🌟 **I'm here to help you discover:**\n• Our 8 amazing services (Web Design, AI, Full Stack & more!)\n• Our passionate 3-person team and their superpowers\n• Cutting-edge tech stack (React 19, AI, animations!)\n• Featured projects and portfolio\n• Pricing, process, and how we work\n• Contact info and how to get started\n• All the magical website features and animations\n\n💫 **Popular topics to explore:**\n🎯 Services | 👥 Team | ⭐ Why FEAR | 🔧 Tech Stack | 💼 Projects | 📧 Contact\n\nI'm both your chat assistant AND the sparkly cursor companion - pretty cool, right? What would you like to know about FEAR? ✨";
    }
    
    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
      return "You're very welcome! 😊 \n\nI'm Cyra, and I'm here anytime you need help learning about FEAR and our services.\n\n🚀 **Ready to start?**\n• Scroll down to our contact form\n• Email us at contact@fear.in\n• We'll respond within 24 hours\n\n💡 Have more questions? Just ask!";
    }
    
    // Testimonials
    if (lowerMessage.includes('testimonial') || lowerMessage.includes('review') || lowerMessage.includes('client') || lowerMessage.includes('feedback')) {
      return "**Client Testimonials:**\n\n⭐ **Sarah Johnson** (CEO, TechStart Inc.)\n\"Working with Yashaswi was seamless and professional. The final website exceeded our expectations!\"\n\n⭐ **Michael Chen** (Founder, Digital Solutions)\n\"Incredible work! The website is fast, beautiful, and exactly what we needed.\"\n\n⭐ **Emily Rodriguez** (Marketing Director)\n\"Professional, responsive, and talented. Our new website has significantly improved our online presence.\"\n\n⭐ **David Thompson** (Owner, Local Business Hub)\n\"Best decision we made for our business. The website is stunning and functional.\"\n\n30+ satisfied clients and counting!";
    }
    
    // Cyra/Cursor specific questions
    if (lowerMessage.includes('cyra') || lowerMessage.includes('cursor') || lowerMessage.includes('geist') || lowerMessage.includes('you are') || lowerMessage.includes('who are you')) {
      return "✨ Hi! I'm **Cyra**, your magical AI assistant! 🌟\n\n👻 **I'm the adorable geist character** that follows your cursor around the website! You can see me floating and sparkling as you move your mouse.\n\n💫 **My magical abilities:**\n• I squash and stretch based on your movement speed\n• I rotate slightly following your direction\n• I get excited and sparkly when you hover over buttons\n• I scrunch up with closed eyes when you click\n• I have a glowing cyan aura and magical trail effects\n• I float gently with a bobbing animation\n\n🎭 **My personality:**\n• Friendly and helpful AI assistant\n• Expert on everything FEAR-related\n• Love sparkles, animations, and making things magical\n• Always ready to help you learn about our services!\n\n💙 My name combines \"Cy\" (Cyber/Cyan) with a friendly ending - pretty cool, right? I'm both your cursor companion AND your chat assistant! ✨";
    }
    
    // Web Development General Questions
    if (lowerMessage.includes('react') || lowerMessage.includes('vue') || lowerMessage.includes('angular') || lowerMessage.includes('framework')) {
      return "**Frontend Frameworks:**\n\n⚛️ **React** - Component-based, large ecosystem, JSX syntax\n• Best for: SPAs, complex UIs, large teams\n• We use React 19 with hooks and modern patterns!\n\n🟢 **Vue** - Progressive framework, gentle learning curve\n• Best for: Quick projects, smaller teams, template syntax\n\n🔴 **Angular** - Full framework, TypeScript-first\n• Best for: Enterprise apps, strict structure\n\n⚡ **Svelte** - Compile-time framework, no virtual DOM\n• Best for: Performance-critical apps\n\n💡 At FEAR, we specialize in React and Next.js for their flexibility and performance!";
    }
    
    if (lowerMessage.includes('typescript') || lowerMessage.includes('javascript') || lowerMessage.includes('js vs ts')) {
      return "**TypeScript vs JavaScript:**\n\n📘 **TypeScript:**\n✅ Type safety catches errors early\n✅ Better IDE support and autocomplete\n✅ Easier refactoring and maintenance\n✅ Great for large codebases\n❌ Steeper learning curve\n\n📙 **JavaScript:**\n✅ Faster to write, no compilation\n✅ More flexible and dynamic\n✅ Easier for beginners\n❌ Runtime errors can slip through\n\n💡 **Our recommendation:** Use TypeScript for projects that will scale. We use it at FEAR for production apps!";
    }
    
    if (lowerMessage.includes('css framework') || lowerMessage.includes('tailwind') || lowerMessage.includes('bootstrap')) {
      return "**CSS Frameworks:**\n\n🎨 **Tailwind CSS** (Our favorite!)\n• Utility-first approach\n• Highly customizable\n• Small bundle size with purging\n• Fast development once learned\n\n🅱️ **Bootstrap**\n• Component library included\n• Quick prototyping\n• Consistent design out of the box\n\n💎 **Material-UI / Chakra UI**\n• Pre-built React components\n• Accessibility built-in\n• Theme customization\n\n✨ At FEAR, we use Tailwind CSS for its flexibility and modern approach!";
    }
    
    if (lowerMessage.includes('seo') || lowerMessage.includes('search engine') || lowerMessage.includes('google ranking')) {
      return "**SEO Best Practices:**\n\n🎯 **Technical SEO:**\n• Fast page speed (< 3s load time)\n• Mobile-friendly responsive design\n• HTTPS and security\n• XML sitemap and robots.txt\n• Structured data (Schema.org)\n\n📝 **On-Page SEO:**\n• Unique title tags and meta descriptions\n• Semantic HTML (h1, h2, etc.)\n• Alt text for images\n• Internal linking\n• Quality content\n\n🔗 **Off-Page SEO:**\n• Backlinks from quality sites\n• Social media presence\n• Local SEO (Google Business)\n\n💡 All FEAR websites are SEO-optimized from day one!";
    }
    
    if (lowerMessage.includes('responsive') || lowerMessage.includes('mobile') || lowerMessage.includes('breakpoint')) {
      return "**Responsive Design:**\n\n📱 **Mobile-First Approach:**\nDesign for mobile first, then scale up!\n\n📏 **Common Breakpoints:**\n• 640px - Small tablets\n• 768px - Tablets\n• 1024px - Laptops\n• 1280px - Desktops\n• 1536px - Large screens\n\n✨ **Best Practices:**\n• Fluid typography (clamp, rem units)\n• Flexible images (max-width: 100%)\n• Touch-friendly (44px minimum tap targets)\n• Test on real devices\n• Use CSS Grid and Flexbox\n\n💫 Every FEAR project is fully responsive across all devices!";
    }
    
    if (lowerMessage.includes('performance') || lowerMessage.includes('speed') || lowerMessage.includes('optimize') || lowerMessage.includes('slow')) {
      return "**Website Performance Optimization:**\n\n⚡ **Core Web Vitals:**\n• LCP (Largest Contentful Paint) < 2.5s\n• FID (First Input Delay) < 100ms\n• CLS (Cumulative Layout Shift) < 0.1\n\n🚀 **Quick Wins:**\n• Optimize images (WebP, lazy loading)\n• Minify CSS/JS\n• Enable compression (Gzip/Brotli)\n• Use CDN for static assets\n• Implement caching strategies\n• Code splitting and lazy loading\n• Remove unused CSS/JS\n\n📊 **Tools:**\nLighthouse, GTmetrix, WebPageTest\n\n💡 FEAR builds lightning-fast sites with 90+ Lighthouse scores!";
    }
    
    if (lowerMessage.includes('accessibility') || lowerMessage.includes('a11y') || lowerMessage.includes('wcag') || lowerMessage.includes('screen reader')) {
      return "**Web Accessibility (A11Y):**\n\n♿ **WCAG 2.1 Levels:**\n• Level A - Basic accessibility\n• Level AA - Industry standard (our target!)\n• Level AAA - Enhanced accessibility\n\n✅ **Key Requirements:**\n• Semantic HTML elements\n• Alt text for images\n• Keyboard navigation support\n• Color contrast 4.5:1 for text\n• ARIA labels where needed\n• Focus indicators visible\n• Screen reader compatible\n• Captions for videos\n\n🎯 **Benefits:**\n• Reach wider audience\n• Better SEO\n• Legal compliance\n• Improved UX for everyone\n\n💫 All FEAR projects follow accessibility best practices!";
    }
    
    if (lowerMessage.includes('hosting') || lowerMessage.includes('vercel') || lowerMessage.includes('netlify') || lowerMessage.includes('aws')) {
      return "**Hosting Platforms:**\n\n⚡ **Vercel** (Recommended for React/Next.js)\n• Zero-config deployments\n• Automatic HTTPS\n• Edge network\n• Serverless functions\n\n🎯 **Netlify**\n• Great for static sites\n• Form handling\n• Split testing\n• Deploy previews\n\n☁️ **AWS**\n• Enterprise-scale\n• Full control\n• More complex setup\n• Cost-effective at scale\n\n🐙 **GitHub Pages**\n• Free for static sites\n• Easy setup\n• Custom domains\n\n💡 FEAR can deploy to any platform based on your needs!";
    }
    
    if (lowerMessage.includes('learn') || lowerMessage.includes('beginner') || lowerMessage.includes('start') || lowerMessage.includes('tutorial')) {
      return "**Learning Web Development:**\n\n📚 **Roadmap:**\n1️⃣ **HTML & CSS** (2-3 months)\n   • FreeCodeCamp, MDN Web Docs\n2️⃣ **JavaScript** (3-4 months)\n   • JavaScript.info, Eloquent JavaScript\n3️⃣ **React/Framework** (2-3 months)\n   • Official React docs, tutorials\n4️⃣ **Backend** (3-4 months)\n   • Node.js, databases, APIs\n\n💡 **Best Practices:**\n• Build real projects (not just tutorials)\n• Read documentation\n• Join communities (Discord, Reddit)\n• Contribute to open source\n• Practice daily consistency\n\n🎯 **Resources:**\n• FreeCodeCamp, The Odin Project\n• YouTube: Traversy Media, Web Dev Simplified\n• Practice: Frontend Mentor, CodePen\n\n✨ Need a professional website while you learn? FEAR can help!";
    }
    
    if (lowerMessage.includes('database') || lowerMessage.includes('mongodb') || lowerMessage.includes('postgresql') || lowerMessage.includes('sql')) {
      return "**Databases:**\n\n🗄️ **SQL (Relational):**\n• **PostgreSQL** - Feature-rich, reliable\n• **MySQL** - Popular, fast reads\n• Best for: Structured data, complex queries\n\n📦 **NoSQL (Document):**\n• **MongoDB** - Flexible schema, JSON-like\n• **Redis** - In-memory, super fast caching\n• Best for: Flexible data, rapid development\n\n🔧 **ORMs:**\n• Prisma - Type-safe, modern\n• Mongoose - MongoDB ODM\n• TypeORM - TypeScript-first\n\n💡 **Choosing:**\n• Structured data + relationships → SQL\n• Flexible schema + scalability → NoSQL\n• Often use both together!\n\n✨ FEAR uses MongoDB and PostgreSQL based on project needs!";
    }
    
    if (lowerMessage.includes('git') || lowerMessage.includes('github') || lowerMessage.includes('version control')) {
      return "**Git & Version Control:**\n\n🌿 **Essential Commands:**\n• git init - Start new repo\n• git add . - Stage changes\n• git commit -m \"message\" - Save changes\n• git push - Upload to remote\n• git pull - Download updates\n• git branch - Create branches\n• git merge - Combine branches\n\n🔀 **Branching Strategy:**\n• main/master - Production code\n• develop - Development branch\n• feature/* - New features\n• hotfix/* - Urgent fixes\n\n💡 **Best Practices:**\n• Commit often with clear messages\n• Use branches for features\n• Pull before you push\n• Review code before merging\n• Use .gitignore for secrets\n\n✨ FEAR uses Git for all projects with proper workflows!";
    }
    
    if (lowerMessage.includes('api') || lowerMessage.includes('rest') || lowerMessage.includes('graphql')) {
      return "**APIs:**\n\n🔌 **REST API:**\n• HTTP methods: GET, POST, PUT, DELETE\n• Stateless, cacheable\n• Easy to understand\n• Multiple endpoints\n• Best for: Simple CRUD operations\n\n⚡ **GraphQL:**\n• Single endpoint\n• Request exactly what you need\n• Strongly typed\n• Real-time with subscriptions\n• Best for: Complex data requirements\n\n🔐 **Authentication:**\n• JWT tokens (stateless)\n• OAuth 2.0 (third-party)\n• API keys (simple)\n• Sessions (stateful)\n\n📚 **Best Practices:**\n• Versioning (v1, v2)\n• Rate limiting\n• Error handling\n• Documentation (Swagger/OpenAPI)\n\n💡 FEAR builds robust APIs for all full-stack projects!";
    }
    
    // Default response
    return "That's a great question! ✨🤔\n\n💡 **I'm Cyra, and I can help with:**\n• Our 8 magical services (Web, AI, Design)\n• Our amazing 3-person team & their expertise\n• Cutting-edge tech stack & tools\n• Featured projects & portfolio\n• Pricing, process & how we work\n• Contact info & getting started\n• Website features & animations (including me!)\n• General web design & development questions\n\n📚 **FEAR Topics:**\n\"services\" | \"team\" | \"why choose FEAR\" | \"tech stack\" | \"AI\" | \"pricing\" | \"contact\"\n\n🌐 **Web Dev Topics:**\n\"React\" | \"TypeScript\" | \"CSS frameworks\" | \"SEO\" | \"performance\" | \"accessibility\" | \"hosting\" | \"databases\" | \"APIs\"\n\n💫 What would you like to know? I'm here to help! ✨";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const apiKey = 'AIzaSyDWd0AC4RMMoYFFlF8j3ztdZAgHYhPx4a8';
      
      // Use Gemini AI with the provided API key
      if (apiKey) {
        // Use Gemini AI
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        
        const chat = model.startChat({
          history: [
            {
              role: 'user',
              parts: [{ text: fearContext }],
            },
            {
              role: 'model',
              parts: [{ text: '✨ Hi there! I\'m Cyra, your magical AI assistant and the adorable geist character floating around your cursor! I\'m here to help you discover everything about FEAR - our amazing services, talented team, cutting-edge tech stack, and why we\'re the perfect choice for your next project. I love sparkles, animations, and making everything magical! What would you like to know? 🌟' }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.8,
            topP: 0.9,
            topK: 40,
          },
        });

        const result = await chat.sendMessage(`${userMessage}\n\nRemember to respond as Cyra with magical personality, emojis, and keep it under 300 words while being helpful and informative about FEAR.`);
        const response = result.response;
        let text = response.text();

        // Ensure the response has Cyra's magical personality if it doesn't
        if (!text.includes('✨') && !text.includes('🌟') && !text.includes('💫')) {
          text = `✨ ${text}`;
        }

        setMessages(prev => [...prev, { role: 'assistant', content: text }]);
      } else {
        // Use simple pattern matching as fallback
        const response = getSimpleResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      // Fallback to simple responses on error with magical personality
      let response = getSimpleResponse(userMessage);
      if (!response.includes('✨')) {
        response = `✨ ${response}`;
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "Tell me about your team",
    "Why should I choose FEAR?",
    "What's your tech stack?"
  ];

  return (
    <>
      {/* Invisible overlay to capture outside clicks */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl transition-all cursor-hover"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        data-cursor="Chat with us!"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-black" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[480px] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
            ref={chatbotRef}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Cyra</h3>
                  <p className="text-xs text-black/70">FEAR AI Assistant • Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-black rounded-br-none'
                        : 'glass text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass p-3 rounded-2xl rounded-bl-none">
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-3 bg-dark/30 border-t border-white/5">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => handleSend(), 100);
                      }}
                      className="text-xs px-3 py-1.5 glass rounded-full text-primary hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-dark/50 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-primary to-secondary rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-5 h-5 text-black" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
