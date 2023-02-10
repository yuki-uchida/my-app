// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const id = process.env.SKYWAY_APP_ID;
const secret = process.env.SKYWAY_SECRET_KEY;

interface SkyWayCredential {
  channelName: string;
  memberName: string;
  iat: number;
  exp: number;
  authToken: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkyWayCredential>
) {
  const channelName = "a";
  const memberName = "b";
  const iat = Math.floor(Date.now() / 1000);
  const exp = Math.floor(Date.now() / 1000) + 360000; // 10h

  const token = jwt.sign(
    {
      jti: crypto.randomUUID(),
      iat: iat,
      exp: exp,
      scope: {
        app: {
          id: id,
          turn: true,
          actions: ["read"],
          channels: [
            {
              id: "*",
              name: "*",
              actions: ["write"],
              members: [
                {
                  id: "*",
                  name: "*",
                  actions: ["write"],
                  publication: {
                    actions: ["write"],
                  },
                  subscription: {
                    actions: ["write"],
                  },
                },
              ],
              sfuBots: [
                {
                  actions: ["write"],
                  forwardings: [
                    {
                      actions: ["write"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    secret
  );
  const credential: SkyWayCredential = {
    channelName: channelName,
    memberName: memberName,
    iat: iat,
    exp: exp,
    authToken: token,
  };
  res.status(200).send(credential);
}
