import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import Todo from "./Components/Todo List/Todo";
import Pagination from "./Components/Pagination";
import { useContext } from "react";
import { ThemeContext } from "./Theme";
import './App.css';
import InfiniteScroll from "./Components/InfiniteScroll";
import Carousel from "./Components/Carousel";
import Typeahead from "./Components/Typeahead"
import Accordian from "./Components/Accordian";
import StarRating from "./Components/StarRating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "infinitescroll",
        element: <InfiniteScroll />
      },
      {
        path: "carousel",
        element: <Carousel />
      },
      {
        path: "typeahead",
        element: <Typeahead />
      },
      {
        path: "accordian",
        element: <Accordian />

      },
      {
        path:"starrating",
        element:<StarRating/>
      }
    ]
  },

]);

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`App ${theme}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
