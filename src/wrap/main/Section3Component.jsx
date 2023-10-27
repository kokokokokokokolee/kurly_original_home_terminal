import React from 'react';
import './sass/section3.scss'
import axios from 'axios';

export default function Section3Component ({currentViewProduct}) {

    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);


    
    const [state2, setState2] = React.useState({

        슬라이드:[],
    })
    const [state, setState] = React.useState({
        H : 0,
        M : 0,
        S : 0,
    });
    React.useEffect(()=>{
        let startTime = new Date("2023-08-21 12:00:00")
        // console.log(startTime)
        let nowTime = new Date();// 현재시간
            startTime = (startTime.setHours(startTime.getHours() + 24))
            // console.log(startTime)
        let endTime = startTime - nowTime
        // console.log(endTime) // 초단위

        let H = Math.floor(endTime/(60*60*1000)%24)
        let M = Math.floor(endTime/(60*1000)%60)
        let S = Math.floor(endTime/(1000)%60)

        function timeSaleFn(){
            let nowTime = new Date();
            let endTime = startTime - nowTime;
            H = Math.floor(endTime/(60*60*1000)%24)
            M = Math.floor(endTime/(60*1000)%60)
            S = Math.floor(endTime/(1000)%60)
        if (nowTime>=startTime){ // 타임세일 끝
            // console.log('타임세일 끝!')
            setState({
                ...state,
                H : 0,
                M : 0,
                S : 0
            })
        }
        else {
            // console.log('타임세일 중...')
            setState({
                ...state,
                H : H,
                M : M,
                S : S
            })
        }
    }
    setInterval(timeSaleFn, 1000)
    }, [state.H, state.M, state.S])

    axios({
        url : './data/section3.json',
        method : 'GET'
    })
    .then((res)=>{
        setState2({
            ...state2,
            슬라이드:res.data.슬라이드
        })
    })
    .catch((err)=>{
    })


    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
    }


    return (
        <div   id="section3">
            <div className="slide-container">
                <div className="content">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide1">
                                <div className="gap">
                                    <h3>매일 오전 11시 <br />OPEN !</h3>
                                    <p>24시간 한정 일일특가</p>
                                    <div>
                                        <img src="./img/intro/section3/timer.svg" alt="" />
                                        <strong>{state.H < 10 ? `0${state.H}` : state.H }</strong>
                                        <i>:</i>
                                        <strong>{state.M < 10 ? `0${state.M}` : state.M}</strong>
                                        <i>:</i>
                                        <strong>{state.S < 10 ? `0${state.S}` : state.S}</strong>
                                    </div>
                                    <span>망설이면 늦어요!</span>
                                </div>
                            </li>
                                {state2.슬라이드.map((item,idx)=>{
                                return (
                                <li onClick={(e)=>onClickViewProduct(e, item, './img/intro/section3/')} className="slide slide2" key={item.번호}>
                                    <div className="gap">
                                        <div className="img-box">
                                            <img src={`./img/intro/section3/${item.이미지}`} alt="" />
                                            <span><img src="./img/intro/icon-purple-circle-cart.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </li>

                            )
                        })
                    } 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
