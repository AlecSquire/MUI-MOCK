import { Typography, Avatar, Container } from "@mui/material";
export function Founder() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Founder: Harry Wilder</Typography>
      <Typography variant="h6">Services</Typography>
      <Avatar
        src={"/src/assets/harry.jpeg"}
        sx={{
          width: 100,
          height: 100,
        }}
      />
    </Container>
  );
}
