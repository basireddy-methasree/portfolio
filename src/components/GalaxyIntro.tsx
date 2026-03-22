import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blackSuitPhoto from '@/assets/black-suit-photo.jpeg';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const GalaxyIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [warpPhase, setWarpPhase] = useState(0);

  // Stars for the galaxy
  const stars = useMemo<Star[]>(() => 
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 3,
    })), 
  []);

  // Nebula clouds
  const nebulaClouds = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 300 + 200,
      color: ['#a855f7', '#6366f1', '#22d3ee', '#f472b6', '#8b5cf6', '#06b6d4'][i],
      duration: Math.random() * 10 + 15,
    })),
  []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setCanProceed(true), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    if (!canProceed || isExiting) return;
    setIsExiting(true);
    setWarpPhase(1);
    setTimeout(() => setWarpPhase(2), 400);
    setTimeout(() => setWarpPhase(3), 800);
    setTimeout(() => onComplete(), 1400);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="galaxy-intro"
        className="fixed inset-0 z-50 overflow-hidden cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #030014 0%, #0a0020 30%, #050018 60%, #020010 100%)' }}
        onClick={handleEnter}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Deep space nebula layers */}
        {nebulaClouds.map((cloud) => (
          <motion.div
            key={`nebula-${cloud.id}`}
            className="absolute rounded-full"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              width: cloud.size,
              height: cloud.size,
              background: `radial-gradient(circle, ${cloud.color}30 0%, ${cloud.color}10 40%, transparent 70%)`,
              filter: 'blur(60px)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated galaxy spiral */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`spiral-${i}`}
              className="absolute"
              style={{
                width: 600 + i * 200,
                height: 600 + i * 200,
                border: `1px solid rgba(139, 92, 246, ${0.1 - i * 0.02})`,
                borderRadius: '50%',
                boxShadow: `0 0 40px rgba(139, 92, 246, ${0.1 - i * 0.02})`,
              }}
            />
          ))}
        </motion.div>

        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                background: star.size > 2 
                  ? 'radial-gradient(circle, #fff 0%, rgba(255,255,255,0.5) 50%, transparent 100%)'
                  : '#fff',
                boxShadow: star.size > 2 ? `0 0 ${star.size * 4}px rgba(255,255,255,0.8)` : 'none',
              }}
              animate={isExiting && warpPhase >= 2 ? {
                x: `${(star.x - 50) * 20}vw`,
                y: `${(star.y - 50) * 20}vh`,
                opacity: [1, 1, 0],
              } : {
                opacity: [0.3, 1, 0.3],
                scale: [1, star.size > 2 ? 1.5 : 1.2, 1],
              }}
              transition={isExiting ? {
                duration: 0.6,
                ease: 'easeIn',
              } : {
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Shooting stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 20}%`,
              top: `${5 + i * 10}%`,
              width: 120 + i * 30,
              height: 2,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), rgba(139,92,246,0.8), transparent)',
              transform: 'rotate(-45deg)',
              borderRadius: 2,
            }}
            animate={{
              x: [0, 500],
              y: [0, 500],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 2 + 1,
              repeat: Infinity,
              repeatDelay: 6,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Warp speed effect on exit */}
        {isExiting && warpPhase >= 1 && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(40)].map((_, i) => {
              const angle = (i / 40) * Math.PI * 2;
              return (
                <motion.div
                  key={`warp-${i}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 3,
                    height: 3,
                    background: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px #fff, 0 0 20px #a855f7',
                  }}
                  initial={{
                    x: Math.cos(angle) * 50,
                    y: Math.sin(angle) * 50,
                    scale: 1,
                  }}
                  animate={{
                    x: Math.cos(angle) * 1000,
                    y: Math.sin(angle) * 1000,
                    scaleX: 30,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeIn',
                    delay: i * 0.02,
                  }}
                />
              );
            })}
          </motion.div>
        )}

        {/* Central bright flash on exit */}
        {isExiting && warpPhase >= 2 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(139,92,246,0.8) 30%, transparent 70%)',
              }}
              initial={{ width: 0, height: 0 }}
              animate={{ width: '300vw', height: '300vh', opacity: [1, 1, 0] }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>
        )}

        {/* Central content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center relative"
            animate={isExiting ? { scale: 0.5, opacity: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            {/* Orbiting rings with glowing dots */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: 260 + ring * 80,
                  height: 260 + ring * 80,
                  marginLeft: -(130 + ring * 40),
                  marginTop: -(130 + ring * 40),
                  border: `1px solid rgba(139,92,246,${0.4 - ring * 0.1})`,
                  boxShadow: `0 0 20px rgba(139,92,246,${0.2 - ring * 0.05})`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: phase >= 1 ? 0.6 : 0,
                  scale: phase >= 1 ? 1 : 0,
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.6, delay: ring * 0.1 },
                  rotate: { duration: 20 + ring * 8, repeat: Infinity, ease: 'linear' }
                }}
              >
                {/* Glowing dots on rings */}
                <motion.div 
                  className="absolute w-4 h-4 rounded-full"
                  style={{ 
                    top: -8, 
                    left: '50%', 
                    marginLeft: -8,
                    background: ring === 1 ? '#22d3ee' : ring === 2 ? '#a855f7' : '#f472b6',
                    boxShadow: `0 0 20px ${ring === 1 ? '#22d3ee' : ring === 2 ? '#a855f7' : '#f472b6'}`,
                  }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ))}

            {/* Profile image with cosmic glow */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0, opacity: 0, y: 30 }}
              animate={{ 
                scale: phase >= 1 ? 1 : 0,
                opacity: phase >= 1 ? 1 : 0,
                y: phase >= 1 ? 0 : 30,
              }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            >
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.8)',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1.6, 2, 1.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-1 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #a855f7, #6366f1, #22d3ee, #f472b6, #a855f7)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-1 rounded-full bg-[#030014]" />
                <img
                  src={blackSuitPhoto}
                  alt="Basireddy Methasree"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Name with glowing effect */}
            <motion.h1
              className="mt-8 text-4xl md:text-6xl font-bold font-display"
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 25%, #8b5cf6 50%, #6366f1 75%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.6))',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 30,
              }}
              transition={{ duration: 0.5 }}
            >
              Basireddy Methasree
            </motion.h1>

            {/* Shimmer tagline */}
            <motion.div
              className="mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
            >
              <motion.p
                className="text-xl md:text-2xl font-medium"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #a855f7, #f472b6, #22d3ee)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                Machine Learning & Python Developer
              </motion.p>
            </motion.div>

            {/* Glowing Enter Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: canProceed ? 1 : 0,
                y: canProceed ? 0 : 30,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="relative px-14 py-5 rounded-full font-bold text-lg overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #22d3ee 100%)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(99,102,241,0.3), 0 0 90px rgba(34,211,238,0.2)',
                    '0 0 50px rgba(139,92,246,0.8), 0 0 100px rgba(99,102,241,0.5), 0 0 150px rgba(34,211,238,0.4)',
                    '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(99,102,241,0.3), 0 0 90px rgba(34,211,238,0.2)',
                  ],
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                />
                
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #6366f1, #22d3ee)',
                    filter: 'blur(15px)',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <span className="relative z-10 flex items-center gap-3 text-white font-display tracking-wide">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                  Enter My Universe
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </span>
              </motion.button>

              <motion.p
                className="mt-5 text-sm text-purple-300/60"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦ click anywhere to begin ✦
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalaxyIntro;