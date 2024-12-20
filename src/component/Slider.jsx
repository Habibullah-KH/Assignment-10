import { useEffect, useState } from 'react';


const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev % 4) + 1); // Cycles through 1 to 4
    }, 2800);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const slideElement = document.getElementById(`slide${activeSlide}`);
    if (slideElement) {
      // slideElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSlide]);

    return (
        <>
            <div className="carousel w-full mx-auto bg-gradient-to-r from-purple-200 to-pink-100 text-black">{/*carousel container parent*/}
  <div id="slide1" className={`carousel-item relative w-full`}>

    <div className='md:flex justify-between items-center mx-auto '>
      <div className='p-5'>{/*text container*/}
      <h2 className='font-semibold text-xl md:text-3xl'>ROG Strix GeForce RTX™ 4090 OC Edition 24GB GDDR6X</h2>
      <p className='text-sm'>ROG Strix GeForce RTX® 4090 OC Edition 24GB GDDR6X with DLSS 3 and chart-topping thermal performance</p>
      <a href="https://rog.asus.com/" target='_blank'><button className='btn'> <span className='text-black'>Learn more</span></button></a>
      </div>

      <div>{/*image container*/}
      <img
      src="https://dlcdnwebimgs.asus.com/gain/EFF9D6D8-2F6C-4E76-989F-E5DB594052BA/w717/h525"
      className="w-full" />
      </div>
    </div>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="text-black">❮</a>
      <a href="#slide2" className="text-black">❯</a>
    </div>
  </div>

  <div id="slide2" className={`carousel-item relative w-full`}>

  <div className='md:flex justify-between items-center mx-auto '>{/*parent div*/}
      <div className='p-5 '>{/*text container*/}
      <h2 className='font-semibold text-xl md:text-3xl'>ROG Strix SCAR 17 X3D (2023) G733</h2>
      <p className='text-sm'>GA605WV-0103HSTRIX-12C</p>
      <a href="https://rog.asus.com/" target='_blank'><button className='btn'> <span className='text-black'>Learn more</span></button></a>
      </div>

      <div>{/*image container*/}
      <img
      src="https://dlcdnwebimgs.asus.com/gain/F8134BD4-8814-4D68-95F5-38EB03C1472C/w1000/h732"
      className="w-full" />
      </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="text-black">❮</a>
      <a href="#slide3" className="text-black">❯</a>
    </div>
  </div>

  <div id="slide3" className={`carousel-item relative w-full`}>
  <div className='md:flex justify-between items-center mx-auto'>{/*parent div*/}
      <div className='p-5'>{/*text container*/}
      <h2 className='font-semibold text-xl md:text-3xl'>ROG Keris Wireless AimPoint</h2>
      <a href="https://rog.asus.com/" target='_blank'><button className='btn'> <span className='text-black'>Learn more</span></button></a>
      </div>

      <div>{/*image container*/}
      <img
      src="https://dlcdnwebimgs.asus.com/gain/94A80239-F7E2-443F-BE90-3F2AF6DDEFFE/w1000/h732"
      className="w-full" />
      </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="text-black">❮</a>
      <a href="#slide1" className="text-black">❯</a>
    </div>
  </div>
</div>
        </>
    );
};

export default Slider;