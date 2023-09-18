import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, path: '/', name: 'Home'},
        {id: 1, path: '/about', name: 'About'},
        {id: 1, path: '/services', name: 'Services'},
        {id: 1, path: '/contact', name: 'Contact'},
        {id: 1, path: '*', name: 'NotFound'},
    ]

    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open == true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;