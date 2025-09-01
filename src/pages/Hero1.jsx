import React from 'react';
import SirTanveer from '../assets/images/sirtanveer1.png';
import { useNavigate } from 'react-router-dom';




const Hero = () => {

  const navigate=useNavigate()

  // Inline styles for the component
  const styles = {
    heroContainer: {

      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      // marginTop:'10px'
    },
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.8,
    },
    mobileBackgroundPattern: {
      display: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #002147 0%, #13396c 100%)',
      zIndex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0, 33, 71, 0.9) 0%, rgba(19, 57, 108, 0.7) 100%)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      width: '100%',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: '1.5rem',
      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    },
    oricHighlight: {
      color: '#00C6FF',
      display: 'inline',
      background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: 'none',
    },
    tagline: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 500,
      marginBottom: '2rem',
      maxWidth: '800px',
      position: 'relative',
      display: 'inline-block',
    },
    taglineUnderline: {
      position: 'absolute',
      bottom: '-5px',
      left: 0,
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.5s ease',
    },
    description: {
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      marginBottom: '3rem',
      maxWidth: '600px',
      opacity: 0.9,
      lineHeight: 1.6,
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    primaryButton: {
      padding: '0.75rem 2rem',
      background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 114, 255, 0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    secondaryButton: {
      padding: '0.75rem 2rem',
      background: 'transparent',
      color: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    scrollCircle: {
      width: '30px',
      height: '50px',
      borderRadius: '15px',
      border: '2px solid rgba(255, 255, 255, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '10px',
    },
    scrollDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      animation: 'bounce 2s infinite',
    },
    floatingShapes: {
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '300px',
      height: '300px',
      display: 'none',
    }
  };

  // Handle hover effects
  const handleTaglineHover = (e) => {
    e.target.querySelector('span').style.transform = 'scaleX(1)';
  };

  const handleTaglineLeave = (e) => {
    e.target.querySelector('span').style.transform = 'scaleX(0)';
  };

  
  return (
    <section style={styles.heroContainer}>
      {/* Background Elements */}
      <div style={styles.backgroundContainer}>
        {/* Desktop Background Image */}
        <img 
          src={SirTanveer}
          alt="ORIC MUET Background" 
          style={styles.backgroundImage}
          className="desktop-bg"
        />
        
        {/* Mobile Background Pattern (shown only on small screens) */}
        <div style={styles.mobileBackgroundPattern} className="mobile-bg">
          <svg width="100%" height="100%">
            <pattern 
              id="pattern" 
              x="0" 
              y="0" 
              width="80" 
              height="80" 
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect x="0" y="0" width="40" height="40" fill="rgba(0, 114, 255, 0.05)" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        {/* Overlay */}
        <div style={styles.overlay}></div>
      </div>
      
      {/* Floating Particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>
          <span style={styles.oricHighlight}>ORIC</span> - MUET
        </h1>
        
        <div 
          style={styles.tagline} 
          onMouseEnter={handleTaglineHover}
          onMouseLeave={handleTaglineLeave}
        >
          Driving Research & Innovation Forward
          <span style={styles.taglineUnderline}></span>
        </div>
        
        <p style={styles.description}>
          The Office of Research, Innovation & Commercialization at Mehran University 
          bridges academia and industry, transforming groundbreaking ideas into 
          tangible solutions that shape Pakistan's technological future.
        </p>
        
        <div style={styles.buttonContainer}>
          {/* <button style={styles.primaryButton}>
            Enroll Now
            
          </button> */}
          {/* <button style={styles.secondaryButton} onClick={()=>{
              navigate('/signup')
            }}>
          

            Enroll Now
            <svg 
              style={{ width: '20px', height: '20px', marginLeft: '8px', transition: 'transform 0.3s ease' }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button> */}
        </div>
      </div>
      
      {/* Floating Abstract Shapes (Desktop only) */}
      <div style={styles.floatingShapes} className="desktop-shapes">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          <path 
            d="M80,150 Q150,80 220,150 T360,150" 
            stroke="rgba(0, 194, 255, 0.2)" 
            fill="none" 
            strokeWidth="2"
          />
          <circle cx="150" cy="150" r="40" fill="rgba(0, 114, 255, 0.1)" />
          <path 
            d="M50,150 Q150,50 250,150 Q150,250 50,150 Z" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.1)" 
            strokeWidth="1.5"
          />
        </svg>
      </div>
      
      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <div style={styles.scrollCircle}>
          <div style={styles.scrollDot}></div>
        </div>
      </div>
      
      {/* Inline CSS for animations and responsive behavior */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 114, 255, 0.4);
        }
        
        button:active {
          transform: translateY(1px);
        }
        
        /* Responsive background handling */
        @media (max-width: 768px) {
          .desktop-bg, .desktop-shapes {
            display: none;
          }
          .mobile-bg {
            display: block;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-bg {
            display: none;
          }
          .desktop-shapes {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;