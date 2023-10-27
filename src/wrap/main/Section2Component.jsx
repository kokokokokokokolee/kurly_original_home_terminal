import React from 'react';
import './sass/section2.scss'
import Section2ChildComponent from './Section2ChildComponent';
import axios from 'axios';

export default function Section2Component({currentViewProduct}) {

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
        <section id="section2">
            <div className="container">
                <div className="title">
                    <h2>이 상품 어때요?</h2>
                </div>
                <div className="content">
                   <Section2ChildComponent currentViewProduct={currentViewProduct} 슬라이드={state.슬라이드}  n={state.n}  />{/* 이거 하면 개발자 모드 컴포넌트의 훅에 json 입력 됨 */}
                </div>
            </div>
        </section>
    );
};
