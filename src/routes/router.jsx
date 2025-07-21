import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
            index: true,
            Component:Home,
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path: "projects",
                element:<Projects></Projects>
            },
            {
                path:"skills",
                element:<Skills></Skills>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }

        ]
    }
])

export default router;