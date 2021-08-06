// Componenets
import Connect from "../components/Connect"
import InputBox from "../components/InputBox"
// Icons
import {FaPhoneSquareAlt, FaMailBulk} from "react-icons/fa"

// Contact Page Component
const Contact = () => {
    return (
        <>
            <section className="contact-page">
                <h1>Connect with Me</h1>
                <div className="con-form">
                    <InputBox type="text" place="Enter Your Name"/>
                    <InputBox type="email" place="Enter Your Email"/>
                    <InputBox type="text" place="Enter Subject"/>
                    <textarea placeholder="Enter Your Message" className="txtar"></textarea>
                    <button className="send-btn">Send Message</button>
                </div>
                <div className="con-box">
                    <Connect url="tel:0771005566" icon={<FaPhoneSquareAlt/>} text="+94-77-100-5566"/>
                    <Connect url="mailto:wahsandaruwan6@gmail.com" icon={<FaMailBulk/>} text="wahsandaruwan6@gmail.com"/>
                </div>
            </section>
        </>
    )
}

export default Contact
