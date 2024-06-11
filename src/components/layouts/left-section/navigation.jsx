import { HashLink } from "react-router-hash-link";


const menus = [
  {
    id: 1,
    tomenu: "#home",
    namemenu: "Home",
  },
  {
    id: 2,
    tomenu: "#about",
    namemenu: "About",
  },
  {
    id: 3,
    tomenu: "#work",
    namemenu: "Work",
  },
  {
    id: 4,
    tomenu: "#expertise",
    namemenu: "Expertise",
  },
  {
    id: 5,
    tomenu: "#experiences",
    namemenu: "Experiences",
  },

  {
    id: 6,
    tomenu: "#blog",
    namemenu: "Blog",
  },
  {
    id: 7,
    tomenu: "#contact",
    namemenu: "Contact",
  },
];



function Navigation() {

  return (<div className='section-nav'>
    <div className="nav">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <div className="menu">


        {menus.map((menu) => (
          <li key={menu.id}>
            <HashLink
              to={menu.tomenu}
              className="main-nav-link js-scroll-trigger"
            >
              {menu.namemenu}
            </HashLink>
          </li>
        ))}



      </div>
    </div>
  </div>)
}


export default Navigation;