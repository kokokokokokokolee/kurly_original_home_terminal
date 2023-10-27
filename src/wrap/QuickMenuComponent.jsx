import React from 'react';
import './sass/quickmenu.scss'

export default function QuickMenuComponent ({viewProduct}) {
    const [state, setState] = React.useState({
        isFixed : false
    });

    let quickMenu = React.useRef();





    React.useEffect(()=>{
        
        let quickMenuTop = quickMenu.current.offsetTop;

        window.addEventListener('scroll', function(){
            let isFixed = false;
            
            if(window.scrollY >= quickMenuTop){
                isFixed = true
            }
            else {
                isFixed = false
            }
            setState({
                ...state,
                isFixed : isFixed
            })// 이프무에서 결정된 값을 넣어줌 임시변수 쓰는 걸 자주 해야 함 !! 셋터함수 바로 넣게되면 오류 날 수 있어서 마지막에 한 번만 해 주삼~~ 이상하게 row3 사라지드라~
        })

    }, []);


    const [cnt, setCnt] = React.useState(0);

    // 업, 다운 클릭 이벤트

    const onClickUpDownEvent=(e, direction)=>{
        e.preventDefault();
        if(direction === "down"){
            if(cnt > viewProduct.length-4){
                return;
            }
            else {
                setCnt(cnt+1)
            }
        }
        else if (direction==="up"){
            if (cnt > 0){
                setCnt(cnt-1)
            }
            else {
                return
            }
        }
    }


    const refSlideWrap = React.useRef();



    //메인슬라이드 애니메이션 메서드 <= cnt 변경되면 실행
    const mainSlide=()=>{
        try{
            refSlideWrap.current.style.transition = "all 0.3s";
            refSlideWrap.current.style.transform = `translateY(${-84*cnt}px)`;    
        } 
        catch(e){
            return;
        }
    }

    // cnt변경되면 실행
    React.useEffect(()=>{
        mainSlide();
    },[cnt]);

    return (
        <div ref={quickMenu} id="quickMenu" className={state.isFixed ? 'on' : ''}>
            <div className="container">
                <div className="content">
                    <div className="row1">
                        <a href="!#">
                            <img src="./img/intro/quickmenu/deliveryInfo.jpg" alt="" />
                        </a>
                    </div>
                    <div className="row2">
                        <a href="!#">등급별 혜택</a>
                        <a href="!#">레시피</a>
                    </div>
                    {
                        viewProduct.length > 0 && (
                        <div className="row3">
                            <div className="up">
                                    <a href="!#" onClick={(e)=>onClickUpDownEvent(e, 'up')} >
                                    <img src="./img/intro/quickmenu/icon_up_arrow.svg" alt="" />
                                </a>
                            </div>
                            <div className="title">최근 본 상품</div>
                            <div className="img-box">
                                <ul ref={refSlideWrap}>  

                            {
                                    viewProduct.map((item)=>{
                                        return(
                                            <li key={item.번호}>
                                                <a href="!#">
                                                    <img src={item.이미지} alt="" />
                                                </a>
                                            </li>
                                        )
                                    })

                                }
                                </ul>
                            </div>
                            <div className="down">
                            <a href="!#" onClick={(e)=>onClickUpDownEvent(e, 'down')}>
                                    <img src="./img/intro/quickmenu/real_up_arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};
