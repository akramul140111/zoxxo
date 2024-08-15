import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const CustomContent7 = ({ title, date, subtitle, listItem, paragraph }) => {
  return (
    <Container>
      <Grid container spacing={2} mt={{ xs: 16, sm: 20, md: 20, lg: 28 }}>
        <Grid xs={12}>
          <Typography
            variant="h2"
            component="h2"
            textAlign={"center"}
            mb={1}
            fontSize={{ lg: 60 }}
            fontWeight={700}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            fontSize={24}
            fontWeight={600}
            textAlign={"center"}
          >
            {date}
          </Typography>
        </Grid>
        <Grid xs={12} mt={{ xs: 5, lg: 16 }}>
          {subtitle && (
            <Typography
              variant="p"
              component={"div"}
              fontSize={{ lg: 18 }}
              fontWeight={600}
              mb={3}
            >
              {subtitle}
            </Typography>
          )}
          {listItem && (
            <ul style={{ paddingLeft: "20px" }}>
              {listItem?.map((item, index) => (
                <li key={index}>{item?.title}</li>
              ))}
            </ul>
          )}
          {paragraph && (
            <Box>
              {paragraph?.map((item, index) => (
                <Typography
                  key={index}
                  variant="p"
                  component={"div"}
                  fontSize={{ lg: 16 }}
                  fontWeight={400}
                  mb={3}
                >
                  {item?.text}
                </Typography>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomContent7;
