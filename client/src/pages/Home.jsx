import React, {useState, useEffect} from 'react'
import {Loader, Card, FormField} from '../components'

const Home = () => {
    //const [loading, setLoading] = useSate(false)
    //const [allPosts, setAllPosts] = useState(null)
  return (
    <section className="max-w-7xl mx-auto">

     <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Posts from The Community</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Browse through all the images within the  collection. Every image has been generated using the DALL-E AI</p>
     </div>

     <div className='mt-16'>
        <FormField/>
     </div>

    </section>
  )
}

export default Home