import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <div className='bg-zinc-900 min-h-screen py-8'>
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
