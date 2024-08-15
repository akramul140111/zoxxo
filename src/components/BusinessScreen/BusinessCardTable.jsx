import { useTheme, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useTranslation } from "react-i18next";

const BusinessCardTable = ({ pricesData, data }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const { t } = useTranslation("tornado");

  const reverseTextColor = darkMode ? "#fff" : "#000";
//   const backgroundColor = darkMode ? "#000" : "#fff";
//   const bgColor = darkMode ? "#0E1B25" : "#fff";


  const tableRows = [
    { label: t("business"), value: pricesData?.basePrice.toFixed(2) },
  { label: t("prorated-discount"), value: `- ${pricesData?.proratedDiscount.toFixed(2)}` },
    { label: t("extra-storage"), value: pricesData?.extraStoragePrice.toFixed(2) },
    { label: t("extra-workspaces"), value: pricesData?.extraWorkspacesPrice.toFixed(2) },
    { label: t("reverse-charge (0%)"), value: 0.00 },
  ];

  const infoList = [
    t("youll-pay-1099-usd-now-line"),
    t("your-plan-is-billed-paragraph"),
    t("you-can-cancel-any-time")
  ];

  return (
    <>
      <TableContainer sx={{ borderBottom: "none", padding: 0 }}>
        <Table sx={{ border: "none", cellspacing: 0, cellpadding: 0 }}>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "none", paddingY: 1, paddingX: 3 }} align="left">
                  <Typography color={reverseTextColor} fontSize={14} fontWeight={{ xs: 400, md: 500, lg: 400 }}>
                    {row.label}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: "none", paddingY: 1, paddingX: 3 }} align="right">
                  <Typography color={reverseTextColor} fontSize={16} fontWeight={{ xs: 400, md: 500, lg: 500 }}>
                    {row.value}{' '}$
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr style={{ width: "95%" }} />
      </TableContainer>

      <ul style={{ color: reverseTextColor, margin: 0 }}>
        {infoList.map((info, index) => (
          <li key={index}>
            <Typography color={reverseTextColor} fontSize={12} fontWeight={{ xs: 400, md: 500, lg: 400 }}>
              {info}
            </Typography>
          </li>
        ))}
      </ul>
      <hr style={{ width: "95%" }} />
    </>
  );
};

export default BusinessCardTable;
