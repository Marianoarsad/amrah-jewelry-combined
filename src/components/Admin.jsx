// LIBRARIES
import { LayoutDashboard, Package, Boxes, Star } from 'lucide-react'; // ICONS


// COMPONENTS
import Dashboard from "./Dashboard.jsx"

// IMAGES
import Logo from "/amrah-logo.png"

export default function Admin ({}) {
    
    return (
        <>
            <div id="admin-menu">
                <menu>
                    <img src={Logo} alt="amrah-logo"/>
                    <p>GENERAL</p>
                    <li><LayoutDashboard /><button>Dashboard</button></li>
                    <li><Package /><button>Products</button></li>
                    <li><Boxes /><button>Inventory</button></li>
                    <li><Star /><button>Testimonials</button></li>
                </menu>
                <Dashboard />
            </div>
        </>
    )
}