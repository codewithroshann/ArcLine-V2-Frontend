import About from '@/components/About'
import Cta from '@/components/Cta'
import Hero_Section from '@/components/Hero-Section'
import Projects from '@/components/Projects'
import Tech_Marquee from '@/components/Tech_Marquee'
import ScrollVelocity from '@/components/ui/ScrollVelocity'


 const Home = () => {
  return (
 <>
       <Hero_Section />
      <ScrollVelocity
        texts={["Develoment-Communty-Mentorship-"]}
        className="custom-scroll-text text-neutral-600/20  font-space"
      />
      <About />
      <Projects />
      <Tech_Marquee />
      <Cta />
 
 </>
  )
}

export default Home;