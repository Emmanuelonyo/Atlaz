import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export function Button({
  className = '',
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'flex items-center justify-center rounded-xl h-12 text-base font-bold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-accent-teal text-white hover:shadow-lg hover:shadow-primary/30',
    outline:
      'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700',
    ghost:
      'bg-transparent text-primary hover:text-primary-dark hover:bg-primary/5',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
