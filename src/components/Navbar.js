import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [show,setShow] = useState(false);
  return (
    <div
      className="container-fluid "
      style={{ background: "#0065A0", color: "white" }}
    >
      <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light  p-3">
        <Link className="navbar-brand text-white" to="/">
          Games Arena
        </Link>
        <button onClick={()=>setShow(!show)} className="navbar-toggler" type="button" id="toggleBtn">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <Link className="nav-link text-white" to={`/game/arcade`}>
                Arcade
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/stretegy`}>
                Stretegy
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white"
                to={`/game/racing`}
                id="navbarDropdown"
              >
                Racing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/action`}>
                Action
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/sports`}>
                Sports
              </Link>
            </li>
          </ul>
          <form className="d-flex justify-content-between form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Link
              className="btn btn-outline-success text-white my-2 my-sm-0"
              to={`/game/${input}`}
            >
              Search
            </Link>
          </form>
        </div>
      </nav>

      <div id={!show? "navbarSupportedContent2":"flex"} className={"justify-content-end"}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active " style={{padding: "0 5px"}}>
              <Link className="nav-link text-white" to={`/game/arcade`}>
              Arcade
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/stretegy`}>
              Stretegy
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white"
                to={`/game/racing`}
                id="navbarDropdown"
              >
                Racing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/action`}>
              Action
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/game/sports`}>
              Sports
              </Link>
            </li>
          </ul>
          <form className="d-flex inputForm justify-content-between align-items-center my-2 my-lg-0">
            <input
              className="inputForm mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
            <Link
              className="btn btn-outline-success text-white my-2 my-sm-0"
              to={`/game/${input}`}
            >
              Search
            </Link>
          </form>
        </div>
    </div>
  );
};

export default Navbar;
