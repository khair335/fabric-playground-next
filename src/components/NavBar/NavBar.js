
import logo from '../../assets/logo.svg';
import { FiMenu } from 'react-icons/fi';
import './NavBar.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { useAppSelector } from '@/lib/store/hooks';
import profile from '@/assets/userImg.png';

export default function Navbar() {
  // const { activeSection, isProfileOpen } = useAppSelector(state => state.navbar);
  const activeSection = 'home';
  const location = '/';
  const isUserLoggedIn = true;
  const homePath = '/';
  const notLoggedInNavItems = [
    { name: 'HOME', path: '/#hero' },
    { name: 'FEATURES', path: '#features' },
    { name: 'WHY US', path: '#why-us' },
    { name: 'PRICING', path: '#pricing' },
    { name: 'ABOUT US', path: '#about-us' },
  ];
  const loggedInNavItems = [
    { name: 'SEARCH', path: '/search' },
    { name: 'DASHBOARD', path: '/dashboard' },
    { name: 'CATALOGUE', path: '/catalogue' },
    { name: 'BOOKMARKS', path: '/bookmarks' },
    { name: 'PLAYLISTS', path: '/playlists' },
  ];

  const navItems = homePath ? notLoggedInNavItems : (isUserLoggedIn ? loggedInNavItems : notLoggedInNavItems);

  return (
    <nav className="border-b bg-white border-secondary-3 top-0 sticky z-[4]">
      <div className="max-w-8xl lg:px-10 px-4 lg:py-6 py-[18px] mx-auto flex justify-between items-center">
        <Link href="/" className="">
          <Image width={200} height={34} src={logo} className="max-w-[200px] xl:max-w-[274px] w-full h-[34px]" alt="Fabric Playground" />
        </Link>

        <div className="lg:flex justify-between items-center gap-10 hidden">
          <div className="flex gap-3 xl:gap-7">
            {
              navItems.map((item) => {
                const isActive = location.hash === `#${item.path.split('#')[1]}`;

                return (
                  <Link
                    href={item.path}
                    key={item.name}
                    className={`nav-item }`}
                  >
                    {item.name}
                  </Link>
                );
              })
            }

            {/* {
              !homePath && navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  className={`nav-item ${location.pathname === item.path.split('#')[0] ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))
            } */}
          </div>

          <div className="flex gap-4 items-center">
            <>
              {
                !isUserLoggedIn && <div className="flex  gap-4">
                  <Button variant="Secondary" size="Medium">SIGN IN</Button>
                  <Button variant="Primary" size="Medium">SIGN UP</Button>
                </div>
              }
            </>
            {
              isUserLoggedIn && <div className="relative profile-dropdown">
                <button className="flex items-center">
                  <Image width={32} height={32} src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
                  <span className="ml-2">Bruce Waine</span>
                </button>
                <div className="dropdown-content absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden-nav">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile details</Link>
                  <Link href="/paymentInformation" className="block px-4 py-2 hover:bg-gray-100">Payment information</Link>
                  <Link href="/billing" className="block px-4 py-2 hover:bg-gray-100">Billing history</Link>
                  <Link href="/adminConsole" className="block px-4 py-2 hover:bg-gray-100">Admin console</Link>
                  <Link href="/adminReports" className="block px-4 py-2 hover:bg-gray-100">Admin reports</Link>
                  <Link href="/logout" className="block px-4 py-2 hover:bg-gray-100">Log out</Link>
                </div>
              </div>
            }
          </div>
        </div>

        {/* Hidden checkbox for toggling mobile menu */}
        <input type="checkbox" id="menu-toggle" className="hidden" />

        <label htmlFor="menu-toggle" className="lg:hidden block cursor-pointer">
          <FiMenu className="text-4xl text-primary-10" />
        </label>

        {/* Mobile menu */}
        <div className="menu-overlay">
          <div className="mobile-menu w-[300px] md:w-[280px]">
            <div className="flex flex-col p-5 justify-start items-start gap-8">
              {navItems.map((item) => (
                isUserLoggedIn ? (
                  <a
                    href={item.path}
                    key={item.name}
                    className={`${activeSection === item.path ? 'text-primary-10 underline underline-offset-4' : 'text-secondary-8'} uppercase font-inter font-normal text-sm leading-5 hover:text-primary-10`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.path}
                    key={item.name}
                    className={`${activeSection === item.path.split('#')[0] ? 'text-primary-10 underline underline-offset-4' : 'text-secondary-8'} uppercase font-inter font-normal text-sm leading-5 hover:text-primary-10`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            {
              !isUserLoggedIn && <div className="flex flex-col gap-4">
                <Button className="!w-full" variant="Secondary" size="Medium">SIGN IN</Button>
                <Button className="!w-full" variant="Primary" size="Medium">SIGN UP</Button>
              </div>
            }
          </div>
        </div>
        {/* End of mobile menu */}
      </div>
    </nav>
  );
};


