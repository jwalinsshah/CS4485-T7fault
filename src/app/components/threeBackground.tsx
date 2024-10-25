import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const initParticles = async () => {
      if (typeof window !== 'undefined') {
        const particlesJS = await import('particles.js');
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 184,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 5,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1.44,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
              push: {
                particles_nb: 6,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    initParticles();
  }, []);

  return <div id="particles-js" className="absolute top-28 opacity-30 left-0 w-full h-full z-0"></div>;
};

export default ParticlesBackground;