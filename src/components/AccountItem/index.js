import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('account-avatar')}
                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/425505041_951096166584109_1070111714873098817_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0EZZrHhczgkQ7kNvgG8U_77&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDH2sU77HEZtiLQWEBrbge89NrBwZyAyE7mFu6Qtz62Aw&oe=664173DF" alt="" />
            <div className={cx('account-info')}>
                <p>
                    <span className={cx('account-id')}>hoasengroup.csr</span>
                    <FontAwesomeIcon className={cx('account-check')} icon={faCircleCheck} />
                </p>
                <p className={cx('account-name')}>Tập đoàn Hoa Sen</p>
            </div>
        </div>
    );
}

export default AccountItem;