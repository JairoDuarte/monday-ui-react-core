/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Image = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H16.8571C17.2714 2.25 17.6071 2.58579 17.6071 3V11.891V11.9071V16.8571C17.6071 17.2714 17.2714 17.6071 16.8571 17.6071H3C2.58579 17.6071 2.25 17.2714 2.25 16.8571V3ZM16.1071 3.75V10.4368L13.2415 8.37956C13.014 8.2044 12.7341 8.11046 12.4466 8.11319C12.1511 8.11599 11.8657 8.22069 11.6385 8.40961C11.6283 8.4181 11.6183 8.42685 11.6085 8.43587L3.75 15.7094V3.75H16.1071ZM16.1071 16.1071H5.52859L12.4762 9.67669L16.1071 12.2833V16.1071ZM6.99725 4.38187C6.30361 4.38187 5.63837 4.65742 5.14789 5.14789C4.65742 5.63837 4.38187 6.30361 4.38187 6.99725C4.38187 7.69089 4.65742 8.35613 5.14789 8.84661C5.63837 9.33709 6.30361 9.61264 6.99725 9.61264C7.69089 9.61264 8.35613 9.33709 8.84661 8.84661C9.33709 8.35613 9.61264 7.69089 9.61264 6.99725C9.61264 6.30361 9.33709 5.63837 8.84661 5.14789C8.35613 4.65742 7.69089 4.38187 6.99725 4.38187ZM6.20856 6.20856C6.41773 5.99938 6.70143 5.88187 6.99725 5.88187C7.29307 5.88187 7.57677 5.99938 7.78595 6.20856C7.99512 6.41773 8.11264 6.70143 8.11264 6.99725C8.11264 7.29307 7.99512 7.57677 7.78595 7.78595C7.57677 7.99512 7.29307 8.11264 6.99725 8.11264C6.70143 8.11264 6.41773 7.99512 6.20856 7.78595C5.99938 7.57677 5.88187 7.29307 5.88187 6.99725C5.88187 6.70143 5.99938 6.41773 6.20856 6.20856Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Image.displayName = 'Image';
Image.propTypes = {
  size: PropTypes.string
}
export default Image;
/* tslint:enable */
/* eslint-enable */