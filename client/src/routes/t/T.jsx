import { Link, useParams } from 'react-router-dom';
import styles from './t.module.css';

const T = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={styles.t}>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.user}>
              <Link to={`/t/:1241515`}>
                <div className={styles.avatar}>
                  <img
                    src='https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/wonder-woman-new-comic-daniel-sampere.jpg'
                    alt=''
                  />
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userDetails}>
                    <span>wonderwoman</span>
                    <span>11:10 PM</span>
                  </div>
                  <p>
                    Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                    sunt aliquip in.
                  </p>
                  <p>
                    You can change your status from settings.
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1.2em'
                      width='1.2em'
                      xmlns='http://www.w3.org/2000/svg'
                      color='teal'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'></path>
                    </svg>
                  </p>
                </div>
              </Link>
            </div>
            <ul>
              <li>
                <Link to={`/t/:1241515`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/wonder-woman-new-comic-daniel-sampere.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>wonderwoman</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:2345325`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49ec1464-d899-400a-b608-c48c76b500d2/deg4ab8-969c5dce-48da-4d29-bc19-23b98756744f.jpg/v1/fit/w_375,h_468,q_70,strp/bane_by_patrickbrown_deg4ab8-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzQ5ZWMxNDY0LWQ4OTktNDAwYS1iNjA4LWM0OGM3NmI1MDBkMlwvZGVnNGFiOC05NjljNWRjZS00OGRhLTRkMjktYmMxOS0yM2I5ODc1Njc0NGYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OwAB6BHn8YcMhmjK20XibEdNgpdgUF-_Jn5sWpdPTN0'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>johndoe</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:461`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49ec1464-d899-400a-b608-c48c76b500d2/deg4ab8-969c5dce-48da-4d29-bc19-23b98756744f.jpg/v1/fit/w_375,h_468,q_70,strp/bane_by_patrickbrown_deg4ab8-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzQ5ZWMxNDY0LWQ4OTktNDAwYS1iNjA4LWM0OGM3NmI1MDBkMlwvZGVnNGFiOC05NjljNWRjZS00OGRhLTRkMjktYmMxOS0yM2I5ODc1Njc0NGYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OwAB6BHn8YcMhmjK20XibEdNgpdgUF-_Jn5sWpdPTN0'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>bane</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:14765`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://cdn.europosters.eu/image/1300/art-photo/joker-three-jokers-i121285.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>joker</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:176`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Commissioner-James-Gordon.jpg/220px-Commissioner-James-Gordon.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>twoface</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:457`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Commissioner-James-Gordon.jpg/220px-Commissioner-James-Gordon.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>gordon</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:7453`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://d3dkwn7op408kc.cloudfront.net/ckeditor_assets/2023/12/06/batman-returns-the-penguin-danny-devito-makeup-v1jpg.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>penguin</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:75437`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>catwoman</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:75437`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>catwoman</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/t/:75437`}>
                  <div className={styles.avatar}>
                    <img
                      src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.messageDetails}>
                      <span>catwoman</span>
                      <span>11:10 PM</span>
                    </div>
                    <p>
                      Deserunt proident nostrud ipsum aliqua id quis aute aliqua
                      sunt aliquip in.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <article className={styles.messages}>
            {id !== undefined ? (
              <main className={styles.chat}>
                <section className={styles.chats}>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>{' '}
                  <div className={styles.userChatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.userChatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.userChatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.userChatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.chatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.userChatMessage}>
                    <div className={styles.avatar}>
                      <img
                        src='https://cdn.europosters.eu/image/1300/art-photo/catwoman-black-suit-i181379.jpg'
                        alt=''
                      />
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.messageDetails}>
                        <span>catwoman</span>
                        <span>11:10 PM</span>
                      </div>
                      <p>
                        Deserunt proident nostrud ipsum aliqua id quis aute
                        aliqua sunt aliquip in. Deserunt proident nostrud ipsum
                        aliqua id quis aute aliqua sunt aliquip in. Deserunt
                        proident nostrud ipsum aliqua id quis aute aliqua sunt
                        aliquip in. Deserunt proident nostrud ipsum aliqua id
                        quis aute aliqua sunt aliquip in. Deserunt proident
                        nostrud ipsum aliqua id quis aute aliqua sunt aliquip
                        in.
                      </p>
                    </div>
                  </div>
                </section>
                <div className={styles.bottom}>
                  <div className={styles.attachments}>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M341.334 128v234.666C341.334 409.604 302.938 448 256 448c-46.937 0-85.333-38.396-85.333-85.334V117.334C170.667 87.469 194.135 64 224 64c29.864 0 53.333 23.469 53.333 53.334v245.333c0 11.729-9.605 21.333-21.334 21.333s-21.333-9.604-21.333-21.333V160h-32v202.667C202.667 392.531 226.135 416 256 416c29.865 0 53.334-23.469 53.334-53.333V117.334C309.334 70.401 270.938 32 224 32s-85.334 38.401-85.334 85.334v245.332C138.667 427.729 190.938 480 256 480c65.062 0 117.334-52.271 117.334-117.334V128h-32z'></path>
                    </svg>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='Image_On'>
                        <g>
                          <path d='M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z'></path>
                          <path d='M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z'></path>
                        </g>
                      </g>
                    </svg>
                    <span>🙂</span>
                  </div>
                  <form action=''>
                    <textarea name='message' id='message'></textarea>
                    <button>Send</button>
                  </form>
                </div>
              </main>
            ) : (
              <div className={styles.welcomeMessages}>
                <p>Welcoma again!</p>
                <p>Have a nice day with an event!</p>
                <p>You can search for users to follow and be friend!</p>
              </div>
            )}
          </article>
        </section>
      </div>
    </div>
  );
};

export default T;
