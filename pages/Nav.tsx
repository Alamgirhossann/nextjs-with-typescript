import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div>
            <ul
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems:"center",
          height: "50px",
          borderBottom: "1px solid white",
          color:"white"
        }}
      >
        <Link style={{marginRight:"10px"}} href={"/"}>Home</Link>
        <Link style={{marginRight:"10px"}} href={"/About"}>About</Link>
        <Link style={{marginRight:"10px"}} href={"/contact"}>Contact</Link>
      </ul>
        </div>
    );
};

export default Nav;