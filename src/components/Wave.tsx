import type { FC } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CircleIcon from "../icons/circle-icon";

const StyledBox = styled(Box)({
  "@keyframes bounce": {
    from: {
      visibility: "hidden",
      opacity: 0,
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
      visibility: "visible",
    },
  },

  width: "50px",
  display: "flex",
  justifyContent: "space-around",
  "& .first-circle": {
    animation: "bounce 2.4s infinite linear",
  },
  "& .second-circle": {
    animation: "bounce 2.4s infinite linear",
    animationDelay: "0.8s",
  },
  "& .third-circle": {
    animation: "bounce 2.4s infinite linear",
    animationDelay: "1.6s",
  },
});
const Wave: FC = () => {
  return (
    <StyledBox sx={{}}>
      <CircleIcon
        sx={{ color: "#388E3B", width: "8px", height: "8px" }}
        className="first-circle"
      />
      <CircleIcon
        sx={{ color: "#4CAF50", width: "8px", height: "8px" }}
        className="second-circle"
      />
      <CircleIcon
        sx={{ color: "#81C784", width: "8px", height: "8px" }}
        className="third-circle"
      />
    </StyledBox>
  );
};

export default Wave;
