import React from 'react';

export default function Sub1ChildComponent({currentViewProduct, 신상품}) {

    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
        }
    return (
            <ul>
                {
                신상품.map((item,idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/sub/sub1/')} key={item.번호}>
                        <div className="col-gap">
                            <div className="img-box">
                                <a href="!#">
                                    <img src={`./img/sub/sub1/${item.이미지}`} alt="" /></a>
                            </div>
                            <div className="button-box">
                                <a href="!#"><img src="./img/sub/sub1/icon-cart.svg" alt="" />담기</a>
                            </div>
                            <div className="txt-box">
                                <ul>
                                    <li><a href="!#"><em>{item.배송방법}</em></a></li>
                                    <li><a href="!#"><h2>{item.상품명}</h2></a></li>
                                    <li><a href="!#"><h3>{item.상세설명}</h3></a></li>
                                    <li><a href="!#"><h4>{item.정가.toLocaleString("ko-KO")}원</h4></a></li>
                                    <li><a href="!#"><strong>{Math.round(item.할인율*100)}%</strong><h5>{Math.round(item.정가*(1-item.할인율)).toLocaleString("ko-KO")}원</h5></a></li>
                                    <li><a href="!#"><h6>{item.공급처}</h6></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    )
                })
                }
        </ul>
    );
};