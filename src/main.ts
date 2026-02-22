import Phaser, { Scene } from 'phaser'
import './style.css'
import { SceneKey } from './scenes/scene-key'
import { Loader } from './scenes/loader'
import { Level1 } from './scenes/level1'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 720,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT
  },
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 0 },
      debug: false
    }
  }
}

const game = new Phaser.Game(config)
game.scene.add(SceneKey.Loader, Loader)
game.scene.add(SceneKey.Level1, Level1)

game.scene.start(SceneKey.Loader)
