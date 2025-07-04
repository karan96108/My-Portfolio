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
    <section  ref={sectionRef} id="project" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* {left} */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/project1.jpg" alt='StaySphere'></img>
                        <div className='project-overlay'>
                            <a 
                                href="https://elitetailor.in/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='project-link'
                            >
                                View Live
                            </a>
                        </div>
                    </div>
                    <div className='text-content'>
                        <h2>Elite Tailor offers custom-fit clothing, expert alterations, real-time order tracking, and an admin panel for seamless management.</h2>
                        <p className='text-white-50 md:text-xl'>
                            These websites are built with MongoDB, Firebase, Express.js, Node.js, EJS, and TailwindCSS — delivering a fast and user-friendly experience.
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
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#EEF3FF]'>
                            <img src='/images/project3.png' alt="React Softclique Company Website"></img>
                            <div className='project-overlay'>
                                <a 
                                    href="https://softclique.in/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='project-link'
                                >
                                    View Live
                                </a>
                            </div>
                        </div>
                        <h2>Softclique Company Website</h2>
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
  )
}

export default Showcase
