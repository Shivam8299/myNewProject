import React from 'react'

function Login() {
    
  return (
    <div className='w-full' >
        <div className='my-16 flex flex-col justify-center items-center'>
            <h1 className='text-3xl text-center font-serif text-gray-700'>Sign UP</h1>
            <form >
                <div className='mt-4'>
                    <input className='outline-none border p-2 w-full md:w-96' type="text" placeholder='Name'  required />
                </div>
                <div className='mt-4'>
                    <input className='outline-none border p-2 w-full md:w-96' type="text" placeholder='Email'  required />
                </div>
                <div className='mt-4'>
                    <input className='outline-none border p-2 w-full md:w-96' type="Password" placeholder='Password'  required />
                </div>
                <div className='text-xs md:text-sm py-1 w-full md:w-96 flex justify-between font-serif text-gray-600 cursor-pointer mb-6'>
                    <p>forget your password?</p>
                    <p>Login Here</p>
                </div>
                <div className='text-center mb-44'>
                    <button className='bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-10 text-sm font-medium  py-2 '>Sign UP</button>
                </div>
            </form>


        </div>
    </div>
  )
}

export default Login