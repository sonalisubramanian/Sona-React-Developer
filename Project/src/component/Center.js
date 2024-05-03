import CenterImg from '../Assests/background.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Center() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-white text-6xl font-center-font'>Hi,<br/> I'm Sonali
        <p className='text-2xl'>I'm a Front-End Developer</p>
        </h1>
        <div className='flex py-10'>
            <a href='https://www.tweetgen.com/' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href='https://www.facebook.com/TheDummyPage/' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href='https://in.linkedin.com/in/dummy-link-775982111' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/4' src={CenterImg}/>
        </section>


}









