radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Heart)
    }
})
