import React from 'react';

interface GridProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'medium',
  className = '',
}) => {
  const getGapClass = (gap: 'small' | 'medium' | 'large') => {
    switch (gap) {
      case 'small':
        return 'gap-4';
      case 'large':
        return 'gap-8';
      default:
        return 'gap-6';
    }
  };

  const getGridClass = () => {
    const cols = {
      sm: columns.sm || 1,
      md: columns.md || columns.sm || 1,
      lg: columns.lg || columns.md || columns.sm || 1,
      xl: columns.xl || columns.lg || columns.md || columns.sm || 1,
    };

    return `grid grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} xl:grid-cols-${cols.xl}`;
  };

  return (
    <div className={`${getGridClass()} ${getGapClass(gap)} ${className}`}>
      {children}
    </div>
  );
}; 