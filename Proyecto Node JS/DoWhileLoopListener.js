import DoWhileLoopListener from "./generated/DoWhileLoopListener.js";

export class CustomDoWhileLoopListener extends DoWhileLoopListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}