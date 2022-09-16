import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {HiMenu} from 'react-icons/hi'
// import{FiLogIn} from 'react-icons/fi'

export default function NavbarMenu() {
  return (
    <div className="absolute top-2 right-2 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-tara-orange px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <HiMenu className='text-xl'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                      <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-lg font-semibold`}
                    >
                      Course
                    </button>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href='/event'>
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-lg font-semibold`}
                    >
                      Events
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="https://discord.gg/ptdpgHp2" target=" _blank">
                  <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-sm px-4 py-1 mx-2 text-white shadow-2xl shadow-tara-yellow'>Join Discord</button>
              </a>
                )}
              </Menu.Item>
            </div>

            {/* <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-lg font-semibold`}
                  >
                    {active ? (
                      <FiLogIn
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiLogIn
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Login
                  </button>
                )}
              </Menu.Item>
            </div> */}
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}