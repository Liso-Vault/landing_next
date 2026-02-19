import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, ComputerDesktopIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        setMounted(true)

        // Close dropdown when clicking outside
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    if (!mounted) {
        return null
    }

    const currentIcon = () => {
        if (theme === 'system') return <ComputerDesktopIcon className="w-5 h-5" />
        if (theme === 'dark') return <MoonIcon className="w-5 h-5" />
        return <SunIcon className="w-5 h-5" />
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02f297]"
                    aria-label="Theme Switcher"
                >
                    {currentIcon()}
                    <ChevronDownIcon className="w-3 h-3 ml-1" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button
                            onClick={() => { setTheme('light'); setIsOpen(false); }}
                            className={`${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700 text-[#02f297]' : 'text-gray-700 dark:text-gray-200'} group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700`}
                            role="menuitem"
                        >
                            <SunIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            Light
                        </button>
                        <button
                            onClick={() => { setTheme('dark'); setIsOpen(false); }}
                            className={`${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700 text-[#02f297]' : 'text-gray-700 dark:text-gray-200'} group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700`}
                            role="menuitem"
                        >
                            <MoonIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            Dark
                        </button>
                        <button
                            onClick={() => { setTheme('system'); setIsOpen(false); }}
                            className={`${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700 text-[#02f297]' : 'text-gray-700 dark:text-gray-200'} group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700`}
                            role="menuitem"
                        >
                            <ComputerDesktopIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            System
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ThemeSwitch
