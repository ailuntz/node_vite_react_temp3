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
        path: `${import.meta.env.BASE_URL}data.json`, // 使用 Vite 的环境变量
      });
    }

    // 设置定时器，达到一定时间后隐藏动画
    const timer = setTimeout(() => {
      if (onEnd) onEnd(); // 动画结束时触发父组件的回调
      lottie.destroy(); // 停止并销毁动画
    }, 3000); // 3秒后关闭动画

    // 清理函数
    return () => {
      clearTimeout(timer);
      lottie.destroy(); // 组件卸载时销毁动画
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
        // backgroundColor: 'rgba(255, 255, 255, 0.2)', // 半透明背景
        // backdropFilter: 'blur(10px)', // 磨砂效果
        // webkitBackdropFilter: 'blur(10px)', // 兼容 Safari
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div>
  );
}

export default LoadingAnimation;

