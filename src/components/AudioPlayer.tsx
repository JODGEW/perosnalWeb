'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

interface Props {
  src: string;
  id: string;
}

export default function AudioPlayer({ src, id }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeText, setTimeText] = useState('0:00 / 0:00');
  const [error, setError] = useState(false);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    function handleOtherPlay(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail?.id !== id) pause();
    }
    window.addEventListener('audio-play', handleOtherPlay);
    return () => window.removeEventListener('audio-play', handleOtherPlay);
  }, [id, pause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onMeta = () =>
      setTimeText(`0:00 / ${formatTime(audio.duration)}`);
    const onTime = () => {
      const p = (audio.currentTime / audio.duration) * 100;
      setProgress(p);
      setTimeText(`${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };
    const onErr = () => {
      setError(true);
      setTimeText('Error loading audio');
    };

    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('error', onErr);

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('error', onErr);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      window.dispatchEvent(new CustomEvent('audio-play', { detail: { id } }));
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        console.error('Error playing audio');
      }
    } else {
      pause();
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} preload="metadata">
        <source src={src} type="audio/mpeg" />
      </audio>
      <div className="audio-controls">
        <button
          className={`play-btn ${playing ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {playing ? (
            <Pause className="play-icon" />
          ) : (
            <Play className="play-icon" />
          )}
        </button>
        <div className="audio-progress-container">
          <div className="audio-progress-bar" onClick={seek}>
            <div
              className="audio-progress-indicator"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div
            className="time-display"
            style={error ? { color: 'var(--error-color)' } : undefined}
          >
            {timeText}
          </div>
        </div>
      </div>
    </div>
  );
}
