import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-code font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm sm:text-base',
  }[size];

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 border border-cyan-300/40',
    secondary: 'bg-white dark:bg-[#161b22] hover:bg-slate-50 dark:hover:bg-[#21262d] text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-[#30363d] hover:border-cyan-500/50 hover:-translate-y-1 shadow-md',
    outline: 'border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:-translate-y-1',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
