import Container from '../ui/container';
import Logo from './logo';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarRoutes from './navbar-routes';
import UserAvatar from './user-avatar/user-avatar';

const Navbar = () => {
  return (
    <nav className='border-b py-3'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6'>
          <div className='hidden md:block'>
            <Logo />
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes />
          </div>
          <div className='md:hidden'>
            <NavbarMobileMenu />
          </div>
        </div>
        <div className='flex items-center justify-normal gap-x-6'>
          <UserAvatar />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
