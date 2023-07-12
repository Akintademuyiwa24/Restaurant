import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [foods, setFoods] = useState(data)

    //filter type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    console.log(data)

    //filter price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>To Rated Menu Items</h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Typer</p>
                <div className='flex justify-evenly flex-wrap'>
                    <button onClick={() => setFoods(data)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* filter price */}
            <div className='mt-5'>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex flex-wrap justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$100')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$400</button>
                <button onClick={() => filterPrice('$200')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$500</button>
                <button onClick={() => filterPrice('$60')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$600</button>
                <button onClick={() => filterPrice('$90')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$700</button>
                </div>
            </div>
        </div>


        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, id) => (
                <div key={id} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-around px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>

    </div>
  )
}

export default Food