import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import BASE_URL from '../Api'
import axios from 'axios'

export const newsCreate = createContext()
export default function NewsContextApi({children}) {
   const[newsData,setNewsData] = useState([])

     const fetchData = async () =>{
        try{
       const res = await axios.get(`${BASE_URL}/api/news`)
       setNewsData(res.data)
        }catch(error){
       console.log('fetch error', error);
        }
    }

    useEffect(() => {
     fetchData()
    },[])
  return (
   <newsCreate.Provider value={{
     newsData
   }}>
    {children}
   </newsCreate.Provider>
  )
}
