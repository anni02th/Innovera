import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const IntroAnimation = () => {
  const navigate = useNavigate();
  const text1 = useRef(null);
  const text2 = useRef(null);
  const logo = useRef(null);
  const container = useRef(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // First, show the text animation
    tl.fromTo(
      text1.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
      .to(text1.current, { opacity: 0, y: -30, duration: 1, delay: 1 })
      .fromTo(
        text2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      )
      .to(text2.current, { opacity: 0, y: -30, duration: 1, delay: 1 })
      .to(container.current, { opacity: 0, duration: 1 })
      .add(() => {
        setShowAnimation(false); // Remove animation from DOM
        navigate('/');
        window.location.reload();
      });

  }, [navigate]);

  if (!showAnimation) return null; // Fully remove animation after playing

  return (
    <div ref={container} className="fixed inset-0 flex flex-col items-center justify-center z-50">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted 
        preload="auto"
      >
        <source src="../../src/assets/animation_background.mp4" type="video/mp4" />
        
      </video>

      {/* Content (Text & Logo) */}
      <div className="relative z-10 text-center text-white">
        <h1 ref={text1} className="text-3xl md:text-5xl font-bold tracking-wide">
          Think if you get a chance to win{" "}
          <span className="text-yellow-500">₹2,50,000!</span>
        </h1>
        <h2 ref={text2} className="text-xl md:text-3xl mt-4 text-gray-300 font-light">
          And to solve real-world problems.
        </h2>
      </div>
    </div>
  );
};

export default IntroAnimation;
