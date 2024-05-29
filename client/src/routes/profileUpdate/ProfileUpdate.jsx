import styles from './profileUpdate.module.css';

const ProfileUpdate = () => {
  return (
    <section className={styles.profileUpdate}>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.top}>
            <p>Details of your profile, view and change.</p>
          </div>
          <div className={styles.bottom}>
            <form action=''>
              <div className={styles.imgInput}>
                {/* <img src="" alt="" /> */}
                <label htmlFor='file' className={styles.avatar}>
                  J
                </label>
                <article>
                  <label htmlFor='file'>profile picture</label>
                  <div>
                    <input
                      type='file'
                      placeholder='Upload Image'
                      id='file'
                      name='file'
                    />
                    <button>Remove</button>
                  </div>
                  <p>*.png, *jpg files up to 10MB at least 400px by 400px</p>
                </article>
              </div>
              <div className={styles.formItem}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' />
              </div>
              <div className={styles.formItem}>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' />
              </div>
              <button type='submit'>Confirm</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProfileUpdate;
