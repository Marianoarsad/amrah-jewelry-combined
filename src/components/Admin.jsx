// LIBRARIES
import { LayoutDashboard, Package, Boxes, Star } from 'lucide-react'; // ICONS

// COMPONENTS
import Dashboard from "./Dashboard.jsx"
import Products from './Products.jsx';
import Inventory from './Inventory.jsx';
import Testimonials from './Testimonials.jsx';

// HOOKS
import { useState } from 'react';

// IMAGES
import Logo from "/amrah-logo.png"

export default function Admin ({}) {
    
    const [ selectedDisplay, setSelectedDisplay ] = useState('Dashboard');

    function handleChangeDisplay (selectedButton) {
        setSelectedDisplay(selectedButton);
        console.log(selectedDisplay);
    }

    return (
        <>
            <div id="admin-page">
                <menu>

                    <img src={Logo} alt="amrah-logo"/>
                    <p>GENERAL</p>

                    <li 
                        className={selectedDisplay === 'Dashboard' ? 'activeDisplay' : undefined}
                        onClick={() => handleChangeDisplay('Dashboard')}
                    >
                        <LayoutDashboard />
                        <button 
                            onClick={() => handleChangeDisplay('Dashboard')}>
                            Dashboard
                        </button>
                    </li>

                    <li 
                        className={selectedDisplay === 'Products' ? 'activeDisplay' : undefined}
                        onClick={() => handleChangeDisplay('Products')}
                    >
                        <Package />
                        <button 
                            onClick={() => handleChangeDisplay('Products')}>
                            Products
                        </button>
                    </li>

                    <li 
                        className={selectedDisplay === 'Inventory' ? 'activeDisplay' : undefined}
                        onClick={() => handleChangeDisplay('Inventory')}
                    >
                        <Boxes />
                        <button 
                            onClick={() => handleChangeDisplay('Inventory')}>
                            Inventory
                        </button>
                    </li>

                    <li 
                        className={selectedDisplay === 'Testimonials' ? 'activeDisplay' : undefined}
                        onClick={() => handleChangeDisplay('Testimonials')}
                    >
                        <Star />
                        <button 
                            onClick={() => handleChangeDisplay('Testimonials')}>
                            Testimonials
                        </button>
                    </li>

                </menu>

                <div id='admin-display'>
                    
                    { selectedDisplay === 'Dashboard' ? <Dashboard /> : null }
                    { selectedDisplay === 'Products' ? <Products /> : null }
                    { selectedDisplay === 'Inventory' ? <Inventory /> : null }
                    { selectedDisplay === 'Testimonials' ? <Testimonials /> : null }

                </div>

            </div>
        </>
    )
}