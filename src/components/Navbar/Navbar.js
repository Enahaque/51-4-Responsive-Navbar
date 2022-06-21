import React, { useState } from 'react';
import Link from '../Link/Link';
import {MenuIcon, XIcon} from '@heroicons/react/solid';

const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes = [
        {id:1,name:'Home',link:'/Home'},
        {id:2,name:'Shop',link:'/Shop'},
        {id:3,name:'Deals',link:'/Deals'},
        {id:4,name:'Coupons',link:'/Coupons'},
        {id:5,name:'Contact',link:'/Contact'}
    ];
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
            </div>
            <ul  className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6'  : 'top-[-120px] '}`}>
                {
                    routes.map(route=><Link
                        key={routes.id}
                        route={route}
                        ></Link>)
                }

               
            </ul>
        </nav>
    );
};

export default Navbar;