import React from 'react';
import './sass/section4.scss'
import Section4ChildComponent from './Section4ChildComponent';
import axios from 'axios';

export default function Section5Component ({currentViewProduct, 슬라이드, n}) {
    const [state, setState] = React.useState({
        슬라이드:[],
        n:0
    })

    axios({
        url: './data/section2.json',
        method:'GET'
    })
    .then((res)=>{
        setState({
            슬라이드:res.data.슬라이드
            
        })

    })
    .catch(()=>{

    })

    

    return (
        <div id="section4">
            <div className="container">
                <div className="title">
                    <a href="!#">
                        <h2>놓치면 후회할 가격</h2>
                        <img src="./img/intro/section5/arrow_next.svg" alt="" />
                    </a>
                </div>
                <div className="content">
                    <Section4ChildComponent currentViewProduct={currentViewProduct} 슬라이드={state.슬라이드} n={state.n}/> {/* 이거 하면 개발자 모드 컴포넌트의 훅에 json 입력 됨 */}
                </div>
            </div>
        </div>
    );
};

