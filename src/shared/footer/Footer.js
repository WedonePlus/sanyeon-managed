import { Link } from "react-router-dom";
import URL from "../../context/URL";
import ImgFetch from "../../fetch/ImgFetch";

const Footer = () => {

    return (
        <footer>
            <section id="footer-bottom">
        
                <ImgFetch imgSource={'footer_logo'} alt='soom_logo' width='148' height={'53'}/>
                <div>
                    <address>
                        <span>(주)숨 인터렉티브</span>
                        <span>대표자 : 이수미</span>
                        <span>사업자번호 : 135-86-41091</span>
                        <span>경기도 화성시 동탄순환대로3길 42-1 4층 숨인터렉티브</span>
                        <span>1544-1221</span>
                    </address>
                    <p>COPYRIGHT &copy; SOOM INTERACTIVE. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}
export default Footer;