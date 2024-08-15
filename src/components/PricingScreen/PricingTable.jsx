import { Divider, Grid, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ServiceTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 30px;
`;

const Text = styled.div`
  font-size: 16px;
`;

const PricingTable = ({ title, data }) => {
  const { t } = useTranslation("pricing");
  const theme = useTheme();
  const reverseTextColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Grid container sx={{mb: "100px"}}>
      <Grid item xs={12}>
        <ServiceTitle style={{ color: reverseTextColor }}>{t(title)}</ServiceTitle>
      </Grid>
      <Grid item xs={12}>
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Text style={{ fontWeight: "500", color: reverseTextColor,  }}>
                  {t(item?.title)}
                </Text>
              </Grid>
              <Grid item xs={8} container justifyContent="space-between">
                {item?.icon ? (
                  <>
                    {item?.icon?.map((icon, index) => (
                      <Grid
                        item
                        key={index}
                        xs={3}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {icon}
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    {item?.text?.map((text, index) => (
                      <Grid
                        item
                        key={index}
                        xs={3}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {t(text)}
                      </Grid>
                    ))}
                  </>
                )}
              </Grid>
            </Grid>
            <Divider color="#565656" sx={{ my: 4 }} />
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default PricingTable;
