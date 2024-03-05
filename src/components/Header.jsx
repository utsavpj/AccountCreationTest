import React from 'react'
import logo from '../assets/index'

export default function Header() {
  const image = logo
  return (
    <div>
      <header className="top-0 bg-slate-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Idea theorem</span>
              <img
                className="h-8 w-72"
                src={image}
                alt=""
              />
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}
