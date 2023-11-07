import Image, { StaticImageData } from 'next/image';

import { cn } from '@/utils';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

interface AvatarProps {
  size: AvatarSize;
  src?: StaticImageData | string;
  alt: string;
}

const Avatar = ({ size, src, alt }: AvatarProps) => {
  const DefaultAvatarImg = '/next.svg';
  const sizeVariants: { [key in AvatarSize]: string } = {
    xs: 'w-[12px] h-[12px]',
    sm: 'w-[16px] h-[16px]',
    md: 'w-[20px] h-[20px]',
    lg: 'w-[24px] h-[24px]',
    xl: 'w-[30px] h-[30px]',
    '2xl': 'w-[36px] h-[36px]',
    '3xl': 'w-[64px] h-[64px]',
    '4xl': 'w-[80px] h-[80px]',
  };

  return (
    <div
      className={cn(
        `relative overflow-hidden bg-white rounded-full`,
        sizeVariants[size],
      )}
    >
      <Image
        src={src || DefaultAvatarImg}
        alt={alt}
        fill
        className="object-cover aspect-square"
      />
    </div>
  );
};

export default Avatar;
