import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface IAvatar {
  name: string;
  image: string;
  size: 40 | 64;
  className?: string;
  isSquare?: boolean;
  email?: string;
}

const Avatar = ({ image, name, size, className, email, isSquare }: IAvatar) => {
  return (
    <div className={`flex items-center gap-x-3`}>
      <Image
        alt={name}
        src={image}
        width={size}
        height={size}
        
        className={cn(!isSquare ? 'rounded-full' : 'rounded-2xl', 'h-[40px] min-h-[40px]', 'w-[40px] min-w-[40px]')}
      />
      <div>
        <p className={`text-sm text-text-primary font-medium ${className}`}>
          {name}
        </p>

        {email && (
          <p className='text-xs text-text-secondary font-medium'>{email}</p>
        )}
      </div>
    </div>
  );
};

export default Avatar;
