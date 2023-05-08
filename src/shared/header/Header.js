import { Link } from "react-router-dom";
import URL from "../../context/URL";
import ImgFetch from '../../fetch/ImgFetch'

const Header = ()=> {

    return (
        <>
            <header>
                <Link to={URL.MAIN}><ImgFetch imgSource={'logo_color'} width={'80'}/></Link>

                <nav id='menu-tab'>
                    <Link to={URL.NOTICE_LIST}>공지사항</Link>
                    <Link to={URL.APT_LIST}>분양단지</Link>
                    <Link to={URL.CUSTOMER_LIST}>고객문의</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;