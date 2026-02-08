import { Scene } from "phaser"
import { SceneKey } from "./scene-key"

import fire_wizard_idle from '../assets/Fire Wizard/Idle.png'
import fire_wizard_run from '../assets/Fire Wizard/Run.png'
import fire_wizard_walk from '../assets/Fire Wizard/Walk.png'

import gold_coin from '../assets/Coin_Gems/MonedaD.png'

export class Loader extends Scene {

    constructor() {
        super({ key: SceneKey.Loader })
    }

    preload() {

        this.load.spritesheet('fire_wizard_idle', fire_wizard_idle, {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('fire_wizard_run', fire_wizard_run, {
            frameHeight: 128,
            frameWidth: 128
        })
        this.load.spritesheet('fire_wizard_walk', fire_wizard_walk, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('gold_coin', gold_coin, {
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.on('complete', () => {

            const startButton = this.add.rectangle(this.cameras.main.width/2, this.cameras.main.height/2, 100, 50, 0x00ff00)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.scene.start(SceneKey.Level1)
            })
            
            const buttonText = this.add.text(startButton.x, startButton.y, 'START' )
        })
    }

    create() {
        this.anims.create({
            key: 'fire_wizard_idle',
            frames: this.anims.generateFrameNumbers('fire_wizard_idle', {start: 0, end: 6}),
            repeat: -1,
            frameRate: 5
        })
        
        this.anims.create({
            key: 'fire_wizard_walk',
            frames: this.anims.generateFrameNumbers('fire_wizard_walk', {start: 0, end: 5}),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'gold_coin',
            frames: this.anims.generateFrameNumbers('gold_coin', {start: 0, end: 4}),
            repeat: -1,
            frameRate: 10
        })
    }

}