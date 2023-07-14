import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {


    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)

        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-20">
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl  text-center font-bold">Sign Up Now!</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label" >
                                <span className="label-text" >Name</span>
                            </label>
                            <input type="text" placeholder="name" required name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label" >
                                <span className="label-text" >Email</span>
                            </label>
                            <input type="email" placeholder="Email" required name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' required placeholder="Password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have an Account  <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;