import { Couple, MemeGenerator } from "./commands";
import express from "express";

(async () => {
    const app = express();
    const port = process.env.PORT || 1337;

    app.get("/meme/", async (req, res) => {
        const { query } = req;
        const bottomText = query.bottom;
        const topText = query.top;
        const url = query.url;

        const image = await MemeGenerator(topText, bottomText, url);

        res.end(image);
    });

    app.get("/couple/", async (req, res) => {
        const { query } = req;

        const image = await Couple(query.u1, query.u2);

        res.end(image);
    });

    app.listen(port, () => {
        console.log(`Client listening to port ${port}`);
    });
})();
