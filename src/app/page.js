"use client"

import React from 'react'
import toast from "react-hot-toast"

import axios from 'axios';

export default function Page() {

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const sms = {
        phone: formData.get('phone'),
        message: formData.get('message')
      };
  
      const res = await axios.post('/api/sms', sms);
  
      toast.success("Mensaje enviado");
  
      console.log("El mensaje fue ", formData);
    } catch (error) {
      toast.error("Ocurrió un error");
      console.log("El error fue ", error);
    }
  };
  
  return (
    <div className="fondo">
     
     <div className="flex justify-center items-center h-screen">
      <div className="bg-white py-10 w-[400px] rounded-lg">
        <form className="flex flex-col space-y-3 px-16  " onSubmit={onSubmit}>
          <h2 className="text-center text-2xl font-bold mb-5 text-gray-700">Twilvo Test-SMS</h2>  
          <label className='text-gray-700'>Número</label>
          <input name='phone' type="text" className="border-2 border-sky-200" />

          <label className='text-gray-700' >Número</label>
          <input name="massege" type="text" className="border-2 border-sky-200" />

          <button className="bg-sky-300 text-center p-3">Enviar SMS</button>
        </form>
      </div>
    </div>
    </div>
  )
}

