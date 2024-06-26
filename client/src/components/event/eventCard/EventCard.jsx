import { Link } from "react-router-dom";
import styles from "./eventCard.module.css";

const EventCard = () => {
  return (
    <div className={styles.eventCard}>
      <img
        src="https://images.unsplash.com/photo-1716093264767-7d818c805f7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h5>Arena Rock</h5>
      <p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
        </svg>
        Date & Time
      </p>
      <p>Wednesday 28th February at 15:00</p>
      <div className={styles.eventDetail}>
        <img
          src="https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww"
          alt=""
        />
        <h5>Arena Stadium</h5>
      </div>
      <Link to={`/event/234512`}>
        <button>View Full Details</button>
      </Link>
    </div>
  );
};

export default EventCard;
