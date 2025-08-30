import React from 'react';
import Navigation from '../src/components/Navigation.tsx';
import { Outlet } from 'react-router-dom';

const RootLayout=()=>{
    return(
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    )
}