radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
        car_motor(255-143-60,255)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
        car_motor(255 - 143, 255 - 60)
    } else if (2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        car_motor(255-143, 255)
    } else if (3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        car_motor((255 - 143)*-1, 255*-1)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        car_motor(0, 0)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
})
function car_motor(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -255, 255)
    const ur = Math.map(rw, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, ur)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, ul)

}
basic.forever(function () {
    radio.setGroup(20)
})
