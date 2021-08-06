import { AvatarConatiner } from "./avatar.style";

type AvatarProps = {
  src: string;
};

export const Avatar = ({ src }: AvatarProps) => {
  return <AvatarConatiner src={src} alt=' '></AvatarConatiner>;
};
