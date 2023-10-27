import React from 'react';

export default function Sub4ChildComponent({currentViewProduct, 특가혜택}) {
    return (
            <ul>
                {
                특가혜택.map((item,idx)=>{
                    return(

                        <li key={item.번호}>
                        <div className="col-gap">
                            <div className="img-box">
                                <a href="!#">
                                    <img src={`./img/sub/sub4/${item.이미지}`} alt="" />
                                </a>
                            </div>
                        </div>
                    </li>

                    )
                })
                }
        </ul>
    );
};