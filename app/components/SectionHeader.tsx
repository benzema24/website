import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, description, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} mb-16`}
    >
      {subtitle && (
        <span className="text-sm uppercase tracking-wider text-primary mb-3 font-medium">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
