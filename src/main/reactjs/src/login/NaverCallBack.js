// import React, {useEffect} from 'react';
// import {useLocation} from "react-router-dom";
// import axios from "axios";
//
// function NaverCallBack(props) {
//     const location = useLocation();
//
//     const getNaverToken = () => {
//         const { naver } = window;
//         const naverLogin = new naver.LoginWithNaverId({
//             clientId: "AmX1zvlO8VFKoSiQZoaz",
//             callbackUrl: "http://localhost:3000/login/ncallback",
//         });
//
//         naverLogin.init();
//         if (!location.hash) return;
//         const token = location.hash.split('=')[1].split('&')[0]; //token 출력
//         console.log("token:" + token);
//
//         naverLogin.getLoginStatus((status) => {
//             if (status) { // 로그인 상태 값이 있을 경우
//                 console.log("naverLogin.user:", naverLogin.user); // 사용자 정보 조회
//             }
//         });
//
//         axios.get('https://openapi.naver.com/v1/nid/me', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             }
//         })
//             .then(response => {
//                 const userInfo = response.data;
//                 // 사용자 정보를 이용하여 필요한 작업 수행
//                 console.log(userInfo);
//             })
//             .catch(error => {
//                 // 에러 처리
//                 console.error(error);
//             });
//     };
//
//     useEffect(() => {
//         getNaverToken();
//     }, []);
//
//     return (
//         <div>
//             navercall
//         </div>
//     );
// }
//
// export default NaverCallBack;

import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function NaverCallBack(props) {
    const location = useLocation();
    const navi = useNavigate();
    const [uemail, setUemail] = useState('');
    const [uname, setUname] = useState('');
    const [unickname, setUnickname] = useState('');
    const [ugender, setUgender] = useState('');
    const [uhp, setUhp] = useState('');
    const [uage, setUage] = useState('');


    const getNaverToken = () => {
        const {naver} = window;
        const naverLogin = new naver.LoginWithNaverId({
            clientId: "AmX1zvlO8VFKoSiQZoaz",
            callbackUrl: "http://localhost:3000/login/ncallback",
        });
        naverLogin.init();
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0]; //token 출력
        console.log("token:" + token);

        naverLogin.getLoginStatus((status) => {
            console.log("status:" + status)
            if (status) { // 로그인 상태 값이 있을 경우
                console.log("naverLogin.user:", naverLogin.user); // 사용자 정보 조회
                console.log("naverLogin.user.email:" + naverLogin.user.email)
                console.log("naverLogin.user.age:" + naverLogin.user.name)
                console.log("naverLogin.user.nickname:" + naverLogin.user.nickname)
                console.log("naverLogin.user.gender:" + naverLogin.user.gender)
                console.log("naverLogin.user.gender:" + naverLogin.user.birthday)//08-25
                console.log("naverLogin.user.gender:" + naverLogin.user.birthyear)//1997
                console.log("naverLogin.user.gender:" + naverLogin.user.mobile)//010-8545-4961
                axios.get(`/login/signchk?uemail=${naverLogin.user.email}`)
                    .then(res => {
                        if (res.data == 0) { //회원가입해야함
                            console.log("email:" + naverLogin.user.email);
                            navi("/login/sign", {
                                state: {
                                    uemail: naverLogin.user.email,
                                    uname: naverLogin.user.name,
                                    unickname: naverLogin.user.nickname,
                                    ugender: naverLogin.user.gender=="M"?"남":"여",
                                    uhp: naverLogin.user.mobile,
                                    uage: `${naverLogin.user.birthyear}-${naverLogin.user.birthday}`
                                }
                            })
                        } else {
                            sessionStorage.setItem("unum", `${res.data}`)
                            navi("/")
                        }
                    })
            } else {
                console.log("로그인정보 없음")
            }
        });
    };
    useEffect(() => {
        getNaverToken();
    }, []);
    return (
        <div>
            navercall
        </div>
    );
}

export default NaverCallBack;