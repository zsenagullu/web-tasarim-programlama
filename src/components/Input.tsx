import React from 'react';

export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id,
  ...props
}: {
  label?: string;
  type?: string;
  error?: string;
  helpText?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-widest text-accent dark:text-surface">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-4 py-3 border transition-colors focus:outline-none focus:ring-1 dark:bg-transparent dark:text-surface ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-accent/20 dark:border-surface/20 focus:border-primary focus:ring-primary"
        } ${
          props.disabled
            ? "bg-gray-100 cursor-not-allowed opacity-50"
            : "bg-surface/50 dark:bg-transparent"
        } ${props.className || ''}`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}
