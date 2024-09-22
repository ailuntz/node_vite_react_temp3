import { useEffect } from 'react';
import lottie from 'lottie-web';

function LoadingAnimation({ onEnd }) {
  useEffect(() => {
    const container = document.getElementById('lottie-container');
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${import.meta.env.BASE_URL}data.json`,
      });
    }

    const timer = setTimeout(() => {
      if (onEnd) onEnd();
      lottie.destroy();
    }, 8000);

    return () => {
      clearTimeout(timer);
      lottie.destroy();
    };
  }, [onEnd]);

  return (
    <div
      id="lottie-container"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
        backdropFilter: 'blur(10px)', // 磨砂效果
        webkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div>
  );
}

export default LoadingAnimation;
