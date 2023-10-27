import React from 'react';

export default function Section4ChildComponent ({currentViewProduct, 슬라이드}) {
    const slideWrap = React.useRef()
    const [state, setState] = React.useState({
        cnt:0
    })
    
    const {cnt} = state
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






    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
        //setproduct를 사용해서 누적해서 저장 순서 바꿈으로써 후입선출법으로 됨 == on shift 방법과 같음
        //클릭시 개발자모드 컴포넌트, 해당컴포넌트에 클릭한 이미지 정보 나열되는지 확인
    }

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
