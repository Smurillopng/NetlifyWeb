import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Animate title on scroll
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      opacity: 0,
      y: 100,
    });
    
    // Animate project cards with stagger
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);
  
  const projects = [
    {
      title: 'Project One',
      description: 'An amazing project description',
      image: '/images/project1.webp'
    },
    {
      title: 'Project Two',
      description: 'Another great project',
      image: '/images/project2.webp'
    },
    {
      title: 'Project Three',
      description: 'One more awesome project',
      image: '/images/project3.webp'
    },
  ];
  
  return (
    <section ref={sectionRef} className="project-section" id="projects">
      <h2 ref={titleRef} className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;