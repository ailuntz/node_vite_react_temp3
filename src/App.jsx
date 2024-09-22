import { useState } from 'react';
import './App.css';
import MyNewPage from './MyNewPage2/MyNewPage';
import LoadingAnimation from './MyNewPage2/LoadingAnimation'; // 引入新的动画组件

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false); // 动画结束后隐藏动画
  };

  return (
    <>
      {showAnimation && <LoadingAnimation onEnd={handleAnimationEnd} />}
      
      <div style={{ display: showAnimation ? 'none' : 'block' }}>
        <MyNewPage />
      </div>
    </>
  );
}

export default App;

