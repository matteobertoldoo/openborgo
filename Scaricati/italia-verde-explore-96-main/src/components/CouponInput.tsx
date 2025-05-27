import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

type CouponData = { percentage?: number; price?: number } | null;

interface CouponInputProps {
  accommodationPrice: number;
  nights: number;
  onCouponValidated: (data: CouponData) => void;
}

const CouponInput = ({ accommodationPrice, nights, onCouponValidated }: CouponInputProps) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle');
  const [couponData, setCouponData] = useState<CouponData>(null);

  const handleValidateCoupon = async () => {
    if (!couponInput) return;
    setCouponStatus('loading');
    setCouponData(null);
    try {
      const res = await fetch(`https://italia-verde-explore-fork.onrender.com/api/coupons/?code=${encodeURIComponent(couponInput)}`);
      const data = await res.json();
      if (res.ok && data.length > 0 && (data[0].percentage || data[0].price)) {
        const validData = { percentage: Number(data[0].percentage), price: Number(data[0].price) };
        setCouponData(validData);
        setCouponStatus('valid');
        onCouponValidated(validData);
      } else {
        setCouponStatus('invalid');
        setCouponData(null);
        onCouponValidated(null);
      }
    } catch {
      setCouponStatus('invalid');
      setCouponData(null);
      onCouponValidated(null);
    }
  };

  let discount = 0;
  if (couponData && nights > 0) {
    const baseTotal = accommodationPrice * nights;
    if (couponData.percentage) {
      discount = Math.round(baseTotal * (couponData.percentage / 100));
    } else if (couponData.price) {
      discount = Math.min(baseTotal, couponData.price);
    }
  }

  return (
    <div className="my-4 border-2 border-dashed border-italia-sage/30 rounded-lg p-4 bg-italia-sage/5">
      <label className="block text-lg font-semibold mb-3 text-italia-brown flex items-center gap-2">
        <span className="bg-italia-sage text-white p-1 rounded-md text-xs border border-italia-sage dark:bg-italia-sage dark:text-white dark:border-italia-sage">SAVE</span>
        Hai un coupon?
      </label>
      <Input
        type="text"
        placeholder="Inserisci il codice coupon"
        value={couponInput}
        onChange={e => {
          setCouponInput(e.target.value.toUpperCase());
          setCouponStatus('idle');
        }}
        onBlur={handleValidateCoupon}
        className="w-full"
      />
      {couponStatus === 'valid' && couponData && (
        <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm font-medium">
          Coupon applicato: {couponData.percentage
            ? `-${couponData.percentage}%`
            : couponData.price
            ? `-€${couponData.price}`
            : ''}
          <br />
          {discount > 0 && (
            <span>
              You save: -€{discount}
            </span>
          )}
        </div>
      )}
      {couponStatus === 'invalid' && (
        <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-medium">
          Coupon non valido
        </div>
      )}
    </div>
  );
};

export default CouponInput;