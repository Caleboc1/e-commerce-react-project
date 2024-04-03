import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'
import img1 from '../../images/p-1.png'
import img2 from '../../images/p-2.png'
import img3 from '../../images/p-3.png'
import img4 from '../../images/p-4.png'
import img5 from '../../images/p-5.png'
import img6 from '../../images/p-6.png'
import img7 from '../../images/p-7.png'
import img8 from '../../images/p-8.png'

const ProductsData = [
    {
        id: 1,
        img: img1 ,
        title: "Boat Headphone" ,
        price: "120" ,
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title:  "Rocky Mountain",
        price:  "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Googles" ,
        price: "320" ,
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title:  "Printed",
        price:  "220",
        aosDelay: "600",
    },
    {
      id: 5,
      img: img5,
      title: "Boat Headphone" ,
      price: "120" ,
      aosDelay: "0",
    },
    {
      id: 6,
      img: img6,
      title:  "Rocky Mountain",
      price:  "420",
      aosDelay: "200",
  },
  {
    id: 7,
    img: img7,
    title: "Googles" ,
    price: "320" ,
    aosDelay: "400",
},
{
  id: 8,
  img: img8,
  title:  "Printed",
  price:  "220",
  aosDelay: "600",
},
]

function Products() {
  return (
    <div>
      <div className='container'>
        {/* header section  */}
        <Heading  title="Our Products" subtitle="Explore Our Products"/>
        {/* body section  */}
        <ProductCard data={ProductsData}/>
      </div>
    </div>
  )
}

export default Products
