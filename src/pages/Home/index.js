import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main-content-home')}>
            <h2>Home page</h2>
        </div>
    )
}
export default Home;