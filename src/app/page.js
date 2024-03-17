import React from 'react'

export default function Page() {
  return (
    <div class="fondo">
     
     <div className="flex justify-center items-center h-screen">
      <div className="bg-white py-10 w-[400px] rounded-lg">
        <form className="flex flex-col space-y-3 px-16 ">
          <h2 className="text-center text-2xl font-bold mb-5 text-gray-700">Twilvo Test-SMS</h2>  
          <label className='text-gray-700'>Número</label>
          <input type="text" className="border-2 border-sky-200" />

          <label className='text-gray-700' >Número</label>
          <input type="text" className="border-2 border-sky-200" />

          <button className="bg-sky-300 text-center p-3">Enviar SMS</button>
        </form>
      </div>
    </div>
    </div>
  )
}

