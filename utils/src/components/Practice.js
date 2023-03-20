import React from 'react'

function Practice() {
  return (
    <div className="flex justify-center items-center h-screen  p-6 ">
        
     <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8">
     <h1 className="block uppercase tracking-wide font-bold my-8 text-black mt-0 mb-0 underline text-center ">Create An Account</h1>
  <div className="flex flex-wrap -mx-3 mb-6 ">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic ">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 my-6">
    <div className="w-full px-3 text-black">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black" htmlFor="grid-password">
        Email Id
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="abcde111@gmail.com"/>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 my-6 mt-0">
    <div className="w-full px-3 text-black mt-0 mb-0">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black  mt-0 mb-0" htmlFor="grid-password">
        Contact Number
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="abcde111@gmail.com"/>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black  mt-0 mb-0" htmlFor="grid-city">
        City
      </label>
      <input className="appearance-none block w-full text-black text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Ajmer"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black  mt-0 mb-0" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full text-black border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  mt-0 mb-0" id="grid-state">
          <option>Rajasthan</option>
          <option>Karnataka</option>
          <option>Bihar</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide font-bold mb-2 my-8 text-black  mt-0 mb-0" htmlFor="grid-zip">
        Pin Code
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="305001"/>
    </div>
  </div>
  <div className="flex justify-center">
    <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
    </div>
</form>

    </div>
  )
}

export default Practice
