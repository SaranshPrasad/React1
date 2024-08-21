// * Header 
//  - Logo 
//  - Nav Items 
// * Body 
//  - Search 
//  - ResturantContainer 
//  - ResturantCard 
// * Footer
//  - Copyright 
//  - Links 
//  - Address 
//  - Contact 
import React, { Suspense } from "react";
import { lazy } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider,  createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
   return (
      <ChakraProvider>
    <div className="app">
       <Header/>
       <Outlet/>
    </div>
    </ChakraProvider>
   );
}


const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      children: [
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/resturants/:resId",
            element:<ResturantMenu/>
         },
         {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>
         }
      ]
   },
   
])

const root =  ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);