import React from 'react';
import './sass/sub4.scss'
import Sub4ChildComponent from './Sub4ChildComponent';
import axios from 'axios';

export default function Sub4Component () {


    const [state, setState] = React.useState({
        특가혜택:[],
        issub1:false,
        issub2:false,
        issub3:false,
        issub4:false,
        issub5:false,
        issub6:false
    })

    React.useEffect(()=>{
        axios({
            url:'./data/sub4.json',
            method:'GET'
        }).then((res)=>{
            // console.log('AJAX 성공!')
            // console.log(res.data)
            setState({
                ...state,
                특가혜택:res.data.특가혜택
            })
        }).catch((err)=>{
            console.log('AJAX 실패!')
        })
    })

    // const onClickSub1=(e)=>{ //클릭이벤트니께 e 넣어주기
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub1:!state.issub1
    //     })
    // }
    // const onClickSub2=(e)=>{
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub2:!state.issub2
    //     })
    // }

    // const onClickSub3=(e)=>{ //클릭이벤트니께 e 넣어주기
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub3:!state.issub3
    //     })
    // }    
    // const onClickSub4=(e)=>{ //클릭이벤트니께 e 넣어주기
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub4:!state.issub4
    //     })
    // }    
    // const onClickSub5=(e)=>{ //클릭이벤트니께 e 넣어주기
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub5:!state.issub5
    //     })
    // }    
    // const onClickSub6=(e)=>{ //클릭이벤트니께 e 넣어주기
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         issub6:!state.issub6
    //     })
    // } 

    return (
        <main id='sub4' >
            <section id="section2">
                <div className="container">
                    <div className="content">
                        <div className="right">
                            <Sub4ChildComponent 특가혜택={state.특가혜택}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
