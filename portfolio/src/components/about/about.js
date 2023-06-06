import Intro from "./intro"
import Navbar from "../navbar/navbar"
import Footer from "../footer/socialfollow"
import Experience from "./experience";
function About() {
  return (
    <div class="">
      <div class="h-screen">
        <Intro/>
      </div>
      <Experience/>
      <Footer/>
    </div>
    
  );
}

export default About;
