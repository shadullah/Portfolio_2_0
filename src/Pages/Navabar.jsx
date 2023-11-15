// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import two from '../images/2.jpg';
// import { icon } from '@fortawesome/fontawesome-svg-core';

const Navabar = () => {
    return (
        <div>
            <div className='max-w-[1200px] flex mx-auto justify-around items-center bg-gradient-to-r from-blue-400 to-blue-600 my-8 px-12 py-6 rounded-3xl'>
                <div>
                    <h1 className='text-4xl text-white font-semibold'>Hi there,&#128075; </h1>
                    <h1 className='text-3xl mt-5 font-medium'>I&#39;m a Full Stack Developer</h1>

                    {/* <div className=' '> */}
                    <div className='flex justify-between mt-4 text-white text-xs font-medium'>
                        <div className='text-center mr-5'>
                            <p className='mb-2'><i className="fa-solid fa-phone text-white"></i></p>
                            <p>+8801629837675</p>
                        </div>
                        <div className='text-center mr-5'>
                            <p className='mb-2'><i className="fa-regular fa-envelope text-white"></i></p>
                            <p>shadullahsad9@gmail.com</p>
                        </div>
                        <div className='text-center'>
                            <p className='mb-2'><i className="fa-solid fa-location-crosshairs text-white mr-2"></i></p>
                            <p>Sylhet, Bangladesh</p>
                        </div>
                    </div>
                    
                    {/* <p><i className="fa-regular fa-envelope"></i> </p>
                    <p><i className="fa-solid fa-location-crosshairs"></i>Sylhet, Bangladesh </p>*/}
                    {/* </div>  */}
                    

                </div>
                <div className='w-36 rounded-full'>
                    <img className='rounded-full' src={two} alt="&" />
                </div>
            </div>
        </div>
    );
};

export default Navabar;