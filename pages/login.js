import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../store/actions/postAction"
import Theme from "../styles/theme"
import Link from 'next/link'

function Login({themeColor}) {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const {errorMessage} = useSelector(state => state.post)
    const [loading, setLoading] = useState(false)

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        await dispatch(signIn(inputs.email, inputs.password))
        setLoading(false)
    }

    return (
        <div id="body">
            <img id="bgbody" src="/mainbg.png"/>
            <form onSubmit={submitForm}>
                <img src="/think.png" className='cloud'/>
                {!loading && <input
                    name='email'
                    value={inputs.email}
                    onChange={handleType}
                    placeholder='Email Address'
                    required
                />}
                {!loading && <input
                    name='password'
                    type='password'
                    value={inputs.password}
                    onChange={handleType}
                    placeholder='Password'
                    required
                />}
                {loading && <img src='/loader.gif' className='loading'/>}
                {errorMessage && <p className='info'>{errorMessage}</p>}
                <button type='submit'>Login</button>
                <Link href='/forgotpassword'><div className='link'>Forgot Password?</div></Link>
            </form>
            <style jsx>{`
                form {
                    width: 350px;
                    height: auto;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    padding: 5%;
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%,-50%);
                    background: ${themeColor === '#ffffff' ? 'rgba(255,255,255,.9)': 'rgba(20,20,20,.9)'};
                    backdrop-filter: blur(15px);
                    border-radius: 22px;
                    box-shadow: ${Theme.sh.mat};
                }
                .info {
                    float: left;
                    font: 16px 'Roboto';
                    color: red;
                }
                input {
                    float: left;
                    width: 80%;
                    padding: 8px 5%;
                    margin: 10px 5%;
                    font: 15px 'Roboto';
                }
                .loading {
                    float: left;
                    width: 25px;
                    height: 25px;
                    margin: 20px 0;
                }
                button {
                    float: left;
                    width: 80%;
                    padding: 10px 5%;
                    margin: 5px 5%;
                    margin-top: 40px;
                    border: none;
                    box-shadow: ${Theme.sh.mat};
                    cursor: pointer;
                    display: ${loading == false ? 'block': 'null'};
                    font: 16px 'Roboto';
                }
                .cloud {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 40px 0;
                    margin-top: -10px;
                }
                #body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                #bgbody {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%,-50%);
                }
            `}</style>
        </div>
    )
}

export default Login