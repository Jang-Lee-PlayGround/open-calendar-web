import { useNavigate } from 'react-router-dom';
import PageStyles from '../page.module.scss';
import styles from './SigninPage.module.scss';
import { CONFIG } from '../../config';
import { PopupButton } from '../../components/PopupButton/PopupButton';

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
            <button type="submit">제출</button>
        </form>
    );
};
const SignupPanel = () => {
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
                //TODO
            } else {
                const errorMessage = await response.json();
                console.error(errorMessage);
                //alert(errorMessage);
            }
        } catch (error) {
            console.error(error);
            //alert(error);
        }
    }
    return (
        <form className={styles.signup_panel} onSubmit={onSubmit}>
            <h1 className={styles.title}>SIGN UP</h1>
            <input type="text" name="nickname" placeholder="nickname" />
            {/* <input type="password" name="" placeholder="" /> */}
            <button type="submit">제출</button>
        </form>
    );
};

export const SigninPage = ({}: SigninPageProps) => {
    return (
        <div className={PageStyles.Page}>
            <div className={styles.container}>
                <SigninPanel />
                <PopupButton className={styles.create_user_popup}>
                    <SignupPanel />
                </PopupButton>
            </div>
        </div>
    );
};
