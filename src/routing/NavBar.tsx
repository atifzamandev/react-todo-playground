import { NavLink } from 'react-router-dom'
import LoginStatus from '../state-management/auth/LoginStatus'
import useCounterStore from '../state-management/counter/store'

const NavBar = () => {
  const counter = useCounterStore((state) => state.count)

  return (
    <>
      <nav className='navbar d-flex justify-content-between'>
        <span className='badge text-bg-secondary'></span>
      </nav>

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          React Todo Playground
        </a>

        <span className='badge text-bg-secondary'>{counter}</span>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/users'>
                Users
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='me-4'>
          <LoginStatus />
        </div>
      </nav>
    </>
  )
}

export default NavBar
