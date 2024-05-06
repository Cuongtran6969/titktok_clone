import { faCompass, faHouse, faUser, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <div className={cx('side-bar')}>
            <ul>
                <li className={cx('sideBar-nav_item', 'sideBar-active')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <span>Dành cho bạn</span>
                    </Link>
                </li>
                <li className={cx('sideBar-nav_item')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <span>Đang Follow</span>
                    </Link>
                </li>
                <li className={cx('sideBar-nav_item')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        <span>Bạn bè</span>
                    </Link>
                </li>
                <li className={cx('sideBar-nav_item')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faCompass} />
                        </div>
                        <span>Khám phá</span>
                    </Link>
                </li>
                <li className={cx('sideBar-nav_item')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <span>Live</span>
                    </Link>
                </li>
                <li className={cx('sideBar-nav_item')}>
                    <Link to="/upload">
                        <div className={cx('sideBar-nav_link')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <span>Hồ sơ</span>
                    </Link>
                </li>
            </ul>
            <div>
                <p className={cx('nav-login-tip')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            </div>
            <div className={cx('nav-link-wrapper')}>
                <h4 className={cx('nav-title')}>Công ty</h4>
                <div className={cx('container-nav-link')}>
                    <a href="">Giới thiệu</a>
                    <a href="">Bảng tin</a>
                    <a href="">Liên hệ</a>
                    <a href="">Sự nghiệp</a>
                </div>
                <h4 className={cx('nav-title')}>Chương trình</h4>
                <div className={cx('container-nav-link')}>
                    <a href="">TikTok for Good</a>
                    <a href="">Quảng cáo</a>
                    <a href="">TikTok LIVE</a>
                    <a href="">Creator Networks</a>
                    <a href="">Developers</a>
                    <a href="">Minh bạch</a>
                </div>
                <h4 className={cx('nav-title')}>Điều khoản và chính sách</h4>
                <div className={cx('container-nav-link')}>
                    <a href="">Trợ giúp Trung tâm</a>
                    <a href="">An toàn</a>
                    <a href="">Điều khoản</a>
                    <a href="">Chính sách</a>
                    <a href="">Quyền riêng tư</a>
                    <a href="">Creator Academy</a>
                    <a href="">Quyền riêng tư</a>
                    <a href="">Hướng dẫn Cộng đồng</a>
                </div>
            </div>
        </div>
    )
}
export default Sidebar