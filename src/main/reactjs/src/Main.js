import React, {useState, useEffect} from 'react';
import "./Main.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Recommendslider from "./app_effect/Recommendslider";
import no from "./images/golf_ad.jpg";
import Reviewslider from "./app_effect/Reviewslider";
import Bannerslider from "./app_effect/BannerSlider";
import FriendSlider from "./app_effect/FriendSlider";
import NoticeSlider from "./app_effect/NoticeSlider";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

function Main(props) {
    const [notice, setNotice]=useState([]);
    const [unum, setUnum] = useState(0);
    const navi = useNavigate();

    useEffect(() => {
        unumchk();
    }, []);

    const unumchk=()=>{
        axios.get("/login/unumChk")
            .then(res=> {
                setUnum(res.data);
            });
    }

    const chkLogin=()=>{
        if(unum===0){
            alert("먼저 로그인해 주세요");
            navi("/login/login");
        }
    }

    return (
        <div className={'mainpage'}>
            <div className='header'>
                <Header/>
            </div>

            <div className={'main_banner'} onClick={chkLogin}>
                
                <Bannerslider/>       
                
            </div>

            <div className={'main_notice'}>
                <NoticeSlider/>
            </div>



            <hr style={{height:'3px', backgroundColor:'lightgray'}}/>
            <div className={'main_friendtxt'} style={{marginLeft:'12px'}}>
                친구 추천
            </div>
            <div style={{width:'100vw',overflow:'hidden'}}>
                <div className={'main_friendrec'} style={{marginTop:'10px'}} onClick={chkLogin} >
                    <FriendSlider/>
                </div>
            </div>

            <hr style={{height:'3px', backgroundColor:'lightgray'}}/>


            <div style={{width:'100vw',overflow:'hidden'}}>
                <div className={'main_join'}>
                    <div className={'main_joinrecotxt'}>당신을 위한 조인 추천</div>
                    <div className={'main_joinreco'} onClick={chkLogin}>
                        <Recommendslider/>
                    </div>
                </div>
            </div>

            <hr style={{height:'3px', backgroundColor:'lightgray'}}/>

            <div className={'main_ad'}>
                <img alt={''} src={no}/>
            </div>

            <hr style={{height:'3px', backgroundColor:'lightgray'}}/>

            <div style={{width:'100vw',overflow:'hidden'}}>
                <div className={'main_reviewtxt'}>Best 후기</div>

                <div className={'main_reviewwrap'} onClick={chkLogin}>
                    <Reviewslider/>
                </div>
                <button className='main_chat' type='button'> 
                    <HeadsetMicOutlinedIcon/>
                </button>
            </div>
                <Footer/>
        </div>

    );
}

export default Main;