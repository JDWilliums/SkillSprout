import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/skillsproutlogo.png';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Assistant', to: '/assistant' },
  { name: 'Activities', to: '/activities' },
  { name: 'Analysis', to: '/analysis' },
  { name: 'Avatar', to: '/avatar' },
];

const userNavigation = [
  { name: 'Your Profile', to: '/profile' },
  { name: 'Settings', to: '/settings' },
  { name: 'Sign out', to: '/logout' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-green-800 fixed top-0 z-50 w-full min-w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center">
                <div className="shrink-0">
                  <img alt="Logo" src={logo} className="h-8 w-auto" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          location.pathname === item.to
                            ? 'bg-green-900 text-white'
                            : 'text-green-100 hover:bg-green-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={location.pathname === item.to ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Profile Section */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full bg-green-800 p-1 text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="flex rounded-full bg-green-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800">
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-green-800 p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    location.pathname === item.to
                      ? 'bg-green-900 text-white'
                      : 'text-green-300 hover:bg-green-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={location.pathname === item.to ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
