import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white text-[16px]">
              Korab Demi
            </h3>
            <p className="text-muted-foreground leading-relaxed text-[12px]">
              Senior Product Designer specializing in AI-powered SaaS products and scalable digital systems.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="mailto:korabdemi9@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-1.5 bg-cyan-500/10 rounded-md group-hover:bg-cyan-500/20 transition-colors">
                    <Mail size={14} className="text-cyan-400" />
                  </div>
                  <span>korabdemi9@gmail.com</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="tel:+38349277770"
                  className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-1.5 bg-cyan-500/10 rounded-md group-hover:bg-cyan-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span>+383 49 277 770</span>
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Quick links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="#about"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="#tools"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  Tools & software
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="mailto:korabdemi9@gmail.com"
                className="group relative p-3 bg-black/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-black/60 transition-all"
              >
                <Mail size={18} className="text-cyan-400" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://www.linkedin.com/in/korabdemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-black/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-black/60 transition-all"
              >
                <Linkedin size={18} className="text-cyan-400" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#"
                className="group relative p-3 bg-black/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-black/60 transition-all"
              >
                <Twitter size={18} className="text-cyan-400" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#"
                className="group relative p-3 bg-black/40 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-black/60 transition-all"
              >
                <Github size={18} className="text-cyan-400" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Korab Demi. All rights reserved.</p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
}