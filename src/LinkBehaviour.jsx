import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const LinkBehavior = React.forwardRef(function LinkBehavior(props, ref) {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

LinkBehavior.propTypes = {
  href: PropTypes.string.isRequired,
};

LinkBehavior.displayName = "LinkBehavior";

export default LinkBehavior;
