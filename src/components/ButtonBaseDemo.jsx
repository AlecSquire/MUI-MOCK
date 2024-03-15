import * as React from "react";
import { styled } from "@mui/material/styles";

import { Box, ButtonBase, Typography } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

const images = [
  {
    url: "src/assets/tom-morbey-tCO2tWfNZYU-unsplash.jpg",
    title: "MentorShip",
    NavLink: "/mentorship",
    width: "100%",
  },
  {
    url: "src/assets/levin-anton-W0al8jX_zH8-unsplash.jpg",
    title: "Workshops",
    NavLink: "/workshops",
    width: "100%",
  },
  {
    url: "src/assets/mens-circle.webp",
    title: "Mens Circle",
    NavLink: "/mens-circle",
    width: "100%",
  },
];

// // Define LinkBehavior component
// const LinkBehavior = forwardRef(function LinkBehavior(props, ref) {
//   const { href, ...other } = props;
//   // Map href (Material UI) -> to (react-router)
//   return <RouterLink ref={ref} to={href} {...other} />;
// });

// // Set display name for LinkBehavior component
// LinkBehavior.displayName = "LinkBehavior";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <Link key={image.NavLink} href={image.NavLink}>
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
      ))}
    </Box>
  );
}
