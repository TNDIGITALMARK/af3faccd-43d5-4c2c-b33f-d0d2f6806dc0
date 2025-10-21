import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-200';

  const variantStyles = {
    primary: 'bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent)/0.9)] shadow-[0_2px_8px_rgba(33,150,243,0.3)] hover:shadow-[0_4px_12px_rgba(33,150,243,0.4)]',
    secondary: 'bg-white text-[hsl(var(--navy-primary))] hover:bg-gray-50 border-2 border-white hover:border-gray-200',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
