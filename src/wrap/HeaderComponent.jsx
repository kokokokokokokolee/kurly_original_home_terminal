import React from 'react';
import './sass/header.scss'
import {Link, Outlet, useLocation} from 'react-router-dom'

export default function HeaderComponent ({AddressSearchModalOepn, 주소1, 주소2}) {

    const refRow3 = React.useRef();
    const {pathname} = useLocation();

    React.useEffect(()=>{

    
    let row3OffSetTop = refRow3.current.offsetTop + 43.475
    //offsettop == 상단 내부 테두리를 기준으로 현재 요소의 외부 테두리 거리를 나타냄 
    window.addEventListener('scroll', function(){
        // console.log(window.scrollY)
        let isFixed = false;
        // console.log(refRow3.current.offsetTop + 43.475) // 43.375는 탑모달 높이 
        // ==> 내 머리부터 천장까지의 거리, 머리에 도달하면 ~~ 해라! 
        if(window.scrollY > row3OffSetTop){
            isFixed = true
        }
        else {
            isFixed = false
        }
        setState({
            ...state,
            isFixed : isFixed
        })
    })

})
    const [state, setState] = React.useState({
        notice:false,
        map:false,
        AddressSearchModalOepn : false
    })

    const onMouseEnterNotice = () => {
        setState({
            ...state,
            notice:true
        })
    }
    const onMouseLeaveNotice = () => {
        setState({
            ...state,
            notice:false
        })
    }
    const onMouseEnterMap = () => {
        setState({
            ...state,
            map:true
        })
    }
    const onMouseLeaveMap = () => {
        setState({
            ...state,
            map:false
        })
    }

    const onClickaddress =(e)=> {
        e.preventDefault();
        AddressSearchModalOepn();
    }


    return (
        <>
        <div id="header">
            <div className="row1">
                <div className="container">
                    <ul>
                        <li><Link to="/sub5">회원가입</Link></li>
                        <li><i>|</i></li>
                        <li><Link to="/sub6">로그인</Link></li>
                        <li><i>|</i></li>
                        <li>
                            <a href="!#" onMouseEnter={onMouseEnterNotice}>고객센터</a>

                            { state.notice &&
                                <div className="notice-box" onMouseLeave={onMouseLeaveNotice}>
                                <ul>
                                    <li><Link to="/sub7">공지사항</Link></li>
                                    <li><a href="!#">자주하는 질문</a></li>
                                    <li><a href="!#">1:1 문의</a></li>
                                    <li><a href="!#">대량주문 문의</a></li>
                                </ul>
                            </div>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row2">
                <div className="container">
                    <div className="left">
                        <h1><Link to="/index"><img src="./img/intro/icon-logo.svg" alt="" /><strong>마켓컬리</strong></Link></h1>
                        <span><i>|</i></span>
                        <a href="!#"><span>뷰티컬리<img src="./img/intro/icon-n.svg" alt="" /></span></a>
                    </div>
                    <div className={`center${state.isFixed ? ' on' : ''}`}>
                        <input type="text" name="search" placeholder='검색어를 입력해주세요' />
                        <a href="!#"><img src="./img/intro/icon_zoom.svg" alt="" /></a>
                    </div>
                    <div className={`right${state.isFixed ? ' on' : ''}`}>
                        <a href="!#" onMouseEnter={onMouseEnterMap}><img src="./img/intro/icon-map.svg" alt="" /></a>

                        { state.map &&

                        <div className="map-box" onMouseLeave={onMouseLeaveMap}>
                            {
                                주소1!=="" && (
                                    <p>
                                        {주소1}<br />
                                        {주소2}
                                    </p>
                                )
                            }
                            <p>
                                <strong>배송지를 등록</strong>하고<br />
                                구매 가능한 상품을 확인하세요!
                            </p>
                            <div className="btn-box">
                                <button className='login-btn'>로그인</button>
                                <button onClick={onClickaddress} className='addr-search-btn'><img src="./img/intro/icon_small_zoom.jpg" alt="" />주소 검색</button>
                            </div>
                        </div>
                        
                        }

                        <a href="!#"><img src="./img/intro/icon-heart.svg" alt="" /></a>
                        <a href="!#"><img src="./img/intro/icon-cart.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div ref={refRow3} className={`row3${state.isFixed ? ' on' : ''}`}>
                <div className="container">
                    <div className={`left${state.isFixed ? ' on' : ''}`}>
                        <a href="!#">
                        <img src="./img/intro/icon-menubar.svg" alt="" />
                        <strong>카테고리</strong>
                        </a>
                    </div>
                    <div className={`center${state.isFixed ? ' on' : ''}`}>
                        <ul>
                            <li><Link to="/sub1" className={pathname==='/sub1' ? 'on' : ''}>신상품</Link></li>
                            <li><Link to="/sub2" className={pathname==='/sub2' ? 'on' : ''}>베스트</Link></li>
                            <li><Link to="/sub3" className={pathname==='/sub3' ? 'on' : ''}>알뜰쇼핑</Link></li>
                            <li><Link to="/sub4" className={pathname==='/sub4' ? 'on' : ''}>특가/혜택</Link></li>
                        </ul>
                    </div>
                    <div className={`right${state.isFixed ? ' on' : ''}`}>
                        <a href="!#"><strong>샛별・택배</strong><span>배송안내</span></a>
                    </div>

                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
};
