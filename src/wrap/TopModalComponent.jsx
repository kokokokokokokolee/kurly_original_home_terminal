import React from 'react';
import './sass/top_modal.scss'

export default function TopModalComponent () {
    const [modal, setmodal] = React.useState(false) // ()는 보이고 안 보이고가 들어가면 됨, UI의 현재 상태를 state로 저장
    
    //모달창 사이트 이동
    const onClickSiteLink=(e) => {
        e.preventDefault()
        window.location.href = 'https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/join/join/coupon'
    }
    //모달창 닫기
    const onClickModal = (e) => {
        e.preventDefault();
        setmodal(true);
    }
    

    return (
        <div id="topModal" className = {modal ? 'on' : ''}>
            <div className="container">
                <a href="!#" onClick={onClickSiteLink}>지금 가입하고, <strong>1만원 할인 쿠폰</strong> 받아가세요!</a>
                <a href="!#" className='top-modal-close' onClick={onClickModal}><img src="./img/top_modal/close.svg" alt="" /></a>
            </div>
        </div>
    );
};
