import React from 'react'
import { Link } from 'react-router-dom'
import { Notebook,CheckCircle, Zap, Lock} from 'lucide-react'

function Landing() {
  return (
      <div className="min-h-screen bg-gradient-to-b-50 from-indigo to-white">
          <div className="container mx-auto px-4 py-16">
              <div className="text-center md-16">
                  <div className='flex justify-center md-16'>
                      <Notebook className="h-16 w-16 text-indigo-600">learn</Notebook>
                  </div>
                  <h1 className='text-4xl md:text-5xl font-bold text-gray-600 max-w-2xl mx-auto'>Capture your idaes with QuickNote</h1>
                  <p className='text-xl text-gray-600 max-w-2xl mx-auto md-8'>A simple quick fast  and  secure way to keep track of your progress and information</p>
              </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link to='/sign up'className='inline-flex items-center justify-center py-6 px-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors'>Get started here</Link>
                    <Link to='/login' className="inline-flex items-center justify-center py-6 px-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors">Login</Link>
            </div>
        </div>
        <div>
            <div>
                <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    <div className='bg-white p-6 rounded-xl shadow-sm border boarder-grey-100'>
                      <Zap className='h-6 w-6 text-indigo-600 mr-3'/>
                        <h1 className='text-lg font-semibold text-gray-900'>Lightining Fast</h1>
                        <p className='text-gray-600'>Create your note instanly for better access</p>
                      </div>
                      <div className='bg-white p-6 rounded-xl shadow-sm border boarder-grey-100'>
                        <Lock className='h-6 w-6 text-indigo-600 mr-3'/>
                        <h1 className='text-lg font-semibold text-gray-900'>Privacy & Secure</h1>
                        <p className='text-gray-600'>Create your note instanly for better access</p>
                      </div>
                      <div className='bg-white p-6 rounded-xl shadow-sm border boarder-grey-100'>
                        <CheckCircle className='h-6 w-6 text-indigo-600 mr-3'/>
                        <h1 className='text-lg font-semibold text-gray-900'>Easy to use</h1>
                        <p className='text-gray-600'>Clean and inituitive interface that let you to focus</p>
                      </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Landing;