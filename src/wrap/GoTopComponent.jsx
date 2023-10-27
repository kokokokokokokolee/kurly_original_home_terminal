import React from 'react';
import './sass/gotop.scss'

export default function GoTopComponent () {

    const [state, setState] = React.useState({
        isFixed : false
    });
    const goTop = React.useRef();

    React.useEffect(()=>{
        
        window.addEventListener('scroll', function(){
            
            let isFixed = false;
            
            if(window.scrollY >= 1200){
                isFixed = true //
            }
            else {
                isFixed = false
            } //퀵메뉴 탑보다 스크롤이 위에 있으면 안 보이고 아래에 있으면 보임
            setState({
                ...state,
                isFixed : isFixed
        })
    })

})

    return (
        <div ref={goTop} id="goTop" className={state.isFixed ? 'on' : ''}>
            <div className="container">
                <div className="content">
                    <a href="#wrap"><img src="./img/intro/gotop/arrow_up.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
};
