import * as React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const ExternalLink = ({ url, text }) => <a href={url}>{text}</a>;

ExternalLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: urlPropType.isRequired,
};

export default ExternalLink;
