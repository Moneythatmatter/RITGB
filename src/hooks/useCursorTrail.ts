import { useRef, useCallback } from "react";
import gsap from "gsap";

const IMAGES = [
  "/images/hero/cursor-1.png",
  "/images/hero/cursor-2.png",
  "/images/hero/cursor-3.png",
  "/images/hero/cursor-4.png",
  "/images/hero/cursor-5.png",
  "/images/hero/cursor-6.png",
];

const DISTANCE_THRESHOLD = 180; // px cursor must move before new image spawns

export function useCursorTrail(
  containerRef: React.RefObject<HTMLElement | null>,
) {
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Only run on desktop
      if (window.innerWidth < 1024) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check distance from last spawn point
      const dx = x - lastPosition.current.x;
      const dy = y - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < DISTANCE_THRESHOLD) return;

      // Update last position
      lastPosition.current = { x, y };

      // Create image element
      const img = document.createElement("img");
      img.src = IMAGES[imageIndex.current % IMAGES.length];
      imageIndex.current++;

      // Random offset and rotation
      const offsetX = (Math.random() - 0.5) * 80;
      const offsetY = (Math.random() - 0.5) * 80;
      const rotation = (Math.random() - 0.5) * 20;

      // Style it
      img.style.cssText = `
        position: absolute;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: 160px;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        pointer-events: none;
        z-index: 10;
        transform: translate(-50%, -50%) rotate(${rotation}deg);
        opacity: 0;
      `;

      container.appendChild(img);

      // Animate in then out
      gsap
        .timeline()
        .fromTo(
          img,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
        )
        .to(img, {
          opacity: 0,
          scale: 0.5,
          duration: 0.4,
          ease: "back.in(1.7)",
          delay: 0.6,
          onComplete: () => img.remove(),
        });
    },
    [containerRef],
  );

  return { handleMouseMove };
}
