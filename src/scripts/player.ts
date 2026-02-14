export class Player extends Phaser.Physics.Arcade.Sprite {

    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    fireBall: boolean = false
    isJumping: boolean = false


    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'fire_wizard_idle')

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.play('fire_wizard_idle')

        this.setCollideWorldBounds(true)

        this.cursors = scene.input.keyboard?.createCursorKeys()

        scene.input.keyboard?.on('keydown-SPACE', () => {
            this.fireBall = true
        })

        scene.input.keyboard?.on('keyup-SPACE', ()=>{
            this.fireBall = false
        })
    }

    update(time: number, delta: number) {
        this.handleControls(time, delta)
        this.handleAnimation(time, delta)
        if(this.isJumping && this.body?.blocked.down){this.isJumping = false}
    }

    handleControls(time: number, delta: number){

        if(!this.cursors) return;
        if(this.fireBall) {
            this.setVelocityX(0)
            return;
        };

        const speed = 100;

        if(this.cursors.up.isDown && !this.isJumping){
            this.isJumping = true
            this.setVelocityY(-speed * delta / 10)
        }

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
        if(this.fireBall){
            this.play('fire_wizard_flamejet', true)
            return;
        }
        if(this.isJumping){
            this.play('fire_wizard_jump', true)
            return;
        }
        const isMoving = this.body?.velocity.x !== 0
        if(isMoving){
            this.play('fire_wizard_walk', true)
        }
        else {
            this.play('fire_wizard_idle', true)
        }
    }
}