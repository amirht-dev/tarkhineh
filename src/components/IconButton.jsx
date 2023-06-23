import PropTypes from 'prop-types'

const IconButton = ({children,onClick}) => {
  return (
    <button className='w-20 h-20 flex items-center justify-center' onClick={onClick}>
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