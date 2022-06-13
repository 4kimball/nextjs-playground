import type { FC } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CircleIcon from "../icons/circle-icon";

const StyledBox = styled(Box)({
  "@keyframes bounce": {
    from: {
      visibility: "hidden",
      opacity: 0,
      transform: "scale(1)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
      visibility: "visible",
    },
  },
  visibility: "hidden",
  width: "100px",
  display: "flex",
  justifyContent: "space-around",
  "& .first-circle": {
    animation: "bounce 1.5s infinite linear",
  },
  "& .second-circle": {
    animation: "bounce 1.5s infinite linear",
    animationDelay: "0.5s",
  },
  "& .third-circle": {
    animation: "bounce 1.5s infinite linear",
    animationDelay: "1s",
  },
});
const Wave: FC = () => {
  return (
    <StyledBox sx={{}}>
      <CircleIcon sx={{ color: "#388E3B" }} className="first-circle" />
      <CircleIcon sx={{ color: "#4CAF50" }} className="second-circle" />
      <CircleIcon sx={{ color: "#81C784" }} className="third-circle" />
    </StyledBox>
  );
};

export default Wave;
