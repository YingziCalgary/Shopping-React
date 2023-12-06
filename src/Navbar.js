import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {

  function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})      // no partial matching
    
    return(
        <li className={isActive? "active" :""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
  }

  return (
      <nav className="nav">
        <CustomLink to = "/" onClick={() => console.log('Link clicked')}>Products</CustomLink>
        <CustomLink to = "/contact" onClick={() => console.log('Link clicked')}>Contact</CustomLink>
        <CustomLink to = "/cart" onClick={() => console.log('Link clicked')}>Cart</CustomLink>
      </nav>
    )
  }
    
    
    




