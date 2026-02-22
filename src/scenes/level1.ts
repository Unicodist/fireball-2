import { Scene } from "phaser";
import { SceneKey } from "./scene-key";
import { Player } from "../scripts/player";
import { Coin } from "../scripts/coin";
import { FireWizard } from "../scripts/FireWizard";
import { WandererWizard } from "../scripts/WandererWizard";

export class Level1 extends Scene {

    player!: Player;

    constructor(){
        super(SceneKey.Level1)
    }

    create() {
        this.player = new WandererWizard(this, 0, 0)
        new Coin(this, 400,400)

        this.cameras.main.setBackgroundColor('#87CEEB')
    }

    update(time: number, delta: number){
        this.player.update(time, delta)
    }

}