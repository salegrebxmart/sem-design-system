import { FC } from 'react';

interface AvatarProps {
  image?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ image = './avatar.png', size = 'md', className }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-auto h-32',
  };
  const avatarStyle = 'rounded-full object-cover' + ' ' + sizes[size];
  return (
    <>
      <img className={avatarStyle + ' ' + className} src={image} alt='' />
    </>
  );
};

export default Avatar;
