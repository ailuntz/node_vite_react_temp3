// VideoBackground.js
import  { useRef, useEffect } from 'react';
import './VideoBackground.css'; // 可选：用于样式

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // 监听视频结束事件，确保无缝循环
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();  // 确保视频结束时立即重新播放
      });
    }

    // 清理事件监听器
    return () => {
      if (video) {
        video.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <div className="video-bg">
      <video ref={videoRef} width="320" height="240" autoPlay muted loop>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
