import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  // 切换黑暗模式逻辑
  const handleToggle = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // 切换 body 的 class 来实现模式切换
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="dark-light" onClick={handleToggle} style={{ cursor: 'pointer' }}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '24px', height: '24px' }}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
  );
}

export default ThemeToggle;
