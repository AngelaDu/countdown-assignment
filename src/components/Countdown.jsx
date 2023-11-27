import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // Find the next birthday
    const curDate = new Date();
    const birthday = new Date(this.props.date);
    this.nextBirthday = new Date(
      curDate.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );

    if (this.nextBirthday < curDate)
      this.nextBirthday.setFullYear(curDate.getFullYear() + 1);
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.nextBirthday);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    // divide by 1000 to calculate in seconds
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // time will be <= 365 days, thus let us start with day calculations
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    // hour calculation
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    // minute calculation
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    // seconds are what is remaining
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        <span className="countdown-col">
          <strong>{this.addLeadingZeros(countDown.days)}</strong>
          <span>{countDown.days === 1 ? "Day" : "Days"}</span>
        </span>

        <span className="countdown-col">
          <strong>{this.addLeadingZeros(countDown.hours)}</strong>
          <span>Hours</span>
        </span>

        <span className="countdown-col">
          <strong>{this.addLeadingZeros(countDown.min)}</strong>
          <span>Min</span>
        </span>

        <span className="countdown-col">
          <strong>{this.addLeadingZeros(countDown.sec)}</strong>
          <span>Sec</span>
        </span>
      </div>
    );
  }
}

export default Countdown;
