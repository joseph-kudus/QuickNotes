import React from 'react'
import { Notebook } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordconfirm, setPasswordconfirm] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const {signup} = useAuth();
  const navigate = useNavigate();

  const handlSubmit =async (e) =>{
    e.preventDefault();
    setError("");
    if(!email || !password || !passwordconfirm){
      return setError("Please fill all the fields")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
            <Notebook className="w-12 h-12 text-indigo-600 mb-2"/>
            <h1 className="text-2xl font-bold text-gray-900">welcome back</h1>
            <p className="text-gray-600">Please sigin to access your work</p>
            <form>
                <div className="md-4">
                    <label htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:right-2 focus: ring-indigo-500 rounded-md"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:right-2 focus: ring-indigo-500 rounded-md"
                        placeholder="************"
                        required
                    />
                    <div className='mb-3'>
                      <label
                          htmlFor="passwordconfirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password
                      </label>
                      <input
                        id="passwordconfirm"
                        type="password"
                        value={passwordconfirm}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:right-2 focus: ring-indigo-500 rounded-md" placeholder="************"
                        required
                      />
                    </div>
                </div>
            <button className="w-full bg-indigo-600 transition-colors focus:outline-none hover:bg-indigo-700 text-white py-2 rounded-md mt-4"
              type="submit">
                Create an Account
            </button>
            </form>
          <div>
            <p>Don't have an account yet?</p>
            <Link to="/Login" className="text-indigo-700 font-medium hover:text-indigo-800">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
