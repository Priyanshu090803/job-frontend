import Four from "@/components/Four"
import Hero from "@/components/Hero"
import Second from "@/components/Second"
import Third from "@/components/Third"

const Home = () => {
  return (
    <div className=' min-h-screen w-full bg-white    '>
      <Hero/>
      <Second/>
      <Third/>  
      <Four/>
      <div className=" h-screen w-full"></div>
    </div>
  )
}
export default Home
