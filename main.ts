radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == num_) {
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber != num_) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    num_ += 1
    basic.showNumber(num_)
})
input.onButtonPressed(Button.B, function () {
    num_ += -1
    basic.showNumber(num_)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(num_)
})
let num_ = 0
basic.showIcon(IconNames.Angry)
radio.setGroup(20)
num_ = 2
