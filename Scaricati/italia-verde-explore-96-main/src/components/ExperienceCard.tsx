import React from 'react';
import { Experience } from '../data/mockData';
import { Card } from './common/Card';
import { Rating } from './common/Rating';
import { PriceTag } from './common/PriceTag';
import { Clock } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onFavorite,
  isFavorite,
}) => {
  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'food':
        return 'bg-orange-100 text-orange-600';
      case 'culture':
        return 'bg-purple-100 text-purple-600';
      case 'outdoor':
        return 'bg-green-100 text-green-600';
      case 'wellness':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card
      images={experience.images}
      title={experience.name}
      subtitle={experience.location}
      onFavorite={onFavorite}
      isFavorite={isFavorite}
      badge={experience.featured ? 'Featured' : undefined}
    >
      <div className="mt-2 space-y-3">
        {/* Type and Duration */}
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-sm capitalize ${getTypeColor(experience.type)}`}>
            {experience.type}
          </span>
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{experience.duration}</span>
          </div>
        </div>

        {/* Rating */}
        <Rating
          score={experience.rating * 2}
          reviewCount={experience.reviewCount}
        />

        {/* Price */}
        <PriceTag
          currentPrice={experience.price}
          discount={experience.featured ? 17 : undefined}
          showTaxInfo={false}
        />

        {/* Description preview */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {experience.description}
        </p>
      </div>
    </Card>
  );
}; 