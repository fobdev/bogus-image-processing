import Canvas, { createCanvas, loadImage } from "canvas";

export const Couple = async (user1ImageUrl: any, user2ImageUrl: any) => {
    const user1 = await Canvas.loadImage(user1ImageUrl);
    const user2 = await Canvas.loadImage(user2ImageUrl);

    const width = user1.width * 2;
    const height = user1.height;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(user1, 0, 0, user1.width, user1.height);
    ctx.drawImage(user2, user2.width, 0, user2.width, user2.height);

    return canvas.toBuffer();
};
