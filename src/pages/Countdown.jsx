import React, { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.css";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("05/06/2023").getTime()
  );

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const newDate = setInterval(() => newTime(), 1000);

    return () => {
      clearInterval(newDate);
    };
  }, []);

  const newTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Coming <strong>Soon</strong>
        </h1>

        <div className={styles.countdown}>
          <div className={`${styles["bloc-time"]}  `}>
            <span className={styles["count-title"]}>Days</span>

            <div className={styles.figure}>
              <span>{state.days || "0"}</span>
            </div>
          </div>
          <div className={`${styles["bloc-time"]}  `}>
            <span className={styles["count-title"]}>Hours</span>

            <div className={styles.figure}>
              <span>{state.hours || "00"}</span>
            </div>
          </div>

          <div className={`${styles["bloc-time"]}  `}>
            <span className={styles["count-title"]}>Minutes</span>

            <div className={`${styles.figure} `}>
              <span>{state.minutes || "00"}</span>
            </div>
          </div>

          <div className={`${styles["bloc-time"]} `}>
            <span className={styles["count-title"]}>Seconds</span>

            <div className={`${styles.figure} `}>
              <span>{state.seconds || "00"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
