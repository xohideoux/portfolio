import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const projectsCount = myProjects.length;

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = myProjects[projectIndex];

  const handleNavigation = (direction) => {
    setProjectIndex((prev) => {
      if (direction === 'previous') {
        return prev === 0 ? projectsCount - 1 : prev - 1;
      } else {
        return prev === projectsCount - 1 ? 0 : prev + 1;
      }
    })
  }

  return (
    <section id='work' className='c-space my-20'>
      <p className='head-text'>My Work</p>

      <div className='grid xl:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>

          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt='logo'
              className='w-10 h-10 shadow-sm'
            />
          </div>

          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText' >{currentProject.title}</p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>

          <div className='flex justify-between items-center flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div
                  key={`${currentProject.title}_tag_${index}`}
                  className='tech-logo'
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                  />
                </div>
              ))}
              {/* <div>
                <a
                  href={currentProject.href}
                  target='_blank'
                  rel='noreferer'
                  className='flex items-center gap-2 cursor-pointer text-white-600'
                >
                  <p>Check Live Site</p>
                  <img
                    src={'/assets/arrow-up.png'}
                    alt='arrow'
                    className='w-3 h-3 object-contain'
                  />
                </a>
              </div> */}
            </div>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
              <img
                src={'/assets/left-arrow.png'}
                alt='roght arrow'
                className='w-4 h-4'
              />
            </button>
            <button className='arrow-btn' onClick={() => handleNavigation('next')}>
              <img
                src={'/assets/right-arrow.png'}
                alt='left arrow'
                className='w-4 h-4'
              />
            </button>
          </div>
        </div>

        <div className='border border-black-300 bg-black-200 rounded-lg h-95 md:h-ful'>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} />

            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects;