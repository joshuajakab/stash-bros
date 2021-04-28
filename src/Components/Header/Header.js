import React, { useState } from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';
import Sidedrawer from '../Sidedrawer/SideDrawer';
import Backdrop from '../Sidedrawer/Backdrop';

const Header = props => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    
    


    const toggleSideDrawer = () => {
        setSideDrawerOpen(sideDrawerOpen => !sideDrawerOpen)
    }

return (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerToggleButton click={toggleSideDrawer}/>
            </div>

            {sideDrawerOpen && [ 
                <div>
                    <Sidedrawer />
                    <Backdrop click={toggleSideDrawer} />
                </div>
            ]}
            
        </nav>
    </header>
)}

export default Header