import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Video from '~/components/Video';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main-content-home')}>
            {/* <div className={cx('video-list-container')}>
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div> */}
        </div>
    )
}
export default Home;