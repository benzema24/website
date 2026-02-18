import { assets } from "@/lib/assets";

export default function Home() {
  const projects = [
    {
      title: "WorkBlox",
      description:
        "Workblox brings tasks, recurring processes, calendar, docs, and conversations into one AI workspace.",
      image: assets.workbloxImage,
      tags: [
        "Smart Calendar",
        "Workspace from a prompt",
        "Automations in plain english",
        "AI advisor",
        "Unified dashboard",
        "Connected Workspaces",
        "On-Screen AI Assistant",
      ],
      gradient: "from-blue-600/50 to-white/50",
      url: "https://www.workblox.ai/",
    },
    {
      title: "Adrius Group",
      description:
        "Business transformation platform for a New York-based startup, delivering value to mid-market organizations through innovative technology solutions.",
      image: assets.adriusGroupImage,
      tags: ["Startup", "Corporate", "Business Transformation", "New York", "Web Design"],
      gradient: "from-blue-500/50 to-indigo-600/50",
      url: "https://www.adrius.com",
    },
    {
      title: "Relto",
      description:
        "Comprehensive real estate platform for buying and renting properties across the United States, featuring building reviews, neighborhood data, and 311 info.",
      image: assets.reltoImage,
      tags: ["Real Estate", "Mobile App", "Property Search", "Rental", "US Market"],
      gradient: "from-teal-400/50 to-emerald-500/50",
      url: "https://apps.apple.com/us/app/relto-apartment-guide/id6443609635",
    },
    {
      title: "Luma",
      description:
        "Sophisticated AI-powered networking platform designed to transform professional connections in the digital age.",
      image: assets.lumaImage,
      tags: ["AI", "Networking", "Professional", "Mobile App"],
      gradient: "from-purple-500/50 to-pink-500/50",
      url: "https://lu.ma/",
    },
    {
      title: "FIVA Investment",
      description:
        "Modern investment application streamlining financial planning and asset management for forward-thinking investors.",
      image: assets.fivaImage,
      tags: ["FinTech", "Investment", "Finance", "Web App"],
      gradient: "from-green-500/50 to-teal-500/50",
      url: "#",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <GridBackground />
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Designer Background */}
        <DesignerBackground />

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-12 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight"
          >
            Senior Product Designer
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Crafting AI-Powered Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Transforming complex SaaS products into intuitive experiences.
            Specialized in AI integration, design systems, and enterprise-scale
            solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => {
                const section = document.getElementById("work");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.linkedin.com/in/korabdemi", "_blank")}
              className="group border-white/20 hover:border-cyan-500/50 hover:bg-cyan-500/10"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Let's Connect
              </span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            description="Explore my latest work in AI-powered SaaS, enterprise solutions, and innovative digital products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity / Logo Design Section */}
      <section id="logos" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Brand Identity / Logo Design"
            description="Creating distinctive visual identities that resonate with target audiences and stand the test of time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {logos.map((logo, index) => (
              <LogoCard
                key={index}
                {...logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Posts Section */}
      <section id="social-media" className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16">
          <SectionHeader
            title="Social Media Posts"
            description="Visual content designed to engage, inform, and inspire across various social platforms."
          />
        </div>

        <SocialMediaMarquee
          posts={[
            { image: assets.socialPost1, alt: "Social Media Post 1" },
            { image: assets.socialPost2, alt: "Social Media Post 2" },
            { image: assets.socialPost3, alt: "Social Media Post 3" },
            { image: assets.socialPost4, alt: "Social Media Post 4" },
            { image: assets.socialPost5, alt: "Social Media Post 5" },
            { image: assets.socialPost6, alt: "Social Media Post 6" },
            { image: assets.socialPost7, alt: "Social Media Post 7" },
            { image: assets.socialPost8, alt: "Social Media Post 8" },
            { image: assets.socialPost9, alt: "Social Media Post 9" },
            { image: assets.artemisPost, alt: "Artemis Post" },
            { image: assets.flamingoPost, alt: "Flamingo Post" },
            { image: assets.kompleksiFatiPost, alt: "Kompleksi Fati Post" },
            { image: assets.uraqaniPost, alt: "Uraqani Post" },
            { image: assets.starbucksPost, alt: "Starbucks Post" },
            { image: assets.reltoHousingPost, alt: "Relto Housing Post" },
            { image: assets.adriusEstimatorPost, alt: "Adrius Estimator Post" },
          ]}
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Core Expertise"
            description="Specialized skills honed through years of experience in product design and AI integration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="About Me"
            description="Passionate about creating meaningful experiences that solve real problems"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
            {/* Left Column - Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={assets.image_dbddd50130405de4294ef3c1d4a6ac2a68f11ad7}
                  alt="Korab Demi - Senior Product Designer"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle cyan glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Outer shadow with cyan glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl -z-10 blur-2xl"></div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <span className="text-foreground">Korab Demi</span>, <span className="text-foreground font-semibold">Senior Product Designer</span> with{" "}
                  <span className="text-cyan-400 font-medium">6+ years</span> crafting{" "}
                  <span className="text-cyan-400 font-medium">enterprise SaaS</span> solutions for US-based startups. Specialized in{" "}
                  <span className="text-cyan-400 font-medium">AI-powered platforms</span> and{" "}
                  <span className="text-cyan-400 font-medium">complex integration systems</span>.
                </p>
              </motion.div>

              {/* Expertise Cards */}
              <div className="space-y-3">
                {/* Product Strategy & Design Systems */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400 mt-0.5"
                    >
                      <Layout className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1.5">
                        Product Strategy & Design Systems
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Directed end-to-end product launches from concept to market, reducing onboarding time by 40% and increasing user adoption by 60%. Architected scalable design systems supporting 100,000+ enterprise users.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* AI & Complex Data Interfaces */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400 mt-0.5"
                    >
                      <Database className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1.5">
                        AI & Complex Data Interfaces
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Designed AI-powered analytics dashboards and data visualization frameworks. Specialized in natural language interfaces and predictive analytics.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Cross-functional Collaboration */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400 mt-0.5"
                    >
                      <Users className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1.5">
                        Cross-functional Collaboration
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Partner with product, engineering, and business teams to align user needs with technical constraints. Drive data-informed decisions through research and A/B testing.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Compact Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20 
                  }}
                  className="group relative p-4 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/60 hover:bg-black/60 transition-all duration-300 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-cyan-400 mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      6+
                    </motion.div>
                    <div className="text-xs text-muted-foreground tracking-wide">Years experience</div>
                  </div>
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-xl transition-all duration-300 -z-10 blur-xl"></div>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20 
                  }}
                  className="group relative p-4 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/60 hover:bg-black/60 transition-all duration-300 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-cyan-400 mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      50+
                    </motion.div>
                    <div className="text-xs text-muted-foreground tracking-wide">Projects delivered</div>
                  </div>
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-xl transition-all duration-300 -z-10 blur-xl"></div>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20 
                  }}
                  className="group relative p-4 bg-black/40 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-500/60 hover:bg-black/60 transition-all duration-300 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-cyan-400 mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      20K+
                    </motion.div>
                    <div className="text-xs text-muted-foreground tracking-wide">Active users</div>
                  </div>
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-xl transition-all duration-300 -z-10 blur-xl"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Tools & Software"
            description="Proficient in industry-standard design and prototyping tools"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg viewBox="0 0 240 234" className="w-full h-full">
                    <path fill="#31A8FF" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M105 89h39v24h-39V89zm-13-20c0-1.7 1.3-3 3-3h71c1.7 0 3 1.3 3 3v71c0 1.7-1.3 3-3 3H95c-1.7 0-3-1.3-3-3V69zm70 11v49H78V80h84z" />
                    <path fill="#FFF" d="M54 54h132v-6H54v6zm0 126h132v-6H54v6zm-6-132v138h6V48h-6z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground text-center">Figma</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center text-[#FF61F6]">
                  <SiAdobexd className="w-full h-full" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">Adobe XD</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center text-[#31A8FF]">
                  <SiAdobephotoshop className="w-full h-full" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">Photoshop</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center text-[#FF9A00]">
                  <SiAdobeillustrator className="w-full h-full" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">Illustrator</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg viewBox="0 0 240 234" className="w-full h-full">
                    <path fill="#FF61F6" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" />
                    <path fill="#FFF" d="M126.3 148.3c-6.6 0-12.2-1.7-16.6-5-4.5-3.3-6.7-7.8-6.7-13.5h15.8c0 2.2.9 4.1 2.7 5.6 1.8 1.5 4.1 2.3 6.9 2.3 2.7 0 4.9-.6 6.5-1.9 1.6-1.3 2.4-2.9 2.4-4.9 0-2.3-1-4-3-5.2-2-1.2-5.3-2.4-9.9-3.6-5.3-1.4-9.5-3.4-12.6-6-3.1-2.6-4.7-6.2-4.7-10.9 0-5.4 2.1-9.7 6.4-13 4.3-3.3 9.6-4.9 16-4.9 6.8 0 12.2 1.7 16.3 5 4.1 3.3 6.2 7.6 6.2 12.9h-15.8c0-2-.7-3.6-2.2-4.9-1.5-1.3-3.4-1.9-5.9-1.9-2.3 0-4.2.5-5.6 1.6-1.4 1.1-2.1 2.5-2.1 4.4 0 2 .9 3.6 2.8 4.7 1.9 1.1 5 2.2 9.3 3.4 5.6 1.5 10 3.5 13.3 6.1 3.3 2.6 4.9 6.3 4.9 11.1 0 5.6-2.2 10.1-6.7 13.4-4.4 3.4-10.1 5-16.9 5zm-40-60.8H71.1v56.6H55.3V87.5H40v-13h86.3v13z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground text-center">TypeScript</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Palette className="w-full h-full text-cyan-400" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">More</p>
              </div>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Client Testimonials"
            description="What clients and colleagues say about working with me"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Let's Work Together"
            description="Have a project in mind? Let's create something amazing together."
          />

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}