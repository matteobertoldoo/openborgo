import React from 'react';
import { Property } from '../data/mockData';
import { Card } from './common/Card';
import { Rating } from './common/Rating';
import { PriceTag } from './common/PriceTag';

interface PropertyCardProps {
  property: Property;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onFavorite,
  isFavorite,
}) => {
  return (
    <Card
      images={property.images}
      title={property.name}
      subtitle={property.location}
      onFavorite={onFavorite}
      isFavorite={isFavorite}
      badge={property.featured ? 'Featured' : undefined}
    >
      <div className="mt-2 space-y-3">
        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-600"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-sm text-blue-600">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Rating */}
        <Rating
          score={property.rating * 2}
          reviewCount={property.reviewCount}
        />

        {/* Price */}
        <PriceTag
          currentPrice={property.price * 5}
          perNight={property.perNight}
          discount={property.featured ? 17 : undefined}
        />
      </div>
    </Card>
  );
}; 