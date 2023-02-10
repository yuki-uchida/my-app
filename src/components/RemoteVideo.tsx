import React, { useRef, useState, useEffect } from "react";

type Props = {
  className: string;
  is_mute: boolean;
};

export const RemoteVideo: React.FC<Props> = (props: Props) => {
  return (
    <video
      controls
      className={props.className}
      muted={props.is_mute}
      playsInline
      autoPlay
    />
  );
};
