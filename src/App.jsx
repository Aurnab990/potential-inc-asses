import Aboutme from "./Components/AboutMe/Aboutme"
import Header from "./Components/Header/Header"
import Letsdotogether from "./Components/LetsDoTogether/Letsdotogether"
import Myprojects from "./Components/MyProjects/Myprojects"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonails"
import Footer from "./Layouts/Footer/Footer"
import Navbar from "./Layouts/Navbar/Navbar"

function App() {
  
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <Navbar></Navbar>
      <Header></Header>
      <Aboutme></Aboutme>
      <Services></Services>
      <Myprojects></Myprojects>
      <Testimonials></Testimonials>
      <Letsdotogether></Letsdotogether>
      <Footer></Footer>
    </div>
  )
}

export default App
