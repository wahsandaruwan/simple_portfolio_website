// Components
import SocialBtn from "../components/SocialBtn"
import NormalBtn from "../components/NormalBtn"
// Icons
import {FaTwitter, FaGithub, FaLinkedinIn} from "react-icons/fa"

// Home Page Component
const Home = () => {
    return (
        <>
            <section className="home-page">
                <h1>Himal Sandaruwan</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="download">
                    <NormalBtn url="https://google.lk" text="Download Resume" class="cv-btn"/>
                    <NormalBtn url="https://facebook.lk" text="Download Cover Letter" class="cover-btn"/>
                </div>

                <div className="social">
                    <SocialBtn url="https://twitter.com" type={<FaTwitter/>}/>
                    <SocialBtn url="https://github.com" type={<FaGithub/>}/>
                    <SocialBtn url="https://linkedin.com" type={<FaLinkedinIn/>}/>
                </div>
            </section>
        </>
    )
}

export default Home
