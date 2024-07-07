import { Link, NavLink } from "react-router-dom";
import { actions, categorySection, topNav } from "../../constants/navItems";
import { RounedBlock } from "../RounedBlock/RounedBlock.jsx";
import { CgMenuGridO } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className="flex flex-col items-start justify-between">
            {/* TOP NAV */}
            <div className="">
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
            </div>
            
            {/* BOTTOM NAV */}
            <div className="flex items-center justify-between w-full py-[11px] mb-[11px]">
                <div className="flex items-center">
                    <h3 className="text-dark lg:text-base font-semibold mr-9">Women & Kids</h3>

                    <RounedBlock className={`border-givi`} pl={'px-6'} pr={'pr-1'} py={'py-1'}>
                        <ul className="flex mr-16">
                            {
                                categorySection.map(item => {
                                    return(
                                        <li className="mr-9 last:mr-0" key={item.id}>
                                            <Link className="font-medium font-primary">{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <RounedBlock className={`flex items-center border-orenga text-orange`} py={'py-2.5'} px={'px-[1.4rem]'} type="button">
                            <CgMenuGridO className="mr-1.5"/>
                            <span className="font-medium font-inter">все категории</span>
                        </RounedBlock>
                    </RounedBlock>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center">
                    <ul className="flex mr-9">
                        {
                            actions.map(item => {
                                return(
                                    <li className="mr-11 last:mr-0 flex items-center" key={item.id}>
                                        <button className="flex items-center">
                                            <item.icon className="mr-2" fontSize={20}/>
                                            <span className="font-medium font-inter text-base text-orenga">{item.count}</span>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <RounedBlock 
                        href="login/"
                        className={`flex items-center border-orenga text-orange`} 
                        py={'py-2.5'} 
                        px={'px-[1.4rem]'} >

                        <RiUser3Line className="mr-1"/>
                        <span className="font-medium font-inter">Войти</span>
                    </RounedBlock>
                </div>

            </div>
        </nav>
    )
}

export default Navbar