import URL from "../context/URL";
import AptAdd from "../views/apt/AptAdd";
import AptDetail from "../views/apt/AptDetail";
import AptList from "../views/apt/AptList";
import CustomerDetail from "../views/customer/CustomerDetail";
import CustomerList from "../views/customer/CustomerList";
import Main from "../views/main/Main";
import NoticeAdd from "../views/notice/NoticeAdd";
import NoticeDetail from "../views/notice/NoticeDetail";
import NoticeList from "../views/notice/NoticeList";

function Tab(props) {
    const tab = props.tab;
    
    // 메인
    if(tab === URL.MENUTYPE_MAIN) {
        return <Main/>
    }

    // 공지사항
    if(tab === URL.MENUTYPE_NOTICE_LIST) {
        return <NoticeList/>
    }
    
    if(tab === URL.MENUTYPE_NOTICE_DETAIL) {
        return<NoticeDetail/>
    }
    
    if(tab === URL.MENUTYPE_NOTICE_ADD) {
        return <NoticeAdd/>
    }
    
    if(tab === URL.MENUTYPE_APT_LIST) {
        return <AptList/> 
    }
    
    if(tab === URL.MENUTYHPE_APT_DETAIL) {
        return <AptDetail/>
    }
    if(tab === URL.MENUTYPE_APT_ADD) {
        return <AptAdd/>
    }
    
    if(tab === URL.MENUTYPE_CUSTOMER_LIST) {
        return <CustomerList/>
    }
    
    if(tab === URL.MENUTYPE_CUSTOMER_DETAIL) {
        return <CustomerDetail/>
    }

}

export default Tab;