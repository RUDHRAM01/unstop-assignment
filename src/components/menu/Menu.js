import React from 'react'
import DashboardIcon from '../assets/icons/dashboard.svg'
import AssignmentIcon from '../assets/icons/assignment.svg'
import LibraryIcon from '../assets/icons/library.svg'
import LinkIcon from '../assets/icons/link.svg'
import CloseIcon from '../assets/icons/close.svg'
import Card from './Card'
import './menu.css'


function Menu(props) {
    const menuItems = [
        { name: 'Dashboard', link: '/', icon: DashboardIcon },
        { name: 'Assignments', link: '/assignments', icon: AssignmentIcon },
        { name: 'My Library', link: '/resources', icon: LibraryIcon },
        { name: 'Round Status', link: '/about', icon: LinkIcon, access: 'Admin' },
    ]
    return (
        <div className='menu'>
            <div className='menuChild'>
                <div className='menuTitle'>
                    <p>Menu</p>
                    <img src={CloseIcon} alt="" onClick={()=>props?.handleMenuOpen()}/>
                </div>
                {menuItems.map((item, index) => (
                    <Card key={index} name={item.name} link={item.link} icon={item.icon} isAdmin={item?.access} />
                ))}
            </div>
        </div>
    )
}

export default Menu