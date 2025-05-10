import React from 'react';

interface PriceTagProps {
  originalPrice?: number;
  currentPrice: number;
  perNight?: boolean;
  discount?: number;
  size?: 'small' | 'medium' | 'large';
  showTaxInfo?: boolean;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  originalPrice,
  currentPrice,
  perNight = false,
  discount,
  size = 'medium',
  showTaxInfo = true,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <div className="flex flex-col items-end">
      {discount && (
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-1">
          {discount}% off
        </div>
      )}
      <div className="flex items-center gap-2">
        {originalPrice && (
          <span className="text-gray-500 line-through text-sm">
            {formatPrice(originalPrice)}
          </span>
        )}
        <span className={`font-bold ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          {formatPrice(currentPrice)}
        </span>
      </div>
      {perNight && (
        <span className="text-gray-600 text-sm">
          {formatPrice(currentPrice / 5)} per night
        </span>
      )}
      {showTaxInfo && (
        <span className="text-gray-500 text-sm">
          includes taxes & fees
        </span>
      )}
    </div>
  );
}; 