import React, { useRef } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);



const Showcase = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section  ref={sectionRef} id="project" className='app-showcase'>
          <div className='w-full'>
              <div className='showcaselayout'>
                  {/* {left} */}
                  <div className='first-project-wrapper' ref={project1Ref}>
                      <div className='image-wrapper'>
                          <img src="/images/project1.jpg" alt='StaySphere'></img>
                          <div className='project-overlay'>
                              <a 
                                  href="https://breast-cancer-prediction-ra6j.onrender.com" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className='project-link'
                              >
                                  View Live
                              </a>
                             <a 
                                 href="https://github.com/karan96108/Breast-Cancer-Prediction" 
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 className='project-link' 
                                 style={{marginLeft: '10px'}}
                             >
                                 View Repo
                             </a>
                          </div>
                      </div>
                      <div className='text-content'>
                          <h2>Breast Cancer Prediction Model: Empowering early detection with machine learning.</h2>
                          <p className='text-white-50 md:text-xl'>
                              This web app allows users to enter breast cancer features (e.g., radius_mean, texture_mean, etc.) as a comma-separated list. The model predicts the likelihood of breast cancer and provides clear, actionable results. Built with modern web technologies for a fast, user-friendly, and impactful health experience.
                          </p>
                      </div>
                  </div>
                  {/* Right */}
                  <div className='project-list-wrapper'>
                      <div className='project' ref={project2Ref}>
                          <div className='image-wrapper bg-[#F5F3FF]'>
                              <img src='/images/project2.png' alt="Chatter Box"></img>
                              <div className='project-overlay'>
                                  <a 
                                      href="https://fullstack-chat-app-ppsh.onrender.com/" 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className='project-link'
                                  >
                                      View Live
                                  </a>
                                  <a 
                                      href="https://github.com/karan96108/Fullstack-Chat-App" 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className='project-link'
                                  >
                                      View Repo
                                  </a>
                              </div>
                          </div>
                          <h2>CodeTribe</h2>
                          <p className='text-white-50 md:text-xl'>
                              CodeTribe is a real-time chat and photo sharing application designed for seamless communication and collaboration. Built with the MERN stack and Socket.io.
                          </p>
                      </div>
                      <div className='project' ref={project3Ref}>
                          <div className='image-wrapper bg-[#EEF3FF]'>
                              <video src='/videos/project3.mp4' autoPlay loop muted playsInline style={{width: '100%', height: 'auto', borderRadius: '12px', transform: 'rotate(-90deg)', objectFit: 'cover'}}></video>
                              <div className='project-overlay'>
                                  <a 
                                      href="https://drive.google.com/file/d/1nQtIOQJjjQJN3c0NXG0l30X9HwxHV7M4/view?usp=sharing" 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className='project-link'
                                  >
                                      Download APK
                                  </a>
                              </div>
                          </div>
                          <h2>AR Dragon Game</h2>
                          <p className='text-white-50 md:text-xl'>
                              An immersive Augmented Reality (AR) game where you interact with a virtual dragon in your real environment. Download the APK to experience the game on your Android device.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className="view-more-projects">
              <button className="view-more-btn">
                  View More Projects
                  <img src="/images/arrow-right.svg" alt="arrow" />
              </button>
              
          </div> */}
      </section>
      <section className='w-full px-5 md:px-20 py-10 md:py-20'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6'>Projects Under Softclique Technology pvt ltd</h2>
        <ul className='list-disc pl-8 text-white-50 text-lg md:text-xl space-y-2'>
          <li>
            <a href="https://elitetailor.in/" target="_blank" rel="noopener noreferrer" className='font-semibold text-white underline hover:text-blue-300'>Elite Tailor</a>
            <div className='text-white-50 text-base md:text-lg ml-2'>
              A custom-fit clothing platform offering expert alterations, real-time order tracking, and an admin panel for seamless management.
            </div>
          </li>
          <li>
            <a href="https://mkjainindustries.com/" target="_blank" rel="noopener noreferrer" className='font-semibold text-white underline hover:text-blue-300'>M.K Jain Industries</a>
            <div className='text-white-50 text-base md:text-lg ml-2'>
              An e-commerce website dedicated to selling high-quality toothpaste powder, providing a smooth shopping experience and secure checkout.
            </div>
          </li>
        </ul>
        <div className='mt-4 text-white-50 text-base md:text-lg'>
          <em>These projects were developed collaboratively with a team of 3 members.</em>
        </div>
      </section>
    </>
  )
}

export default Showcase
