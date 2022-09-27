radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Chessboard)
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("1")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("2")
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
