import styles from './singleUser.module.css';
import Rate from '../../components/rate/Rate';
import WriteComment from '../../components/writeComment/WriteComment';
import Comment from '../../components/comment/Comment';
import EventCard from '../../components/event/eventCard/EventCard';

const SingleUser = () => {
  return (
    <section className={styles.singleUser}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <img
                src='https://images.unsplash.com/photo-1699463702389-cc9050a03920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
                alt=''
              />
              <div className={styles.userInfo}>
                <h5>John Doe</h5>
                <p>Joined in 2023, Dec</p>
                <Rate />
              </div>
            </div>
            <div className={styles.userActions}>
              <div className={styles.buttons}>
                <button>Follow</button>
                <button>Send Message</button>
              </div>
            </div>
          </div>
          <div className={styles.center}>
            <span>John&apos;s Events</span>
            <div className={styles.usersEvents}>
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
            <span>Which Events John is Going</span>
            <div className={styles.userGoing}>
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.bottomHeading}>What users think about John</p>
            <WriteComment />
            <Comment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleUser;
