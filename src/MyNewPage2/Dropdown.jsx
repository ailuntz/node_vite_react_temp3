import { useState, useEffect } from 'react';

function Dropdown() {
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive); // 切换激活状态
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsActive(false); // 点击页面空白处时关闭 dropdown
    };

    // 监听全局点击事件，关闭 dropdown
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <button
      className={`dropdown ${isActive ? 'is-active' : ''}`}
      onClick={handleDropdownClick}
    >
        <ul>
        <li><a href="#">ailGo to Discover</a></li>
        <li><a href="#">Learn more</a></li>
        <li><a href="#">Uninstall</a></li>
        </ul>
    </button>
  );
}

export default Dropdown;
