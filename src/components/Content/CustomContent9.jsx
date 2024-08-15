import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const CustomContent9 = ({ content }) => {
  return (
    <Grid>
      {content?.map((item, index) => (
        <Box mb={{sm: 5, lg: 10}} key={index}>
          {item?.title && (
            <Typography
              variant="body1"
              component="p"
              fontSize={16}
              fontWeight={700}
            >
              {item?.title}
            </Typography>
          )}

          <Typography
            variant="body1"
            component="p"
            fontSize={16}
            fontWeight={400}
          >
            {item?.text}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default CustomContent9;
