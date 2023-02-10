import React, { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { LocalVideo } from "../components/LocalVideo";
import { RemoteVideo } from "../components/RemoteVideo";
import { SkyWayRoom } from "@skyway-sdk/room";
import dynamic from "next/dynamic";
const RoomJoinButton = dynamic(() => import("../components/RoomJoinButton"), {
  ssr: false,
});
// import {
//   nowInSec,
//   SkyWayAuthToken,
//   SkyWayContext,
//   SkyWayRoom,
//   SkyWayStreamFactory,
//   uuidV4,
// } from "@skyway-sdk/room";

interface Props {}

export type HandleJoinedRoom = (room: SkyWayRoom) => void;

export default function App(props: Props) {
  const [me, setMe] = useState<null | SkyWayRoom>(null);

  return (
    <>
      <RoomJoinButton />
      <div className="flex mx-auto w-full justify-center">
        <LocalVideo className="localVideo" is_mute={true} />
        <RemoteVideo className="remoteVideo" is_mute={false} />
      </div>
    </>
  );
}
