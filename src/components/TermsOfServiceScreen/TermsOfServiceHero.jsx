import Box from "@mui/material/Box";
import CustomContent7 from "../Content/CustomContent7";

const TermsOfServiceHero = () => {
  const listItem = [
    {
      id: 1,
      title: "a service to share files (“zoxxo File Sharing”);",
    },
    {
      id: 2,
      title:
        "a service that allows you to store, organize, share and receive content from multiple sources (“Manage”);",
    },
    {
      id: 3,
      title:
        "a service that allows you to present your brand on zoxxo plattform (“Ads”); and",
    },
    {
      id: 4,
      title: "additional features and functionalities.",
    },
  ];

  const paragraph = [
    {
      id: 1,
      text: "Your use of and access to our services, software, websites (including browser extensions) and/or applications (together: “Services”) are governed by these Terms of Service (“Terms”).",
    },
    {
      id: 2,
      text: "Your use of and access to our services, software, websites (including browser extensions) and/or applications (together: “Services”) are governed by these Terms of Service (“Terms”).",
    },
    {
      id: 3,
      text: "The Services allow you to upload, submit, store, share, receive, collect, capture and/or visualize your ideas, texts, graphics, videos, data, information, files, presentation decks or other content, including third party content used by you (together: “Content”). You retain all rights in- and responsibility and liability for all Content.",
    },
    {
      id: 4,
      text: "zoxxo does not claim ownership of your Content. The Services are provided to you as the user of the Services by zoxxo B.V. (“zoxxo”, “We”), with its main office at IFZA Business Park, DDP, 25898 - 001, Dubai Silicon Oasis in Dubai, United Arab Emirates, registered with the Trade License under 25898.",
    },
  ];
  return (
    <Box>
      <CustomContent7
        title="Terms of service"
        date={"May 2024"}
        subtitle={"zoxxo offers a plattform to move your data, such as:"}
        listItem={listItem}
        paragraph={paragraph}
      />
    </Box>
  );
};

export default TermsOfServiceHero;
