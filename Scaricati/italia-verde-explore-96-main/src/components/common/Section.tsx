import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  action,
  children,
  className = '',
}) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-gray-600">{subtitle}</p>
            )}
          </div>
          {action && (
            <div className="mt-4 sm:mt-0">
              {action}
            </div>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}; 