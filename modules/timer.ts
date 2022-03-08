class Timer {
  _innerRemainingSecond = 0

  get remainingHour() {
    return Math.floor(this._innerRemainingSecond / 3600) > 0 ? Math.floor(this._innerRemainingSecond / 3600) : 0
  }

  get remainingMinute() {
    return Math.floor((this._innerRemainingSecond - (this.remainingHour * 3600)) / 60) > 0 ? Math.floor((this._innerRemainingSecond - (this.remainingHour * 3600)) / 60) : 0
  }

  get remainingSecond() {
    return Math.floor(this._innerRemainingSecond - (this.remainingHour * 3600) - (this.remainingMinute * 60)) > 0 ? 
     Math.floor(this._innerRemainingSecond - (this.remainingHour * 3600) - (this.remainingMinute * 60)) >= 10 ? Math.floor(this._innerRemainingSecond - (this.remainingHour * 3600) - (this.remainingMinute * 60)) : '0' + Math.floor(this._innerRemainingSecond - (this.remainingHour * 3600) - (this.remainingMinute * 60))
    : "00"
  }

  _timeInterval: any = null

  start(second: number) {
    this._innerRemainingSecond = second

    this._timeInterval = setInterval(() => {
      this._innerRemainingSecond--

      if (this._innerRemainingSecond === 0) {
        clearInterval(this._timeInterval)
      }
    }, 1000);
  }
  
  stop() {
    clearInterval(this._timeInterval)
    this._innerRemainingSecond = 0
  }
}

export default Timer