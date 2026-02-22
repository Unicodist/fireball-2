import { Player } from "./player";

export class LighteningWizard extends Player {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "lightning_wizard_idle")
    }

    specialAttackAnimationKey: string = 'lightning_wizard_lightning';
    jumpAnimationKey: string = 'lightning_wizard_jump';
    walkAnimationKey: string = 'lightning_wizard_walk';
    idleAnimationKey: string = 'lightning_wizard_idle';

}