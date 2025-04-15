import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    const variants = {
      default: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 transition-transform',
      outline: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform'
    };
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg'
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        style={{ cursor: 'pointer' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 