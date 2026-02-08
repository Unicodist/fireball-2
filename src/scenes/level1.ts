import { Scene } from "phaser";
import { SceneKey } from "./scene-key";
import { Player } from "../scripts/player";
import { Coin } from "../scripts/coin";

export class Level1 extends Scene {

    player!: Player;

    constructor(){
        super(SceneKey.Level1)
    }

    create() {
        this.player = new Player(this, 0, 0).setOrigin(0,0).setScale(2)
        new Coin(this, 400,400)
    }

    update(time: number, delta: number){
        this.player.update(time, delta)
    }

}