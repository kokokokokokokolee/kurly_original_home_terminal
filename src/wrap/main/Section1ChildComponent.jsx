import React from 'react';

export default function Section1ChildComponent ({슬라이드}) {
    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    const [n, SetN] = React.useState(0) //슬라이드 전체 갯수
    const [toggle, setToggle] = React.useState(0)// 리턴한 걸 기억하는 변수
    const [play, setPlay] = React.useState(true); //true 면 타이머 동장 false면 타이머 멈춤

    //0. 슬라이드 너비 자동화 : wrap 박스 너비를 설정하라 ==width:100% * 19의 19 값 설정
    React.useEffect(()=>{
        slideWrap.current.style.width = `${100 * 슬라이드.length}%`
        SetN((슬라이드.length-2)) // 중복 된 두 개 빼야 함 
    }, [슬라이드])


    //1. 메인 슬라이드 함수
    const mainSlide = () => {
        slideWrap.current.style.transform = `translate(${-1900 * cnt}px)`
        slideWrap.current.style.transition = `all 0.6s ease-in-out`
        // console.log(cnt)
        // console.log(n)
        returnSlide();
        // if(cnt>n){ //현재 페이지 수가 마지막 페이지 수보다 높으면
        //     setCnt(1) //현제페이지는 1로 설정 된다 = returen
        //     setToggle(1) //리턴 됐다는 걸 알려줌 setCnt 가 1이 됐으니 리턴(=toggle도 1로 증가)
        //     slideWrap.current.style.transition = `none`;
        //     slideWrap.current.style.transform = `translate(${-1800 * 0}px)`; 
        // }
    }
    //2. 로딩시 실행, cnt가 변경되면 자동으로 메인슬라이드 호출 실행
    React.useEffect(()=>{
        if(toggle===0){//리턴 안 된 상태에서 실핸
            mainSlide();
        }
        else{//리턴이 된 상태라면?
            setToggle(0)//리턴이 안 된 상태로 만들어줌
            setTimeout(function(){ //리턴이 0이 되면 메인슬라이드 실행
                mainSlide();
            }, 100) //0.1초 있다가 실행해라
        }
    }, [cnt])

    //3.자동 타이머 함수가 필요함ㅑ
    React.useEffect(()=>{
        let setId = 0;
        if(play===true){
        setId = setInterval(()=>{
            setCnt(cnt => cnt+1)
        }, 3000);
        return () =>clearInterval(setId)
    }
    }, [play])
    //이전 화살 버튼 클릭 이벤트
    const onClickPrevBtn=()=>{
        setCnt(cnt-1)
    }
    //이후 화살 버튼 클릭 이벤트
    const onClickNextBtn=()=>{
        setCnt(cnt+1)
    }

    const returnSlide=()=>{
        if(cnt>n){ //현재 페이지가 마지막 페이지보다 숫자가 클 때
            setCnt(1) //현재 페이지는 1페이지가 된다 - 리턴 됨
            setToggle(1) //리턴 됐다는 걸 표현하는 변수 1번 됨
            slideWrap.current.style.transform = `translate(${-1903 * 0}px)`
            slideWrap.current.style.transition = `none`
        }
        if(cnt<0){// 현재 페이지가 0보다 작을 떄 
            setCnt(n-1) //현재 페이지는 마지막 페이지 전 페이지가 된다 
            setToggle(1)
            slideWrap.current.style.transform = `translate(${-1903 * n}px)`
            slideWrap.current.style.transition = `none`
        }
    }
    const onMouseEnterSlide = () => {
        console.log('마우스 엔터')
        setPlay(false)
    }
    const onMouseLeaveSlide = () => {
        console.log('마우스 리브')
        setPlay(true)
    }

    // 여기까지하면 마지막 페이지에서 처음페이지 넘어갈 때 왼쪽으로 촤라라 가는데 그냥 단순 페이지 넘김으로

    return (
            <div className="slide-container" onMouseEnter={onMouseEnterSlide} onMouseLeave={onMouseLeaveSlide}>
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">

                       {//반복문
                        슬라이드.map((item,idx)=>{
                            return (
                        <li className="slide" key={item.번호}>
                            <img src={`./img/intro/slide/${item.이미지}`} alt="" />
                        </li>
                            )
                        })

                        
                        }
                    </ul>
                </div>
                <button className='arrow-next-btn' onClick={onClickNextBtn}><img src="./img/intro/icon-gray-circle-next.svg" alt="" /></button>
                <button className='arrow-prev-btn'onClick={onClickPrevBtn}><img src="./img/intro/icon-gray-circle-next.svg" alt="" /></button>
                <div className="pagenum-box"><span>{cnt+1 > n ? 1  : cnt+1}</span>/<span>{슬라이드.length-2}</span></div>
            </div>
    );
};
