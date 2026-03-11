import React from 'react';

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = "elevated",
}: {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: "elevated" | "outlined" | "filled";
}) {
  const variants = {
    elevated: `bg-white/60 dark:bg-accent/60 backdrop-blur-md shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary transition-all`,
    outlined: `bg-transparent border border-primary/40 dark:border-primary/40 hover:border-primary transition-all`,
    filled: `bg-surface dark:bg-accent border border-primary/10`,
  };

  return (
    <div className={`rounded-xl overflow-hidden transition-shadow ${variants[variant]}`}>
      {image && (
        <img src={image} alt={imageAlt || ""} className="w-full h-48 object-cover" />
      )}
      <div className="p-8">
        {title && (
          <h3 className="text-xl font-bold font-serif italic text-accent dark:text-primary mb-4">
            {title}
          </h3>
        )}
        <div className="text-accent/80 dark:text-surface/80 leading-relaxed font-light">
          {children}
        </div>
      </div>
      {footer && (
        <div className="px-8 py-4 bg-transparent border-t border-primary/20">
          {footer}
        </div>
      )}
    </div>
  );
}
