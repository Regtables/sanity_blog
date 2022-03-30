import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className = 'navBar'>
        <div className = 'container'>
            <Link href = '/'>
                <a className = 'title'>Devistry</a>
            </Link>

            <ul>
                <li> 
                    <Link href = '/posts'>
                        <a>All Posts</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
