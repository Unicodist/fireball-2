import { Scene } from "phaser"
import { SceneKey } from "./scene-key"

import fire_wizard_idle from '../assets/Fire Wizard/Idle.png'
import fire_wizard_run from '../assets/Fire Wizard/Run.png'
import fire_wizard_walk from '../assets/Fire Wizard/Walk.png'
import fire_wizard_flamejet from '../assets/Fire Wizard/Flame_jet.png'
import fire_wizard_jump from '../assets/Fire Wizard/Jump.png'


import wanderer_wizard_idle from '../assets/Wanderer Wizard/Idle.png'
import wanderer_wizard_walk from '../assets/Wanderer Wizard/Walk.png'
import wanderer_wizard_sphere from '../assets/Wanderer Wizard/Magic_sphere.png'
import wanderer_wizard_jump from '../assets/Wanderer Wizard/Jump.png'

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

        this.load.spritesheet('fire_wizard_flamejet', fire_wizard_flamejet, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('fire_wizard_jump', fire_wizard_jump, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('wanderer_wizard_idle', wanderer_wizard_idle, {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('wanderer_wizard_walk', wanderer_wizard_walk, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('wanderer_wizard_sphere', wanderer_wizard_sphere, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('wanderer_wizard_jump', wanderer_wizard_jump, {
            frameHeight: 128,
            frameWidth: 128
        })

        this.load.spritesheet('gold_coin', gold_coin, {
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.on('complete', () => {

            const startButton = this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, 100, 50, 0x00ff00)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    this.scene.start(SceneKey.Level1)
                })

            const buttonText = this.add.text(startButton.x, startButton.y, 'START')
        })
    }

    create() {
        this.anims.create({
            key: 'fire_wizard_idle',
            frames: this.anims.generateFrameNumbers('fire_wizard_idle', { start: 0, end: 6 }),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'fire_wizard_walk',
            frames: this.anims.generateFrameNumbers('fire_wizard_walk', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'fire_wizard_flamejet',
            frames: this.anims.generateFrameNumbers('fire_wizard_flamejet', { start: 0, end: 7 }),
            repeat: -1,
            frameRate: 10
        })

        this.anims.create({
            key: 'fire_wizard_jump',
            frames: this.anims.generateFrameNumbers('fire_wizard_jump', { start: 0, end: 8 }),
            repeat: 1,
            frameRate: 10
        })

        this.anims.create({
            key: 'gold_coin',
            frames: this.anims.generateFrameNumbers('gold_coin', { start: 0, end: 4 }),
            repeat: -1,
            frameRate: 10
        })

        this.anims.create({
            key: 'wanderer_wizard_idle',
            frames: this.anims.generateFrameNumbers('wanderer_wizard_idle', { start: 0, end: 7 }),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'wanderer_wizard_walk',
            frames: this.anims.generateFrameNumbers('wanderer_wizard_walk', { start: 0, end: 6 }),
            repeat: -1,
            frameRate: 5
        })

        this.anims.create({
            key: 'wanderer_wizard_jump',
            frames: this.anims.generateFrameNumbers('wanderer_wizard_jump', { start: 0, end: 7 }),
            repeat: 1,
            frameRate: 10
        })

        this.anims.create({
            key: 'wanderer_wizard_sphere',
            frames: this.anims.generateFrameNumbers('wanderer_wizard_sphere', { start: 0, end: 15 }),
            repeat: -1,
            frameRate: 10
        })
    }

}