import './about.css'
import me from './images/me.jpg'

export default function Intro() {
  return (
    <div className="ml- mr-10 lg:ml-28 mr-28 p-10">
      <h1>
        <br />
      </h1>
      <div>
        <h1 className="text-3xl lg:text-5xl text-white">
          <img
            src={me}
            className="w-44 absolute right-4  lg:hidden"
          />
          <img
            src={me}
            className="hidden lg:block float-right"
          />
          Hey! <br /> I am Siddarth <br /> Pai <br />{' '}
        </h1>
      </div>

      <h1>
        <br />
      </h1>
      <p className="text-xl lg:text-3xl mt-5 text-white">
        Student at{' '}
        <a
          class="underline decoration-sky-500"
          href="https://pes.edu/"
        >
          PES University,Bangalore
        </a>
      </p>
      <h1>
        <br />
      </h1>
      <p className="w-72 text-lg lg:text-2xl mt-5 text-white">
        I build accessible, inclusive products and digital experiences for the Web/Apps.
        <br />
        I'm also passoionate about Open Source, Linux and Machine Learning!
      </p>
      <div class="scroll-down">
        <span>scroll down</span>
        <i class="fas fa-arrow-down"></i>
      </div>

      <div class="scroll-down scroll-down--left">
        <span>scroll down</span>
        <i class="fas fa-arrow-down"></i>
      </div>
    </div>
  )
}
