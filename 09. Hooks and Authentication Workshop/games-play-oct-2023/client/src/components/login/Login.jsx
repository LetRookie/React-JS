import useForm from '../../hooks/useForm';

const loginFormNames = {
    Email: 'email',
    Password: 'password'
}

export default function Login({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [loginFormNames.Email]: '',
        [loginFormNames.Password]: ''
    });
    return (
        <section id="login-page" className="auth">
            <form id="login"onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name={loginFormNames.Email}
                    placeholder="Sokka@gmail.com" 
                    onChange={onChange}
                    value={values[loginFormNames.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                    type="password" 
                    id="login-password" 
                    name={loginFormNames.Password} 
                    onChange={onChange}
                    value={values[loginFormNames.Password]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}