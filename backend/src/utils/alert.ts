import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
const TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID as string;

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendAlert = async (
  to_email: string,
  temperature: number,
  condition: string
) => {
  const msg: sgMail.MailDataRequired = {
    to: "hemangsharma1000@gmail.com",
    from: "umangsharma1905@gmail.com", // Verified sender email
    templateId: TEMPLATE_ID,
    dynamicTemplateData: {
      to_name: to_email,
      temperature: temperature,
      condition: condition,
    },
  };

  try {
    await sgMail.send(msg);
    console.log("Alert email sent");
  } catch (error: any) {
    console.error(
      "Failed to send alert email",
      error.response ? error.response.body.errors : error.message
    );
  }
};
