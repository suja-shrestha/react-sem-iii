import "./App.css";
// import Button from "./components/Button/button";
// import Map from "./components/Map/Map";
// import Counter from "./components/coounter/counter";
// import Prop from "./components/Prop/prop";

// import { useState } from "react";
// import Blog from "./components/Blog/Blog";
// import MapProp from "./components/Mapprop/MapProp";
// import Nav from "./components/Nav/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Hoome/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/services";
import Errors from "./components/errors/errors";
import Blogs from "./components/Blogs/blogs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Errors />,
    },
    {
      path: "about",
      element: <About />,
      errorElement: <Errors />,
    },
    {
      path: "contact",
      element: <Contact />,
      errorElement: <Errors />,
    },
    {
      path: "services",
      element: <Services />,
      errorElement: <Errors />,
    },
    {
      path: "blogs",
      element: <Blogs />,
      errorElement: <Errors />,
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Button hello="9810129627" />
  //     <Button hello="call me" text="this is a name" />
  //     <Prop
  //       sujal="This is a h1 text"
  //       texts="this is a p tag"
  //       text1="this is a h2 text"
  //     />
  //     <Counter />
  //     <Map />
  //     {data.map((currentElem) => {
  //       return (
  //         <MapProp
  //           sujal={currentElem.id}
  //           texts={currentElem.catagory}
  //           text1={currentElem.title}
  //           text2={currentElem.description}
  //         />
  //       );
  //     })}
  //   </>
  // );
}

export default App;
