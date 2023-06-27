import Intro from './intro'
import Navbar from '../navbar/navbar'
import Footer from '../footer/socialfollow'
import Experience from './experience'
function About() {
  return (
    <div class="">
      <div class="h-screen">
        <Intro />
        <div className="flex w-screen justify-center items-center mb-16 mt-16"></div>
      </div>
      <div className="flex w-screen justify-center items-center mt-16">
        <Experience />
      </div>
      <Footer />
    </div>
  )
}

export default About
