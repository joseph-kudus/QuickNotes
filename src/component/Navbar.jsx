import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notebook, LogOut, User } from "lucide-react";

function Navbar() {
    const Navigate = useNavigate();
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4"> 
                <div className="flex justify-between items-center h-16">
                    <Link to='/' className="flex items-center space-x-2">
                        <Notebook className='h-8 w-8 text-indigo-600'/>
                            <span className="text-xl font-semibold text-gray-700">QuickNotes
                            </span>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link to='/Login'>Login</Link>
                        <Link to='/Signup'>Signup</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;