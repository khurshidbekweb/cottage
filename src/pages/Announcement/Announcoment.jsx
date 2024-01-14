
import Dacha from "../../components/Dacha/Dacha"
import Footer from "../../components/Footer/Footer"
import MiniNaw from "../../components/MiniNaw/MiniNaw"
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
            <MiniNaw/>
        <Footer/>
    </>
  )
}

export default Announcoment