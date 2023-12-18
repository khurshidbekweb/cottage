
import Dacha from "../../components/Dacha/Dacha"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"


function Announcoment() {
  return (
    <>
        <Navbar/>
            <div className="announcoment">
                <div className="container">
                    <div className="announcoment_inner">
                        <Dacha/>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Announcoment