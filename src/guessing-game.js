class GuessingGame {
    constructor(number) {
        this.number = number;
        this.guessNumber = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.guessNumber = Math.round((this.minRange+this.maxRange)/2)
        if (this.number === this.guessNumber) {
            return this.guessNumber;
        } else if (this.number > this.guessNumber) {
            return this.guessNumber;
        } else {
            return this.guessNumber;
        }
    }

    lower() {
        return this.maxRange = this.guessNumber;
    }

    greater() {
        return this.minRange = this.guessNumber;
    }
}

module.exports = GuessingGame;
