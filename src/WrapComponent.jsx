import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import TopModalComponent from './wrap/TopModalComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import GoTopComponent from './wrap/GoTopComponent';
// 서브 컴포넌트
import Sub1Component from './wrap/sub/Sub1Component';
import Sub2Component from './wrap/sub/Sub2Component';
import Sub3Component from './wrap/sub/Sub3Component';
import Sub4Component from './wrap/sub/Sub4Component';
import Sub5SignUpComponent from './wrap/sub/Sub5SignUpComponent';
import Sub6SignInComponent from './wrap/sub/Sub6SignInComponent';
import Sub7NoticeComponent from './wrap/sub/Sub7NoticeComponent';
import ConfirmModal from './wrap/ConfirmModal';

//주소 검색창
import AddressSearch from './wrap/AddressSearch'
import './wrap/sass/wrap.scss'


export default function WrapComponent () {
    // 컨펌 모달
    const [state, setState] = React.useState({
        message:'저녁밥',
        isConfirmModal : false,
        isAddress : false,
        })
  
    // 주소
    const [address, setAddress] = React.useState({        
        주소1:'',
        주소2:'',
    }); 

    // 최근 본상품 
    const [product, setProduct] = React.useState({});// 첫 번째 데이터는 배열이 아닌 객체
    //객체는? 중괄호, 줄은 없고 한 줄의 데이터이지만 여러가지 속성이 들어감 
    const [flag, setFlag] = React.useState(false);
    const [viewProduct, setViewProduct] = React.useState([]);
    
    
    // 1. 지금 본 상품 클릭한 데이터가져오기
    const currentViewProduct=(item, imgPath)=>{
        const obj = {
            번호: item.번호,
            상품명: item.상품명,
            이미지: `${imgPath}${item.이미지}`,
            정가:item.정가,
            할인율:`${Math.round(item.할인율 * 100)}%`,
            판매가: Math.round(item.정가 * (1-item.할인율)),
            후기:item.후기
        } //이렇게 설정해주어야 클릭 했을 때 저장 됨
        setProduct(obj);
    }
    React.useEffect(()=>{
        

        // 저장된 데이터가 있는 경우에만 저장해야하하고 리포구조로 바뀌어야 해서 내용이 살짝 바뀌어야 함

        // 1. 임시 배열 생성한다
        let imsi = [];
        // 2. {} 객체 데이터가 있다면
        if(Object.keys(product).length > 0){
            imsi = [product];
        }
        // 3. 저장소에 데이터가 없다면 => 임시배열에 객체를 넣어서 저장소를 저장한다.
        if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null){
            if (imsi.length>0){
                localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(imsi));          
            }
        }

        // 4. 저장소 데이터가 있다면 => 데이터를 가져온다.
        // => 가져온 배열 데이터에 현재 클릭한 객체{}를 스택구조로 저장한다.
        else {
            if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null){
                return;
            }
            try{
                // 중복 검사
                // 중복 안 됨
                let result = JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT')) //배열데이터 가져오기  //JSON.parse() 배열로 만들어줌
                //중복 됨
                let filterResult = result.map((item)=>item.번호===product.번호) 
                console.log(filterResult);

                if(filterResult.includes(true)){
                    return;
                }
                else { //중복 안 됨
                    if(Object.keys(product).length>0){//product는 중괄호(객체)니까 소괄호로 묶은 다음에 object.keys로 묶어줌 // 객체가 있다면 
                        result = [product, ...result] // 새로운 데이터는 앞에 기존 데이터는 뒤에(스택)
                        // 최종 로컬스토레이지에 저장하기
                        localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(result))
                }
            }
            }
            catch(e){
            }
    }
        //프로덕트가 실행될 때매다 깃발 흔든다
        setFlag(!flag)
    },[product])

    //  if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null) 가 비어있다면 Imsi에 넣어서 저장하고 만약에 데이터가 있다면 기존거를 뽑아서 와라 
    // let result = localStorage.getItem('KURLY_VIEW_PRODUCT');이거 오류날 수도 있겠네요?? ㄴㄴ 오류 안 나지 왜냐면 위에서 이미 null값을 체크했고 eLse로 썼기 때문에 이 부분은 null이 아니란 얘기
    //    let result = localStorage.getItem('KURLY_VIEW_PRODUCT'); 얘를 배열로 가져왔지? 배열이 뭐야 JSON.stringify(imsi));문자로 된 거야 그래서 result = [product, ...result] 여기에 추가가 안 되기 때문에  localStorage.getItem('KURLY_VIEW_PRODUCT');얘를 배열로 만들어줘야 햠 JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT'));이렇게

    React.useEffect(()=>{
        if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null){
            return;
        }
        const result = JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT'));
        setViewProduct(result);

        // setViewProductMethod(); //최상위 세터 메소드 호출 실행  ==> 데이터 상태관리에 저장
    }, [flag])
    //3. 최근 본 상품 세터함수 메서드 (위에 있는 게 안 될 경우에 사용)




        const sendConfirmOpen = (message) => {
            setState({
                ...state,
                message:message,
                isConfirmModal : true
            })
        }

        const confirmModalClose = () => {
            setState({
                ...state,
                msg: '',
                isConfirmModal : false
            })
        }

        const AddressSearchModalOepn = () => {
            setState({
                ...state,
                isAddress : true
            })
        }
        const AddressSearchModalClose = () => {
            setState({
                ...state,
                isAddress : false
            })
        }

        //새로고침 혹은 로딩시
        //저장소에서 가져오기
        //그리고 상태관리자에 저장하기( 저장해서 계속 유지, 새로고침하면 새롭게 데이터가 들어옴)

        React.useEffect(()=>{
      
            try{ // 오류발생하면 캐치 문으로 보낸다.
                const result = JSON.parse(sessionStorage.getItem('POSTCODE_ADDRESS'));
                
                setAddress({
                    주소1: result.주소1,
                    주소2: result.주소2
                });
            }
            catch{  // 오류를 해결하고  리턴
               
            }
    
        },[address.주소1, address.주소2]); // 새로고침, 로딩시 1회, 

        const addressSave=(주소1,주소2)=>{
            setAddress({
                주소1: 주소1,
                주소2: 주소2
            });
        }

        
    return (
        <div id="wrap">
            <TopModalComponent />

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/' element={<HeaderComponent AddressSearchModalOepn={AddressSearchModalOepn} 주소1={address.주소1} 주소2={address.주소2}/>}>
                        <Route index element={<MainComponent  currentViewProduct={currentViewProduct} />}/>
                            <Route path='/index' element={<MainComponent  currentViewProduct={currentViewProduct} />}/>
                            <Route path='/sub1' element={<Sub1Component currentViewProduct={currentViewProduct}/>}/>
                            <Route path='/sub2' element={<Sub2Component currentViewProduct={currentViewProduct}/>}/>
                            <Route path='/sub3' element={<Sub3Component currentViewProduct={currentViewProduct}/>}/>
                            <Route path='/sub4' element={<Sub4Component />}/>
                            <Route path='/sub5' element={<Sub5SignUpComponent sendConfirmOpen={sendConfirmOpen} AddressSearchModalOepn={AddressSearchModalOepn} 주소1={address.주소1} 주소2={address.주소2} isConfirmModal={state.isConfirmModal} />}/>
                            <Route path='/sub6' element={<Sub6SignInComponent />}/>
                            <Route path='/sub7' element={<Sub7NoticeComponent />}/>
                        </Route>
                    </Routes>
                </BrowserRouter>

                
            <FooterComponent />
            <QuickMenuComponent viewProduct={viewProduct} />
            <GoTopComponent />
           {state.isConfirmModal &&
            <ConfirmModal message={state.message} confirmModalClose={confirmModalClose}  />}
            {state.isAddress &&
            <AddressSearch AddressSearchModalClose={AddressSearchModalClose} addressSave={addressSave}/>
        }
        </div>
    );
};
 