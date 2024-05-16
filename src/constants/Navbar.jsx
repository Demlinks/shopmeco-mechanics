
import { Link } from 'react-router-dom'
import '../index.css'








const Navbar = () => {

 

  return (
    <nav className="vertical-navbar  lg:w-2/12 w-3/12  hidden md:block">
      <img src='../assets/logo2.png' alt="logo" className='px-6' />
      <div className=' flex flex-col w-full justify-between h-[90%] text-[18px] font-medium mt-10 py-6 px-2'>
      <ul className="navbar-nav w-full flex flex-col gap-4">
   
   <Link to={'/dashboard'}>
      <div className='nav-nav flex items-center py-2 px-6'>
          <img src='../assets/dashboard icon.png' alt="dashboard" className='me-2' />
        <li className="nav-item">
          <p className="nav-link opacity-80">Dashboard</p>
        </li>
        </div>
        </Link>
        <Link to={'/services'}>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src='../assets/service.png' alt="service" className='me-2 ' />
        <li className="nav-item">
          <p className="nav-link opacity-80">Services</p>
        </li>
        </div>
        </Link>
        <Link to={'/booking'}>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src='../assets/caricon.png' alt="booking" className='me-2' />
        <li className="nav-item">
          <p className="nav-link opacity-80">Booking</p>
        </li>
        </div>
        </Link>
        <Link to={'/messages'}>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src='../assets/message.png' alt="service" className='me-2' />
        <li className="nav-item">
          <p className="nav-link opacity-80">Messages</p>
        </li>
        </div>
        </Link>
      </ul>
      <ul className='navbar-nav  w-full flex flex-col gap-6'>
        <Link to={'/settings'}>
      <div className='nav-nav flex items-center py-2  px-6'>
          <img src='../assets/settings.png' alt="settings"  className='me-2'/>
      <li className="nav-item">
          <p className="nav-link opacity-80">Settings</p>
        </li>
        </div>
        </Link>
        <Link to={'/logout'}>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src='../assets/logout.png' alt="log out" className='me-2'/>
        <li className="nav-item">
          <p className="nav-link opacity-80">Log out</p>
        </li>
        </div>
        </Link>
      </ul>
      </div>
    </nav>
  );
}




export default Navbar