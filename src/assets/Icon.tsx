import { IconsType, localIcons } from "./index";

interface IconInterface {
  iconType: IconsType;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({ iconType, className, onClick }: IconInterface) => {
  const IconComponent = localIcons[iconType];
  if (!IconComponent) return null;
  return <IconComponent className={` ${className}`} onClick={onClick} />;
};
