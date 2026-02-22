import type { Scene } from "phaser";

export abstract class AnimatedPlayer extends Phaser.Physics.Arcade.Sprite {

    isJumping: boolean = false
    isAttacking: boolean = false
    isWalking: boolean = false
    direction: "left" | "right" = "right"
    currentAnimation: string | null = null
    speed: number = 0;

    abstract readonly idleAnimationKey: string
    abstract readonly specialAttackAnimationKey: string
    abstract readonly jumpAnimationKey: string
    abstract readonly walkAnimationKey: string

    constructor(scene: Scene, x: number, y: number, texture: string){
        super(scene, x, y, texture)

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body?.setSize(20, 70)
        this.body?.setOffset(50, 63)
        this.setOrigin(0, 0)

        this.setCollideWorldBounds(true)
    }

    walk(direction: "left" | "right", speed: number) {
        this.isWalking = true
        this.direction = direction
        this.speed = speed

        if (direction === "left") {
            this.setVelocityX(-speed)
            super.setFlipX(true)
            return;
        }

        if(direction === "right") {
            this.setVelocityX(speed)
            super.setFlipX(false)
            return;
        }

        super.play(this.walkAnimationKey, true)
    }

    stopWalking() {
        this.isWalking = false
        this.speed = 0
    }

    jump(){

    }

    private playAnimation(animation_key: string){
        super.play(animation_key)
    }
}