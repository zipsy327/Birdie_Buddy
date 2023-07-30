import React from 'react';
import './MypageModal.css';

function MypageUpdatePhoto(props) {
    const { open, close, header, changePhoto } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button onClick={changePhoto}>
                            저장
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default MypageUpdatePhoto;
