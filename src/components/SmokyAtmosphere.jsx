import { useEffect, useRef } from 'react';

export const SmokyAtmosphere = ({ density = 'medium', showSpotlight = true, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive smoke & particle counts
    const isMobile = width < 768;
    const smokeCount = isMobile ? 14 : density === 'high' ? 26 : 20;
    const particleCount = isMobile ? 30 : 55;

    // Procedural Smoke Clouds with rich violet & magenta hues
    const smokeClouds = [];
    const colors = [
      { r: 124, g: 58, b: 237 },  // Purple #7c3aed
      { r: 168, g: 85, b: 247 },  // Violet #a855f7
      { r: 217, g: 70, b: 239 },  // Fuchsia #d946ef
      { r: 147, g: 51, b: 234 },  // Deep Purple #9333ea
      { r: 236, g: 72, b: 153 },  // Magenta/Pink #ec4899
      { r: 99, g: 102, b: 241 }   // Indigo #6366f1
    ];

    for (let i = 0; i < smokeCount; i++) {
      const color = colors[i % colors.length];
      smokeClouds.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: (isMobile ? 140 : 220) + Math.random() * (isMobile ? 180 : 300),
        vx: (Math.random() - 0.46) * 0.28,
        vy: (Math.random() - 0.5) * 0.2,
        baseAlpha: 0.05 + Math.random() * 0.08,
        alpha: 0.06,
        color,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.0018,
        pulseSpeed: 0.0008 + Math.random() * 0.001,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Glowing Atmospheric Floating Dust/Embers
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 2.5,
        vx: (Math.random() - 0.5) * 0.32,
        vy: -0.2 - Math.random() * 0.45, // upward slow drift
        color: Math.random() > 0.35 ? 'rgba(192, 132, 252, ' : 'rgba(244, 114, 182, ',
        baseAlpha: 0.25 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Dramatic Cinematic Violet Spotlight Behind Phone
      if (showSpotlight) {
        const spotX = width * 0.7;
        const spotY = height * 0.48;

        // Radial core spotlight
        const spotGrad = ctx.createRadialGradient(spotX, spotY, 20, spotX, spotY, width * 0.55);
        spotGrad.addColorStop(0, 'rgba(147, 51, 234, 0.32)');
        spotGrad.addColorStop(0.3, 'rgba(124, 58, 237, 0.18)');
        spotGrad.addColorStop(0.65, 'rgba(168, 85, 247, 0.06)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);

        // Volumetric Light Ray Beams
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.translate(spotX, spotY);
        ctx.rotate(Math.sin(time * 0.15) * 0.05);

        const rayGrad = ctx.createLinearGradient(0, -height * 0.5, 0, height * 0.5);
        rayGrad.addColorStop(0, 'rgba(192, 132, 252, 0)');
        rayGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.07)');
        rayGrad.addColorStop(1, 'rgba(236, 72, 153, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.45, height * 0.35, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Render Billowing Smoke Clouds with Screen Blending
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < smokeClouds.length; i++) {
        const s = smokeClouds[i];

        // Move smoke naturally
        s.x += s.vx;
        s.y += s.vy;
        s.angle += s.angularSpeed;

        // Wrap edges smoothly
        if (s.x < -s.radius) s.x = width + s.radius;
        if (s.x > width + s.radius) s.x = -s.radius;
        if (s.y < -s.radius) s.y = height + s.radius;
        if (s.y > height + s.radius) s.y = -s.radius;

        // Subtle undulating opacity
        const pulse = Math.sin(time * s.pulseSpeed * 60 + s.pulseOffset);
        s.alpha = s.baseAlpha + pulse * 0.025;

        // Radial gradient blob
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
        grad.addColorStop(0, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.alpha})`);
        grad.addColorStop(0.45, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render Floating Glowing Dust / Ember Particles
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time * 0.9 + p.phase) * 0.25;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(time * 2 + p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(192, 132, 252, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [density, showSpotlight]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 w-full h-full ${className}`}
    />
  );
};
