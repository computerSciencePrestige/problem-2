input.onButtonPressed(Button.A, function () {
    counter += -1
    if (counter < 0) {
        counter = 10
    }
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += 1
    basic.showNumber(counter)
    if (counter > 9) {
        counter = 0
    }
})
let counter = 0
counter = 0
basic.showNumber(counter)
basic.forever(function () {
	
})
