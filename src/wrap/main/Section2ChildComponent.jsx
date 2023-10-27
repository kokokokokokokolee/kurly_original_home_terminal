import React from 'react';

export default function Section2ChildComponent ({currentViewProduct, 슬라이드, n}) {
    const slideWrap = React.useRef()
    const [state, setState] = React.useState({
        cnt:0
    })
    
    const {cnt} = state //이렇게 하면 state.cnt 들어가는 자리에 cnt만 써도 됨 = 비 구조화
    //이전 버튼 클릭 
    const onClickPrevBtn=(e)=>{ //preventDefault를 안 하면 기본 설정 값?이 바뀐다 
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt-1
        })
    }
    //다음 버튼 클릭
    const onClickNextBtn=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt+1
        })
    }
    // 버튼 누를 때마다 얼마나 움직이는지? 267* 4=1068
    const mainSlide=()=>{
        slideWrap.current.style.transform = `translateX(${-1068 * state.cnt}px)`
        slideWrap.current.style.transition = `all 0.3s ease-in-out`
    }
    React.useEffect(()=>{
        mainSlide()
    }, [cnt])


    //1. 최근 본 상품 클릭 이벤트(누르면 개발자모드 컴포넌트에서 후입선출 됨), 후입선출 = 나중에 들어온게 먼저 나감 
 
    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
    }
    



    //getItem === 게터 함수
    //키가 있어야 데이터 가져올 수 있음



     // 클릭을 해서 객체를 만들고 프로덕트라는 상태변수에 저장이 되면 프로덕트가 변경이되자마자 로컬에 저장을 시켜버리고 flag가 변경되자마자 로컬 거를 가져다가 최상위 컴포넌트에 저장
     // ==> 그래서 퀵메뉴를 가져다 쓸 수 있음 왜? 퀵메뉴는 랩컴포넌트 밑에 있어서

    return (
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">
                        {슬라이드.map((item,idx)=>{
                            return (
                            <li onClick={(e)=>onClickViewProduct(e, item, './img/intro/section2/')} className="slide slide1" key={item.번호}>
                                <div className="gap">
                                    <div className="img-box">
                                        <img src={`./img/intro/section2/${item.이미지}`} alt="" />
                                        <span><img src="./img/intro/icon-purple-circle-cart.svg" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h3>{item.상품명}</h3>
                                        <h4>
                                                <strong>{Math.round(item.할인율)}%</strong>
                                                <em>{Math.round(item.정가*(item.할인율)).toLocaleString('ko-KO')}원</em><br/>
                                                <span>{item.정가.toLocaleString('ko-KO')}원</span>
                                            </h4>
                                        <p>
                                            <img src="./img/intro/후기.svg" alt="" />
                                            <span>후기{item.후기}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>

                            )
                        })
                    }  
                    </ul>
                </div>
                { state.cnt > 0 &&
                <a href="!#" className='arrow-prev-btn' onClick={onClickPrevBtn}><img src="./img/intro/icon-white-circle-next.svg" alt="" /></a>
            }
            { state.cnt < 4 &&
                <a href="!#" className='arrow-next-btn' onClick={onClickNextBtn}><img src="./img/intro/icon-white-circle-next.svg" alt="" /></a>
            }
            </div>
    );
};
