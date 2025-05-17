import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

interface CouponInputProps {
  onCouponApplied: (discount: { type: 'percentage' | 'price', value: number }) => void;
}

const CouponInput: React.FC<CouponInputProps> = ({ onCouponApplied }) => {
  const [couponCode, setCouponCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://italia-verde-explore-fork.onrender.com/api/coupons/?code=${couponCode}`);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const coupon = data[0];
        if (coupon.percentage) {
          onCouponApplied({ type: 'percentage', value: coupon.percentage });
          toast.success(`Coupon applied! ${coupon.percentage}% discount`);
        } else if (coupon.price) {
          onCouponApplied({ type: 'price', value: coupon.price });
          toast.success(`Coupon applied! €${coupon.price} discount`);
        } else {
          toast.error('Coupon not valid for this offer');
        }
      } else {
        toast.error('Invalid coupon code');
      }
    } catch (error) {
      toast.error('Error validating coupon');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm text-italia-brown/70">
        Enter a valid coupon code to get a discount on your stay
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          className="flex-1 text-lg font-mono tracking-wider placeholder:text-italia-brown/40"
        />
        <Button 
          onClick={validateCoupon}
          disabled={isLoading}
          className="bg-italia-sage hover:bg-italia-sage/90 text-white px-6"
        >
          {isLoading ? 'Checking...' : 'Apply'}
        </Button>
      </div>
    </div>
  );
};

export default CouponInput;