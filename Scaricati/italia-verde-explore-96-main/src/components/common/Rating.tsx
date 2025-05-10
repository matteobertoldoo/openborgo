import React from 'react';

interface RatingProps {
  score: number;
  reviewCount: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ score, reviewCount, size = 'medium', showLabel = true }) => {
  const getRatingLabel = (score: number) => {
    if (score >= 9.0) return 'Exceptional';
    if (score >= 8.5) return 'Excellent';
    if (score >= 8.0) return 'Very Good';
    if (score >= 7.0) return 'Good';
    return 'Fair';
  };

  const getScoreColor = (score: number) => {
    if (score >= 9.0) return 'bg-green-600';
    if (score >= 8.0) return 'bg-green-500';
    if (score >= 7.0) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${getScoreColor(score)} rounded-lg px-2 py-1`}>
        <span className={`text-white font-semibold ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
          {score}
        </span>
      </div>
      {showLabel && (
        <div className="flex flex-col">
          <span className={`font-semibold ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
            {getRatingLabel(score)}
          </span>
          <span className="text-gray-600 text-sm">
            {reviewCount} reviews
          </span>
        </div>
      )}
    </div>
  );
}; 