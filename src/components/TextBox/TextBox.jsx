import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import CKEditor from "ckeditor4-react";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import "./textBox.scss";
import { EDITOR_CONFIGURATION } from "./TextBoxConstants";

const TextBox = forwardRef(
  (
    {
      className,
      ariaLabelledby,
      ariaDescribedby,
      type,
      size,
      configuration,
      onChange,
      textValue,
    },
    ref
  ) => {
    return (
      <DialogContentContainer
        type={type}
        size={size}
        className={`ticket-booth-style-text-box ${className}`}
        ariaLabelledby={ariaLabelledby}
        ariaDescribedby={ariaDescribedby}
        ref={ref}
      >
        <CKEditor
          data={textValue}
          config={{ ...EDITOR_CONFIGURATION, ...configuration }}
          onChange={onChange}
          style={{}}
          onBeforeLoad={(CKEDITOR) => {
            CKEDITOR.addCss("body{font-family: Roboto, sans-serif; }");
          }}
        />
      </DialogContentContainer>
    );
  }
);

TextBox.propTypes = {
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
  textValue: PropTypes.string,
};

TextBox.defaultProps = {
  className: "",
  ariaLabelledby: "",
  ariaDescribedby: "",
  textValue: "",
  type: DialogContentContainer.types.POPOVER,
  size: DialogContentContainer.sizes.MEDIUM,
};

TextBox.types = DialogContentContainer.types;
TextBox.sizes = DialogContentContainer.sizes;

export default TextBox;
