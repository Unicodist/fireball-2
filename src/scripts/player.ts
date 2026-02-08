export class Player extends Phaser.Physics.Arcade.Sprite {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'fire_wizard_idle')

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.play('fire_wizard_idle')

        this.setCollideWorldBounds(true)

        this.cursors = scene.input.keyboard?.createCursorKeys()
    }

    update(time: number, delta: number) {
        this.handleControls(time, delta)
        this.handleAnimation(time, delta)
    }

    handleControls(time: number, delta: number){

        if(!this.cursors) return;

        const speed = 100;

        if(this.cursors.left.isDown){
            this.setVelocityX(-speed * delta / 10)
            this.setFlipX(true)
        }
        else if(this.cursors.right.isDown) {
            this.setVelocityX(speed * delta / 10)
            this.setFlipX(false)
        }
        else {
            this.setVelocityX(0)
        }
    }

    handleAnimation(time: number, delta: number) {
        const isMoving = this.body?.velocity.x !== 0
        console.log('Is moving', isMoving)
        if(isMoving){
            this.play('fire_wizard_walk', true)
        }
        else {
            this.play('fire_wizard_idle', true)
        }
    }
}