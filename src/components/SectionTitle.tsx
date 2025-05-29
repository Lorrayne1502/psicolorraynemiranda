import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#666666] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-[#C8B6E2] mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;