import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full';
  
  const variantStyles = {
    primary: 'bg-[#C8B6E2] hover:bg-[#A68FCA] text-white',
    secondary: 'bg-[#B8D8BE] hover:bg-[#94B89A] text-white',
    outline: 'bg-transparent border border-[#C8B6E2] text-[#C8B6E2] hover:bg-[#C8B6E2] hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;