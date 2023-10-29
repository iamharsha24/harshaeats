import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 font-mono my-4 pt-6'>
                <h1>Need advise on how to improve your flow?</h1>
                <p>Sign up to join our Newsletter and stay upto date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' placeholder='email'
                        className='p-3 flex w-full rounded-md text-black'/>
                    <button className='bg-red-800 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>
                        Notify Me
                    </button>
                </div>
                <p>We are concerned about the security of your data, Read {""}
                    <span className='text-red-600'>Privacy policy</span>
                </p>
            </div>
            <hr className='my-8 bg-gray-700 border-1'/>
        </div>
    </div>
  )
}

export default Newsletter