import ProjectImg1 from '../Assests/ecommerce.jpg'
import ProjectImg2 from '../Assests/foodecommerce.jpg'
import ProjectImg3 from '../Assests/website.jpg'

export default function Project(){
    return<section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
              <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are the best projects I have built these with react.js and I experienced in designing and implementing responsive and intuitive user interfaces for eCommerce websites, optimizing for usability and conversion.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={ProjectImg1}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>A Ecommerce website built with MERN STACK.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]'src={ProjectImg2}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Food Ecommerce website like swiggy built with ANGULAR.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]'src={ProjectImg3}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Basic blog website built with JS and front end basic tools.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}