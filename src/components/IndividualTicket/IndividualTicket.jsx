import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import "./IndividualTicket.scss";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Link from "../Link/Link";

const IndividualTicket = forwardRef(
  (
    {
      className,
      ariaLabelledby,
      ariaDescribedby,
      type,
      size,
      children,
      avatarUrl,
      fontSize,
      ticketName,
      ticketID,
      statusColor,
      statusValue,
      lastUpdates,
      ticketURL,
    },
    ref
  ) => {
    return (
      <DialogContentContainer
        type={type}
        size={size}
        className={`ticket-booth-style-individual-ticket ticket-booth-style-individual-ticket--font-size-${fontSize} ${className}`}
        ariaLabelledby={ariaLabelledby}
        ariaDescribedby={ariaDescribedby}
        ref={ref}
      >
        <img className="image-circle" src={avatarUrl} />
        <div className="">{ticketName}</div>
        <div className={statusColor}>
          <Label text={statusValue} color={statusColor} />
        </div>
        <div>{lastUpdates}</div>
        <div className="contentButton">
          <Button size={Button.sizes.SMALL}>
            <Link text="View" href={ticketURL} />
          </Button>

          <span className="label-id">ID#: {ticketID} </span>
        </div>

        {children}
      </DialogContentContainer>
    );
  }
);

IndividualTicket.propTypes = {
  className: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  type: PropTypes.oneOf([
    DialogContentContainer.types.MODAL,
    DialogContentContainer.types.POPOVER,
  ]),
  size: PropTypes.oneOf([
    DialogContentContainer.sizes.SMALL,
    DialogContentContainer.sizes.MEDIUM,
    DialogContentContainer.sizes.LARGE,
  ]),
  fontSize: PropTypes.oneOf([
    DialogContentContainer.sizes.SMALL,
    DialogContentContainer.sizes.MEDIUM,
    DialogContentContainer.sizes.LARGE,
  ]),
  avatarUrl: PropTypes.string.isRequired,
  ticketName: PropTypes.string.isRequired,
  ticketID: PropTypes.string.isRequired,
  statusValue: PropTypes.string.isRequired,
  lastUpdates: PropTypes.string.isRequired,
  ticketURL: PropTypes.string.isRequired,
  statusColor: PropTypes.oneOf([
    Label.colors.DARK,
    Label.colors.PRIMARY,
    Label.colors.NEGATIVE,
    Label.colors.POSITIVE,
  ]),
};

IndividualTicket.defaultProps = {
  className: "",
  ariaLabelledby: "",
  ariaDescribedby: "",
  type: DialogContentContainer.types.POPOVER,
  size: DialogContentContainer.sizes.MEDIUM,
  fontSize: DialogContentContainer.sizes.MEDIUM,
  statusColor: Label.colors.PRIMARY,
};

IndividualTicket.types = DialogContentContainer.types;
IndividualTicket.sizes = DialogContentContainer.sizes;
IndividualTicket.fontSizes = DialogContentContainer.sizes;
IndividualTicket.statusColors = Label.colors;

export default IndividualTicket;
