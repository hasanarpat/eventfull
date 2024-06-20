import styles from "./newPost.module.css";
import { useState } from "react";

const NewPost = () => {
  const forms = [
    () => <DetailsForm />,
    () => <ArtistForm />,
    () => <ArenaForm />,
    () => <PricesAndSeatsForm />,
  ];
  const titles = [
    () => (
      <h2>
        <span>Step 1:</span>Let&apos;s add details of your event!
      </h2>
    ),
    () => (
      <h2>
        <span>Step 2:</span>Let&apos;s add artist of your event!
      </h2>
    ),
    () => (
      <h2>
        <span>Step 3:</span>Let&apos;s add arena of your event!
      </h2>
    ),
    () => (
      <h2>
        <span>Step 4:</span>Let&apos;s add price and seating details of your
        event!
      </h2>
    ),
  ];
  const [formIndex, setFormIndex] = useState(0);

  const handleNav = () => {
    console.log("handle nav");

    // TODO set form index to navigate between forms
    // ! do not forget to check if form is completed before pass to next form
    setFormIndex(0);
  };
  return (
    <section className={styles.newPost}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ul>
              <li className={styles.active}>
                <span>1</span>
                <span>Details</span>
              </li>
              <li>
                <span>2</span>
                <span>Artist</span>
              </li>
              <li>
                <span>3</span>
                <span>Arena</span>
              </li>
              <li>
                <span>4</span>
                <span>Prices & Seats</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>{titles[formIndex]()}</div>
            <div className={styles.middle}>{forms[formIndex]()}</div>
            <div className={styles.bottom}>
              <div className={styles.buttons}>
                <button className={styles.prev} onClick={handleNav}>
                  Previous
                </button>
                <button className={styles.next} onClick={handleNav}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailsForm = () => (
  <form onSubmit="" id="details">
    <div className={styles.formItem}>
      <label htmlFor="eventName">Event Name</label>
      <input type="text" id="eventName" placeholder="TNK Rock Fest" />
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventDesc">Event Description</label>
      <textarea type="text" id="eventDesc"></textarea>
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventDate">Event Date</label>
      <input type="date" id="eventDate" />
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventTime">Event Times - Hours</label>
      <input type="number" placeholder="start time" id="eventTime" min={1} />
      <input type="number" placeholder="finish time" id="eventTime" min={1} />
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventFile">Event Images</label>
      <input type="file" id="eventFile" />
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventAddress">Event Address</label>
      <input
        type="text"
        placeholder="St. Joseph Str. No 12"
        id="eventAddress"
      />
    </div>
    <div className={styles.formItem}>
      <label htmlFor="eventCity">Event City</label>
      <input type="text" placeholder="Moscow" id="eventCity" />
    </div>
  </form>
);

const ArtistForm = () => (
  <form onSubmit="" id="artist">
    artistForm
  </form>
);

const ArenaForm = () => (
  <form onSubmit="" id="arena">
    arenaForm
  </form>
);

const PricesAndSeatsForm = () => (
  <form onSubmit="" id="pricesAndSeats">
    pricesAndSeatsForm
  </form>
);

export default NewPost;
