import React, { useRef, useState, useEffect } from "react";
import {
  nowInSec,
  SkyWayAuthToken,
  SkyWayContext,
  SkyWayRoom,
  SkyWayStreamFactory,
  uuidV4,
} from "@skyway-sdk/room";
type Props = {};

const RoomJoinButton: React.FC<Props> = (props) => {
  const [roomName, setRoomName] = useState<string>("");
  const [join, setJoinRoom] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };
  const handleJoin = async () => {
    if (roomName == "") {
      return;
    }
    setJoinRoom(true);
  };
  useEffect(() => {
    console.log(join);
    const joinRoom = async () => {
      const res = await fetch("http://localhost:3000/api/getToken");
      const credential: Record<string, string | number> = await res.json();
      const authToken: string = credential.authToken;
      const context = await SkyWayContext.Create(authToken);
      // const room = await SkyWayRoom.FindOrCreate(context, {
      //   type: "p2p",
      //   name: roomName,
      // });
      // const me = await room.join();
      // console.log(me);
      // setMe(me);
    };
    if (join == true) {
      joinRoom();
    }
  }, [join]);

  return (
    <div className="form-control">
      <label className="input-group">
        <input
          id="room-name"
          type="text"
          placeholder="room name:"
          value={roomName}
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
        <button className="btn" onClick={handleJoin}>
          join
        </button>
      </label>
    </div>
  );
};

export default RoomJoinButton;
