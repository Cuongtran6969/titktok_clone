import styles from "./Video.module.scss"
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment, faHeart, faMusic, faPenToSquare, faShare } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function Video() {
    return (
        <div className={cx('recoment-video-container')}>
            <div className={cx('video-content')}>
                <div>
                    <a href="">
                        <img src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb59e38a3722b93d20141a47619b9261~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1715234400&x-signature=M59LR9AqcC%2FB0mHsVVrg5p3ShH4%3D"
                            alt="" className={cx('avatar-img')} />
                    </a>
                </div>
                <div className={cx('video-info')}>
                    <div className={cx('video-header')}>
                        <div>
                            <div>
                                <a href="" className={cx('author-link')}>
                                    <h3 className={cx('video-author-uniqueid')}>Khanhvyccf</h3>
                                    <h4 className={cx('video-author-nickname')}>Khánh Vy Official</h4>
                                </a>
                            </div>
                            <div className={cx('video-description')}>
                                <span className={cx('video-title')}>Công thức nâng cấp bản thân</span>
                                <a href="" className={cx('video-hashtag-link')}>#KhanhVy</a>
                                <a href="" className={cx('video-hashtag-link')}>#LearnOnTikTok</a>
                                <a href="" className={cx('video-hashtag-link')}>#LearnOnTikTok</a>
                            </div>
                            <div className={cx('video-music')}>
                                <a href="" className={cx('music-link')}>
                                    <FontAwesomeIcon icon={faMusic} />
                                    <div className={cx('music-name')}>Nhạc nền - Khánh Vy Offical</div>
                                </a>
                            </div>
                            <div className={cx('video-edit-tool')}>
                                <a href="" className={cx('edit-tool-link')}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <div className={cx('edit-tool-name')}>CapCut - Chỉnh sửa như chuyên gia</div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <button className={cx('follow-btn')}>Follow</button>
                        </div>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <div className={cx('video-container')}>
                            <video
                                autoPlay
                                controls
                                width="100%"
                                height="100%"
                                src="https://firebasestorage.googleapis.com/v0/b/mywebapp-1d00a.appspot.com/o/videos%2Fvideo2.mp4?alt=media&token=f43d7a8f-2821-43ef-b207-2fca401a0ae2"></video>
                        </div>
                        <div className={cx('action-container')}>
                            <div className={cx('action-item')}>
                                <div className={cx('action-box', 'heart-active')}>
                                    <FontAwesomeIcon icon={faHeart} size="xl" />
                                </div>
                                <span className={cx('action-value')}>34k</span>
                            </div>
                            <div className={cx('action-item')}>
                                <div className={cx('action-box')}>
                                    <FontAwesomeIcon icon={faComment} size="xl" />
                                </div>
                                <span className={cx('action-value')}>12k</span>
                            </div>
                            <div className={cx('action-item')}>
                                <div className={cx('action-box')}>
                                    <FontAwesomeIcon icon={faBookmark} size="xl" />
                                </div>
                                <span className={cx('action-value')}>2k</span>
                            </div>
                            <div className={cx('action-item')}>
                                <div className={cx('action-box')}>
                                    <FontAwesomeIcon icon={faShare} size="xl" />
                                </div>
                                <span className={cx('action-value')}>10k</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Video