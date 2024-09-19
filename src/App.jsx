import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import lottie from 'lottie-web';
import MyNewPage from './MyNewPage/MyNewPage';

function App() {
  const [count, setCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const container = document.getElementById('lottie-container');
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/data.json', // 替换为你的动画文件路径
      });
    }

    // 5秒后隐藏动画
    const timer = setTimeout(() => {
      setShowAnimation(false);
      lottie.destroy(); // 停止并销毁动画
    }, 5000);

    return () => {
      clearTimeout(timer)
      // 清理动画
      if (lottie) {
        lottie.destroy();
      }
    };
  }, []);

  return (
    <>
      {showAnimation && (
        <div 
          id="lottie-container" 
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999, // 确保动画在最上层
            backgroundColor: 'transparent', // 可选: 设置背景颜色
          }}
        ></div>
      )}
      <div style={{ display: showAnimation ? 'none' : 'block' }}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and Reacts
        </p>
        <MyNewPage />
      </div>
    </>
  );
}

export default App;
