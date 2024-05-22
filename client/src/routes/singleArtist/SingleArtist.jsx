import styles from './singleArtist.module.css';
import Gallery from '../../components/gallery/Gallery';
import BigSlider from '../../components/bigSlider/BigSlider';
import { useState } from 'react';
import WriteComment from '../../components/writeComment/WriteComment';
import Comment from '../../components/comment/Comment';
import SmartParagraph from '../../components/smartParagraph/SmartParagraph';
import Rate from '../../components/rate/Rate';
import { Link } from 'react-router-dom';

const SingleArtist = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const url = location.href;

  return (
    <section className={styles.singleArtist}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.artistDetails}>
            <img
              src='https://cdn.bubilet.com.tr/files/Blog/resim-adi-88136.png'
              alt='hayko cepkin'
            />
            <div className={styles.detailsWrapper}>
              <div className={styles.leftSide}>
                <img
                  src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6Wq6K_6Obzi40Ytbr4ho96zjAtqQVzuJZUD0DJ1lVaSdCdpMq'
                  alt=''
                />
                <div className={styles.actions}>
                  <p>Artist</p>
                  <h4>Hayko Cepkin</h4>
                  <div className={styles.buttons}>
                    <button>See Events</button>
                    <button>Follow</button>
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <p>2,114,123</p>
                <p>Total Tickets Count</p>
              </div>
            </div>
          </div>

          <div className={styles.center}>
            <div className={styles.centerTop}>
              <div className={styles.artistInfo}>
                <SmartParagraph
                  type='artist'
                  text='Exercitation excepteur quis labore cillum laborum Lorem reprehenderit cillum reprehenderit proident ad est culpa. Esse dolor reprehenderit adipisicing sunt irure culpa ullamco mollit officia enim dolor. In sint magna do dolore cupidatat aute Lorem officia ullamco proident fugiat cupidatat consectetur nulla. Cupidatat pariatur nulla aliqua quis aliqua laborum ea.

Eiusmod sint anim sit ea minim. Elit laboris cupidatat nisi reprehenderit labore aliqua officia sint Lorem do. Ad commodo occaecat veniam sit sit consectetur labore incididunt anim officia. Sit enim qui nulla aliqua eu ex ullamco do anim mollit exercitation. Laboris incididunt exercitation magna elit magna nulla sit consectetur enim sint.

Do esse aliqua ad exercitation dolore duis laborum proident esse ipsum dolore ea. Voluptate ea laborum non nisi. Ut anim duis magna irure amet elit. Exercitation nulla nulla voluptate culpa dolore nulla excepteur. Cupidatat ipsum tempor et enim in ex Lorem in. Sunt Lorem culpa amet fugiat adipisicing officia ut magna aliquip culpa sit elit. Ex minim adipisicing non voluptate nisi consequat ullamco occaecat non mollit pariatur nulla.

Est do do duis exercitation incididunt aliqua tempor laborum enim mollit consectetur do. Enim sit culpa aliquip sit consectetur magna. Veniam anim aliquip minim occaecat aute eiusmod consectetur ea quis in mollit mollit id.

Adipisicing ad consectetur tempor ad aute. Ad consectetur in officia incididunt proident commodo minim consectetur. Dolor deserunt aute culpa adipisicing aliqua nostrud esse amet tempor ad non. Nulla excepteur laboris mollit consectetur laboris. Velit ex sit tempor minim aute magna proident nostrud est labore eu. Labore consequat elit est excepteur aliquip non excepteur culpa velit incididunt pariatur cillum irure labore. Sit excepteur sunt culpa tempor.

Anim culpa laborum veniam sit qui laboris. Sunt sit sunt labore ut eu ea duis exercitation nostrud non excepteur elit eiusmod. Culpa id eiusmod do duis Lorem adipisicing ea est nostrud ut. Veniam culpa pariatur sint aliquip voluptate reprehenderit duis et quis anim quis excepteur non.

Nostrud irure voluptate Lorem nisi magna ut culpa laboris. Adipisicing occaecat nulla sunt commodo duis dolore ea nulla nostrud do ex magna tempor nisi. Minim aute velit commodo consectetur laboris aliquip culpa ad do incididunt voluptate. Exercitation exercitation minim quis aliquip laboris laborum. Sint do eiusmod nisi velit do eiusmod anim ex minim mollit deserunt sint officia culpa.

Sint exercitation occaecat enim cillum commodo excepteur do nostrud tempor sint. Pariatur sit tempor non commodo eu adipisicing minim magna. Laborum sunt dolor amet commodo labore dolore eiusmod.

Nostrud duis cillum consequat exercitation occaecat sit ad cupidatat eu sunt occaecat non officia. Laboris dolore reprehenderit laborum aute exercitation Lorem officia adipisicing. Laboris do veniam enim consectetur dolore magna et. Excepteur minim consequat dolore ea nulla minim mollit officia voluptate non enim exercitation qui.

Elit ad ex nostrud ex. In esse qui veniam quis enim aliqua consectetur velit. Anim labore incididunt dolore reprehenderit. Lorem consectetur pariatur incididunt enim esse officia. Est voluptate consequat id cupidatat officia aute occaecat culpa. Elit adipisicing esse ex labore sint in ad ut in nostrud.'
                />
                <div className={styles.artistRate}>
                  <Rate />
                </div>
              </div>
              <div className={styles.share} onClick={() => setShowShare(true)}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z'></path>
                </svg>
              </div>
              {showShare && (
                <div className={styles.sharePopup}>
                  <div className={styles.popupContent}>
                    <div className={styles.popupClose}>
                      <span onClick={() => setShowShare(false)}>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='1.5em'
                          width='1.5em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z'></path>
                        </svg>
                      </span>
                    </div>
                    <div className={styles.popupUrl}>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 384 512'
                        height='1.25em'
                        width='1.25em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z'></path>
                      </svg>
                      <span>{url}</span>
                    </div>
                    <p>Share on social platforms</p>
                    <div className={styles.popupSocials}>
                      <img src='/assets/social-icons/facebook.webp' alt='' />
                      <img src='/assets/social-icons/instagram.webp' alt='' />
                      <img src='/assets/social-icons/linkedin.webp' alt='' />
                      <img src='/assets/social-icons/pinterest.webp' alt='' />
                      <img src='/assets/social-icons/x.png' alt='' />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.centerBottom}>
              <h5>Upcoming Events</h5>
              <div className={styles.upcomingEvents}>
                <div className={styles.upcomingEvent}>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                    alt=''
                    className={styles.upcomingMainImg}
                  />
                  <p>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
                      <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
                    </svg>
                    Date & Time
                  </p>
                  <p>Wednesday 28th February at 15:00</p>
                  <div className={styles.eventDetail}>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                      alt=''
                    />
                    <h5>Arena Stadium</h5>
                  </div>
                  <Link to={`/blabla`}>
                    <button>View Full Details</button>
                  </Link>
                </div>{' '}
                <div className={styles.upcomingEvent}>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                    alt=''
                    className={styles.upcomingMainImg}
                  />
                  <p>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
                      <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
                    </svg>
                    Date & Time
                  </p>
                  <p>Wednesday 28th February at 15:00</p>
                  <div className={styles.eventDetail}>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                      alt=''
                    />
                    <h5>Arena Stadium</h5>
                  </div>
                  <Link to={`/blabla`}>
                    <button>View Full Details</button>
                  </Link>
                </div>
                <div className={styles.upcomingEvent}>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                    alt=''
                    className={styles.upcomingMainImg}
                  />
                  <p>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
                      <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
                    </svg>
                    Date & Time
                  </p>
                  <p>Wednesday 28th February at 15:00</p>
                  <div className={styles.eventDetail}>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                      alt=''
                    />
                    <h5>Arena Stadium</h5>
                  </div>
                  <Link to={`/blabla`}>
                    <button>View Full Details</button>
                  </Link>
                </div>
                <div className={styles.upcomingEvent}>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                    alt=''
                    className={styles.upcomingMainImg}
                  />
                  <p>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
                      <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
                    </svg>
                    Date & Time
                  </p>
                  <p>Wednesday 28th February at 15:00</p>
                  <div className={styles.eventDetail}>
                    <img
                      src='https://plus.unsplash.com/premium_photo-1664302644902-7bf58fa20ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fHww'
                      alt=''
                    />
                    <h5>Arena Stadium</h5>
                  </div>
                  <Link to={`/blabla`}>
                    <button>View Full Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <Gallery setShowGallery={setShowGallery} />
          </div>
          {showGallery && <BigSlider setShowGallery={setShowGallery} />}
          <div className={styles.bottom}>
            <div className={styles.comments}>
              <WriteComment />
              <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleArtist;
