import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
const MenuItem = ({ to, text, qt }) => {
  return (
    <NavLink
      className="px-4 py-3  hover:bg-gray-500/10 rounded-lg text-[14px] text-gray-400 transition-all duration-300 flex items-center justify-between"
      to={to}
    >
      <span>{text}</span>
      {qt && (
        <span className="h-8 w-8 border border-gray-500/20 rounded-full text-xs flex justify-center items-center bg-gray-500/10 text-gray-400">
          {qt}
        </span>
      )}
    </NavLink>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  qt: PropTypes.number,
}

export default MenuItem
