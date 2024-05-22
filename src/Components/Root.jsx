import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ThemeContext } from "../Theme";
import "./Root.css";
export default function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div id="sidebar">
        <div>
          <h2>Sample</h2>
          <div>
            <button onClick={() => toggleTheme()}>{theme}</button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={`todo`}>Todo</NavLink>
            </li>
            <li>
              <NavLink to={`pagination`}>Pagination</NavLink>
            </li>
            <li>
              <NavLink to={`infinitescroll`}>Infinite Scroll</NavLink>
            </li>
            <li>
              <NavLink to={`carousel`}>Carousel</NavLink>
            </li>
            <li>
              <NavLink to={`typeahead`}>Typeahead</NavLink>
            </li>
            <li>
              <NavLink to={`accordian`}>Accordian</NavLink>
            </li>
            <li>
              <NavLink to={`starrating`}>Star Rating</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
