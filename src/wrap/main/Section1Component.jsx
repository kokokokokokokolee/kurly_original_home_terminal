import React from 'react';
import './sass/section1.scss'
import Section1ChildComponent from './Section1ChildComponent';
import axios from 'axios';

export default function Section1Component () {
    const [state, setState] = React.useState({
        슬라이드:[]
    })
    axios({
        url:'./data/section1.json',
        method:'GET'
    })
    .then((res)=>{
            setState({ // 성공 했을 때 집어넣어라 
                슬라이드:res.data.슬라이드
            })
    })
    .catch((err)=>{
        console.log ('AXIOS 실패')
        console.log (err)
    });
    return (
        <div id="section1">
                <Section1ChildComponent 슬라이드={state.슬라이드} />
                
                
        </div>
    );
};
