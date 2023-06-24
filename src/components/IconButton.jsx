import PropTypes from 'prop-types'

const IconButton = ({children,onClick}) => {
  return (
    <button className='flex items-center justify-center' onClick={onClick}>
      {children}
    </button>
  )
}

IconButton.defaultProps = {
  onClick: () => {}
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default IconButton