import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

export const CodeCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const isDark = theme === 'dark';
    const particleColor1 = isDark ? '#38bdf8' : '#0284c7';
    const particleColor2 = isDark ? '#818cf8' : '#6366f1';
    const particleColor3 = isDark ? '#34d399' : '#059669';
    const lineColor = isDark ? '#38bdf8' : '#0284c7';

    const particleCount = Math.floor(Math.min(width, 1600) / 26);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.6 + 1.2,
      color: Math.random() > 0.6 ? particleColor1 : Math.random() > 0.3 ? particleColor2 : particleColor3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // მაუსთან ინტერაქცია (ნაწილაკები ოდნავ ერიდებიან კურსორს)
        const dxMouse = p.x - mx;
        const dyMouse = p.y - my;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 140) {
          const force = (140 - distMouse) / 140;
          p.x += (dxMouse / distMouse) * force * 1.5;
          p.y += (dyMouse / distMouse) * force * 1.5;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isDark ? 0.6 : 0.65;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = (1 - dist / 125) * (isDark ? 0.22 : 0.22);
            ctx.lineWidth = isDark ? 0.8 : 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#f8fafc] dark:bg-[#070b14] transition-colors duration-500">
      {/* 1. ინტერაქტიული Canvas ქსელი */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. მაღალი კლასის გეომეტრიული ბადე */}
      <div 
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.1]"
        style={{
          backgroundImage: theme === 'dark'
            ? `
              linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(2, 132, 199, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2, 132, 199, 0.25) 1px, transparent 1px)
            `,
          backgroundSize: '44px 44px',
        }}
      ></div>

      {/* 3. რბილი სიღრმის ნათება (Ultra Auroras) */}
      <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-sky-400/25 dark:bg-cyan-500/15 rounded-full blur-[170px]"></div>
      <div className="absolute top-1/2 right-5 w-[700px] h-[700px] bg-indigo-500/20 dark:bg-indigo-600/15 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-5 left-10 w-[600px] h-[600px] bg-emerald-400/15 dark:bg-emerald-500/10 rounded-full blur-[160px]"></div>

      {/* 4. რადიალური ვინეტა */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 30%, transparent 20%, #070b14 90%)'
            : 'radial-gradient(circle at 50% 30%, transparent 35%, rgba(248, 250, 252, 0.75) 90%)'
        }}
      ></div>
    </div>
  );
};
