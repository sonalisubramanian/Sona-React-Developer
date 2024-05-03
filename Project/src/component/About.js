import AboutImg from '../Assests/login_img.png'

export default function About(){
    return<section id='about' className='flex flex-col md:flex-row bg-secondary px-5 '>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/> 
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, Myself Sonali. I am Front-End developer. I built a websites with Reactjs and Tailwind css </p>
            <p className='pb-5'>I'm proficient in Frontend Skills like Reactjs,Angualr, Javascript and manymore...</p>
            <p className='pb-5'>In backend I know Node.js, Java and database like mssql</p>
            </div>
        </div>
    </section>
}