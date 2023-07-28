import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <h1 className="text-5xl text-center p-10 text-zinc-100 font-semibold">
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
