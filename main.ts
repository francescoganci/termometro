input.onButtonPressed(Button.A, function () {
    basic.showNumber(max)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(min)
    basic.clearScreen()
})
let min = 0
let max = 0
let currenttemperature = input.temperature()
max = currenttemperature
min = currenttemperature
