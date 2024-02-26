import { useNavigate } from 'react-router-dom';
import PageStyles from '../page.module.scss';
import styles from './SigninPage.module.scss';
import { CONFIG } from '../../config';
import { PopupButton } from '../../components/PopupButton/PopupButton';
import { useState } from 'react';

export interface SigninPageProps {}

const SigninPanel = () => {
    const navigate = useNavigate();
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        navigate('/MainPage');
    }
    return (
        <form className={styles.signin_panel} onSubmit={onSubmit}>
            <h1 className={styles.title}>SIGN IN</h1>
            {/* <input type="password" name="" placeholder="" /> */}
            <button type="submit">로그인</button>
        </form>
    );
};
interface SignupPanelProps {
    setActive: Function;
}
const SignupPanel = ({ setActive }: SignupPanelProps) => {
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const jsonData: any = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        try {
            // Perform POST request with form data
            const response = await fetch(`${CONFIG.SERVER_BASE}/app/user/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Version': '*.*.*',
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                alert('회원생성 성공');
                setActive(false);
            } else {
                const errorMessage = await response.json().then((e) => e.errorMessage);
                alert(errorMessage);
            }
        } catch (error) {
            alert(error);
        }
    }
    return (
        <form className={styles.signup_panel} onSubmit={onSubmit}>
            <h1 className={styles.title}>SIGN UP</h1>
            <div className={styles.input_container}>
                <input
                    className={styles.input}
                    type="text"
                    name="nickname"
                    placeholder="nickname"
                />
                {/* <input type="password" name="" placeholder="" /> */}
            </div>
            <button type="submit">제출</button>
        </form>
    );
};

export const SigninPage = ({}: SigninPageProps) => {
    const [isSignUpActive, setSignUpActive] = useState(false);
    return (
        <div className={PageStyles.Page}>
            <div className={styles.container}>
                <SigninPanel />
                <PopupButton
                    className={styles.create_user_popup}
                    isActive={isSignUpActive}
                    setActive={setSignUpActive}
                >
                    <SignupPanel setActive={setSignUpActive} />
                </PopupButton>
            </div>
        </div>
    );
};
