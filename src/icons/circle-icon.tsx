import type { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const CircleIcon: FC<SvgIconProps> = (sx) => {
  return (
    <SvgIcon
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...sx}
    >
      <path d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" />
    </SvgIcon>
  );
};

export default CircleIcon;
