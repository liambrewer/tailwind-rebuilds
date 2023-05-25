import Image from "next/image";

export default function GitHub() {
  return (
    <div className='text-sm text-gray-900'>
      <nav className='flex justify-between px-4 py-3 text-white bg-gray-900 itmes-center'>
        <div className='flex items-center space-x-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-8 fill-current'
            >
              <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
            </svg>
          </a>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search or jump to...'
              className='px-3 py-1 placeholder-white bg-gray-700 rounded w-72'
            />
            <div className='absolute top-0 right-0 flex items-center h-full'>
              <div className='px-2 mr-2 text-gray-400 border border-gray-600 rounded-text-xs'>
                /
              </div>
            </div>
          </div>
          <ul className='flex items-center space-x-4 font-semibold'>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Pull Requests
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Issues
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Marketplace
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Explore
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-4 text-white'>
          <a href='#' className='relative hover:text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
              />
            </svg>
            <div className='absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full'></div>
          </a>
          <a href='#' className='flex items-center hover:text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 ml-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </a>
          <a href='#' className='flex items-center hover:text-gray-400'>
            <Image
              src='https://avatars.githubusercontent.com/u/92010805?s=40&v=4'
              alt='avatar'
              width={64}
              height={64}
              className='w-5 h-5 rounded-full'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 ml-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </a>
        </div>
      </nav>
      <div className='flex items-center justify-between px-8 py-4 repo-stats'>
        <div className='flex'>
          <svg
            aria-hidden='true'
            viewBox='0 0 16 16'
            className='w-4 text-gray-600 fill-current'
          >
            <path d='M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z'></path>
          </svg>
          <div className='flex items-center ml-2 space-x-1 text-xl'>
            <a href='#' className='text-blue-600 hover:underline'>
              tailwindcss
            </a>
            <span>/</span>
            <a href='#' className='font-semibold text-blue-600 hover:underline'>
              tailwindcss
            </a>
          </div>
        </div>
        <div className='flex space-x-2'>
          <div className='flex text-xs'>
            <button className='flex items-center px-3 py-1 space-x-1 border border-gray-400 rounded rounded-r-none'>
              <svg
                aria-hidden='true'
                viewBox='0 0 16 16'
                className='w-4 text-gray-600 fill-current'
              >
                <path d='M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z'></path>
              </svg>
              <span>Watch</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 ml-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
            <a
              href='#'
              className='px-3 py-1 font-semibold border border-l-0 border-gray-400 rounded rounded-l-none hover:text-blue-600'
            >
              597
            </a>
          </div>
          <div className='flex text-xs'>
            <button className='flex items-center px-3 py-1 space-x-1 border border-gray-400 rounded rounded-r-none'>
              <svg
                aria-hidden='true'
                viewBox='0 0 16 16'
                className='w-4 text-gray-600 fill-current'
              >
                <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z'></path>
              </svg>
              <span>Star</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 ml-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
            <a
              href='#'
              className='px-3 py-1 font-semibold border border-l-0 border-gray-400 rounded rounded-l-none hover:text-blue-600'
            >
              68.7k
            </a>
          </div>
          <div className='flex text-xs'>
            <button className='flex items-center px-3 py-1 space-x-1 border border-gray-400 rounded rounded-r-none'>
              <svg
                aria-hidden='true'
                viewBox='0 0 16 16'
                className='w-4 text-gray-600 fill-current'
              >
                <path d='M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z'></path>
              </svg>
              <span>Fork</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 ml-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
            <a
              href='#'
              className='px-3 py-1 font-semibold border border-l-0 border-gray-400 rounded rounded-l-none hover:text-blue-600'
            >
              3.6k
            </a>
          </div>
        </div>
      </div>
      <ul className='flex items-center px-8 mt-4 border-b border-gray-400 repo-nav'>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 border-b-2 border-red-500'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z'></path>
            </svg>
            <span className='ml-2'>Code</span>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'></path>
              <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z'></path>
            </svg>
            <span className='ml-2'>Issues</span>
            <div className='px-2 ml-1 text-xs bg-gray-300 rounded-lg'>8</div>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'></path>
            </svg>
            <span className='ml-2'>Pull Requests</span>
            <div className='px-2 ml-1 text-xs bg-gray-300 rounded-lg'>7</div>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z'></path>
            </svg>
            <span className='ml-2'>Discussions</span>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z'></path>
            </svg>
            <span className='ml-2'>Actions</span>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'></path>
            </svg>
            <span className='ml-2'>Security</span>
          </a>
        </li>
        <li className='font-semibold'>
          <a
            href='#'
            className='flex items-center px-4 pb-3 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-400'
          >
            <svg
              aria-hidden='true'
              viewBox='0 0 16 16'
              className='w-4 fill-current'
            >
              <path d='M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z'></path>
            </svg>
            <span className='ml-2'>Insights</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
