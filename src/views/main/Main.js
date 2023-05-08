import { Link } from "react-router-dom";
import ImgFetch from "../../fetch/ImgFetch";

const Main = () => {
    return (
        <main id='main'>
            <div className="main-visual">
                <ImgFetch imgSource={'logo_color'}/>
                <button><Link to={'http://sanyeon.com'}>산업단지연구소 홈페이지 바로가기</Link></button>
            </div>
            
        </main>
    )
}

export default Main;
