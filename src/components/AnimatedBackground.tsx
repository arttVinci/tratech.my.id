"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: { x: number; y: number; baseX: number; baseY: number; size: number; alpha: number; pulse: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const spacing = 50;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            size: Math.random() * 1.2 + 0.3,
            alpha: Math.random() * 0.15 + 0.03,
            pulse: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.005 + 0.002,
          });
        }
      }
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      dots.forEach((dot) => {
        dot.pulse += dot.speed;
        const pulseAlpha = Math.sin(dot.pulse) * 0.08 + dot.alpha;

        // Mouse proximity effect
        const dx = mx - dot.baseX;
        const dy = my - dot.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 0.4;
          dot.x = dot.baseX + dx * force * 0.1;
          dot.y = dot.baseY + dy * force * 0.1;
          const brightAlpha = pulseAlpha + force * 0.3;
          ctx.fillStyle = `rgba(0, 212, 255, ${brightAlpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(0, 212, 255, 0.3)";
        } else {
          dot.x += (dot.baseX - dot.x) * 0.05;
          dot.y += (dot.baseY - dot.y) * 0.05;
          ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      {/* Aurora Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #00d4ff, transparent 70%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            animation: "float 15s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 70%)",
            animation: "float 18s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}
