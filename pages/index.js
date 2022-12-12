import Hero from '../components/Hero'
import Nav from '../components/Nav'
import ProductList from '../components/ProductList'
import UnderlineLink from '../components/UnderlineLink'
import { getProductsInCollection } from '../lib/shopify'



export default function Home({ products }) {
  return (
   <div>
<Hero/>
{/* <UnderlineLink/> */}

<div className="flex flex-col md:flex-row">
  <div className="md:w-1/2 hover:border-cyan-700 ">
    <img src="https://cdn.shopify.com/s/files/1/0596/3438/5036/files/unisex-lightweight-hoodie-black-front-6393c94178b4d.jpg?v=1670782452" alt="hero image" />
  </div>
  <div className="md:w-1/3 flex flex-col  justify-center">
    <h1 className="text-4xl font-bold">Worlds Best Hoodie</h1>
    <p className="text-lg"> Our hoodie is in a leaugue of it's own. 
    
    <br/>
    Organic? Check.
    <br/>
     Soft as hell? Check.
     <br/>
      One of a kind design? Check.  </p>
    <button className=" lg:w-1/4 sm:w-1/3 md:w-1/4 bg-black text-white py-2 px-4 rounded">Shop Now</button>
  </div>
</div>



<ProductList products={products} />


   </div>

  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}