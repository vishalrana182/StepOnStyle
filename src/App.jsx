import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Shoe from "./Components/shoe-card"
import Men from "./Components/Men"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex mt-10 flex-wrap justify-center">
            <h2 className="font-bold">New Arrivals</h2>
        </div>
        <div className="flex justify-center gap-7 mt-10">
            <Shoe 
            img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
            name="AKAADA"
            description= "MACHI BLACK LEATHER"
            price="$360.00"
            />
            <Shoe 
            img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
            name="AKAADA"
            description= "MACHI BLACK LEATHER"
            price="$360.00"
            />
            <Shoe 
            img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
            name="AKAADA"
            description= "MACHI BLACK LEATHER"
            price="$360.00"
            />
            <Shoe 
            img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
            name="AKAADA"
            description= "MACHI BLACK LEATHER"
            price="$360.00"
            />
        </div>
      <Men />
    </>
  )

}

export default App;