import React from 'react';
import './sass/footer.scss'

export default function FooterComponent () {
    return (
        <div id="footer">
            <div className="row row1">
                <div className="container">
                    <div className="content">
                        <div className="left-box">
                            <h3>고객행복 센터</h3>
                            <h2><a href="tel:1644-1107">1644-1107</a><em>월~토요일 오전 7시 - 오후 6시</em></h2>
                            <div>
                                <ul>
                                    <li>
                                        <div className="left"><a href="!#">카카오톡 문의</a></div>
                                        <div className="right">
                                            월~토요일<i>I</i>오전 7시 - 오후 6시<br />
                                            일/공휴일<i>I</i>오전 7시 - 오후 1시</div>
                                    </li>
                                    <li>
                                        <div className="left"><a href="!#">1:1 문의</a></div>
                                        <div className="right">
                                            365일<br />
                                            고객센터 운영시간에 순차적으로 답변드리겠습니다.</div>
                                    </li>
                                    <li>
                                        <div className="left"><a href="!#">대량주문 문의</a></div>
                                        <div className="right">
                                            월~토요일<i>I</i>오전 9시 - 오후 6시<br />
                                            점심시간<i>I</i>낮 12시 - 오후 1시</div>
                                    </li>
                                </ul>
                            </div>
                            <p>비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></p>
                        </div>
                        <div className="right-box">
                            <ul>
                                <li>
                                    <a href="!#">컬리소개</a>
                                    <a href="!#">컬리소개영상</a>
                                    <a href="!#">투자정보</a>
                                    <a href="!#">인재채용</a>
                                    <a href="!#">이용약관</a>
                                    <a href="!#"><strong>개인정보처리방침</strong></a>
                                    <a href="!#">이용안내</a>
                                </li>
                                <li>
                                법인명 (상호) : 주식회사 컬리<i>I</i> 사업자등록번호 : 261-81-23567<a href="!#">사업자정보 확인</a><br />
                                통신판매업 : 제 2018-서울강남-01646 호<br />
                                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)<i>I</i> 대표이사 : 김슬아 <br />
                                채용문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br />
                                팩스: 070 - 7500 - 6098
                                </li>
                                <li>
                                    <a href="!#"><img src="./img/intro/footer/ico_instagram.webp" alt="" /></a>
                                    <a href="!#"><img src="./img/intro/footer/ico_fb.webp" alt="" /></a>
                                    <a href="!#"><img src="./img/intro/footer/ico_blog.webp" alt="" /></a>
                                    <a href="!#"><img src="./img/intro/footer/ico_naverpost.webp" alt="" /></a>
                                    <a href="!#"><img src="./img/intro/footer/ico_youtube.webp" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="container">
                    <div className="content">
                        <ul>
                            <li>
                                <div className="icon-box">
                                    <img src="./img/intro/footer/logo_isms.svg" alt="" />
                                </div>
                                <div className="text-box">
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영 <br />
                                (심사받지 않은 물리적 인프라 제외) <br />
                                [유효기간] 2022.01.19 ~ 2025.01.18
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src="./img/intro/footer/logo_privacy.svg" alt="" />
                                </div>
                                <div className="text-box">
                                개인정보보호 우수 웹사이트 ·<br />
                                개인정보처리시스템 인증 (ePRIVACY PLUS)
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src="./img/intro/footer/logo_tosspayments.svg" alt="" />
                                </div>
                                <div className="text-box">
                                토스페이먼츠 구매안전(에스크로)<br />
                                서비스를 이용하실 수 있습니다.
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src="./img/intro/footer/logo_wooriBank.svg" alt="" />
                                </div>
                                <div className="text-box">
                                고객님이 현금으로 결제한 금액에 대해 우리은행과<br />
                                채무지급보증 계약을 체결하여 안전거래를 보장하고<br />
                                있습니다.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row row3">
                <div className="container">
                    <div className="content">
                        <p>
                            컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다. <br />마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                        </p>
                        <p>&copy; KURLY CORP. ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
