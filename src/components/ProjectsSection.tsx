import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Namastro',
    category: 'SHOPIFY / E-COMMERCE DEVELOPMENT',
    description:
      'Developed and enhanced a feature-rich Shopify eCommerce platform for astrology services and personalized reports. Worked on custom Shopify sections, product page customization, UGC video integration, dynamic content, conversion-focused landing pages, and responsive UI improvements.',
    tech: [
      'Shopify',
      'Liquid',
      'JavaScript',
      'HTML5',
      'CSS3',
      'jQuery',
      'Shopify Metafields',
      'Responsive Design',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Shopify 2.0' },
      { label: 'FOCUS', value: 'E-commerce UX' },
      { label: 'DEVELOPMENT', value: 'Custom Sections' },
    ],
  },
  {
    number: '02',
    title: 'Custom Shopify Store Development',
    category: 'SHOPIFY / THEME CUSTOMIZATION',
    description:
      'Built and customized Shopify storefront experiences with dynamic product pages, custom Liquid sections, metafield integrations, product variations, cart functionality, and responsive layouts. Focused on improving storefront usability, performance, and shopping experience.',
    tech: [
      'Shopify',
      'Liquid',
      'JavaScript',
      'HTML5',
      'SCSS',
      'CSS3',
      'jQuery',
      'Shopify Theme Development',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Shopify' },
      { label: 'CUSTOMIZATION', value: 'Liquid Sections' },
      { label: 'FOCUS', value: 'Storefront UX' },
    ],
  },
  {
    number: '03',
    title: 'ResumeForge – Online Resume Builder',
    category: 'REACT / FRONTEND DEVELOPMENT',
    description:
      'Developing a modern resume builder platform featuring multiple professional resume templates, dynamic resume customization, live preview functionality, and an intuitive user interface. Designed to simplify the resume creation process with reusable React components and responsive layouts.',
    tech: [
      'React.js',
      'JavaScript',
      'SCSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Reusable Components',
    ],
    metrics: [
      { label: 'FRAMEWORK', value: 'React.js' },
      { label: 'FEATURE', value: 'Live Resume Preview' },
      { label: 'DESIGN', value: 'Multiple Templates' },
    ],
  },
  {
    number: '04',
    title: 'WordPress Business Websites',
    category: 'WORDPRESS / WEB DEVELOPMENT',
    description:
      'Developed and maintained responsive WordPress websites for business requirements. Worked on custom page layouts, theme customization, WPForms integration, tracking implementations, dynamic frontend interactions, and website optimization.',
    tech: [
      'WordPress',
      'PHP',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'WPForms',
      'Google Tag Manager',
    ],
    metrics: [
      { label: 'CMS', value: 'WordPress' },
      { label: 'DEVELOPMENT', value: 'Custom UI' },
      { label: 'INTEGRATION', value: 'Forms & Tracking' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-20 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#91bbff]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#fff]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#fff]/80 via-[#fff]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#91bbff] to-[#91bbff] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CRAFTED WITH CODE.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-[#ffff] to-[#91bbff] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              BUILT TO IMPACT.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#fff]/60 max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
          <ScrollStack
            itemDistance={20}
            itemScale={0.035}
            itemStackDistance={28}
            stackPosition="15%"
            scaleEndPosition="6%"
            baseScale={0.88}
            useWindowScroll={true}
          >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#fff]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#91bbff]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#91bbff]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#91bbff]/60 group-hover:border-[#91bbff] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#91bbff]/60 group-hover:border-[#91bbff] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#91bbff]/60 group-hover:border-[#91bbff] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#91bbff]/60 group-hover:border-[#91bbff] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#fff]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#91bbff]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#91bbff]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#91bbff] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#fff]/80 leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#fff]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#fff] bg-[#16120E] text-[#fff] group-hover:border-[#91bbff]/50 group-hover:text-[#91bbff] transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#fff]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#fff] group-hover:text-[#91bbff] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#fff]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#fff]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#fff]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>


                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;