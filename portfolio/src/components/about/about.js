import Intro from "./intro"
import Navbar from "../navbar/navbar"
import Footer from "../footer/socialfollow"
import Experience from "./experience";
import me from "./images/me.jpg"
function About() {
  return (
    <div class="">
      <div class="h-screen">
        <Intro/>
        <div className="flex items-center justify-center" >
          <img className='h-48 lg:h-96' src={me}/>
        </div>
        
      </div>
      <Experience/>
      <Footer/>
    </div>
    
  );
}

export default About;
