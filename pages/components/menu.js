import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
export const DropDownMenu = ({buttonData, arr}) => {
    
    let menuArr = []

    for(let i = 0; i < arr.length; i++){
        menuArr.push(<Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-white text-black' : 'text-white'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {arr[i]}
            </button>
          )}
        </Menu.Item>)
    }

    return (
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {buttonData}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
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
        <Menu.Items className="absolute w-56 mt-5 origin-top-left bg-black divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuArr}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
    )

}