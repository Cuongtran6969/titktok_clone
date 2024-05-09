import { Link } from 'react-router-dom';
import styles from './Button.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Button({
    href,
    to,
    primary = false,
    text = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button'
    const prop = {
        onClick,
        ...passProps
    }
    if (disabled) {
        Object.keys(prop).forEach(key => {
            if (key.startsWith('on') && typeof prop[key] == 'function') {
                delete prop[key]
            }
        })
    }
    if (to) {
        prop.to = to
        Comp = Link
    } else if (href) {
        prop.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        rounded,
        text,
        [className]: className,
        disabled
    })
    return (
        <Comp className={classes} {...prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;