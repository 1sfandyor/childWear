import { NavLink } from "react-router-dom";
import { topNav } from "../../constants/navItems";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <ul className="flex items-center justify-between ">
                {
                    topNav.map(item => {
                        return(
                            <li className="last:pr-0 lg:p-2.5" key={item.id}>
                                <NavLink className='font-normal font-inter text-xs text-dark hover:opacity-70 active:opacity-60' to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar