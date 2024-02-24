import { useNavigate } from 'react-router-dom';
import PageStyles from '../page.module.scss';
import styles from './LoginPage.module.scss';
import { CONFIG } from '../../config';

export interface LoginPageProps {}

export const LoginPage = ({}: LoginPageProps) => {
    const navigate = useNavigate();
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
                navigate('/MainPage');
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
        <div className={PageStyles.Page}>
            <div className={styles.container}>
                <form className={styles.create_panel} onSubmit={onSubmit}>
                    <h1 className={styles.title}>SIGN UP</h1>
                    <input type="text" name="nickname" placeholder="nickname" />
                    {/* <input type="password" name="" placeholder="" /> */}
                    <button type="submit">제출</button>
                </form>
            </div>
        </div>
    );
};
