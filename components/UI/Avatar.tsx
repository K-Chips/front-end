import Image, { StaticImageData } from 'next/image';

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
      className={`relative ${sizeVariants[size]} overflow-hidden bg-white rounded-full`}
    >
      <Image
        src={src || DefaultAvatarImg}
        alt={alt}
        width={80}
        height={80}
        className="absolute object-cover aspect-square"
      />
    </div>
  );
};

export default Avatar;
