import Canvas, { createCanvas } from "canvas";

export const MemeGenerator = async (topText: any, bottomText: any, imageURL: any) => {
    const image = await Canvas.loadImage(imageURL);
    const width = image.width;
    const height = image.height;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0, width, height);

    Canvas.registerFont("./src/fonts/Impact.ttf", { family: "Sans-Serif" });
    Canvas.registerFont("./src/fonts/NotoSansJP-Bold.otf", { family: "Sans-Serif" });

    const japanese: RegExp =
        /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;

    ctx.font = `bold ${width! / 10}px ${
        topText.match(japanese) || bottomText.match(japanese) ? "NotoSansJP-Bold" : "Impact"
    }`;
    ctx.textAlign = "center";

    // Top Text
    ctx.textBaseline = "top";
    ctx.fillStyle = "white";
    ctx.fillText(topText, width! / 2, 0, width);
    ctx.fillStyle = "black";
    ctx.strokeText(topText, width! / 2, 0, width);

    // Bottom Text
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "white";
    ctx.fillText(bottomText, width! / 2, height!, width);
    ctx.fillStyle = "black";
    ctx.strokeText(bottomText, width! / 2, height!, width);

    return canvas.toBuffer();
};
