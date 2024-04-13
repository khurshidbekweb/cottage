import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact  page" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Navbar />
      <div className="conatct">
        <div className="container">
          <h2 className="fs-1 fw-bold text-center conatact-title">
            Contact Us
          </h2>
          <p className="fs-5 text-center">
            Any question or remarks? Just write us a message!
          </p>
          <div className="contact-inner mt-5 bg-white">
            <div className="contact-my-office rounded-2 bg-black position-relative">
              <h2 className="contact fs-2 fw-bold text-white">
                Contact Information
              </h2>
              <p className="text-contact text-white mt-2">
                Say something to start a live chat!
              </p>

              <div className="contact-to-offece">
                <div className="phone-nomer-conatct w-25 d-flex gap-3">
                  <i class="bx bxs-phone-call fs-4 text-white"></i>
                  <p className="text-white">+998971082004</p>
                </div>
                <div className="phone-nomer-conatct w-25 d-flex gap-3">
                  <i class="bx bx-envelope fs-4 text-white"></i>
                  <p className="text-white">demo@gmail.com</p>
                </div>
                <div className="phone-nomer-conatct w-100 d-flex gap-3">
                  <i class="bx bxs-location-plus fs-4 text-white"></i>
                  <p className="text-white">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </p>
                </div>
              </div>
              <div className="offece-set d-flex">
                <a href="https://instagram.com">
                  <i class="bx bxl-instagram fs-4 text-white"></i>
                </a>
                <a className="mx-3 d-block" href="https://instagram.com">
                  <i class="bx bxl-twitter fs-4 text-white"></i>
                </a>
                <a href="https://instagram.com">
                  <i class="bx bxl-telegram fs-4 text-white"></i>
                </a>
              </div>
            </div>

            <div className="contact-for-user">
              <form>
                <div className="contact-top-connect">
                  <label className="label-conatct">
                    {" "}
                    First Name
                    <input
                      className="contact-inp"
                      type="text"
                      name="firstname"
                      id="firsName"
                    />
                  </label>
                  <label className="label-conatct gap-3">
                    {" "}
                    Last Name
                    <input
                      className="contact-inp"
                      type="text"
                      name="lastname"
                      id="lastName"
                    />
                  </label>
                </div>
                <div className="contact-top-connect">
                  <label className="label-conatct">
                    {" "}
                    Email
                    <input
                      className="contact-inp"
                      type="email"
                      name="email"
                      id="userEmail"
                    />
                  </label>
                  <label className="label-conatct gap-3">
                    {" "}
                    Phone Number
                    <input
                      className="contact-inp"
                      type="text"
                      name="number"
                      id="userNamber"
                    />
                  </label>
                </div>

                <label className="label-conatct gap-3 mt-5">
                  {" "}
                  Message
                  <input
                    className="contact-inp w-100 mt-3"
                    type="text"
                    name="number"
                    id="userNamber"
                    placeholder="Write your message.."
                  />
                </label>
                <button type="submit" className="btn-sentMasseage">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
};

export default Contact;
