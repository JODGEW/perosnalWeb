'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface Props {
  src: string;
  label: string;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src, label }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, []);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      audio.currentTime = Math.min(Math.max(ratio, 0), 1) * duration;
    },
    [duration]
  );

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="audio-panel">
      <div className="audio-panel-label">{label}</div>

      <div className="audio-controls">
        <button
          className={`play-btn ${playing ? 'playing' : ''}`}
          aria-label={playing ? 'Pause sample' : 'Play sample'}
          onClick={toggle}
        >
          {playing ? <Pause /> : <Play />}
        </button>

        <div className="audio-track">
          <div
            className="audio-bar"
            role="presentation"
            onClick={seek}
          >
            <div className="audio-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="audio-time">
            {formatTime(current)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
