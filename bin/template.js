const getAttrs = (style) => {
  const fillAttrs = {
    fill: "color",
  };
  const strokeAttrs = {
    fill: "none",
    stroke: "color",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return style === "fill" ? fillAttrs : strokeAttrs;
};

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" ${attrs} {...otherProps}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ${ComponentName}
`;

module.exports = { getAttrs, getElementCode };
