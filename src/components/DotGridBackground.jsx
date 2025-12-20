'use client'

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './DotGridBackground.css';

const DotGridBackground = ({
  dotSize = 2,
  gap = 30,
  color = 'rgba(255, 255, 255, 0.1)',
  hoverColor = 'rgba(255, 255, 255, 0.3)',
  hoverRadius = 80,
  className = ''
}) => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createDots = () => {
      // Batch layout read in requestAnimationFrame to avoid forced reflows
      requestAnimationFrame(() => {
        if (!container) return
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          // Retry after a short delay if container not ready
          setTimeout(createDots, 100);
          return;
        }
        
        const cols = Math.ceil(rect.width / gap) + 1;
        const rows = Math.ceil(rect.height / gap) + 1;
        
        // Clear existing dots
        container.innerHTML = '';
        dotsRef.current = [];

        // Create dots
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const dot = document.createElement('div');
            dot.className = 'dot-grid-dot';
            const x = j * gap;
            const y = i * gap;
            dot.style.cssText = `
              position: absolute;
              width: ${dotSize}px;
              height: ${dotSize}px;
              background: ${color};
              border-radius: 50%;
              left: ${x}px;
              top: ${y}px;
              transform: translate(-50%, -50%);
              transition: background 0.3s ease, transform 0.3s ease;
              pointer-events: none;
              will-change: transform, background, opacity;
              box-shadow: 0 0 2px ${color};
            `;
            container.appendChild(dot);
            dotsRef.current.push({
              element: dot,
              x: x,
              y: y
            });
          }
        }
      })
    };

    const updateDots = () => {
      if (dotsRef.current.length === 0) {
        animationFrameRef.current = requestAnimationFrame(updateDots);
        return;
      }
      
      // Batch layout read in requestAnimationFrame to avoid forced reflows
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          animationFrameRef.current = requestAnimationFrame(updateDots);
          return;
        }
        
        const mouseX = mousePosition.current.x - rect.left;
        const mouseY = mousePosition.current.y - rect.top;

        dotsRef.current.forEach(dot => {
          const dx = dot.x - mouseX;
          const dy = dot.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < hoverRadius) {
            const intensity = 1 - (distance / hoverRadius);
            const scale = 1 + intensity * 0.5;
            
            gsap.to(dot.element, {
              background: hoverColor,
              scale: scale,
              duration: 0.3,
              ease: 'power2.out'
            });
          } else {
            gsap.to(dot.element, {
              background: color,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });

        animationFrameRef.current = requestAnimationFrame(updateDots);
      })
    };

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosition.current = { x: -1000, y: -1000 };
    };

    // Initial setup with delay to ensure container is ready
    const initTimeout = setTimeout(() => {
      // Batch layout read in requestAnimationFrame to avoid forced reflows
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          createDots();
          updateDots();
        } else {
          // Retry if container not ready
          setTimeout(() => {
            createDots();
            updateDots();
          }, 200);
        }
      })
    }, 100);

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      createDots();
    });
    resizeObserver.observe(container);
    
    // Also listen to window resize
    window.addEventListener('resize', createDots);

    return () => {
      clearTimeout(initTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', createDots);
      resizeObserver.disconnect();
    };
  }, [dotSize, gap, color, hoverColor, hoverRadius]);

  return (
    <div
      ref={containerRef}
      className={`dot-grid-background ${className}`}
      style={{ minHeight: '100%', minWidth: '100%' }}
    />
  );
};

export default DotGridBackground;
