import {Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Navbar(){
 return(
<header >
    <nav className= "flex items-center  justify-between px-8 py-4 bg-slate-900 border-b-2  ">

        <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className="bg-amber-500 text-slate-900 font-bold text-xl px-3 py-1">
            LJ
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">LJ PLANT HIRE</p>
            <p className="text-amber-500 text-xs tracking-wide">TZANEEN · LIMPOPO</p>
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 text-white text-sm font-bold tracking-wide">
            <li  >
                <NavLink to="/equipment"
             
                className={({isActive})=>
             `cursor-pointer transition-colors duration-200 hover:text-amber-500 ${
        isActive ? "text-amber-500" : "text-white"
      }` }>
                OUR FLEET
            </NavLink></li>


            <li><NavLink 
            to="/process"
            
            className= {({isActive})=>

                `cursor-pointer transition-colors duration-200 hover:text-amber-500 ${
        isActive ? "text-amber-500" : "text-white"
      }` }>
            HOW TO BOOK
            </NavLink></li>


            <li   ><NavLink 
            to="/contact"
          
            className={({isActive} ) =>
  `cursor-pointer transition-colors duration-200 hover:text-amber-500 ${
        isActive ? "text-amber-500" : "text-white"
      }` }>
                        
                        CONTACT</NavLink></li>

<li><Link to="/about" className="cursor-pointer transition-colors duration-200 hover:text-amber-500">ABOUT US</Link></li>
       </ul>

       <Link to="/admin" className="bg-amber-600 text-slate-900 font-bold text-sm px-5 py-2.5 hover:bg-amber-400 transition-colors">
        ADMIN
       
       </Link>


    </nav>




</header>
 )




}

export default Navbar