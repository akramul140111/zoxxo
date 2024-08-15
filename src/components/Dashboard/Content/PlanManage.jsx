import { Box, Button, Card, Grid, Typography } from "@mui/material";
import ContentTitle from "./ContentTitle";
import ZoxxoTab from "./ZoxxoTab";
import PaysafeCard from "./PaysafeCard";
import ZoxxoInput from "./ZoxxoInput";
import masterCard from "../../../assets/images/bank-card/master-card.png";
import visaCard from "../../../assets/images/bank-card/visa-card.png";
import paysafeCard from "../../../assets/images/bank-card/paysafe.png";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const PlanManage = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#0E1B25" : "#fff";

  const tabs = ["zoxxo Free", "Billing details", "Payment method", "Invoices"];
  const contents = [
    <Box key={0}>
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Simple plan
        </Typography>
      </Box>
      <Link to="/nasim/dashboard/plan/upgrade">
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            alignSelf: "flex-start",
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            px: 5,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 18,
            background: darkMode ? "#183042" : "red"
          }}
        >
          Upgrade Storage
        </Button>
      </Link>
    </Box>,
    <Box key={1}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Billing details
        </Typography>
        <Button sx={{ fontSize: 18, fontWeight: 700 }} variant="text">
          EDIT
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={2}>
          <ZoxxoInput
            name="company"
            label="Name or company"
            placeholder="Name or company"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <ZoxxoInput
            name="address"
            label="Address"
            placeholder="Name of the street and number"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <ZoxxoInput
            type="number"
            name="postal"
            label="Postal code"
            placeholder="67050"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <ZoxxoInput name="city" label="City" placeholder="Berlin" />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <ZoxxoInput name="country" label="Country" placeholder="Germany" />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <ZoxxoInput
            name="vat"
            label="VAT-number"
            placeholder="DE-123456789"
          />
        </Grid>
      </Grid>

      <Box>
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            alignSelf: "flex-start",
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            px: 5,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 18,
            background: darkMode ? "#183042" : "red"
          }}
        >
          Update
        </Button>
        <Button
          variant="text"
          sx={{
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            ml: 2,
            px: 5,
            textTransform: "none",
            color: "#4C535F",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>,
    <Box key={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "4C535F",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Payment method
        </Typography>
        <Button sx={{ fontSize: 18, fontWeight: 700 }} variant="text">
          EDIT
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          my: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            py: "15px",
            px: "30px",
          }}
        >
          <img width={60} height={30} style={{objectFit: "contain", objectPosition: "center"}} src={masterCard} alt="Master" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            py: "15px",
            px: "30px",
          }}
        >
          <img width={60} height={30} style={{objectFit: "contain", objectPosition: "center"}} src={visaCard} alt="Visa" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            py: "15px",
            px: "30px",
          }}
        >
          <img width={90} height={30} style={{objectFit: "contain", objectPosition: "center"}} src={paysafeCard} alt="Paysafe" />
        </Box>
      </Box>
      <Box>
        <ZoxxoInput
          name="cardName"
          label="Name on card"
          placeholder="Name on card"
        />
      </Box>
      <Box mt={2}>
        <ZoxxoInput name="card" label="Card" placeholder="Card Number" />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            alignSelf: "flex-start",
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            px: 5,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 18,
            background: darkMode ? "#183042" : "red"
          }}
        >
          Update
        </Button>
        <Button
          variant="text"
          sx={{
            borderRadius: "5px",
            py: "10px",
            mt: 3,
            ml: 2,
            px: 5,
            textTransform: "none",
            color: "#4C535F",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>,
    <Box key={3}>
      <Typography color="red">Invoice page under CONSTRUCTION</Typography>
    </Box>,
  ];

  return (
    <>
      <ContentTitle title="Plan & Billing" />
      <Box sx={{ px: 5, py: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 6, boxShadow: 3, pb: 3, pt: 6, px: 3, background: bgColor }}>
              <ZoxxoTab tabs={tabs} contents={contents} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <PaysafeCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PlanManage;
