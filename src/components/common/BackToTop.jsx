"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

// BackToTop component displays a button allowing users to scroll back to the top of the page
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  // useEffect hook to handle showing or hiding the back to top button based on scroll position
  useEffect(() => {
    const showBackToTop = () => {
      if (window.pageYOffset > 300) {
        // Show button when scrolled beyond 300 pixels
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", showBackToTop);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", showBackToTop);
  }, []);

  // Function to scroll back to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="scroll to top"
      className={`fixed bottom-4 right-4 bg-black text-white p-4 rounded-full z-50 transition-all duration-[0.3s] animate-pulse border-0 hover:scale-95 ${
        isBackToTopVisible === false && "bottom-[-20%]"
      }`}
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
