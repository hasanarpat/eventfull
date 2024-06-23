import styles from './newPost.module.css';
import { useState } from 'react';

const NewPost = () => {
  const forms = [
    () => <DetailsForm />,
    () => <ArtistForm />,
    () => <ArenaForm />,
    () => <PricesAndSeatsForm />,
  ];
  const steps = [
    {
      id: 1,
      title: 'Details',
    },
    {
      id: 2,
      title: 'Artist',
    },
    {
      id: 3,
      title: 'Arena',
    },
    {
      id: 4,
      title: 'Prices & Seats',
    },
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
  const [formIndex, setFormIndex] = useState(3);

  const handleNav = (direction) => {
    console.log('handle nav');

    // TODO set form index to navigate between forms
    // ! do not forget to check if form is completed before pass to next form
    direction === 'prev' && formIndex > 0 && setFormIndex((prev) => prev - 1);
    direction === 'next' && formIndex < 3 && setFormIndex((prev) => prev + 1);
  };
  return (
    <section className={styles.newPost}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ul>
              {steps.map((item) => (
                <li
                  key={item.id}
                  className={formIndex + 1 === item.id && styles.active}
                >
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>{titles[formIndex]()}</div>
            <div className={styles.middle}>{forms[formIndex]()}</div>
            <div className={styles.bottom}>
              <div className={styles.buttons}>
                <button
                  className={styles.prev}
                  onClick={() => handleNav('prev')}
                >
                  Previous
                </button>
                <button
                  className={styles.next}
                  onClick={() => handleNav('next')}
                >
                  {formIndex === 3 ? 'Finish' : 'Next'}
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
  <form onSubmit='' id='details'>
    <div className={styles.formItem}>
      <label htmlFor='eventName'>Event Name</label>
      <input type='text' id='eventName' placeholder='TNK Rock Fest' />
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventDesc'>Event Description</label>
      <textarea type='text' id='eventDesc'></textarea>
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventDate'>Event Date</label>
      <input type='date' id='eventDate' />
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventTime'>Event Times - Hours</label>
      <input type='number' placeholder='start time' id='eventTime' min={1} />
      <input type='number' placeholder='finish time' id='eventTime' min={1} />
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventCategory'>Event Category</label>
      <select name='eventCategory' id='eventCategory'>
        <option value='music'>Music</option>
        <option value='health'>Health</option>
        <option value='business'>Business</option>
      </select>
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventFile'>Event Images</label>
      <input type='file' id='eventFile' />
      <span style={{ color: 'red', fontSize: 12 }}>
        * Add two images at least
      </span>
    </div>
    <div className={styles.eventImages}>
      <div className={styles.img}>
        <img
          src='https://images.unsplash.com/photo-1718792679559-5cfd607bb564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <button>X</button>
      </div>
      <div className={styles.img}>
        <img
          src='https://images.unsplash.com/photo-1718792679559-5cfd607bb564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <button>X</button>
      </div>
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventAddress'>Event Address</label>
      <input
        type='text'
        placeholder='St. Joseph Str. No 12'
        id='eventAddress'
      />
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventCity'>Event City</label>
      <input type='text' placeholder='Moscow' id='eventCity' />
    </div>
  </form>
);

const ArtistForm = () => (
  <form onSubmit='' id='artist'>
    <div className={styles.formItem}>
      <label htmlFor='artist'>Select Artist for your event</label>
      <select name='artist' id='artist'>
        <option value='Hayko Cepkin'>Hayko Cepkin</option>
        <option value='Şebnem Ferah'>Şebnem Ferah</option>
        <option value='Korn'>Korn</option>
      </select>
    </div>
  </form>
);

const ArenaForm = () => (
  <form onSubmit='' id='arena'>
    <div className={styles.formItem}>
      <label htmlFor='arena'>Select Arena for your event</label>
      <select name='arena' id='arena'>
        <option value='Arena Rock'>Arena Rock</option>
        <option value='Horn Bar'>Horn Bar</option>
        <option value='Queen Rock'>Queen Rock</option>
      </select>
    </div>
  </form>
);

const PricesAndSeatsForm = () => (
  <form onSubmit='' id='pricesAndSeats' className={styles.pricesAndSeats}>
    <div className={styles.formItem}>
      <label htmlFor='eventPrice'>Event Price</label>
      <input
        type='number'
        placeholder='$100'
        id='eventPrice'
        min={0}
        max={10000}
      />
    </div>
    <div className={styles.formItem}>
      <label htmlFor='eventSeatCount'>Seat Count</label>
      <input
        type='number'
        placeholder='How many seat do you have'
        id='eventSeatCount'
        min={10}
        max={100000}
      />
    </div>
    <p>*Please check your inputs before creating an event!*</p>
  </form>
);

export default NewPost;
