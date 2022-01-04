import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defalutProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
