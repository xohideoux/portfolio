import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';

const About = () => {
  const [copied, setCopided] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('llbnf.work@gmail.com')

    setCopided(true);

    setTimeout(() => {
      setCopided(false);
    }, 2000)
  }

  return (
    <section id='about' className='c-space my-20'>
      <div
        className='
          grid
          xl:grid-cols-3 xl:grid-rows-6
          md:grid-cols-2 grid-cols-1
          gap-5 h-full'
      >
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid1.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />

            <div>
              <p className='grid-headtext'>Hi, I&#39;am Arseny</p>
              <p className='grid-subtext'>
                With 3 years of experience, I have honed my skills in UX/UI Design,
                Frontend and Backend development, now focusing on animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid2.png'
              alt='grid-2'
              className='w-full sm:h-[276px] h-fit object-contain'
            />

            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>
                I specialize in JavaScript/TypeScript
                with focus on React and Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>


        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>

            <div>
              <p className='grid-headtext'>I work remotely across most timezones.</p>
              <p className='grid-subtext'>I&#39;am based in Armenia with remote work available.</p>
              <a href='#contact' className='w-fit'>
                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />

            <div>
              <p className='grid-headtext'>My passion for codding</p>
              <p className='grid-subtext'>
                I love solving problems and building things trough code.
                Coding isn&#39;t just my profession – it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='/assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit sm:object-top object-cover'
            />

            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={copied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-xl text-gray_gradient text-white'>llbnf.work@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;