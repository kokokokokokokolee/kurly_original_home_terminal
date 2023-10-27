import React from 'react';
import './sass/addressSearch.scss'
import Postcode from 'react-daum-postcode'

export default function AddressSearch ({AddressSearchModalClose, addressSave}) {

    const [state, setState] = React.useState({
        islist : false,
        isspecific: true,
        isarrow : true,
        주소1:'',
        주소2:'',
    })

    const onClickList = (e) => {
        e.preventDefault();
        setState({
            islist : !state.islist,
            isspecific : !state.isspecific,
            isarrow : !state.isarrow
        })
    }
    const onClickAddressSearchModalClose =(e)=> {
        e.preventDefault();
        AddressSearchModalClose();
    }
    
    const postCodeStyle = {
        zIndex:'2',
        position: 'absolute',
        top: '0',
        left: '0',
        width : '100%',
        height:'100%',
        background: '#fff',
    }

    //우편번호 검색
    const onCompletePostCode = (data) => {
        console.log(data.zonecode)
        console.log(data.address)
        setState({
            ...state,
            주소1 : (`(${data.zonecode}) ${data.address}`)
        })
    }

    //직접 타이핑 하는 주소
    const onChangeAddr2 = (e)=> {
        setState({
            ...state,
            주소2 :e.target.value
        })
    }

    const onClickSave = (e)=>{
        e.preventDefault();
        addressSave(state.주소1, state.주소2)

        //local storage에 주소 저장하기
        const obj = {
            주소1 :state.주소1,
            주소2 :state.주소2,
        }
        localStorage.setItem('POSTCODE_ADDRESS',JSON.stringify(obj));
        AddressSearchModalClose();
    }

    return (
        <div id='addressSearch'>
            <div className="container">
            <button onClick={onClickAddressSearchModalClose} className='X-btn'>X</button>
                <div className="title">
                    <h2><strong>샛별배송</strong><span>지역입니다.</span></h2>
                    <h3>매일 새벽, 문 앞까지 신선함을 전해드려요.</h3>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="input-box1">
                                <input type="text"
                                id='input1'
                                name='input1'
                                placeholder='카카오 API 검색 주소 바인딩'
                                value={state.주소1}
                                disabled={false}/>
                                <button><img src="./img/sub/sub5/ico_search.svg" alt="" />재검색</button>
                            </div>
                        </li>
                        <li>
                            <div className="input-box2">
                                <input type="text"
                                id='input2'
                                name='input2'
                                placeholder='나머지 주소를 입력해 주세요'
                                onChange={onChangeAddr2}
                                value={state.주소2} />
                            </div>
                        </li>
                        <li className='p1'>※ 저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다. <br />로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.</li>
                        <li>
                            <button className='save-btn' onClick={onClickSave}>저장</button>
                        </li>
                        <li>
                            <div onClick={onClickList} className="not-delivery">
                                <div className="p2"><img src="./img/sub/sub5/attention.svg" alt="" />샛별배송 지역 중 배송불가 장소 안내</div>
                                <div className="p3">관공서 / 학교 / 병원 / 시장 / 공단지역 / 산간지역 / 백화점 
                                
                                
                                
                                <span onClick={onClickList} className={state.isarrow ? 'top' : 'bottom'}>
                                    {state.isspecific ? '자세히 보기' : '간략히 보기'}
                                    <img src="./img/sub/sub5/arrow_down.svg" alt="" />
                                </span>
                                </div>
                            </div>
                        </li>
                        {state.islist &&
                        <div  className="list">
                            <ul>
                                <li>가락동농수산물도매시장</li>
                                <li>가락동농수산물시장</li>
                                <li>가천대학교</li>
                                <li>고려대학교안암캠퍼스</li>
                                <li>고매동 일부(일부지역만 배송가능)</li>
                                <li>국립중앙박물관</li>
                                <li>국민대학교</li>
                                <li>덕성여자대학교</li>
                                <li>덕양구 신원동 일부(일부지역만 배송가능)</li>
                                <li>도내동 일부(원흥지구만 배송가능)</li>
                                <li>동덕여자대학교</li>
                                <li>반월특수지구</li>
                                <li>서경대학교</li>
                                <li>서울사이버대학교</li>
                                <li>서울시립대학교</li>
                                <li>서울여자대학교</li>
                                <li>성균관대학교</li>
                                <li>성신여자대학교</li>
                                <li>세종대학교</li>
                                <li>연세대학교</li>
                                <li>이화여자대학교</li>
                                <li>한국외국어대학교</li>
                                <li>홍익대학교</li>
                            </ul>
                        </div>
                    }
                    </ul>
                </div>
                <Postcode
                className='post-code'
                style={postCodeStyle} 
                onComplete={onCompletePostCode}/>
            </div>
        </div>
    );
};