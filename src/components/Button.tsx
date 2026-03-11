import React from 'react';

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = `inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: `bg-primary text-accent hover:bg-yellow-500 focus:ring-primary dark:bg-primary dark:hover:bg-yellow-400`,
    secondary: `bg-secondary text-white hover:bg-red-900 focus:ring-secondary dark:bg-secondary dark:hover:bg-red-800`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-400`,
    ghost: `bg-transparent text-accent hover:bg-primary/10 focus:ring-primary dark:text-surface dark:hover:bg-surface/10`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${props.className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
