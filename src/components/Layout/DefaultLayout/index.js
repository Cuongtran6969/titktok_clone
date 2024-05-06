import Header from "./Header";
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="body-content">
                <div>
                    <Sidebar />
                </div>
                <div className="main-content-home">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout