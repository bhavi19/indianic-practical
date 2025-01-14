import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        // Handle login logic here
        localStorage.setItem('isLoggedIn', true);

        console.log({ email, password, rememberMe });
    };

    return (
        <div style={{}}>
            <form>
                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control" />

                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />

                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>


                </div>

                {/* <!-- Submit button --> */}
                <button type="button" data-mdb-button-init data-mdb-ripple-init
                    className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    );
};

export default Login;