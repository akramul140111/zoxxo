import {
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";

const CustomContent6 = ({ title, content }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const bgColor = darkMode ? "#000000" : "#fff";
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        mb={3}
        fontSize={{ lg: 24 }}
        fontWeight={600}
      >
        {title}
      </Typography>
      <ol style={{ marginTop: "10px", paddingLeft: "5px" }}>
        {content?.map((section, sectionIndex) => (
          <li
            key={sectionIndex}
            style={{
              marginBottom: "10px",
              listStyleType: "decimal",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="body1"
              component="p"
              fontSize={16}
              fontWeight={400}
            >
              {section?.paragraph}
            </Typography>
            <List>
              {section?.items?.map((item, itemIndex) => (
                <ListItem
                  key={itemIndex}
                  sx={{
                    paddingX: "0px",
                    paddingY: "5px",
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    sx={{ paddingY: "0px" }}
                    primary={item?.content}
                  />
                </ListItem>
              ))}
            </List>
          </li>
        ))}
      </ol>
    </>
  );
};

export default CustomContent6;
