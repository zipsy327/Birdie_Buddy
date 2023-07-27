import "./MypageSetting.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import JoinIcon from"../image/icon_flaghole.svg";
import BuddyIcon from "../image/icon_mybuddy.svg";
import YangdoIcon from "../image/icon_yangdo.svg";
import BuddyStory from "../image/icon_buddystory.svg";
import SettingIcon from "../image/icon_setting.svg";
import MoveIcon from "../image/vector.svg";
import {useNavigate, useParams} from "react-router-dom";
import ModalAccount from "./MypageAccount";
import { useState } from "react";
import Header from "../header/Header";

const MypageSetting = () => {

    const {unum} = useParams();
    const navi = useNavigate();
    const [upass, setUpass]=useState('');

    const onMyYangdo=()=>{
        navi(`/mypage/myyangdo/${unum}/1`);
    }
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const passchk=()=>{
        
    }

    return (
        <div className="mypagesetting">
            <Header/>
            <div className="MPScontent-area">
                
                <div className="MPSlist-item-group-subtitle">
                    <div className="MPSsubtitle">
                        <div className="MPSlabel">General</div>
                    </div>
                </div>
                
                <div className="MPSsingle-line-item">
                    <AccountCircleOutlinedIcon/>
                    <div className="MPSlabel1">마이 프로필</div>
                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={BuddyIcon} />
                    <div className="MPSlabel1">마이 버디</div>
                </div>
                <div className="MPSsingle-line-item1" />
                <div className="MPSdivider">
                    <div className="MPSline-separator" />
                </div>
                <div className="MPSlist-item-group-subtitle">
                    <div className="MPSsubtitle">
                        <div className="MPSlabel">Features</div>
                    </div>
                </div>
                <div className="MPSsingle-line-item2">
                    <img className="account-icon" alt="" src={JoinIcon} />
                    <div className="MPSlabel1">마이 조인</div>
                </div>
                <div className="MPSsingle-line-item"
                onClick={onMyYangdo}>
                    <img className="account-icon" alt="" src={YangdoIcon} />
                    <div className="MPSlabel1">마이 양도</div>
                </div>
                <div className="MPSsingle-line-item">
                    <TrendingUpIcon/>
                    <div className="MPSlabel1">마이 랭킹</div>
                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={BuddyStory} />
                    <div className="MPSlabel1">마이 스토리</div>
                </div>
                <div className="MPSdivider">
                    <div className="MPSline-separator" />
                </div>
                <div className="MPSlist-item-group-subtitle">
                    <div className="MPSsubtitle">
                        <div className="MPSlabel">Services</div>
                    </div>
                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={SettingIcon} />
                    <div className="MPSlabel1" onClick={openModal} >내 정보 변경</div>
                    <ModalAccount open={modalOpen} passchk={passchk} close={closeModal} header="비밀번호 입력">
                    <input className={'inputtext'} type={'password'} onChange={(e) =>
                        setUpass(e.target.value)
                    }/>
                </ModalAccount>

                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={BuddyStory} />
                    <div className="MPSlabel1">회원탈퇴</div>
                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={BuddyStory} />
                    <div className="MPSlabel1">비밀번호 변경</div>
                </div>
                <div className="MPSsingle-line-item">
                    <img className="account-icon" alt="" src={BuddyStory} />
                    <div className="MPSlabel1">휴대폰번호 변경</div>
                </div>
                <div className="MPSlist-item-group-subtitle3">
                    <div className="MPSsubtitle">
                        <div className="MPSlabel">로그아웃</div>
                    </div>
                </div>

            </div>

            <img className="vector-icon" alt="" src={MoveIcon} />
            <img className="vector-icon1" alt="" src={MoveIcon} />
            <img className="vector-icon2" alt="" src={MoveIcon} />
            <img className="vector-icon3" alt="" src={MoveIcon} />
            <img className="vector-icon4" alt="" src={MoveIcon} />
            <img className="vector-icon5" alt="" src={MoveIcon} />
            <img className="vector-icon6" alt="" src={MoveIcon} />
            <img className="vector-icon7" alt="" src={MoveIcon} />

        </div>
    );
};

export default MypageSetting;