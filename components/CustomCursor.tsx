"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // The "Magic" Loop: Smoothly interpolates the position
    const animate = () => {
      // Change '0.1' to a higher number (e.g. 0.2) for a faster follow
      // or lower (e.g. 0.05) for more "laggy" elegance
      const lerpAmount = 0.3;

      cursorX += (mouseX - cursorX) * lerpAmount;
      cursorY += (mouseY - cursorY) * lerpAmount;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 bg-secondary rounded-full pointer-events-none z-[9999] hidden md:block will-change-transform"
    />
  );
}
