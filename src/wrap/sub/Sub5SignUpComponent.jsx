import React from 'react';
import './sass/sub5.scss'
import axios from 'axios';

export default function Sub5SignUpComponent ({회원가입, isConfirmModal, sendConfirmOpen, AddressSearchModalOepn, 주소1, 주소2}) {

    
    const [state, setState] = React.useState(회원가입) //회원가입이 기준점

    const {
        아이디, 비밀번호1, 비밀번호2, 이메일, 휴대폰1, 인증번호입력, 이름, 인증번호발송, 성별, 생년, 생월, 생일, 체크필수항목카운트, is이메일중복확인,
        is인증번호확인, is인증번호입력, is주소검색, is추가입력사항, is아이디중복확인, is휴대폰번호인증확인, 추가입력사항, 이벤트명, 이용약관동의, 전체동의, 추천인아이디, is인증번호성공, info_Id, info_pw1, info_pw2, info_name, info_hp, info_email, info_birth} = state; //비구조화 전에 비슷한 거 했었음
    
    // <p>최소 10자 이상 입력</p>
    //<p>동일한 숫자 3개 이상 연속 사용 불가</p>
    //<p>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>
    //    <p>동일한 비밀번호를 입력</p>
    //    <p>이메일 형식으로 입력해 주세요.</p>
    

    React.useEffect(()=>{
        
        if(주소1!=='' && 주소2!==''){            
            setState({
                ...state,
                is주소검색: true
            });
        }

    },[주소1, 주소2]);

    const onChangeId=(e)=>{       
        // 정규표현식(정규식) RegExp
        // (영문+필수 +1자이상) 혹은 (숫자)*0자이상 을 조합) [영문숫자]{6자 이상 16자 이하}의
        const regExp = /(?=.*[A-Za-z])+(?=.*[\d])*[A-Za-z0-9]{6,16}/g;
        let info_id = '';
        // 검증(test() => true  또는 false) 통과되면 저장
        // 정규표현식.test(문자열)
        if( regExp.test(e.target.value)===false ){
            info_id = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }
        else {  // 유효성 검증 false
            info_id = '';
        }

        setState({                       
            ...state,
            아이디: e.target.value,  
            info_id: info_id  // 안내 텍스트         
        })
    }

    const onClickIdBtn=(e)=>{
        e.preventDefault();
        const regExp = /(?=.*[A-Za-z])+(?=.*[\d])*[A-Za-z0-9]{6,16}/g;
        if(regExp.test(아이디)===false){
            sendConfirmOpen('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합')
        }
        else {
            //2. 중복검사
            const formData = new FormData();
            formData.append('id', 아이디);

            axios({
                url:'http://qwefg.dothome.co.kr/kurly_home/select_id_check.php',
                method:'POST',
                data:formData
            })
            .then((res)=>{
                console.log(res.data)
                if(res.status === 200){
                    if(Number(res.data)===0){
                        sendConfirmOpen('사용 할 수 있는 아이디 입니다.')
                        setState({
                            ...state,
                            is아이디중복확인:true
                        })
                    }
                    else {
                        sendConfirmOpen('사용 불가능한 아이디 입니다.')
                        setState({
                            ...state,
                            is아이디중복확인:false
                        })
                    }
                }
            })
            .catch((err)=>{
                console.log(err)
                console.log('AXIOS 실패')
            })
            
        }
    }
    //2. 비밀번호
    //최소 10자 이상 입력 (.){10,}
    //공백제외 \s-> 공백
    //동일한 숫자 3개 이상 연속 사용 불가
    //영문/숫자/특수문자만 허용하며, 2개 이상 조합
    // / 입력할 땐 역슬래쉬 같이 써주기 \/
    const onChangePw1 =(e)=> { 
        
        const RegExp1 = /(.){10,}/g
        const RegExp2 = /\s/g
        //3.동일한 숫자(\d)) 세 개[0-9] 이상 연속 사용 불가
        const RegExp3 = /(\d)\1\1/g // d == 1개 \d\1 == 2개 \d\1\1 === 3개
        //4. 영문/숫자/특수문자만 허용, 2개이상 조합
        
        // 영문+숫자+. 영문+특수문자+, 숫자+특수문자+
        //([a-zA-z]+[\d+) ([a-zA-z]+[~`₩!@#$%^&*()_+-={}[]:;'"<>?,./]+) ([\d]+[~`₩!@#$%^&*()_+-={}[]:;'"<>?,./]+)    
        //  특수문자를 문자로 인식하게 해주는 역슬래쉬  \\  \-    \]
        const RegExp4 = /(([a-zA-z]+[\d]+)+)|(([\d]+[a-zA-Z]+)+)|(([A-Z]+[`~₩!@#$%^&*()_+\-={}[\]:;'"<>\?,.\/\\]+)+)|(([~₩!@#$%^&*()_+-={}[]:;'"<\?,.\/]+[A-Z]+)+)|(([\d]+[`~₩!@#$%^&*()_+\-={}[\]:;'"<>\?,.\/]+)+)|(([~₩!@#$%^&*()_+-={}[]:;'"<>\?,.\/]+[\d]+)+)/gi
        let info_pw = '';

        if(RegExp1.test(e.target.value)===false){ //최소 10자 이상이 아니라면
            info_pw = '최소 10자 이상 입력'
        }
        if(RegExp2.test(e.target.value)===true){ //공백이 있다면
            info_pw = '공백제외'
        }
        if(RegExp3.test(e.target.value)===true){//동일한 숫자 세 개 이상 연속 사용 시
            info_pw = '동일한 숫자 세 개 이상 연속 사용 불가'
        }
        if(RegExp4.test(e.target.value)===false){//영문숫자특수문자만 허용, 2개이상 조합이 아니라면
            info_pw = '영문/숫자/특수문자만 허용, 2개이상 조합'
        }
        setState({
            ...state,
             비밀번호1: e.target.value,
             info_pw1 : info_pw
             //왕 됐당!!!!!!!!!!!!!!!!! ㅠ푸하하ㅏ하하 기분 짱 좋넹
       })
    }
    const onChangePw2 =(e)=> { 
        let info_pw = '';
        
        
        if(e.target.value!==비밀번호1){
            info_pw = '동일한 비빌번호를 입력'
        }
       setState({
            ...state,
            비밀번호2 : e.target.value,
            info_pw2 : info_pw
       })
    }
    // 4.이름
    // 이름을 입력해주세요.
    // 띄어쓰기 X
    // 1~20자

    const onChangeName=(e)=>{
        const regExp = /[`~!@#$%^&*()\-_=+\\|[\]{}'";:/?.,<>]/g;
        let 이름 = e.target.value;
        이름 = e.target.value.replace(regExp, '');

        setState({
            ...state,
            이름: 이름,
        })
    }


    const onChangeEmail =(e)=> { 
        const regExp = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+([.]?[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+)*@[A-Za-z0-9]+[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?.]*\.[A-Za-z]{2,3}$/g
        let info_email= '';
        
        if(regExp.test(e.target.value)===false){
            info_email = '이메일 형식으로 입력해주세요.'
        }
        else if(e.target.value===''){ // else => false가 아니라 true면
            info_email = '이메일을 입력해 주세요'
        } 
        else {//false가 아니라 true이고 빈칸이 아닌 경우
            info_email = ''
        }

       setState({
            ...state,
            이메일 : e.target.value,
            info_email : info_email
        
       })
    }

    //이메일 중복확인 버튼 이벤트
    const onClickEmailBtn = (e) => {
        e.preventDefault();
        const regExp = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+([.]?[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+)*@[A-Za-z0-9]+[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?.]*\.[A-Za-z]{2,3}$/g

        if(이메일 ===''){
            sendConfirmOpen('이메일을 입력해 주세요.');
        }
        else if(regExp.test(이메일)===false){
            sendConfirmOpen('이메일 형식을 확인 해 주세요.');
        }
        else {

            //2. 중복검사
            const formData = new FormData();
            formData.append('email', 이메일);

            axios({
                url:'http://qwefg.dothome.co.kr/kurly_home/select_email_check.php',
                method:'POST',
                data:formData
            })
            .then((res)=>{
                if(res.status === 200){
                    if(res.data===0){
                        sendConfirmOpen('사용 할 수 있는 이메일 입니다.')
                        setState({
                            ...state,
                            is이메일중복확인:true
                        })
                    }
                    else {
                        sendConfirmOpen('사용 불가능한 이메일 입니다.')
                        setState({
                            ...state,
                            is이메일중복확인:false
                        })
                    }
                }
            })
            .catch((err)=>{
                console.log(err)
                console.log('AXIOS 실패')
            })
            
        }
    }
    
    //휴대폰
    //숫자만 입력하세요 \d
    const onChangeHp1 = (e) => {
        const regExp = /[^\d]/g
        let info_hp = '';
        let is인증번호받기 = false;
        let 휴대폰1 = e.target.value;

        휴대폰1 = e.target.value.replace(regExp, ''); //공백 삭제
        
    
        if(휴대폰1.length>=1){
            is인증번호받기 = true
        }
        else {
            is인증번호받기 = false
        }
        if(regExp.test(e.target.value)===''){
            info_hp = '휴대폰 번호를 입력해주세요'
        }
        else {
            info_hp = ''
        }
        setState({
            ...state,
            휴대폰1:휴대폰1,
            info_hp:info_hp,
            is인증번호받기 : is인증번호받기
        })
    }
    
    //휴대폰 인증번호 받기 클릭 이벤트 번호 검증
    const onClickAuthenNum = (e) => {
        e.preventDefault();

        if(is인증번호성공===true){
        }
        else {
            setState({
                ...state,
                휴대폰:'',
                is인증번호성공:false //초기화 
            })
        }

        const regExp = /^01[\d]{1}[\d]{3,4}[\d]{4}/g //버튼 클릭시 검증
        let is인증번호받기 = true;
        let is인증번호확인 = false;
        let 인증번호발송 = '';

        if(regExp.test(휴대폰1)===false){
            sendConfirmOpen("잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.");
            is인증번호받기 = true;
            is인증번호확인 = false;
        }
        else {
            인증번호발송 = Math.floor((Math.random() * 900000) + 100000);   
            is인증번호받기 = false;
            is인증번호확인 = true;
            sendConfirmOpen(`인증번호가 발송되었습니다. ${인증번호발송}`) // 인증번호발송보다 위에 있으면 번호 안 나오고 아래에 있으면 번호 나옴
        }
        setState({
            ...state,
            is인증번호받기 : is인증번호받기,
            is인증번호확인 : is인증번호확인,
            인증번호발송 : 인증번호발송
        })
    }

    //인증번호 입력상자 온체인지 이벤트
    //입력된 숫자는 문자열이 됨, 문자열을 숫자로 변환 시켜줘야 함
    const onChangeHp2 = (e) => {
        let is인증번호입력 = false;

        if(e.target.value.length>=1){
            is인증번호입력 = true
        }
        else {
            is인증번호입력 = false 
        }
        setState({
            ...state,
            is인증번호입력:is인증번호입력,
            인증번호입력 : Number(e.target.value)
        })
    }

    //인증번호 완료하고 확인버튼 클릭
    //인증번호 같다면
    //인증에 성공하였습니다.
    //다르다면
    //인증에 실패하셨습니다.
    

    const onClickAuthenNumInput=(e)=>{
        let is인증번호성공 = false;
        let is인증번호확인 = false;
        let is인증번호받기 = false;
        let is휴대폰번호인증확인 = false;
        
        if(인증번호입력===인증번호발송){
            is인증번호성공 = true;
            is인증번호확인 = false;
            is인증번호받기 = true;
            is휴대폰번호인증확인 = true;
            sendConfirmOpen(`인증에 성공 하였습니다.`)
        }
        else {
            is인증번호성공 = false;
            is인증번호확인 = true;
            is인증번호받기 = true;
            is휴대폰번호인증확인 = false;
            sendConfirmOpen('잘못된 인증 코드 입니다.')

        }
        setState({//한 번에 setState 하기 위해서 임시변수 만듦
            ...state,
            is인증번호성공 : is인증번호성공,
            is인증번호받기 : is인증번호받기,
            is인증번호확인 : is인증번호확인,
            is휴대폰번호인증확인 : is휴대폰번호인증확인
        })
    }

    const onClickAddressSearchModalOepn = (e) => {
        e.preventDefault();
        AddressSearchModalOepn();
    }


    //성별 radio
    const onChangeGender =(e)=>{
        setState({
            ...state,
            성별:e.target.value
        })
    }

    //생년
    const onChangeYear=(e)=>{
        setState({
            ...state,
            생년:e.target.value
        })
    }
    //생월
    const onChangeMonth=(e)=>{
        setState({
            ...state,
            생월:e.target.value
        })
    }
    //생일
    const onChangeDate=(e)=>{
        setState({
            ...state,
            생일:e.target.value
        })
    }

    // 생년
    // 생년월일을 다시 확인해주세요.
    // 생년월일이 미래로 입력되었습니다.
    // 태어난 년도 4자리를 정확하게 입력해주세요.
    // 만 14세 미만은 가입이 불가합니다.

    //생월
    //태어난 월을 정확하게 입력해주세요.

    //생일
    //태어난 일을 정화갛게 입력해주세요.
    React.useEffect(()=>{
        if(생년==='' && 생월==='' && 생일===''){
            setState({
                ...state,
                info_birth: '오류메세지 테스트'
            })
        }
        else {
            if(생년===''){
                setState({
                    ...state,
                    info_birth: '태어난 년도 4자리를 정확하게 입력해주세요.'
                })
            }
            else {
                if(Number(생년) < ((new Date().getFullYear())-100)){
                   setState({
                    ...state,
                    info_birth:'생년월일을 다시 확인해주세요.'
                   })
                }
                else if (Number(생년) > ((new Date().getFullYear()))){
                    setState({
                        ...state,
                        info_birth : '생년월일이 미래로 입력되었습니다.'
                    })
                }
                else if(Number(생년) > ((new Date().getFullYear())-14)){
                 setState({
                     ...state,
                     info_birth:'만 14세 미만은 가입이 불가합니다.'
                 })
                }
                else { //생년 조건 모두 만족시 초기화 --> 생월로 ㄱㄱ 이 부분 개념 이해 안 됨
                    setState({
                        ...state,
                        info_birth:''
                    })
                
                    if (생월==='' || Number(생월) < 1 || Number(생월) > 12){
                        setState({
                            ...state,
                            info_birth : '태어난 월을 정확히 입력해주세요.'
                        })
                    }
                    else {
                        if (생일==='' || Number(생일) < 1 || Number(생일) > 31){
                            setState({
                                ...state,
                                info_birth : '태어난 일을 정확히 입력해주세요.'
                            })
                        }
                        else {
                            setState({
                                ...state,
                                info_birth : ''
                            })
                        }
                    }
                }
            }
        }
    }, [생년, 생월, 생일])


    //추가 입력사항 체크

    const onChangechooga=(e)=>{
        setState({
            ...state,
            is추가입력사항:true,
            추가입력사항:e.target.value
        })
    }

    const onChangeEvent=(e)=>{
        setState({
            ...state,
            is추가입력사항:true,
            추가입력사항:e.target.value
        })
    }
    // 추천인 아이디 상자
    const onChangechoogaId=(e)=>{
        setState({
            ...state,
            추천인아이디:e.target.value
        })
    }
    const onChangechoogaEvent=(e)=>{
        setState({
            ...state,
            이벤트명:e.target.value
        })
    }

    const onChangeAllAgree=(e)=>{
        if(e.target.checked===true){//checked가 선택이 되면 ~ 
            setState({
                ...state,
                전체동의: 이용약관동의 
            })
        }
        else {
            setState({
                ...state,
                전체동의:[]
            })
        }
    }


const onChangeCheck =(e)=>{
    let imsi = [];
    if(e.target.checked===true){
        imsi = [...전체동의, e.target.value]
    }
    else {
        imsi = 전체동의.filter((item)=>item !== e.target.value)
    }
    setState({
        ...state,
        전체동의:imsi
    })
}

React.useEffect(()=>{
    const arr = 전체동의.map((item)=>item.includes('필수') ? 1 : 0)
    let sum = 0;
    arr.map((item)=>{
        sum += item
    })
    setState({
        ...state,
        체크필수항목카운트:sum
    })
}, [전체동의]) //이용약관동의가 움직이면 움직이는 useEffect~


// 추가입력사항 추천인 아이디 추천
const onClickChooChunId=(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', 추천인아이디);

    axios({
        url:'http://qwefg.dothome.co.kr/kurly_home/select_ChooChun_Id.php',
        method:'POST',
        data : formData
    })
    .then((res)=>{
        if(res.status===200){
            console.log(res.data)
            if(res.data===1){
            sendConfirmOpen('존재하는 아이디 입니다. 친구초대 이벤트에 참여 가능해요')
            }
            else {

            sendConfirmOpen('존재하지 않는 아이디 입니다.')
            }
        }
    })
    .catch((err)=>{
        console.log(err)
        console.log('axios 실패!')
    })
}

//폼 전송 이벤트온 서브밋 이벤트
const onSubmitSignUp=(e)=>{
    e.preventDefault();
    //아이디의 모든 빈 값 체크(먼저) 상태변수로 체크
    if(아이디 === ""){
        sendConfirmOpen('아이디를 입력하세요')
    }
    else if(is아이디중복확인 === false){
        sendConfirmOpen('아이디 중복확인을 하세요')
    }
    else if(비밀번호1 === ""){
        sendConfirmOpen('비밀번호를 입력하세요')
    }
    else if(비밀번호2 === ""){
        sendConfirmOpen('비밀번호를 한 번 더 입력하세요')
    }
    else if(이름 === ""){
        sendConfirmOpen('이름을 입력하세요')
    }
    else if(이메일 === ""){
        sendConfirmOpen('이메일을 입력하세요')
    }
    else if(is이메일중복확인 === false){
        sendConfirmOpen('이메일 중복확인을 하세요')
    }
    else if(휴대폰1 === ""){
        sendConfirmOpen('휴대폰 번호를 입력하세요')
    }
    else if(is휴대폰번호인증확인 === false){
        sendConfirmOpen('휴대폰 번호를 인증하세요')
    }
    else if(주소1 === ""){
        sendConfirmOpen('주소를 입력하세요')
    }
    else if(주소2 === ""){ 
        sendConfirmOpen('주소를 입력하세요')
    }
    else if(체크필수항목카운트 !== 3){
        sendConfirmOpen('이용약관동의 필수 항목 3개 이상을 선택하세요.')
    }
    else {
        //모두 정상이면!!
        //전송준비
        //
        const regExp = /^(\d{3})(\d{3,4})([0-9]{4})$/g;
        //사용될 객체 생성

            const formData = new FormData(); // 폼데이터 객체 생성
            formData.append('id', 아이디);
            formData.append('pw', 비밀번호1);
            formData.append('name', 이름);
            formData.append('email', 이메일);
            formData.append('hp', 휴대폰1.replace(regExp, '$1-$2-$3')); 
            formData.append('addr', `${주소1} ${주소2}`);
            formData.append('gender', 성별);
            formData.append('birth', `${생년}-${생월}-${생일}`);
            formData.append('chooga_input', `${추가입력사항} ${이벤트명} ${추천인아이디}`);
            formData.append('service', 전체동의);




        axios({
            url: 'http://qwefg.dothome.co.kr/kurly_home/signUp.php',
            method:'POST',
            data: formData
        })
        .then((res)=>{
            console.log(res)
            console.log(res.status)
            console.log(res.data)
            if(res.status===200){
                if(res.data===1){

                // window.location.href = "/i ndex"
                    sendConfirmOpen('화원가입을 진심으로 감사드립니다.')
                    setTimeout(()=>{
                            window.location.pathname = '/index'
                    }, 3000)

                }
                else {
                    sendConfirmOpen('회원가입 폼데이터를 확인하고 다시 시도해주세요.')
                }
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    }
}

    return (
        <main id='sub5' className='main'>
            <div id="signUp">
                <div className="container">
                    <div className="title">
                        <h2>회원가입</h2>
                        <h3><em><i>*</i>필수입력사항</em></h3>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitSignUp}>
                        <ul>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">아이디<i>*</i></label>
                                    <input type="text"
                                    name='user_id'
                                    id='userId'
                                    placeholder='아이디를 입력해주세요'
                                    onChange={onChangeId}
                                    value={아이디}
                                    maxLength={16}
                                    />
                                    <button onClick={onClickIdBtn} className='right'>중복확인</button>
                                    <p className='info'>{info_Id}</p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">비밀번호<i>*</i></label>
                                    <input type="password"
                                     name='user_pw1'
                                      id='userPw1'
                                       placeholder='비밀번호를 입력해주세요'
                                       onChange={onChangePw1}
                                       value={비밀번호1}
                                       maxLength={16}
                                       />
                                   <p className='info'>{info_pw1}</p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">비밀번호확인<i>*</i></label>
                                    <input type="password"
                                     name='user_pw'
                                      id='userPw'
                                       placeholder='비밀번호를 한번 더 입력해주세요'
                                       onChange={onChangePw2}
                                       value={비밀번호2}
                                       maxLength={16}
                                       />
                                    <p className='info'>{info_pw2}</p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userName">이름<i>*</i></label>
                                    <input type="text" name='user_name' id='userName' placeholder='이름을 입력해 주세요' value={이름} onChange={onChangeName} maxLength='30' />
                                    <p className='info'>{info_name} </p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">이메일<i>*</i></label>
                                    <input type="text"
                                    name='user_emial'
                                    id='userEmail'
                                    placeholder='예: marketkurly@kurly.com'
                                    onChange={onChangeEmail}
                                    value={이메일}
                                    maxLength={100}/>
                                    <button onClick={onClickEmailBtn} className='right'>중복확인</button>
                                    <p className='info'>{info_email}</p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">휴대폰<i>*</i></label>
                                    <input type="text"
                                    name='user_hp'
                                    id='userHp'
                                    placeholder='숫자만 입력해주세요'
                                    onChange={onChangeHp1}
                                    value={휴대폰1}
                                    maxLength={11} />
                                    <p className='info'>{info_hp}</p>
                                    <button onClick={onClickAuthenNum} className={`right${state.is인증번호받기 ? '' : ' off' }`}>{is인증번호성공 ? '다른번호 인증' : '인증번호 받기'}</button>
                                </div>
                            </li>

                            { is인증번호확인 &&(
                            <li>
                                <div className="gap">
                                    <input type="text"
                                    name='user_hp2'
                                    id='userHp2'
                                    placeholder='숫자만 입력해주세요'
                                    onChange={onChangeHp2}
                                    value={인증번호입력}
                                    maxLength={11} />

                                    <button
                                    className={`right${is인증번호입력 ? '' : ' off' }`}
                                    onClick={onClickAuthenNumInput}
                                    >인증번호 확인</button>
                                </div>
                            </li>)
                            }
                            
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">주소<i>*</i></label>
                                        {
                                            is주소검색 && (<input type="text" name='user_addr1' id='userAddr1' placeholder='숫자만 입력해주세요' value={주소1} />)
                                        }
                                    <button onClick={onClickAddressSearchModalOepn} className={`right address${is주소검색?' on':''}`}>
                                        <img src="./img/sub/sub5/ico_search.svg" alt="" />{is주소검색?'재검색':'주소 검색'}</button>
                                    { 
                                    !is주소검색 && //트루일 때 안 보이고 펄스면 보임(느낌표 때매)
                                    <><br/><em>배송지에 따라 상품 정보가 달라질 수 있습니다.</em></> //원래 한 묶음(li)일 때 하나 씩 되는데 이건 라벨이랑 두 개 되서 빈 박스로 묶어줌
                                }
                                </div>
                            </li>
                            { is주소검색 && 
                            <>
                            <li>
                                <div className="gap">
                                    <input type="text" name='user_id' id='userId' placeholder='나머지 주소를 입력해주세요' value={주소2}/>
                                </div>
                            </li>
                             <li>
                             <div className="gap">
                                <div className="address-tip-box">
                                    <strong>샛별배송</strong>
                                    <><br/><br/><em>배송지에 따라 상품 정보가 달라질 수 있습니다.</em></>
                                </div>
                             </div>
                            </li>
                         </>
                            }
                            
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">성별</label>
                                    <div className="gender-box">
                                        <label htmlFor="male">
                                            <input 
                                                    type="radio" 
                                                    name='gender' 
                                                    id='male' 
                                                    value='남자' 
                                                    onChange={onChangeGender} 
                                                    
                                                    checked={state.성별.includes('남자')}
                                        />남자</label>
                                        <label htmlFor="female"><input type="radio" 
                                        name='gender' 
                                        id='female' 
                                        value='여자'
                                        onChange={onChangeGender}
                                        checked={성별.includes('여자')}
                                        />여자</label>
                                        <label htmlFor="none"><input type="radio" 
                                        name='gender' 
                                        id='none' 
                                        value='선택안함'
                                        onChange={onChangeGender}
                                        checked={성별.includes('선택안함')}/>선택안함</label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="userId">생년월일</label>
                                        <div className="birth-box">
                                        <input type="text" 
                                        name='year' 
                                        id='year' 
                                        placeholder='YYYY'
                                        onChange={onChangeYear}
                                        value={생년}
                                        maxLength={4}/>
                                        <i>/</i>
                                        <input type="text" 
                                        name='month' 
                                        id='month' 
                                        placeholder='MM'
                                        onChange={onChangeMonth}
                                        value={생월}
                                        maxLength={2}
                                         />
                                        <i>/</i>
                                        <input type="text" 
                                        name='date' 
                                        id='date' 
                                        placeholder='DD'
                                        onChange={onChangeDate}
                                        value={생일}
                                        maxLength={2}/>
                                    </div>
                                        <p className='info'>{info_birth}</p>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                        <label>추가입력 사항</label>
                                    <div className="add-box">
                                        <label htmlFor="add1"><input type="radio"
                                        name='add'
                                        id='add1'
                                        value='친구초대 추천인 아이디'
                                        onChange={onChangechooga}/>친구초대 추천인 아이디</label>
                                        <label htmlFor="add2"><input type="radio" name='add' id='add2' value='참여 이벤트명'
                                        onChange={onChangeEvent}/>참여 이벤트명</label>
                                    </div>
                                </div>
                            </li>
                            {
                        is추가입력사항 && (<>
                            <li>
                                            <div className='gap choocheon'>
                                                {
                                                추가입력사항 === '친구초대 추천인 아이디' && <>
                                                    <input type="text" name='chooChun1_Id' id='chooChun1' placeholder='추천인 아이디를 입력해 주세요.'
                                                    onChange={onChangechoogaId}
                                                    value={state.추가입력사항.추천인아이디}/>
                                                    <button className='right'
                                                    onClick={onClickChooChunId}>아이디 확인</button>
                                                </>
                                                }

                                                {
                                                추가입력사항 === '참여 이벤트명' && 
                                                <input type="text" name='chamEvent_Id' id='chamEventId' placeholder='참여 이벤트명을 입력해주세요.'
                                                onChange={onChangechoogaEvent}
                                                value={state.추가입력사항.이벤트명}/>
                                                }
                                            </div>
                            </li>
                            <li>
                                            <div className="gap comment">
                                                {
                                            추가입력사항 === '친구초대 추천인 아이디' &&
                                                <em>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</em>
                                            }
                                            {
                                            추가입력사항 === '참여 이벤트명' && 
                                                <em>추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다. <br />가입 이후는 수정이 불가능 합니다.<br />대소문자 및 띄어쓰기에 유의해주세요.</em>
                                            }
                                            </div>
                            </li>
                            </>)
                                }
                            <hr />
                            <li>
                                <div className="gap service-gap">
                                    <label htmlFor="service-label">이용약관 동의<i>*</i></label>
                                    <div className="service">
                                        <label className='check1' htmlFor="check1"><input type="checkbox" name='service' id='check1' value='전체 동의합니다.'
                                        onChange={onChangeAllAgree}
                                        checked={전체동의.length===7}
                                        />전체 동의합니다.</label><br />
                                        <em className="sub-text">선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</em>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='gap service-gap'>
                                    <div className="service">
                                    <label htmlFor="check2"><input type="checkbox" name='service' id='check2' value='이용약관 동의(필수)'
                                    onChange={onChangeCheck}
                                    checked={전체동의.includes('이용약관 동의(필수)')}/>이용약관 동의</label><span>(필수)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                    <div className="service">
                                        <label htmlFor="check3"><input type="checkbox" name='service' id='check3' value='개인정보 수집∙이용 동의(필수)'
                                        onChange={onChangeCheck}
                                        checked={전체동의.includes('개인정보 수집∙이용 동의(필수)')}/>개인정보 수집∙이용 동의</label><span>(필수)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                    <div className="service">
                                        <label htmlFor="check4"><input type="checkbox" name='service' id='check4' value='개인정보 수집∙이용 동의(선택)'
                                        checked={전체동의.includes('개인정보 수집∙이용 동의(선택)')}
                                        onChange={onChangeCheck}/>개인정보 수집∙이용 동의</label><span>(선택)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                    <div className="service">
                                        <label htmlFor="check5"><input type="checkbox" name='service' id='check5' value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'
                                        checked={전체동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')}
                                        onChange={onChangeCheck}/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)</label><span>(선택)</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                    <div className="service sns">
                                        <label htmlFor="check6"><input type="checkbox" name='service' id='check6' value='SMS'checked={전체동의.includes('SMS')}
                                    onChange={onChangeCheck}/>SMS</label>
                                        <label htmlFor="check7"><input type="checkbox" name='service' id='check7' value='이메일'
                                        checked={전체동의.includes('이메일')}
                                    onChange={onChangeCheck}/>이메일</label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                   <div className="service">
                                    <em className='sns'><img src="./img/sub/sub5/ico_sub_dot.svg" alt="" />동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</em>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap service-gap">
                                    <div className="service">
                                        <label htmlFor="check8"><input type="checkbox" name='service' id='check8' value='본인은 만 14세 이상입니다.(필수)'
                                        checked={전체동의.includes('본인은 만 14세 이상입니다.(필수)')}
                                    onChange={onChangeCheck}/>본인은 만 14세 이상입니다.</label><span>(필수)</span>
                                    </div>
                                </div>
                            </li>
                            <hr className='last-hr'/>
                            <div className="button-box">
                                <button type='summit'>가입하기</button>
                            </div>
                        </ul>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

Sub5SignUpComponent.defaultProps = {

    회원가입 : {//멤버라는 변수객체를 맨들어줌

        인증번호발송:'',

        아이디: '',
        비밀번호1: '',
        비밀번호2: '',
        이메일: '',
        이름:'',
        휴대폰1 : '',
        인증번호입력 : '',
        성별:'선택안함',
        생년: '',
        생월: '',
        생일: '',

        추천인아이디:'',
        이벤트명:'',
        체크필수항목카운트:0,

        이용약관동의:[
            '이용약관 동의(필수)',
            '개인정보 수집∙이용 동의(필수)',
            '개인정보 수집∙이용 동의(선택)',
            '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)',
            'SMS', '이메일',
            '본인은 만 14세 이상입니다.(필수)'
            ],
        전체동의:[],

        is인증번호확인:false, //참이냐 펄스냐 이니까 is 붙임
        is인증번호입력:false,
        is인증번호받기:false,
        is인증번호성공:false,
        is주소검색 : false,
        is추가입력사항:false,
        추가입력사항:'  ', //선택이 되면 값이 들어감
        is아이디중복확인:false,
        is휴대폰번호인증확인 : false,
        is이메일중복확인:false,


        //가이드 텍스트(오류문자)
        info_Id: ' ',
        info_pw1: ' ',
        info_pw2: ' ',
        info_email: ' ',
        info_birth: ' ',
        info_hp:'',
        
        
        
    }
}