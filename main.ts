function ハートがあらわれる () {
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    ハートが消える()
    basic.pause(100)
    ハートがあらわれる()
})
function ハートが消える () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.clearScreen()
}
basic.showIcon(IconNames.Heart)
