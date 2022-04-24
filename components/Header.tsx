import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BasicMenu from './BasicMenu'

function Header({ setMoviesFromSearch }: any) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchInput, setSearchInput] = useState(false)

  const handleSearchMovies = async (query: string) => {
    if (query === '') {
      setMoviesFromSearch([])
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2ceb79cf60827a4935ec8e6bab5b5c3b&query=${query}`
      ).then((res) => res.json())
      setMoviesFromSearch(data.results.slice(0, 6))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon
          className="sm hidden h-6 w-6 sm:inline"
          onClick={() => setSearchInput(true)}
        />
        {searchInput && (
          <label>
            <input
              className="search-bar"
              // onClick={(e) => handleSearchMovies(e.target.value : string)}
              onChange={(e) => handleSearchMovies(e.target.value)}
              autoFocus
              type="text"
              placeholder="search in netflix"
            />
            <svg
              style={{
                position: 'absolute',
                top: '37%',
                transform: 'translateX(-50% )',
                right: '30px',
                fontSize: '19px',
                width: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setSearchInput(false)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        )}
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
