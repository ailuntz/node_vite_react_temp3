import { useEffect, useRef } from 'react';
import './MyNewPage.css'; // 如果有对应的 CSS 文件，请记得引入
import videoFile from '../assets/7btrrd.mp4';

function MyNewPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // 监听视频的时间更新，提前重置时间以实现无缝循环
    const handleVideoEnd = () => {
      if (video) {
        video.currentTime = 0.52; // 重置播放时间
        video.play(); // 重新播放
      }
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    // 清理函数，组件卸载时移除事件监听
    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []); // 空依赖数组，确保只在组件挂载和卸载时执行

  return (
    <div>
      <div className="video-bg">
        <video ref={videoRef} width="320" height="240" autoPlay muted preload="auto" >
        {/* <video ref={videoRef} width="320" height="240" autoPlay muted preload="auto"> */}
          {/* <source src={videoFile} type="video/mp4" /> */}
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </div>
  );
}

export default MyNewPage;
