const Button = () => {
  return (
  // <!-- Not toggled switch -->
    <div class='w-full h-full flex flex-col justify-center items-center'>
      <div class='flex justify-center items-center'>
        <span class=''>
          <svg class='h-6 w-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </span>
        {/* <!-- Switch Container --> */}
        <div class="{ 'bg-cyan-700': toggleActive}" classNAme='w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1' onClick='handleToggleActive'>
          {/* <!-- Switch --> */}
          <div class='bg-white w-5 h-5 rounded-full shadow-md transform' className="{ 'translate-x-7': toggleActive}" />
        </div>
        <span class=''>
          <svg class='h-6 w-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
          </svg>
        </span>
      </div>
      {/* <!-- Toggled switch --> */}
      <div class='flex justify-center items-center mt-4'>
        <span class=''>
          <svg class='h-6 w-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </span>
        {/* <!-- Switch Container --> */}
        <div class='w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 bg-blue-700' onClick='handleToggleActive'>
          {/* <!-- Switch --> */}
          <div class='bg-white w-5 h-5 rounded-full shadow-md transform translate-x-7' />
        </div>
        <span class=''>
          <svg class='h-6 w-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Button
