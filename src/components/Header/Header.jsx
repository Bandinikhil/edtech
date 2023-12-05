import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
 const [mobileMenu,setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    
   
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset >100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


  const menuToggle = () => {menuRef.current.classList.toggle("active__menu");
setMobileMenu(!mobileMenu);
}

  return (
    <header className={`${scrolled ? "sticky-header" : "header"}`}>
       
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              {/* <i class="ri-pantone-line"></i> Learners. */}
              <img src="https://www.learntos.com/images/logo/new_logo.png" alt="logo" />
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> <span>+91</span> 9633 38 86 75
              </p>
            </div>
          </div>

          <div onClick={menuToggle} className="mobile__menu">
           {mobileMenu ? <span className="close"><i class="ri-close-circle-line"></i></span> : <span >
            <i class="ri-menu-line"></i> 
            </span>}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
