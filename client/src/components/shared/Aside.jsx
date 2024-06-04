import { NavLink } from 'react-router-dom'
import MenuItem from '../MenuItem'

const Aside = () => {
  const menu = [
    {
      to: '/',
      text: 'All',
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
    {
      to: '/',
      text: 'Desarrollo Web',
      qt: 10,
    },
    {
      to: '/',
      text: 'Programación',
      qt: 50,
    },
  ]

  return (
    <aside className="fixed w-[13vw] border-r border-gray-500/20 h-[calc(100%-80px)] top-20 px-6 pb-5 overflow-y-scroll">
      <ul className="flex flex-col gap-3 mt-3">
        {menu.map((item) => (
          <MenuItem to={item.to} text={item.text} qt={item.qt} key={item.to} />
        ))}
      </ul>
    </aside>
  )
}

export default Aside
