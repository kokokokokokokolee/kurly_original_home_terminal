import React from 'react';
import './sass/sub1.scss'
import Sub3ChildComponent from './Sub3ChildComponent';
import axios from 'axios';

export default function Sub3Component ({currentViewProduct}) {


    const [state, setState] = React.useState({
        알뜰쇼핑:[],
        issub1:false,
        issub2:false,
        issub3:false,
        issub4:false,
        issub5:false,
        issub6:false
    })

    React.useEffect(()=>{
        axios({
            url:'./data/sub3.json',
            method:'GET'
        }).then((res)=>{
            // console.log('AJAX 성공!')
            // console.log(res.data)
            setState({
                ...state,
                알뜰쇼핑:res.data.알뜰쇼핑
            })
        }).catch((err)=>{
            console.log('AJAX 실패!')
        })
    })

    const onClickSub1=(e)=>{ //클릭이벤트니께 e 넣어주기
        e.preventDefault();
        setState({
            ...state,
            issub1:!state.issub1
        })
    }
    const onClickSub2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            issub2:!state.issub2
        })
    }

    const onClickSub3=(e)=>{ //클릭이벤트니께 e 넣어주기
        e.preventDefault();
        setState({
            ...state,
            issub3:!state.issub3
        })
    }    
    const onClickSub4=(e)=>{ //클릭이벤트니께 e 넣어주기
        e.preventDefault();
        setState({
            ...state,
            issub4:!state.issub4
        })
    }    
    const onClickSub5=(e)=>{ //클릭이벤트니께 e 넣어주기
        e.preventDefault();
        setState({
            ...state,
            issub5:!state.issub5
        })
    }    
    const onClickSub6=(e)=>{ //클릭이벤트니께 e 넣어주기
        e.preventDefault();
        setState({
            ...state,
            issub6:!state.issub6
        })
    } 

    return (
        <main id='sub3' className='sub'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <a href="!#">
                            <img src="./img/sub/sub1/uHE0ClaQtik9dFz10g9WdtCkTcVNKSEjnJYuZYw0.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="title">
                        <h2>알뜰쇼핑</h2>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="col-gap">
                                <div className="top">
                                    <strong>필터</strong>
                                    <a href="!#" className='refresh_btn'>
                                        <img src="./img/sub/sub1/refresh_btn.svg" alt="" />
                                        <em>초기화</em>
                                    </a>
                                </div>
                                <div className="category">
                                    <ul>
                                        <li>
                                            <a href="!#" onClick={onClickSub1} className='category-btn'>카테고리</a>
                                            <div className={`sub sub1${state.issub1 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub1-1' id='sub1-2' value='생수·음료·우유·커피' />
                                                            생수·음료·우유·커피
                                                            <em>32</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-1' id='sub2-2' value='샐러드·간편식' />
                                                            샐러드·간편식
                                                            <em>30</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub3-1' id='sub3-2' value='수산·해산·건어물' />
                                                            수산·해산·건어물
                                                            <em>29</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub4-1' id='sub4-2' value='국·반찬·메인요리' />
                                                            국·반찬·메인요리
                                                            <em>29</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub5-1' id='sub5-2' value='베이커리·치즈·델리' />
                                                            베이커리·치즈·델리
                                                            <em>17</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub6-1' id='sub6-2' value='SUMMER BIG SALE' />
                                                            SUMMER BIG SALE
                                                            <em>16</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub7-1' id='sub7-2' value='면·양념·오일' />
                                                            면·양념·오일
                                                            <em>16</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub8-1' id='sub8-2' value='과일·견과·쌀' />
                                                            과일·견과·쌀
                                                            <em>14</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub9-1' id='sub9-2' value='생활용품·리빙·캠핑' />
                                                            생활용품·리빙·캠핑
                                                            <em>13</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub10-1' id='sub10-2' value='주방용품' />
                                                            주방용품
                                                            <em>9</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                                <button className='category-more-view-btn'>카테고리 더보기<img src="./img/sub/sub1/down_arrow.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={onClickSub2} className='category-btn'>브랜드</a>
                                            <div className={`sub sub2${state.issub2 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-1' id='sub2-1' value='금동이 한복' />
                                                            금동이 한복
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-2' id='sub2-2' value='넛세린' />
                                                            넛세린
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-3' id='sub2-3' value='닥터하우스' />
                                                            닥터하우스
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-4' id='sub2-4' value='덴스티테' />
                                                            덴스티테
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-5' id='sub2-5' value='돗투돗' />
                                                            돗투돗
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub2-6' id='sub2-6' value='또보겠지 떡볶이집' />
                                                            또보겠지 떡볶이집
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub7-1' id='sub7-2' value='르봉' />
                                                            르봉
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub8-1' id='sub8-2' value='마롱즈' />
                                                            마롱즈
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub9-1' id='sub9-2' value='마스슬립' />
                                                            마스슬립
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub10-1' id='sub10-2' value='모로칸오일' />
                                                            모로칸오일
                                                            <em>1</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                                <button className='category-more-view-btn'>브랜드 더보기<img src="./img/sub/sub1/down_arrow.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={onClickSub3} className='category-btn'>가격</a>
                                            <div className={`sub sub3${state.issub3 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub3-1' id='sub3-1' value='6,140원 미만' />
                                                            6,140원 미만
                                                            <em>59</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub3-2' id='sub3-2' value='6,140원 ~ 9,000원' />
                                                            6,140원 ~ 9,000원
                                                            <em>63</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub3-3' id='sub3-3' value='9,000원 ~ 18,000원' />
                                                            9,000원 ~ 18,000원
                                                            <em>60</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub3-4' id='sub3-4' value='18,000원 이상' />
                                                            18,000원 이상
                                                            <em>63</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={onClickSub4} className='category-btn'>혜택</a>
                                            <div className={`sub su4${state.issub4 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub4-1' id='sub4-1' value='할인상품' />
                                                            할인상품
                                                            <em>144</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={onClickSub5} className='category-btn'>유형</a>
                                            <div className={`sub sub5${state.issub5 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub5-1' id='sub5-1' value='Kurly Only' />
                                                            Kurly Only
                                                            <em>36</em>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub5-2' id='sub5-2' value='희고가치 프로젝트' />
                                                            희고가치 프로젝트
                                                            <em>6</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#"  onClick={onClickSub6} className='category-btn'>특정상품 제외</a>
                                            <div className={`sub sub6${state.issub6 ? ' on' : ''}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" name='sub6-1' id='sub6-1' value='반려동물 상품' />
                                                            반려동물 상품
                                                            <em>3</em>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="top">
                                <div className="top-left">
                                    <strong>총 215건</strong>
                                </div>
                                <div className="top-right">
                                    <a href="!#" className='order-btn'>추천순 <img src="./img/sub/sub1/question.svg" alt="" /></a>
                                    <i>I</i>
                                    <a href="!#" className='order-btn'>신상품순</a>
                                    <i>I</i>
                                    <a href="!#" className='order-btn'>판매량순</a>
                                    <i>I</i>
                                    <a href="!#" className='order-btn'>혜택순</a>
                                    <i>I</i>
                                    <a href="!#" className='order-btn'>낮은 가격순</a>
                                    <i>I</i>
                                    <a href="!#" className='order-btn'>높은 가격순</a>
                                </div>
                            </div>
                            <Sub3ChildComponent currentViewProduct={currentViewProduct} 알뜰쇼핑={state.알뜰쇼핑}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
