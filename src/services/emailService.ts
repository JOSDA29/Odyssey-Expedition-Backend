import { KnownEmailSendStatus } from "@azure/communication-email";
import emailClient from "../helpers/sendEmail";

async function main() {
  const POLLER_WAIT_TIME = 10
  try {
    const message = {
      senderAddress: "055cab5a-70e7-4d32-8ecb-dd97f6f4aeef.azurecomm.net",
      content: {
        subject: "Welcome to Azure Communication Services Email",
        plainText: "This email message is sent from Azure Communication Services Email using the JavaScript SDK.",
      },
      recipients: {
        to: [
          {
            address: "luiseduardovelez88@gmail.com",
            displayName: "Customer Name",
          },
        ],
      },
    };

    const poller: any= await emailClient.beginSend(message);
    if (!poller.getOperationState().isStarted) {
      throw "Poller was not started."
    }

    let timeElapsed = 0;
    while(!poller.isDone()) {
      poller.poll();
      console.log("Email send polling in progress");

      await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
      timeElapsed += 10;

      if(timeElapsed > 18 * POLLER_WAIT_TIME) {
        throw "Polling timed out.";
      }
    }

    if(poller.getResult().status === KnownEmailSendStatus.Succeeded) {
      console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
    }
    else {
      throw poller.getResult().error;
    }
  } catch (e) {
    console.log(e);
  }
}

main();