import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import MenuItem from './MenuItem'
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => { }
function Menu({ children, items = [], onChange }) {

    const [history, setHistory] = useState([{ data: items }])
    // [
    //     {
    //         data: [
    //             {
    //                 icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    //                 title: 'English',
    //                 children: {
    //                     title: 'Language',
    //                     data: [
    //                         {
    //                             code: 'en',
    //                             title: 'English',
    //                         },
    //                         {
    //                             code: 'vi',
    //                             title: 'Tiếng Việt'
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    //                 title: 'Feedback and help',
    //                 to: '/feedback'
    //             },
    //             {
    //                 icon: <FontAwesomeIcon icon={faKeyboard} />,
    //                 title: 'Keyboard and shortcuts',
    //             }
    //         ]
    //     },
    //     {
    //         title: 'Language',
    //         data: [
    //             {
    //                 code: 'en',
    //                 title: 'English',
    //             },
    //             {
    //                 code: 'vi',
    //                 title: 'Tiếng Việt'
    //             }
    //         ]
    //     }
    // ]
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                < MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // console.log(current);
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <ProperWrapper className={cx('menu-proper')}>
                {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                {renderItems()}
            </ProperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <HeadlessTippy
            offset={[12, 8]}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;