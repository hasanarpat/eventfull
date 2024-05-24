import { Link } from 'react-router-dom';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <aside className={styles.aside}>
            <ul>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'></path>
                </svg>
                <span>Profile</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z'></path>
                </svg>{' '}
                <span>Events</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'></path>
                </svg>{' '}
                <span>Saved Events</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  version='1.2'
                  baseProfile='tiny'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z'></path>
                </svg>
                <span>Messages</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z'></path>
                </svg>
                <span>Settings</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2'></path>
                  <path d='M15 12h-12l3 -3'></path>
                  <path d='M6 15l-3 -3'></path>
                </svg>
                <span>Logout</span>
              </li>
            </ul>
          </aside>
          <div className={styles.info}>
            <article className={styles.top}>
              <img
                src='https://images.pexels.com/photos/18023668/pexels-photo-18023668/free-photo-of-doga-yay-bahar-agac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className={styles.bannerImg}
              />
              <section className={styles.profileDetails}>
                <div className={styles.left}>
                  <div className={styles.img}>
                    <img
                      src='https://images.pexels.com/photos/18023668/pexels-photo-18023668/free-photo-of-doga-yay-bahar-agac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                    />
                  </div>
                  <div className={styles.leftInfo}>
                    <h4>John Doe</h4>
                    <p>Joined July 2024</p>
                    <div className={styles.followers}>
                      <span>0 Followers / 0 Follower</span>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <Link to='/profileUpdate'>
                    <button>Edit Profile</button>
                  </Link>
                </div>
              </section>
            </article>
            <article className={styles.center}>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
              <h1>
                Lorem est id ex voluptate. Laboris id sunt quis tempor commodo
                tempor dolor deserunt amet. Aliqua proident commodo sint ad.
                Laboris enim magna sit quis consectetur deserunt dolore in magna
                ipsum culpa deserunt. Ipsum ea do culpa ut irure. Non cillum
                elit ut excepteur. Do proident est eiusmod ullamco ad elit
                eiusmod deserunt est amet labore magna. Do excepteur aliquip
                ipsum Lorem eiusmod amet elit consequat occaecat laboris do
                labore do. Laborum reprehenderit aute aute qui proident commodo
                magna deserunt occaecat esse do sunt fugiat. Nostrud ex
                voluptate nulla do labore aute aute. Cupidatat commodo quis qui
                labore ipsum occaecat pariatur. Veniam minim ex magna mollit ex
                ullamco. Labore enim incididunt sint id non ullamco nisi. Do do
                aliqua et enim amet exercitation Lorem fugiat. Veniam duis elit
                consectetur magna ad voluptate cillum officia consectetur.
                Consectetur esse duis excepteur amet sit nulla nisi officia
                consequat sunt incididunt aute. Duis nostrud sint sit non enim
                occaecat culpa et exercitation elit qui tempor culpa. Est aute
                culpa laboris mollit aliqua sit esse in eiusmod. Minim aliquip
                sunt consectetur do aute id Lorem ad. Pariatur dolore ex
                incididunt ipsum adipisicing reprehenderit duis sint elit
                excepteur occaecat qui. Et deserunt non enim dolore ut
                adipisicing duis ea culpa proident aute dolor Lorem. Cupidatat
                est qui deserunt sit adipisicing. Occaecat esse et in ad
                adipisicing mollit magna cillum labore veniam culpa nisi. Dolor
                incididunt enim aute id exercitation nulla qui. Sit voluptate
                aliqua velit pariatur qui consectetur minim tempor aliqua. Velit
                laboris qui magna ipsum amet qui officia sit reprehenderit
                consequat pariatur ad ipsum officia. Aliquip nulla culpa laborum
                nisi minim dolore est. Nisi nulla in eu nulla eu amet laboris
                labore cupidatat veniam quis. Ullamco laborum adipisicing esse
                et exercitation sunt sint ut Lorem. Dolor laborum ad dolore
                eiusmod dolor magna adipisicing amet excepteur nisi cupidatat.
                Incididunt fugiat ullamco sint enim reprehenderit laboris ea sit
                dolor dolore veniam ex aliquip deserunt. Aliqua veniam elit id
                irure proident incididunt duis occaecat consectetur nulla dolor
                nostrud consectetur non. Enim adipisicing ex aute sint ea in
                mollit excepteur tempor do Lorem. In incididunt consequat
                ullamco elit Lorem aliquip ad non officia dolor anim sit. Dolor
                amet eiusmod sit cillum ex est est quis nulla sint adipisicing
                fugiat. Ullamco laborum laborum esse Lorem ipsum sit. Nisi elit
                adipisicing eiusmod quis culpa dolor esse culpa deserunt est
                tempor minim reprehenderit. Mollit ullamco et enim ullamco amet.
                Reprehenderit culpa cillum culpa ullamco ea id sit excepteur.
                Laborum do tempor in culpa in dolore labore commodo dolor dolor
                aliquip fugiat. Exercitation in aliquip laborum cupidatat est ut
                proident mollit quis velit. Incididunt nulla irure exercitation
                aliqua qui ex minim proident. Culpa ullamco adipisicing id
                excepteur proident. Qui anim mollit consequat dolore aliqua
                dolore ea officia minim ut cupidatat veniam Lorem. Dolore labore
                cupidatat aliquip eiusmod ea culpa exercitation sit et eiusmod
                nulla eu ex. Dolor aliquip exercitation sit ea ipsum aute
                consectetur. Consectetur non dolor adipisicing eu amet ut
                adipisicing officia cillum anim. In minim eu amet nulla ullamco
                aute exercitation enim. Qui sit fugiat do est id anim officia ex
                aute elit officia commodo commodo.
              </h1>
            </article>
            <article className={styles.bottom}></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
