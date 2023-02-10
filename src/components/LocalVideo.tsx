import React, { useRef, useState, useEffect } from "react";

type Props = {
  className: string;
  is_mute: boolean;
};

export const LocalVideo: React.FC<Props> = (props) => {
  const [stream, setStream] = useState<null | MediaStream>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const getCameraPermission = async () => {
      const constraints: Record<string, Boolean> = {
        video: true,
        audio: false,
      };
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      setStream(stream);
    };

    getCameraPermission();
  }, []);
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      controls
      className={props.className}
      muted={props.is_mute}
      playsInline
      ref={videoRef}
      autoPlay
    />
  );
};
