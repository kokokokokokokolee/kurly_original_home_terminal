import React from 'react';
import './sass/Confirmmodal.scss'

export default function ConfirmModal ({message, confirmModalClose}) {
    
    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        confirmModalClose();
    }
    return (
        <div id='confirmModal'>
            <div className="container">
                <div className="content">
                    <ul>
                        <li><p>{message}</p></li>
                        <li><button  onClick={onClickCloseBtn}>확인</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
