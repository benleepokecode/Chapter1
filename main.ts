sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(true, effects.hearts)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (man.isHittingTile(CollisionDirection.Bottom)) {
        man.vy = -130
    }
})
let man: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`層級1`)
man = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 c 6 c 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 6 6 . 6 6 6 . . . . . 
    . . . . 6 6 6 . 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
man.setPosition(15, 88)
controller.moveSprite(man, 100, 0)
man.ay = 270
scene.cameraFollowSprite(man)
let GOAL = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 2 . . . . . . . . . 
    . . . . . 1 . 2 . . . . . . . . 
    . . . . . 3 2 . 2 . . . . . . . 
    . . . . . 1 . 2 . 2 . . . . . . 
    . . . . . 3 2 . 2 . 2 . . . . . 
    . . . . . 1 . 2 . 2 . 2 . . . . 
    . . . . . 3 2 . 2 . 2 . 2 . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnTile(GOAL, tiles.getTileLocation(30, 3))
game.onUpdate(function () {
    if (man.y > 120) {
        game.over(false)
    }
})
