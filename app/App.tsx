import image_1d2949d7580fad4455141fc9c476db844ae6e24d from 'figma:asset/1d2949d7580fad4455141fc9c476db844ae6e24d.png';
import image_1532719df76913e421e79073e6d3749741d2933c from 'figma:asset/1532719df76913e421e79073e6d3749741d2933c.png';
import image_3689b31befc790c81862d65921b0582f302ee8c8 from 'figma:asset/3689b31befc790c81862d65921b0582f302ee8c8.png';
import lumaImage from 'figma:asset/f6c0de1a777415bc219addc028f397dad890e3df.png';
import portraitImage from 'figma:asset/81bf5e537f2a8f6ea4cf6b7da7182efaff02a173.png';
import adriusGroupImage from 'figma:asset/ac4478184845fca9b22f049880a61a6dbcb999fc.png';
import reltoImage from 'figma:asset/8653c807f99953a448854bdd3417135cdae4cd49.png';
import {
  ArrowRight,
  Mail,
  Sparkles,
  Code,
  Zap,
  Layout,
  Database,
  LineChart,
  Users,
  Palette,
} from "lucide-react";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from "react-icons/si";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/app/components/Button";
import { GridBackground } from "@/app/components/GridBackground";
import { Navigation } from "@/app/components/Navigation";
import { ProjectCard } from "@/app/components/ProjectCard";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SkillCard } from "@/app/components/SkillCard";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { Footer } from "@/app/components/Footer";
import { LogoCard } from "@/app/components/LogoCard";
import { LogoModal } from "@/app/components/LogoModal";
import { LogoWall } from "@/app/components/LogoWall";
import { SocialMediaMarquee } from "@/app/components/SocialMediaMarquee";
import { DesignerBackground } from "@/app/components/DesignerBackground";
import { ContactForm } from "@/app/components/ContactForm";
import profileImage from "figma:asset/254a74915305926c24693cc3c25f9af6a5dc7745.png";
import workbloxImage from "figma:asset/96628f103f960d3d689279cf667cdb8dea4c8e5b.png";
import fivaImage from "figma:asset/da1fd49befc5402fee52cd525ce6da924948e400.png";
import workblox404Image from "figma:asset/773c6d14f7c857972d4bd650e3c654f1411995a6.png";
import workbloxLogoImage from "figma:asset/c044b56280742261b063d13d31464de7339ac42d.png";
import wudgetsLogoImage from "figma:asset/86475b8d75b4c2f1e3368f2af3b6c8e544543410.png";
import eliteHomeTherapyImage from "figma:asset/b6cc983ddaded72146a675e8178059bfd88be353.png";
import sweetLondonImage from "figma:asset/379517f3422b2cf9abfcdc28515134b663d3609a.png";
import socialPost1 from "figma:asset/ff133c250ceb094d4bb39c98a06de6a50db10cea.png";
import socialPost2 from "figma:asset/a0963cd6bd9e3fc63b5804b84c3d378345d57bee.png";
import socialPost3 from "figma:asset/c3e9b9efaa533e19c7a85b2fe02c96dcef6ea66c.png";
import socialPost4 from "figma:asset/674b19865c844e0a1f78cf015a54267f31a16ec4.png";
import socialPost5 from "figma:asset/69d26f52c411e08acf40885a739a89f39b9bb171.png";
import socialPost6 from "figma:asset/721b7dc453c371755c50877c793d559cd8c705fa.png";
import socialPost7 from "figma:asset/64a18d0f920958b9344f4374370e02de9e3e0ea7.png";
import socialPost8 from "figma:asset/ff51e6d2bbe3b80c14ea05136d735e1ede79ba69.png";
import socialPost9 from "figma:asset/ab1416536d2ade22c96668ce8ccea5f333aedd81.png";
import artemisPost from "figma:asset/1864f5ff024d658806c15bc75fa6a63aadad5991.png";
import flamingoPost from "figma:asset/30ae0ed1956558419bddb3b73b6bd1cd153f2ffc.png";
import kompleksiFatiPost from "figma:asset/c11d0443205f9c4384809803030a86908a0c86a9.png";
import uraqaniPost from "figma:asset/0e6cac6459cba4f28f8b2be96cd43736527defb0.png";
import starbucksPost from "figma:asset/e8a0b49dfa3e18133f656bf1a0122e08460d8550.png";
import reltoHousingPost from "figma:asset/4ea046db8d4b11228ff5bd3963d6f9cf8ad9e85e.png";
import adriusEstimatorPost from "figma:asset/394f7c82ff53a8c8d238caf7cbef23a6e7c1c881.png";

export default function App() {
  const projects = [
    {
      title: "WorkBlox",
      description:
        "Workblox brings tasks, recurring processes, calendar, docs, and conversations into one AI workspace.",
      image: workbloxImage,
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
      image: adriusGroupImage,
      tags: ["Startup", "Corporate", "Business Transformation", "New York", "Web Design"],
      gradient: "from-blue-500/50 to-indigo-600/50",
      url: "https://www.adrius.com",
    },
    {
      title: "Relto",
      description:
        "Comprehensive real estate platform for buying and renting properties across the United States, featuring building reviews, neighborhood data, and 311 info.",
      image: reltoImage,
      tags: ["Real Estate", "Mobile App", "Property Search", "Rental", "US Market"],
      gradient: "from-teal-400/50 to-emerald-500/50",
      url: "https://www.relto.co",
    },
    {
      title: "FIVA Investment",
      description:
        "Premium corporate website for investment firm",
      image: fivaImage,
      tags: ["Corporate", "Web Design", "Premium"],
      gradient: "from-white/50 to-pink-600/50",
      url: "https://fivainvestment.com/",
    },
    {
      title: "WorkBlox 404 Page",
      description:
        "Playful and engaging 404 error page design with friendly character illustration.",
      image: workblox404Image,
      tags: ["UI Design", "Illustration", "UX"],
      gradient: "from-cyan-400/50 to-blue-500/50",
      url: "https://www.behance.net/korabdemi",
    },
    {
      title: "Ardico",
      description:
        "SaaS Marketing",
      image:
        image_1d2949d7580fad4455141fc9c476db844ae6e24d,
      tags: ["Analytics", "Data Viz", "B2B"],
      gradient: "from-cyan-600/50 to-blue-600/50",
    },
    {
      title: "Luma",
      description:
        "Modern furniture e-commerce platform with AR visualization",
      image: lumaImage,
      tags: ["E-commerce", "UI/UX", "Web Design"],
      gradient: "from-yellow-500/50 to-orange-500/50",
    },
  ];

  const tools = [
    {
      name: "Figma",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 2a4 4 0 0 0 0 8h4V2H8z" />
          <path d="M12 2h4a4 4 0 1 1 0 8h-4V2z" />
          <path d="M12 10h4a4 4 0 1 1 0 8h-4v-8z" />
          <circle cx="12" cy="18" r="4" />
          <path d="M8 10a4 4 0 1 0 0 8h4v-8H8z" />
        </svg>
      ),
    },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="w-6 h-6" />,
    },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator className="w-6 h-6" />,
    },
    {
      name: "Adobe XD",
      icon: <SiAdobexd className="w-6 h-6" />,
    },
  ];

  const skills = [
    { name: "UI/UX Design", icon: <Layout /> },
    { name: "Data Visualization", icon: <Database /> },
    { name: "Analytics", icon: <LineChart /> },
    { name: "User Research", icon: <Users /> },
  ];

  const testimonials = [
    {
      quote:
        "Korab has been a game-changer for our SaaS product. His deep understanding of user needs and ability to translate complex workflows into intuitive design systems significantly improved our product adoption and reduced onboarding time by 40%.",
      author: "Sarah Johnson",
      role: "VP of Product",
      company: "TechFlow Inc",
    },
    {
      quote:
        "Working with Korab was exceptional. His expertise in designing for AI-powered platforms and data-heavy interfaces helped us create a product that our enterprise clients truly love. The design system he built scaled seamlessly across our entire platform.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataSync",
    },
  ];

  const logoProjects = [
    {
      brandName: "Workblox – Brand Identity Design",
      descriptor:
        "AI-powered analytics platform for enterprises",
      logoSrc: workbloxLogoImage,
      images: [
        workbloxLogoImage,
        workbloxImage,
        workblox404Image,
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGd1aWRlbGluZXMlMjBkZXNpZ258ZW58MXx8fHwxNzY5NTQ4MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: ["Branding", "Logo Design"],
      accentColor: "from-blue-500/20 to-cyan-500/20",
      url: "https://www.behance.net/gallery/235545293/Workblox-Brand-Identity-Design",
    },
    {
      brandName: "Personal company logo identity",
      descriptor: "Personal company logo identity",
      logoSrc: wudgetsLogoImage,
      images: [
        wudgetsLogoImage,
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwY29uY2VwdHxlbnwxfHx8fDE3Njk1NDgyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMG1vY2t1cHxlbnwxfHx8fDE3Njk1NDgyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: ["Branding", "Logo Design"],
      accentColor: "from-white/20 to-pink-500/20",
      url: "https://www.behance.net/gallery/227923673/Personal-company-logo-identity",
    },
    {
      brandName: "Elite Home Therapy",
      descriptor: "Healthcare & wellness brand identity",
      logoSrc: eliteHomeTherapyImage,
      images: [
        eliteHomeTherapyImage,
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY5NTQ4MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGJyYW5kaW5nfGVufDF8fHx8MTc2OTU0ODI4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: ["Branding", "Logo Design"],
      accentColor: "from-white/20 to-green-500/20",
      url: "#",
    },
    {
      brandName: "Sweet London",
      descriptor: "Sweet Shop Brand Identity",
      logoSrc: sweetLondonImage,
      images: [
        sweetLondonImage,
        "https://images.unsplash.com/photo-1584634731339-252c581abfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMHNob3AlMjBicmFuZGluZ3xlbnwxfHx8fDE3Njk1NDgyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHNob3AlMjBkZXNpZ258ZW58MXx8fHwxNzY5NTQ4MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: ["Branding", "Logo Design"],
      accentColor: "from-pink-500/20 to-red-500/20",
      url: "#",
    },
  ];

  const socialMediaPosts = [
    {
      id: "1",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost1,
      accentColor: "from-purple-500/30 to-pink-500/30",
    },
    {
      id: "2",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost2,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "3",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost3,
      accentColor: "from-blue-500/30 to-cyan-500/30",
    },
    {
      id: "4",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost4,
      accentColor: "from-cyan-500/30 to-blue-500/30",
    },
    {
      id: "5",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost5,
      accentColor: "from-orange-500/30 to-pink-500/30",
    },
    {
      id: "6",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost6,
      accentColor: "from-blue-400/30 to-cyan-400/30",
    },
    {
      id: "7",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost7,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "8",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost8,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "9",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: socialPost9,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "10",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: artemisPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "11",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: flamingoPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "12",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: kompleksiFatiPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "13",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: uraqaniPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "14",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: starbucksPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "15",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: reltoHousingPost,
      accentColor: "from-pink-500/30 to-red-500/30",
    },
    {
      id: "16",
      platform: "Instagram",
      contentType: "Facebook",
      imageSrc: adriusEstimatorPost,
      accentColor: "from-blue-600/30 to-cyan-500/30",
    },
  ];

  const logoWallItems = [
    {
      src: "https://images.unsplash.com/photo-1596551615043-e253cbe865eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwbG9nbyUyMGRlc2lnbiUyMGJsYWNrfGVufDF8fHx8MTc2OTU0MTkwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 1",
      accentColor: "from-blue-500/20 to-white/20",
    },
    {
      src: "https://images.unsplash.com/photo-1613905383527-8994ba2f9896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwY29tcGFueSUyMGxvZ28lMjBtaW5pbWFsfGVufDF8fHx8MTc2OTU0MTkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 2",
      accentColor: "from-white/20 to-pink-500/20",
    },
    {
      src: "https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZCUyMGlkZW50aXR5JTIwbG9nb3xlbnwxfHx8fDE3Njk1NDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 3",
      accentColor: "from-green-500/20 to-emerald-500/20",
    },
    {
      src: "https://images.unsplash.com/photo-1759496434659-156333b25142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwYnJhbmQlMjBsb2dvJTIwbW9kZXJufGVufDF8fHx8MTc2OTU0MTkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 4",
      accentColor: "from-cyan-500/20 to-blue-500/20",
    },
    {
      src: "https://images.unsplash.com/photo-1596551615043-e253cbe865eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwbG9nbyUyMGRlc2lnbiUyMGJsYWNrfGVufDF8fHx8MTc2OTU0MTkwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 5",
      accentColor: "from-orange-500/20 to-red-500/20",
    },
    {
      src: "https://images.unsplash.com/photo-1613905383527-8994ba2f9896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwY29tcGFueSUyMGxvZ28lMjBtaW5pbWFsfGVufDF8fHx8MTc2OTU0MTkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 6",
      accentColor: "from-indigo-500/20 to-white/20",
    },
    {
      src: "https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZCUyMGlkZW50aXR5JTIwbG9nb3xlbnwxfHx8fDE3Njk1NDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 7",
      accentColor: "from-teal-500/20 to-cyan-500/20",
    },
    {
      src: "https://images.unsplash.com/photo-1759496434659-156333b25142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwYnJhbmQlMjBsb2dvJTIwbW9kZXJufGVufDF8fHx8MTc2OTU0MTkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Brand 8",
      accentColor: "from-pink-500/20 to-rose-500/20",
    },
  ];

  const [selectedLogo, setSelectedLogo] = useState(null);

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
            <span className="text-sm text-gray-300">
              Available for freelance projects
            </span>
          </motion.div>

          {/* Headline with Glow */}
          <div className="relative mb-12">
            {/* Glow Effect Behind Headline */}
            <div className="absolute inset-0 blur-[80px] opacity-40">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/60 via-white/60 to-cyan-500/60" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] text-[64px]"
            >
              I design products that make{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                complex systems
              </span>{" "}
              feel simple.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[16px] text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16 font-light"
          >
            Senior Product Designer focused on SaaS, AI, and complex, integration-heavy platforms, designing scalable and intuitive experiences that support both users and business goals
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="futuristic"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="glass"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            Trusted by startups and enterprises across the US
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - MOVED TO TOP */}
      <section
        id="about"
        className="relative px-6 py-32"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <p className="text-sm uppercase tracking-wider text-cyan-400">About Me</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground text-[60px]">
              Senior Product Designer
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl">
              Transforming complex challenges into intuitive experiences. Specializing in AI-powered platforms and enterprise SaaS solutions.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                  src={portraitImage}
                  alt="Korab Demi - Senior Product Designer"
                  className="w-full h-full object-cover grayscale"
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

        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* Brand Identity / Logo Design Section */}
      <section id="logos" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Brand Identity"
            title="Selected Logos"
            description="Crafting distinctive visual identities that align brand strategy with clarity, scalability, and recognition."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {logoProjects.map((logo, index) => (
              <LogoCard
                key={index}
                {...logo}
                delay={index * 0.1}
                onClick={() => setSelectedLogo(logo)}
              />
            ))}
          </div>

          {/* Social Media Posts Section */}
          <div id="social-media" className="mt-24">
            <SectionHeader
              subtitle="Social Media"
              title="Social Media Posts"
              description="A selection of visual content and motion designs created for social platforms."
            />
            <SocialMediaMarquee posts={socialMediaPosts} />
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Featured Work"
            title="Selected Projects"
            description="Exploring complex problems and crafting elegant solutions for leading SaaS companies."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="relative py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>

        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-32 px-6 bg-card/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Client Feedback"
            title="Client Testimonials"
            description="Hear from satisfied clients about their experiences working with me."
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl -z-10" />
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <TestimonialCard
                  {...testimonial}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      <Footer />
      {selectedLogo && (
        <LogoModal
          isOpen={true}
          onClose={() => setSelectedLogo(null)}
          brandName={selectedLogo.brandName}
          descriptor={selectedLogo.descriptor}
          images={selectedLogo.images}
          tags={selectedLogo.tags}
        />
      )}
    </div>
  );
}