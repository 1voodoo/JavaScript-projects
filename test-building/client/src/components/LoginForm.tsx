import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { Context } from "..";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context)

    return (
        <div>

            <input 
            onChange={e => setEmail(e.target.value)}
            value={email}
            type='text' 
            placeholder='Email'
            />
             <input 
            onChange={e => setPassword(e.target.value)}
            value={password}
            type='text' 
            placeholder='password'
            />
            <button onClick={() => store.login(email, password)}>LOGIN</button>
            <button onClick={() => store.registration(email, password)}>REGISTRATION</button>

        </div>
    );
};

export default observer(LoginForm);