import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TextBox from "../TextBox";
import "./textBoxStory.scss";

import Label from "../../Label/Label";

const ticket = {
  avatarUrl:
    "https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600113/59070195-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg",
  ticketName: "Item 1",
  ticketID: "12323242",
  statusColor: Label.colors.POSITIVE,
  statusValue: "open",
  lastUpdates: new Date().toUTCString(),
  ticketURL: "/",
};

export const Sandbox = () => (
  <div>
    <TextBox
      avatarUrl={ticket.avatarUrl}
      ticketID={ticket.ticketID}
      ticketName={ticket.ticketName}
      ticketURL={ticket.ticketURL}
      lastUpdates={ticket.lastUpdates}
      statusColor={ticket.statusColor}
      statusValue={ticket.statusValue}
      size={TextBox.sizes.SMALL}
    />
  </div>
);

export default {
  title: "Ticket Booth Components|TextBox",
  component: TextBox,
  decorators: [withPerformance],
};
