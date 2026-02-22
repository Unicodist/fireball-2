import { Player } from "./player";

export class FireWizard extends Player {
    specialAttackAnimationKey: string = 'fire_wizard_flamejet';
    jumpAnimationKey: string = 'fire_wizard_jump';
    walkAnimationKey: string = 'fire_wizard_walk';

    idleAnimationKey: string = 'fire_wizard_idle';

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "fire_wizard_idle")
    }
}