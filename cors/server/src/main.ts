import express, { Request, Response, json } from "express";
import cookieSession from "cookie-session";
import cors from "cors";

async function main() {
  const api = express();
  api.use(json());
  api.use(cors({ origin: "http://localhost:5173", credentials: true }));
  api.use(
    cookieSession({
      signed: false,
    })
  );

  api.get("/ping", (req: Request, res: Response) => {
    req.session = { ping: "pong" }; // set cookie
    res.send(
      JSON.stringify({
        result: "server tried to set cookie, check in browser!",
      })
    );
  });

  api.get("/check", (req: Request, res: Response) => {
    console.log(req.session);
    const cookie = req.session!.ping;

    if (!cookie) {
      res.status(401).send(JSON.stringify({ error: "no cookie available" }));
    }

    res.send(JSON.stringify({ "cookie: ": cookie }));
  });

  api.listen(8080, () => console.log("start listening on port 8080"));
}

main().catch((e) => console.log(e));
