import { authActions } from './auth-slice';
import { HOST } from '../constants/ApiHost'

export const auth = (username, password) => {
    return async (dispatch) => {
        dispatch(authActions.login({
            sending: true
        }))
        const auth = async () => {
            const res = await fetch(`${HOST}/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            if (!res.ok) {
                throw new Error('authentication failed');
            }
            return res.json();
        }

        try {
            const data = await auth();
            dispatch(authActions.login({
                token: data.id_token,
                role: data.role,
                sending: false
            }))
        } catch (error) {
            console.log(error.message)
            dispatch(authActions.login({
                token: null,
                role: null,
                message: error.message,
                sending: false
            }))
        }
    }
}
