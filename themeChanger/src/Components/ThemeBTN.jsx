import useTheme from '@/context/theme'
import React from 'react'


function ThemeBTN() {
  const {themeMode, darkMode, lightMode}=useTheme();
  return (
    <label className="relative inline-flex cursor-pointer h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
      <input 
      type='checkbox'
      checked={themeMode==="dark"}
      onChange={(e)=>e.currentTarget.checked ? darkMode() : lightMode()}
      className='sr-only peer'
      ></input>
      <span className="peer h-5 w-5 rounded-full bg-white shadow-lg transition-all peer-checked:translate-x-5 peer-checked:bg-yellow-600"></span>
    </label>
  )
}

export default ThemeBTN
