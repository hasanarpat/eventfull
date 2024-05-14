import { useState } from 'react';
import styles from './users.module.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    console.log(e);
    e.target.value.length > 0 ? setUsers(true) : setUsers(false);
  };

  return (
    <section className={styles.users}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.search}>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  onChange={handleSearch}
                  placeholder='Search users to add friend and see their profile'
                />
                <button type='submit'>🔍</button>
              </form>
            </div>
          </div>
          <div className={styles.bottom}>
            {users ? (
              <ul className={styles.userList}>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
                <li className={styles.user}>
                  <div to={`blabla`}>
                    <div className={styles.userInfo}>
                      <img
                        src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='user avatar'
                      />
                      <h6>John Doe</h6>
                    </div>
                    <div className={styles.buttons}>
                      <Link to={`user/123`}>Visit Profile</Link>
                      <button>Add Friend</button>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <p>Searched users will be listed here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
