
import React from 'react';
import { Heart } from 'lucide-react';

interface CardProps {
  images: string[];
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  onFavorite?: () => void;
  isFavorite?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  images,
  title,
  subtitle,
  badge,
  children,
  onFavorite,
  isFavorite,
  className = '',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  return (
    <div 
      className={`group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Image carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image navigation dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        {/* Favorite button */}
        {onFavorite && (
          <button
            onClick={onFavorite}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-sm rounded">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {subtitle && (
          <p className="text-gray-600 text-sm">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};
