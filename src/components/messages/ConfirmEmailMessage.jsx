import React from "react";
import { Message } from "semantic-ui-react";

const ConfirmEmailMessage = () => (
  <div>
    <Message info>
      <Message.Header>
        Please verify your email to take full advantage of the website.
      </Message.Header>
      It's not required, but it is suggested.
    </Message>
  </div>
);

export default ConfirmEmailMessage;
