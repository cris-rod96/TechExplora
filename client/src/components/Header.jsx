import { FaGithub } from 'react-icons/fa'
import { GrCloudComputer } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed w-full h-20 bg-dark border-b border-gray-500/20 flex items-center px-10 z-50">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-xl text-primary tracking-wide font-semibold">
          <NavLink to={'/'} className="flex items-center gap-2">
            <GrCloudComputer size={30} />
            TechExplora
          </NavLink>
        </h1>
        <div>
          <NavLink
            to="https://github.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
