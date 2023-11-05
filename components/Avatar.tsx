import Image, { StaticImageData } from 'next/image';

import DefaultAvatarImg from '../public/next.svg';

export interface AvatarProps {
  size: string | number;
  src: StaticImageData | string | undefined;
  alt: string;
}

const Avatar = ({ size, src, alt }: AvatarProps) => {
  const diameterSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative w-[${diameterSize}] h-[${diameterSize}] overflow-hidden bg-gray-600 rounded-full`}
    >
      <Image
        src={src || DefaultAvatarImg}
        alt={alt}
        layout="fill"
        className="object-cover aspect-square"
      />
    </div>
  );
};
export default Avatar;
