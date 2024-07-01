import { NavLink } from "react-router-dom";

const Navbar = () => {
  let links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/favourite",
      name: "Favourites",
    },
  ];

  return (
    <div className="navbar">
      {links.map((ele) => {
        return (
          <NavLink
            style={({ isActive }) => (isActive ? { color: "teal" } : null)}
            key={ele.to}
            to={ele.to}
          >
            {ele.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
