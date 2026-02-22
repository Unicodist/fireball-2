import { AnimatedPlayer } from "./AnimatedPlayer"

export abstract class Player extends AnimatedPlayer{

    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    
    abstract specialAttackAnimationKey: string
    abstract jumpAnimationKey: string
    abstract walkAnimationKey: string
    abstract idleAnimationKey: string

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture)

        this.cursors = scene.input.keyboard?.createCursorKeys()
    }

    update(time: number, delta: number) {
        this.handleControls(time, delta)
    }

    handleControls(time: number, delta: number) {

        if (!this.cursors) return;

        const speed = 100;

        if (this.cursors.up.isDown) {
            super.jump();
        }

        if (this.cursors.left.isDown) {
            super.walk("left", speed)
        }
        else if (this.cursors.right.isDown) {
            super.walk("right", speed)
        }
        else {
            super.stopWalking()
        }
    }
}