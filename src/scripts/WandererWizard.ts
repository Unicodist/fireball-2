import { Player } from "./player";

export class WandererWizard extends Player {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "wanderer_wizard_idle")
    }

    specialAttackAnimationKey: string = 'wanderer_wizard_sphere';
    jumpAnimationKey: string = 'wanderer_wizard_jump';
    walkAnimationKey: string = 'wanderer_wizard_walk';
    idleAnimationKey: string = 'wanderer_wizard_idle';

}