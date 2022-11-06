import PropTypes from "prop-types";

import { StyledLayout } from "./styled";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
