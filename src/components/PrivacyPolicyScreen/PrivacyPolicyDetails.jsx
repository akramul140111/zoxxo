import { Container, Grid } from "@mui/material";
import CustomContent6 from "../Content/CustomContent6";

const PrivacyPolicyDetails = () => {
  const data = [
    {
      title: "Definitions",
      content: [
        {
          paragraph:
            "The data protection declaration of the Zoxxo - FZCO is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used.",
        },
        {
          paragraph: "In this data protection declaration, we use, inter alia, the following terms:",
        },
      ],
    },
    {
      title: "PERSONAL DATA",
      content: [
        {
          paragraph:
            "Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.",
        }
      ],
    },
    {
      title: "DATA SUBJECT",
      content: [
        {
          paragraph:
            "Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.",
        }
      ],
    },
    {
      title: "PROCESSING",
      content: [
        {
          paragraph:
            " Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.",
        }
      ],
    },
    {
      title: "RESTRICTION OF PROCESSING",
      content: [
        {
          paragraph:
            "Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future.",
        }
      ],
    },
    {
      title: "PROFILING",
      content: [
        {
          paragraph:
            "Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.",
        }
      ],
    },
    {
      title: "PSEUDONYMISATION",
      content: [
        {
          paragraph:
            " Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.",
        }
      ],
    },
    {
      title: "CONTROLLER OR CONTROLLER RESPONSIBLE FOR THE PROCESSING",
      content: [
        {
          paragraph:
            " Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.",
        },
      ],
    },
    {
      title: "PROCESSOR",
      content: [
        {
          paragraph:
            "Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.",
        }
      ],
    },
    {
      title: "RECIPIENT",
      content: [
        {
          paragraph:
            " Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing.",
        }
      ],
    },
    {
      title: "THIRD PARTY",
      content: [
        {
          paragraph:
            " Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data.",
        }
      ],
    },
    {
      title: "CONSENT",
      content: [
        {
          paragraph:
            "Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.",
        }
      ],
    },
    {
      title: "Name and Address of the controller",
      content: [
        {
            paragraph:
              "Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:",
            items: [
              { content: "• Zoxxo – FZCO" },
              { content: "• IFZA Business Park, DDP, 25898 – 001" },
              { content: "• Dubai Silicon Oasis" },
              { content: "• Dubai, United Arab Emirates" },
              { content: "• Email: support@zoxxo.io" },
              { content: "• Website: zoxxo.io" }
            ],
          },
      ],
    },
    {
      title: "Cookies",
      content: [
        {
          paragraph:
            "The Internet pages of the Zoxxo – FZCO use cookies. Cookies are text files that are stored in a computer system via an Internet browser.",
        },
        {
          paragraph:
            "Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the dats subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.",
        },
        {
          paragraph:
            "Through the use of cookies, the Zoxxo – FZCO can provide the users of this website with more user-friendly services that would not be possible without the cookie setting.",
        },
        {
          paragraph:
            "By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our website users. The purpose of this recognition is to make it easier for users to utilize our website. The website user that uses cookies, e.g. does not have to enter access data each time the website is accessed, because this is taken over by the website, and the cookie is thus stored on the user’s computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.",
        },
        {
          paragraph:
            "The data subject may, at any time, prevent the setting of cookies through our website by means of a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be entirely usable.",
        }
      ],
    },
    {
      title: "Collection of general data and information",
      content: [
        {
          paragraph:
            "The website of the Zoxxo – FZCO collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.",
        },
        {
          paragraph:
            "When using these general data and information, the Zoxxo – FZCO does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, the Zoxxo – FZCO analyzes anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.",
        }
      ],
    },
    {
      title: "Registration on our website",
      content: [
        {
          paragraph:
            "The data subject has the possibility to register on the website of the controller with the indication of personal data. Which personal data are transmitted to the controller is determined by the respective input mask used for the registration. The personal data entered by the data subject are collected and stored exclusively for internal use by the controller, and for his own purposes. The controller may request transfer to one or more processors (e.g. a parcel service) that also uses personal data for an internal purpose which is attributable to the controller.",
        },
        {
          paragraph:
            "By registering on the website of the controller, the IP address—assigned by the Internet service provider (ISP) and used by the data subject—date, and time of the registration are also stored. The storage of this data takes place against the background that this is the only way to prevent the misuse of our services, and, if necessary, to make it possible to investigate committed offenses. Insofar, the storage of this data is necessary to secure the controller. This data is not passed on to third parties unless there is a statutory obligation to pass on the data, or if the transfer serves the aim of criminal prosecution.",
        },
        {
          paragraph:
            "The registration of the data subject, with the voluntary indication of personal data, is intended to enable the controller to offer the data subject contents or services that may only be offered to registered users due to the nature of the matter in question. Registered persons are free to change the personal data specified during the registration at any time, or to have them completely deleted from the data stock of the controller.",
        },
        {
          paragraph:
            "The data controller shall, at any time, provide information upon request to each data subject as to what personal data are stored about the data subject. In addition, the data controller shall correct or erase personal data at the request or indication of the data subject, insofar as there are no statutory storage obligations. The entirety of the controller’s employees are available to the data subject in this respect as contact persons.",
        },
      ],
    },
    {
      title: "Subscription to our newsletters",
      content: [
        {
          paragraph:
            "On the website of the Zoxxo – FZCO, users are given the opportunity to subscribe to our enterprise’s newsletter. The input mask used for this purpose determines what personal data are transmitted, as well as when the newsletter is ordered from the controller.",
        },
        {
          paragraph:
            "The Zoxxo – FZCO informs its customers and business partners regularly by means of a newsletter about enterprise offers. The enterprise’s newsletter may only be received by the data subject if (1) the data subject has a valid e-mail address and (2) the data subject registers for the newsletter shipping. A confirmation e-mail will be sent to the e-mail address registered by a data subject for the first time for newsletter shipping, for legal reasons, in the double opt-in procedure. This confirmation e-mail is used to prove whether the owner of the e-mail address as the data subject is authorized to receive the newsletter.",
        },
        {
          paragraph:
            "During the registration for the newsletter, we also store the IP address of the computer system assigned by the Internet service provider (ISP) and used by the data subject at the time of the registration, as well as the date and time of the registration. The collection of this data is necessary in order to understand the (possible) misuse of the e-mail address of a data subject at a later date, and it therefore serves the aim of the legal protection of the controller.",
        },
        {
          paragraph:
            "The personal data collected as part of a registration for the newsletter will only be used to send our newsletter. In addition, subscribers to the newsletter may be informed by e-mail, as long as this is necessary for the operation of the newsletter service or a registration in question, as this could be the case in the event of modifications to the newsletter offer, or in the event of a change in technical circumstances. There will be no transfer of personal data collected by the newsletter service to third parties. The subscription to our newsletter may be terminated by the data subject at any time. The consent to the storage of personal data, which the data subject has given for shipping the newsletter, may be revoked at any time. For the purpose of revocation of consent, a corresponding link is found in each newsletter. It is also possible to unsubscribe from the newsletter at any time directly on the website of the controller, or to communicate this to the controller in a different way.",
        }
      ],
    },
    {
      title: "Newsletter-Tracking",
      content: [
        {
          paragraph:
            "The newsletter of the Zoxxo – FZCO contains so-called tracking pixels. A tracking pixel is a miniature graphic embedded in such e-mails, which are sent in HTML format to enable log file recording and analysis. This allows a statistical analysis of the success or failure of online marketing campaigns. Based on the embedded tracking pixel, the Zoxxo – FZCO may see if and when an e-mail was opened by a data subject, and which links in the e-mail were called up by data subjects.",
        },
        {
          paragraph:
            "Such personal data collected in the tracking pixels contained in the newsletters are stored and analyzed by the controller in order to optimize the shipping of the newsletter, as well as to adapt the content of future newsletters even better to the interests of the data subject. These personal data will not be passed on to third parties. Data subjects are at any time entitled to revoke the respective separate declaration of consent issued by means of the double-opt-in procedure. After a revocation, these personal data will be deleted by the controller. The Zoxxo – FZCO automatically regards a withdrawal from the receipt of the newsletter as a revocation.",
        }
      ],
    },
    {
      title: "Contact possibility via the website",
      content: [
        {
          paragraph:
            "The website of the Zoxxo – FZCO contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.",
        }
      ],
    },
    {
        title: " Subscription to comments in the blog on the website",
        content: [
          {
            paragraph:
              "The comments made in the blog of the Zoxxo – FZCO may be subscribed to by third parties. In particular, there is the possibility that a commenter subscribes to the comments following his comments on a particular blog post.",
          },
          {
            paragraph:
              "If a data subject decides to subscribe to the option, the controller will send an automatic confirmation e-mail to check the double opt-in procedure as to whether the owner of the specified e-mail address decided in favor of this option. The option to subscribe to comments may be terminated at any time.",
          }
        ],
      },
    {
      title: " Routine erasure and blocking of personal data",
      content: [
        {
          paragraph:
            "The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.",
        },
        {
          paragraph:
            "If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.",
        }
      ],
    },
    {
      title: "Rights of the data subject",
      content: [
        {
          paragraph:
            "RIGHT OF CONFIRMATION",
            items: [
                { content: "• Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact any employee of the controller." },
              ],
        },
        {
          paragraph:
            "RIGHT OF ACCESS",
            items: [
                { content: "• Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information:" },
                { content: "• the purposes of the processing;" },
                { content: "• the categories of personal data concerned;" },
                { content: "• the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;" },
                { content: "• where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;" },
                { content: "• the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing;" },
                { content: "• the existence of the right to lodge a complaint with a supervisory authority;" },
                { content: "• where the personal data are not collected from the data subject, any available information as to their source;" },
                { content: "• the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject." },
                { content: "• Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third country or to an international organisation. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer." },
                { content: "• If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact any employee of the controller." },
              ],
        },
        {
          paragraph:
            "RIGHT TO RECTIFICATION",
            items: [
                { content: "• Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement." },
                { content: "• If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact any employee of the controller." },
              ],
        },
        {
            paragraph:
              "RIGHT TO ERASURE (RIGHT TO BE FORGOTTEN)",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal data concerning him or her without undue delay, and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies, as long as the processing is not necessary:" },
                  { content: "• The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed." },
                  { content: "• The data subject withdraws consent to which the processing is based according to point (a) of Article 6(1) of the GDPR, or point (a) of Article 9(2) of the GDPR, and where there is no other legal ground for the processing." },
                  { content: "• The data subject objects to the processing pursuant to Article 21(1) of the GDPR and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) of the GDPR." },
                  { content: "• The personal data have been unlawfully processed." },
                  { content: "• The personal data must be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject." },
                  { content: "• The personal data have been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR." },
                  { content: "• If one of the aforementioned reasons applies, and a data subject wishes to request the erasure of personal data stored by the Zoxxo – FZCO, he or she may, at any time, contact any employee of the controller. An employee of Zoxxo – FZCO shall promptly ensure that the erasure request is complied with immediately." },
                  { content: "• Where the controller has made personal data public and is obliged pursuant to Article 17(1) to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform other controllers processing the personal data that the data subject has requested erasure by such controllers of any links to, or copy or replication of, those personal data, as far as processing is not required. An employees of the Zoxxo – FZCO will arrange the necessary measures in individual cases." },
                ],
          },
        {
            paragraph:
              "RIGHT OF RESTRICTION OF PROCESSING",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator to obtain from the controller restriction of processing where one of the following applies:" },
                  { content: "• The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data." },
                  { content: "• The processing is unlawful and the data subject opposes the erasure of the personal data and requests instead the restriction of their use instead." },
                  { content: "• The controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims." },
                  { content: "• The data subject has objected to processing pursuant to Article 21(1) of the GDPR pending the verification whether the legitimate grounds of the controller override those of the data subject." },
                  { content: "• If one of the aforementioned conditions is met, and a data subject wishes to request the restriction of the processing of personal data stored by the Zoxxo – FZCO, he or she may at any time contact any employee of the controller. The employee of the Zoxxo – FZCO will arrange the restriction of the processing." },
              ]
          },
        {
            paragraph:
              "RIGHT TO DATA PORTABILITY",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator, to receive the personal data concerning him or her, which was provided to a controller, in a structured, commonly used and machine-readable format. He or she shall have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, as long as the processing is based on consent pursuant to point (a) of Article 6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a contract pursuant to point (b) of Article 6(1) of the GDPR, and the processing is carried out by automated means, as long as the processing is not necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller." },
                  { content: "• Furthermore, in exercising his or her right to data portability pursuant to Article 20(1) of the GDPR, the data subject shall have the right to have personal data transmitted directly from one controller to another, where technically feasible and when doing so does not adversely affect the rights and freedoms of others." },
                  { content: "• In order to assert the right to data portability, the data subject may at any time contact any employee of the Zoxxo – FZCO." },
              ]
          },
        {
            paragraph:
              "RIGHT TO OBJECT",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator to object, on grounds relating to his or her particular situation, at any time, to processing of personal data concerning him or her, which is based on point (e) or (f) of Article 6(1) of the GDPR. This also applies to profiling based on these provisions." },
                  { content: "• The Zoxxo – FZCO shall no longer process the personal data in the event of the objection, unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject, or for the establishment, exercise or defence of legal claims." },
                  { content: "• If the Zoxxo – FZCO processes personal data for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing. This applies to profiling to the extent that it is related to such direct marketing. If the data subject objects to the Zoxxo – FZCO to the processing for direct marketing purposes, the Zoxxo – FZCO will no longer process the personal data for these purposes." },
                  { content: "• In addition, the data subject has the right, on grounds relating to his or her particular situation, to object to processing of personal data concerning him or her by the Zoxxo – FZCO for scientific or historical research purposes, or for statistical purposes pursuant to Article 89(1) of the GDPR, unless the processing is necessary for the performance of a task carried out for reasons of public interest." },
                  { content: "• In order to exercise the right to object, the data subject may contact any employee of the Zoxxo – FZCO. In addition, the data subject is free in the context of the use of information society services, and notwithstanding Directive 2002/58/EC, to use his or her right to object by automated means using technical specifications." },
              ]
          },
        {
            paragraph:
              "AUTOMATED INDIVIDUAL DECISION-MAKING, INCLUDING PROFILING",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her, or similarly significantly affects him or her, as long as the decision (1) is not is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) is not authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests, or (3) is not based on the data subject’s explicit consent." },
                  { content: "• If the decision (1) is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) it is based on the data subject’s explicit consent, the Zoxxo – FZCO shall implement suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and contest the decision." },
                  { content: "• If the data subject wishes to exercise the rights concerning automated individual decision-making, he or she may, at any time, contact any employee of the Zoxxo – FZCO." }
              ]
          },
        {
            paragraph:
              "RIGHT TO WITHDRAW DATA PROTECTION CONSENT",
              items: [
                  { content: "• Each data subject shall have the right granted by the European legislator to withdraw his or her consent to processing of his or her personal data at any time." },
                  { content: "• If the data subject wishes to exercise the right to withdraw the consent, he or she may, at any time, contact any employee of the Zoxxo – FZCO." }
              ]
          },
      ],
    },
    {
      title: "Data protection for applications and the application procedures",
      content: [
        {
          paragraph:
            "The data controller shall collect and process the personal data of applicants for the purpose of the processing of the application procedure. The processing may also be carried out electronically. This is the case, in particular, if an applicant submits corresponding application documents by e-mail or by means of a web form on the website to the controller. If the data controller concludes an employment contract with an applicant, the submitted data will be stored for the purpose of processing the employment relationship in compliance with legal requirements. If no employment contract is concluded with the applicant by the controller, the application documents shall be automatically erased two months after notification of the refusal decision, provided that no other legitimate interests of the controller are opposed to the erasure. Other legitimate interest in this relation is, e.g. a burden of proof in a procedure under the General Equal Treatment Act (AGG).",
        }
      ],
    },
    {
      title: "Data protection provisions about the application and use of Facebook",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components of the enterprise Facebook. Facebook is a social network.",
        },
        {
          paragraph:
            "A social network is a place for social meetings on the Internet, an online community, which usually allows users to communicate with each other and interact in a virtual space. A social network may serve as a platform for the exchange of opinions and experiences, or enable the Internet community to provide personal or business-related information. Facebook allows social network users to include the creation of private profiles, upload photos, and network through friend requests.",
        },
        {
          paragraph:
            "The operating company of Facebook is Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, United States. If a person lives outside of the United States or Canada, the controller is the Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.",
        },
        {
          paragraph:
            "With each call-up to one of the individual pages of this Internet website, which is operated by the controller and into which a Facebook component (Facebook plug-ins) was integrated, the web browser on the information technology system of the data subject is automatically prompted to download display of the corresponding Facebook component from Facebook through the Facebook component. An overview of all the Facebook Plug-ins may be accessed under https://developers.facebook.com/docs/plugins/. During the course of this technical procedure, Facebook is made aware of what specific sub-site of our website was visited by the data subject.",
        },
        {
          paragraph:
            "If the data subject is logged in at the same time on Facebook, Facebook detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-site of our Internet page was visited by the data subject. This information is collected through the Facebook component and associated with the respective Facebook account of the data subject. If the data subject clicks on one of the Facebook buttons integrated into our website, e.g. the “Like” button, or if the data subject submits a comment, then Facebook matches this information with the personal Facebook user account of the data subject and stores the personal data.",
        },
        {
          paragraph:
            "Facebook always receives, through the Facebook component, information about a visit to our website by the data subject, whenever the data subject is logged in at the same time on Facebook during the time of the call-up to our website. This occurs regardless of whether the data subject clicks on the Facebook component or not. If such a transmission of information to Facebook is not desirable for the data subject, then he or she may prevent this by logging off from their Facebook account before a call-up to our website is made.",
        },
        {
          paragraph:
            "The data protection guideline published by Facebook, which is available at https://facebook.com/about/privacy/, provides information about the collection, processing and use of personal data by Facebook. In addition, it is explained there what setting options Facebook offers to protect the privacy of the data subject. In addition, different configuration options are made available to allow the elimination of data transmission to Facebook. These applications may be used by the data subject to eliminate a data transmission to Facebook.",
        },
      ],
    },
    {
      title: "Data protection provisions about the application and use of functions of the Amazon Partner program",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated Amazon components as a participant in the Amazon partner program. The Amazon components were created by Amazon with the aim to mediate customers through advertisements on various websites of the Amazon group, in particular Amazon.co.uk, Local.Amazon.co.uk, Amazon.de, BuyVIP.com, Amazon.fr, Amazon.it and Amazon.es in return for the payment of a commission. By using the Amazon components, the controller may generate advertising revenue.",
        },
        {
          paragraph:
            "The operating company of this Amazon component is Amazon EU S.à.r.l, 5 Rue Plaetis, L-2338 Luxembourg, Luxembourg.",
        },
        {
          paragraph:
            "Amazon sets a cookie the information technology system of the data subject. The definition of cookies is explained above. With each single call-up to one of the individual pages of this Internet website, which is operated by the controller and in which an Amazon component was integrated, the Internet browser on the information technology system of the data subject will automatically submit data for the purpose of online advertising and the settlement of commissions to Amazon through the respective Amazon component. During the course of this technical procedure, Amazon receives personal information that is used to trace the origin of orders from Amazon, and as a result, to allow the accounting of a commission. Among other things, Amazon may understand that the data subject has clicked on an affiliate link on our website.",
        },
        {
          paragraph:
            "The data subject may, as stated above, prevent the setting of cookies through our website at any time by means of a corresponding adjustment of the web browser used, and thus permanently deny the setting of cookies. Such an adjustment to the Internet browser used would also prevent Amazon from setting a cookie on the information technology system of the data subject. In addition, cookies already in use by Amazon may be deleted at anytime via a web browser or other software programs.",
        },
        {
          paragraph:
            "Further information and the actual data protection provisions of Amazon may be retrieved under https://www.amazon.de/gp/help/customer/display.html?nodeId=3312401&language=en_GB.",
        },
      ],
    },
    {
      title: "Data protection provisions about the application and use of Google AdSense",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated Google AdSense. Google AdSense is an online service which allows the placement of advertising on third-party sites. Google AdSense is based on an algorithm that selects advertisements displayed on third-party sites to match with the content of the respective third-party site. Google AdSense allows an interest-based targeting of the Internet user, which is implemented by means of generating individual user profiles.",
        },
        {
          paragraph:
            "The operating company of Google’s AdSense component is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.",
        },
        {
          paragraph:
            "The purpose of Google’s AdSense component is the integration of advertisements on our website. Google AdSense places a cookie on the information technology system of the data subject. The definition of cookies is explained above. With the setting of the cookie, Alphabet Inc. is enabled to analyze the use of our website. With each call-up to one of the individual pages of this Internet site, which is operated by the controller and into which a Google AdSense component is integrated, the Internet browser on the information technology system of the data subject will automatically submit data through the Google AdSense component for the purpose of online advertising and the settlement of commissions to Alphabet Inc. During the course of this technical procedure, the enterprise Alphabet Inc. gains knowledge of personal data, such as the IP address of the data subject, which serves Alphabet Inc., inter alia, to understand the origin of visitors and clicks and subsequently create commission settlements.",
        },
        {
          paragraph:
            "The data subject may, as stated above, prevent the setting of cookies through our website at any time by means of a corresponding adjustment of the web browser used and thus permanently deny the setting of cookies. Such an adjustment to the Internet browser used would also prevent Alphabet Inc. from setting a cookie on the information technology system of the data subject. Additionally, cookies already in use by Alphabet Inc. may be deleted at any time via a web browser or other software programs.",
        },
        {
          paragraph:
            "Furthermore, Google AdSense also uses so-called tracking pixels. A tracking pixel is a miniature graphic that is embedded in web pages to enable a log file recording and a log file analysis through which a statistical analysis may be performed. Based on the embedded tracking pixels, Alphabet Inc. is able to determine if and when a website was opened by a data subject, and which links were clicked on by the data subject. Tracking pixels serve, inter alia, to analyze the flow of visitors on a website.",
        },
        {
          paragraph:
            "Through Google AdSense, personal data and information—which also includes the IP address, and is necessary for the collection and accounting of the displayed advertisements—is transmitted to Alphabet Inc. in the United States of America. These personal data will be stored and processed in the United States of America. The Alphabet Inc. may disclose the collected personal data through this technical procedure to third parties.",
        },
        {
          paragraph:
            "Google AdSense is further explained under the following link https://www.google.com/intl/en/adsense/start/.",
        }
      ],
    },
    {
      title: "Data protection provisions about the application and use of Google Analytics (with anonymization function)",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated the component of Google Analytics (with the anonymizer function). Google Analytics is a web analytics service. Web analytics is the collection, gathering, and analysis of data about the behavior of visitors to websites. A web analysis service collects, inter alia, data about the website from which a person has come (the so-called referrer), which sub-pages were visited, or how often and for what duration a sub-page was viewed. Web analytics are mainly used for the optimization of a website and in order to carry out a cost-benefit analysis of Internet advertising.",
        },
        {
          paragraph:
            "The operator of the Google Analytics component is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.",
        },
        {
          paragraph:
            "For the web analytics through Google Analytics the controller uses the application “_gat. _anonymizeIp”. By means of this application the IP address of the Internet connection of the data subject is abridged by Google and anonymised when accessing our websites from a Member State of the European Union or another Contracting State to the Agreement on the European Economic Area.",
        },
        {
          paragraph:
            "The purpose of the Google Analytics component is to analyze the traffic on our website. Google uses the collected data and information, inter alia, to evaluate the use of our website and to provide online reports, which show the activities on our websites, and to provide other services concerning the use of our Internet site for us.",
        },
        {
          paragraph:
            "Google Analytics places a cookie on the information technology system of the data subject. The definition of cookies is explained above. With the setting of the cookie, Google is enabled to analyze the use of our website. With each call-up to one of the individual pages of this Internet site, which is operated by the controller and into which a Google Analytics component was integrated, the Internet browser on the information technology system of the data subject will automatically submit data through the Google Analytics component for the purpose of online advertising and the settlement of commissions to Google. During the course of this technical procedure, the enterprise Google gains knowledge of personal information, such as the IP address of the data subject, which serves Google, inter alia, to understand the origin of visitors and clicks, and subsequently create commission settlements.",
        },
        {
          paragraph:
            "The cookie is used to store personal information, such as the access time, the location from which the access was made, and the frequency of visits of our website by the data subject. With each visit to our Internet site, such personal data, including the IP address of the Internet access used by the data subject, will be transmitted to Google in the United States of America. These personal data are stored by Google in the United States of America. Google may pass these personal data collected through the technical procedure to third parties.",
        },
        {
          paragraph:
            "The data subject may, as stated above, prevent the setting of cookies through our website at any time by means of a corresponding adjustment of the web browser used and thus permanently deny the setting of cookies. Such an adjustment to the Internet browser used would also prevent Google Analytics from setting a cookie on the information technology system of the data subject. In addition, cookies already in use by Google Analytics may be deleted at any time via a web browser or other software programs.",
        },
        {
          paragraph:
            "In addition, the data subject has the possibility of objecting to a collection of data that are generated by Google Analytics, which is related to the use of this website, as well as the processing of this data by Google and the chance to preclude any such. For this purpose, the data subject must download a browser add-on under the link https://tools.google.com/dlpage/gaoptout and install it. This browser add-on tells Google Analytics through a JavaScript, that any data and information about the visits of Internet pages may not be transmitted to Google Analytics. The installation of the browser add-ons is considered an objection by Google. If the information technology system of the data subject is later deleted, formatted, or newly installed, then the data subject must reinstall the browser add-ons to disable Google Analytics. If the browser add-on was uninstalled by the data subject or any other person who is attributable to their sphere of competence, or is disabled, it is possible to execute the reinstallation or reactivation of the browser add-ons.",
        },
        {
          paragraph:
            "Further information and the applicable data protection provisions of Google may be retrieved under https://www.google.com/intl/en/policies/privacy/ and under http://www.google.com/analytics/terms/us.html. Google Analytics is further explained under the following Link https://www.google.com/analytics/.",
        },
      ],
    },
    {
      title: "Data protection provisions about the application and use of Google Remarketing",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated Google Remarketing services. Google Remarketing is a feature of Google AdWords, which allows an enterprise to display advertising to Internet users who have previously resided on the enterprise’s Internet site. The integration of Google Remarketing therefore allows an enterprise to create user-based advertising and thus shows relevant advertisements to interested Internet users.",
        },
        {
          paragraph:
            "The operating company of the Google Remarketing services is the Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.",
        },
        {
          paragraph:
            "The purpose of Google Remarketing is the insertion of interest-relevant advertising. Google Remarketing allows us to display ads on the Google network or on other websites, which are based on individual needs and matched to the interests of Internet users.",
        },
        {
          paragraph:
            "Google Remarketing sets a cookie on the information technology system of the data subject. The definition of cookies is explained above. With the setting of the cookie, Google enables a recognition of the visitor of our website if he calls up consecutive web pages, which are also a member of the Google advertising network. With each call-up to an Internet site on which the service has been integrated by Google Remarketing, the web browser of the data subject identifies automatically with Google. During the course of this technical procedure, Google receives personal information, such as the IP address or the surfing behaviour of the user, which Google uses, inter alia, for the insertion of interest relevant advertising.",
        },
        {
          paragraph:
            "The cookie is used to store personal information, e.g. the Internet pages visited by the data subject. Each time we visit our Internet pages, personal data, including the IP address of the Internet access used by the data subject, is transmitted to Google in the United States of America. These personal data are stored by Google in the United States of America. Google may pass these personal data collected through the technical procedure to third parties.",
        },
        {
          paragraph:
            "The data subject may, as stated above, prevent the setting of cookies through our website at any time by means of a corresponding adjustment of the web browser used and thus permanently deny the setting of cookies. Such an adjustment to the Internet browser used would also prevent Google from setting a cookie on the information technology system of the data subject. In addition, cookies already in use by Google may be deleted at any time via a web browser or other software programs.",
        },
        {
          paragraph:
            "In addition, the data subject has the possibility of objecting to the interest-based advertising by Google. For this purpose, the data subject must call up the link to www.google.de/settings/ads and make the desired settings on each Internet browser used by the data subject.",
        },
        {
          paragraph:
            "Further information and the actual data protection provisions of Google may be retrieved under https://www.google.com/intl/en/policies/privacy/.",
        }
      ],
    },
    {
      title: "Data protection provisions about the application and use of Google-AdWords",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated Google AdWords. Google AdWords is a service for Internet advertising that allows the advertiser to place ads in Google search engine results and the Google advertising network. Google AdWords allows an advertiser to pre-define specific keywords with the help of which an ad on Google’s search results only then displayed, when the user utilizes the search engine to retrieve a keyword-relevant search result. In the Google Advertising Network, the ads are distributed on relevant web pages using an automatic algorithm, taking into account the previously defined keywords.",
        },
        {
          paragraph:
            "The operating company of Google AdWords is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.",
        },
        {
          paragraph:
            "The purpose of Google AdWords is the promotion of our website by the inclusion of relevant advertising on the websites of third parties and in the search engine results of the search engine Google and an insertion of third-party advertising on our website.",
        },
        {
          paragraph:
            "If a data subject reaches our website via a Google ad, a conversion cookie is filed on the information technology system of the data subject through Google. The definition of cookies is explained above. A conversion cookie loses its validity after 30 days and is not used to identify the data subject. If the cookie has not expired, the conversion cookie is used to check whether certain sub-pages, e.g, the shopping cart from an online shop system, were called up on our website. Through the conversion cookie, both Google and the controller can understand whether a person who reached an AdWords ad on our website generated sales, that is, executed or canceled a sale of goods.",
        },
        {
          paragraph:
            "The data and information collected through the use of the conversion cookie is used by Google to create visit statistics for our website. These visit statistics are used in order to determine the total number of users who have been served through AdWords ads to ascertain the success or failure of each AdWords ad and to optimize our AdWords ads in the future. Neither our company nor other Google AdWords advertisers receive information from Google that could identify the data subject.",
        },
        {
          paragraph:
            "The conversion cookie stores personal information, e.g. the Internet pages visited by the data subject. Each time we visit our Internet pages, personal data, including the IP address of the Internet access used by the data subject, is transmitted to Google in the United States of America. These personal data are stored by Google in the United States of America. Google may pass these personal data collected through the technical procedure to third parties.",
        },
        {
          paragraph:
            "The data subject may, at any time, prevent the setting of cookies by our website, as stated above, by means of a corresponding setting of the Internet browser used and thus permanently deny the setting of cookies. Such a setting of the Internet browser used would also prevent Google from placing a conversion cookie on the information technology system of the data subject. In addition, a cookie set by Google AdWords may be deleted at any time via the Internet browser or other software programs.",
        },
        {
          paragraph:
            "The data subject has a possibility of objecting to the interest based advertisement of Google. Therefore, the data subject must access from each of the browsers in use the link www.google.de/settings/ads and set the desired settings.",
        },
        {
          paragraph:
            "Further information and the applicable data protection provisions of Google may be retrieved under https://www.google.com/intl/en/policies/privacy/.",
        },
      ],
    },
    {
      title: "Data protection provisions about the application and use of Instagram",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components of the service Instagram. Instagram is a service that may be qualified as an audiovisual platform, which allows users to share photos and videos, as well as disseminate such data in other social networks.",
        },
        {
          paragraph:
            "The operating company of the services offered by Instagram is Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.",
        },
        {
          paragraph:
            "With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which an Instagram component (Insta button) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding Instagram component of Instagram. During the course of this technical procedure, Instagram becomes aware of what specific sub-page of our website was visited by the data subject.",
        },
        {
          paragraph:
            "If the data subject is logged in at the same time on Instagram, Instagram detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the Instagram component and is associated with the respective Instagram account of the data subject. If the data subject clicks on one of the Instagram buttons integrated on our website, then Instagram matches this information with the personal Instagram user account of the data subject and stores the personal data.",
        },
        {
          paragraph:
            "Instagram receives information via the Instagram component that the data subject has visited our website provided that the data subject is logged in at Instagram at the time of the call to our website. This occurs regardless of whether the person clicks on the Instagram button or not. If such a transmission of information to Instagram is not desirable for the data subject, then he or she can prevent this by logging off from their Instagram account before a call-up to our website is made.",
        },
        {
          paragraph:
            "Further information and the applicable data protection provisions of Instagram may be retrieved under https://help.instagram.com/155833707900388 and https://www.instagram.com/about/legal/privacy/.",
        }
      ],
    },
    {
      title: "Data protection provisions about the application and use of LinkedIn",
      content: [
        {
          paragraph:
            "The controller has integrated components of the LinkedIn Corporation on this website. LinkedIn is a web-based social network that enables users with existing business contacts to connect and to make new business contacts. Over 400 million registered people in more than 200 countries use LinkedIn. Thus, LinkedIn is currently the largest platform for business contacts and one of the most visited websites in the world.",
        },
        {
          paragraph:
            "The operating company of LinkedIn is LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, UNITED STATES. For privacy matters outside of the UNITED STATES LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is responsible.",
        },
        {
          paragraph:
            "With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a LinkedIn component (LinkedIn plug-in) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding LinkedIn component of LinkedIn. Further information about the LinkedIn plug-in may be accessed under https://developer.linkedin.com/plugins. During the course of this technical procedure, LinkedIn gains knowledge of what specific sub-page of our website was visited by the data subject.",
        },
        {
          paragraph:
            "If the data subject is logged in at the same time on LinkedIn, LinkedIn detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the LinkedIn component and associated with the respective LinkedIn account of the data subject. If the data subject clicks on one of the LinkedIn buttons integrated on our website, then LinkedIn assigns this information to the personal LinkedIn user account of the data subject and stores the personal data.",
        },
        {
          paragraph:
            "LinkedIn receives information via the LinkedIn component that the data subject has visited our website, provided that the data subject is logged in at LinkedIn at the time of the call-up to our website. This occurs regardless of whether the person clicks on the LinkedIn button or not. If such a transmission of information to LinkedIn is not desirable for the data subject, then he or she may prevent this by logging off from their LinkedIn account before a call-up to our website is made.",
        },
        {
          paragraph:
            "Data protection provisions about the application and use of LinkedIn The controller has integrated components of the LinkedIn Corporation on this website. LinkedIn is a web-based social network that enables users with existing business contacts to connect and to make new business contacts. Over 400 million registered people in more than 200 countries use LinkedIn. Thus, LinkedIn is currently the largest platform for business contacts and one of the most visited websites in the world. The operating company of LinkedIn is LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, UNITED STATES. For privacy matters outside of the UNITED STATES LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is responsible. With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a LinkedIn component (LinkedIn plug-in) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding LinkedIn component of LinkedIn. Further information about the LinkedIn plug-in may be accessed under https://developer.linkedin.com/plugins. During the course of this technical procedure, LinkedIn gains knowledge of what specific sub-page of our website was visited by the data subject. If the data subject is logged in at the same time on LinkedIn, LinkedIn detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the LinkedIn component and associated with the respective LinkedIn account of the data subject. If the data subject clicks on one of the LinkedIn buttons integrated on our website, then LinkedIn assigns this information to the personal LinkedIn user account of the data subject and stores the personal data. LinkedIn receives information via the LinkedIn component that the data subject has visited our website, provided that the data subject is logged in at LinkedIn at the time of the call-up to our website. This occurs regardless of whether the person clicks on the LinkedIn button or not. If such a transmission of information to LinkedIn is not desirable for the data subject, then he or she may prevent this by logging off from their LinkedIn account before a call-up to our website is made. LinkedIn provides under https://www.linkedin.com/psettings/guest-controls the possibility to unsubscribe from e-mail messages, SMS messages and targeted ads, as well as the ability to manage ad settings. LinkedIn also uses affiliates such as Eire, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua, and Lotame. The setting of such cookies may be denied under https://www.linkedin.com/legal/cookie-policy. The applicable privacy policy for LinkedIn is available under https://www.linkedin.com/legal/privacy-policy. The LinkedIn Cookie Policy is available under https://www.linkedin.com/legal/cookie-policy.",
        },
      ],
    },
    {
      title: "Data protection provisions about the application and use of YouTube",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components of YouTube. YouTube is an Internet video portal that enables video publishers to set video clips and other users free of charge, which also provides free viewing, review and commenting on them. YouTube allows you to publish all kinds of videos, so you can access both full movies and TV broadcasts, as well as music videos, trailers, and videos made by users via the Internet portal.",
        },
        {
          paragraph:
            "The operating company of YouTube is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.",
        },
        {
          paragraph:
            "With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a YouTube component (YouTube video) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to download a display of the corresponding YouTube component. Further information about YouTube may be obtained under https://www.youtube.com/yt/about/en/. During the course of this technical procedure, YouTube and Google gain knowledge of what specific sub-page of our website was visited by the data subject.",
        },
        {
          paragraph:
            "If the data subject is logged in on YouTube, YouTube recognizes with each call-up to a sub-page that contains a YouTube video, which specific sub-page of our Internet site was visited by the data subject. This information is collected by YouTube and Google and assigned to the respective YouTube account of the data subject.",
        },
        {
          paragraph:
            "YouTube and Google will receive information through the YouTube component that the data subject has visited our website, if the data subject at the time of the call to our website is logged in on YouTube; this occurs regardless of whether the person clicks on a YouTube video or not. If such a transmission of this information to YouTube and Google is not desirable for the data subject, the delivery may be prevented if the data subject logs off from their own YouTube account before a call-up to our website is made.",
        },
        {
          paragraph:
            "YouTube’s data protection provisions, available at https://www.google.com/intl/en/policies/privacy/, provide information about the collection, processing and use of personal data by YouTube and Google.",
        }
      ],
    },
    {
      title: "Payment Method: Data protection provisions about the use of Klarna as a payment processor",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated Klarna components. Klarna is an online payment service provider, which allows purchases on an account or a flexible installment payment. Klarna also offers other services, such as buyer protection and identity or creditworthiness checks.",
        },
        {
          paragraph:
            "The operating company of Klarna is Klarna Bank AB, Sveavägen 46, 111 34 Stockholm, Schweden.",
        },
        {
          paragraph:
            "If the data subject selects the “purchase on account” or “installment purchase” during the ordering process in our online shop as a payment option, the data of the data subject is automatically transmitted to Klarna. By selecting one of these payment options, the data subject agrees to this transmission of personal data required for the processing of the invoice or installment purchase, or identity and creditworthiness checks.",
        },
        {
          paragraph:
            "The personal data transmitted to Klarna is usually first name, surname, address, date of birth, sex, email address, IP address, telephone number, mobile phone number, as well as other data necessary for the processing of an invoice or installment purchase. The processing of the purchase contract also requires such personal data, which are in connection with the respective order. In particular, the exchange of payment information such as bank details, card number, date of validity and CVC code, cumulative number, item number, data on goods and services, prices and taxes, information on the previous purchase behavior or other details of the financial situation of the data subject.",
        },
        {
          paragraph:
            "The purpose of the transmission of the data is, in particular, the identification check, payment administration, andfraud prevention. The controller shall provide Klarna with personal data, in particular, if a legitimate interest in the transmission exists. The personal data exchanged between Klarna and the data subject for the data processing shall be transmitted by Klarna to economic agencies. This transmission is intended for identity and creditworthiness checks.",
        },
        {
          paragraph:
            "Klarna shall also pass on the personal data to affiliates (Klarna Group) and service providers or subcontractors as far as this is necessary to fulfill contractual obligations or to process the data in the order.",
        },
        {
          paragraph:
            "Klarna collects and uses data and information on the previous payment behavior of the data subject as well as probability values for their behavior in the future (so-called scoring) in order to decide on the reasoning, implementation or termination of a contractual relationship. The calculation of scoring is carried out on the basis of scientifically-recognized mathematical-statistical methods.",
        },
        {
          paragraph:
            "The data subject is able to revoke the consent to the handling of personal data at any time from Klarna. A revocation shall not have any effect on personal data which must be processed, used or transmitted in accordance with (contractual) payment processing.",
        },
        {
          paragraph:
            "The applicable data protection provisions of Klarna may be retrieved under https://cdn.klarna.com/1.0/shared/content/policy/data/de_de/data_protection.pdf.",
        }
      ],
    },
    {
      title: "Payment Method: Data protection provisions about the use of PayPal as a payment processor",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components of PayPal. PayPal is an online payment service provider. Payments are processed via so-called PayPal accounts, which represent virtual private or business accounts. PayPal is also able to process virtual payments through credit cards when a user does not have a PayPal account. A PayPal account is managed via an e-mail address, which is why there are no classic account numbers. PayPal makes it possible to trigger online payments to third parties or to receive payments. PayPal also accepts trustee functions and offers buyer protection services.",
        },
        {
          paragraph:
            "The European operating company of PayPal is PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal L-2449, Luxemburg.",
        },
        {
          paragraph:
            "If the data subject chooses “PayPal” as the payment option in the online shop during the ordering process, we automatically transmit the data of the data subject to PayPal. By selecting this payment option, the data subject agrees to the transfer of personal data required for payment processing.",
        },
        {
          paragraph:
            "The personal data transmitted to PayPal is usually first name, last name, address, email address, IP address, telephone number, mobile phone number, or other data necessary for payment processing. The processing of the purchase contract also requires such personal data, which are in connection with the respective order.",
        },
        {
          paragraph:
            "The transmission of the data is aimed at payment processing and fraud prevention. The controller will transfer personal data to PayPal, in particular, if a legitimate interest in the transmission is given. The personal data exchanged between PayPal and the controller for the processing of the data will be transmitted by PayPal to economic credit agencies. This transmission is intended for identity and creditworthiness checks.",
        },
        {
          paragraph:
            "PayPal will, if necessary, pass on personal data to affiliates and service providers or subcontractors to the extent that this is necessary to fulfill contractual obligations or for data to be processed in the order.",
        },
        {
          paragraph:
            "The data subject has the possibility to revoke consent for the handling of personal data at any time from PayPal. A revocation shall not have any effect on personal data which must be processed, used or transmitted in accordance with (contractual) payment processing.",
        },
        {
          paragraph:
            "The applicable data protection provisions of PayPal may be retrieved under https://www.paypal.com/us/webapps/mpp/ua/privacy-full.",
        },
      ],
    },
    {
      title: "Payment Method: Data protection provisions about the use of Skrill as a payment processor",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components by Skrill. Skrill is an online payment service provider. Payments are made via the so-called Skrill wallet, which is a virtual electronic wallet. Skrill also offers the possibility to make virtual payments via credit cards. A Skrill wallet is managed via an e-mail address. Skrill makes it possible to trigger online payments to third parties or to receive payments.",
        },
        {
          paragraph:
            "The operating company of Skrill is Skrill Limited, 25 Canada Square, London E14 5LQ, United Kingdom.",
        },
        {
          paragraph:
            "If the data subject chooses “Skrill” as the payment option during the ordering process in our online-shop, the data will be transmitted automatically to Skrill. By selecting this payment option, the data subject agrees to the transmission of personal data required for payment processing.",
        },
        {
          paragraph:
            "The personal data exchanged with Skrill is the purchase sum and e-mail address, which are both necessary for payment processing. The transmission of data is aimed at payment processing and fraud prevention. The controller will also provide Skrill with other personal data in the case, if a legitimate interest in the transmission exists. The personal data exchanged between Skrill and the data subject shall be transmitted by Skrill to the economic agencies. This transmission is intended for identity and creditworthiness checks.",
        },
        {
          paragraph:
            "If necessary, Skrill will pass on personal data to affiliates and service providers or subcontractors to the extent necessary to fulfill contractual obligations or to process the data in the order.",
        },
        {
          paragraph:
            "The data subject has the possibility to revoke the consent to the handling of personal data at any time from Skrill. A revocation shall not have any effect on personal data which must be processed, used or transmitted in accordance with (contractual) payment processing.",
        },
        {
          paragraph:
            "The applicable data protection provisions of Skrill may be retrieved under https://www.skrill.com/en/footer/privacypolicy/.",
        },
      ],
    },
    {
      title: "Payment Method: Data protection provisions about the use of Sofortüberweisung as a payment processor",
      content: [
        {
          paragraph:
            "On this website, the controller has integrated components of Sofortüberweisung. Sofortüberweisung is a payment service that allows cashless payment of products and services on the Internet. Sofortüberweisung is a technical procedure by which the online dealer immediately receives a payment confirmation. This enables a trader to deliver goods, services or downloads to the customer immediately after ordering.",
        },
        {
          paragraph:
            "The operating company of Sofortüberweisung is Klarna Bank AB, Sveavägen 46, 111 34 Stockholm, Schweden.",
        },
        {
          paragraph:
            "If the data subject chooses “immediate transfer” as the payment option in our online shop during the ordering process, the data of the data subject will be transmitted to Sofortüberweisung. By selecting this payment option, the data subject agrees to the transmission of personal data required for payment processing.",
        },
        {
          paragraph:
            "In the case of purchase processing via direct transfer, the buyer sends the PIN and the TAN to Sofort GmbH. Sofortüberweisung then carries out a transfer to the online merchant after technical verification of the account status and retrieval of additional data to check the account assignment. The online trader is then automatically informed of the execution of the financial transaction.",
        },
        {
          paragraph:
            "The personal data exchanged with Sofortüberweisung is the first name, last name, address, email address, IP address, telephone number, mobile phone number, or other data necessary for payment processing. The transmission of the data is aimed at payment processing and fraud prevention. The controller shall immediately transfer other personal data, even if a legitimate interest in the transmission exists. The personal data exchanged between Sofortüberweisung and the controller shall be transmitted by Sofortüberweisung to economic credit agencies. This transmission is intended for identity and creditworthiness checks.",
        },
        {
          paragraph:
            "Sofortüberweisung provides personal data to affiliated companies and service providers or subcontractors as far as this is necessary for the fulfillment of contractual obligations or data in order to be processed.",
        },
        {
          paragraph:
            "The data subject has the possibility to revoke the consent to the handling of personal data at any time from Sofortüberweisung. A revocation shall not have any effect on personal data which must be processed, used or transmitted in accordance with (contractual) payment processing.",
        },
        {
          paragraph:
            "The applicable data protection provisions of Sofortüberweisung may be retrieved under https://www.klarna.com/sofort/datenschutz/.",
        },
      ],
    },
    {
      title: "Legal basis for the processing",
      content: [
        {
          paragraph:
            "Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based on Article 6(1) lit. b GDPR. The same applies to such processing operations which are necessary for carrying out pre-contractual measures, for example in the case of inquiries concerning our products or services. Is our company subject to a legal obligation by which processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR. In rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or of another natural person. This would be the case, for example, if a visitor were injured in our company and his name, age, health insurance data or other vital information would have to be passed on to a doctor, hospital or other third party. Then the processing would be based on Art. 6(1) lit. d GDPR. Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not covered by any of the abovementioned legal grounds, if processing is necessary for the purposes of the legitimate interests pursued by our company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data. Such processing operations are particularly permissible because they have been specifically mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).",
        }
      ],
    },
    {
      title: "The legitimate interests pursued by the controller or by a third party",
      content: [
        {
          paragraph:
            "Where the processing of personal data is based on Article 6(1) lit. f GDPR our legitimate interest is to carry out our business in favor of the well-being of all our employees and the shareholders.",
        }
      ],
    },
    {
      title: "Period for which the personal data will be stored",
      content: [
        {
          paragraph:
            "The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract.",
        }
      ],
    },
    {
      title: "Provision of personal data as statutory or contractual requirement; Requirement necessary to enter into a contract; Obligation of the data subject to provide the personal data; possible consequences of failure to provide such data",
      content: [
        {
          paragraph:
            "We clarify that the provision of personal data is partly required by law (e.g. tax regulations) or can also result from contractual provisions (e.g. information on the contractual partner). Sometimes it may be necessary to conclude a contract that the data subject provides us with personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract with the data subject could not be concluded. Before personal data is provided by the data subject, the data subject must contact any employee. The employee clarifies to the data subject whether the provision of the personal data is required by law or contract or is necessary for the conclusion of the contract, whether there is an obligation to provide the personal data and the consequences of non-provision of the personal data.",
        }
      ],
    },
    {
      title: "Existence of automated decision-making",
      content: [
        {
          paragraph:
            "As a responsible company, we do not use automatic decision-making or profiling.",
        },
        {
          paragraph:
            "Developed by the specialists for LegalTech at Willing & Able that also developed the system for dpia data protection.",
        },
      ],
    }
  ];

  return (
    <Container>
      <Grid container spacing={2} my={5}>
        {data?.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <CustomContent6 title={item.title} content={item.content} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PrivacyPolicyDetails;
