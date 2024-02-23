import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <section>
      <div>A.Farkhsi</div>
      <div>
        <Link>HOME</Link>
        <Link>ABOUT</Link>
        <Link>PROJECTS</Link>
        <Link>CONTACTS</Link>
      </div>
    </section>
  );
};

export default Header;
