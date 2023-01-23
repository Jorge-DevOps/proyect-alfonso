/* Initialization */
import {
  Configuration,
  EmailsApi,
  EmailMessageData,
} from "@elasticemail/elasticemail-client-ts-axios";

/* Generate and use your API key */

export const useSendMail = () => {
  const config = new Configuration({
    apiKey:
      "AC3DA0DD9B5FD85DEE1D7FE29D0C7FD8484010C6BCF002B903CC7F7705FE5FA19F9E6C1300B729B502F27C457D43FD18",
  });

  const emailsApi = new EmailsApi(config);

  const emailMessageData = {
    Recipients: [
      {
        Email: "MeowWow ",
        Fields: {
          name: "Name",
        },
      },
    ],
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: "My test email content ;)",
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Hi {name}!",
        },
      ],
      From: "MyEmail ",
      Subject: "Typescript Axios EE lib test",
    },
  }; // interface EmailMessageData from '@elasticemail/elasticemail-client-ts-axios'

  const sendMail = (emailMessageData: any): void => {
    emailsApi
      .emailsPost(emailMessageData)
      .then((response) => {
        console.log("API called successfully.");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /*   const config = {
    SecureToken: "63e57b2b-d0b6-4ab2-9537-0eb1962814c9",
    Username: "jorgedevops20@gmail.com",
    Password: "5F6E4D5ABA3F8708840DA5C6A3F920736E87",
    Host: "smtp.elasticemail.com",
    Port: 2525,
    To: "jorgedevops20@gmail.com",
    From: "jorgedevops20@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  };
 */

  return { sendMail };
};
