import type { Scene } from "phaser";

export class Coin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Scene, x: number, y: number){
        super(scene, x, y, 'gold_coin')

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.play('gold_coin')
        this.setCollideWorldBounds(true)
    }
}