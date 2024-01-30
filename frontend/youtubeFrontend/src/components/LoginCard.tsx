import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CookieAtom } from "../store/recoilAtom";
function LoginCard() {
  const navigate = useNavigate();
  const cookieAtom = useSetRecoilState(CookieAtom);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const signUpFunction = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (username === '' || password === '') {
      toast.error('Invalid credentials');
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/user/signup", {
        username,
        password
      });
      if (res.data) {
        const { _id, message } = res.data;
        if (_id) {
          setCookie('token', _id, { path: '/' });
          cookieAtom(cookies.token);
          toast.success(message);
          navigate('/home');
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.error('No response from server');
        } else {
          toast.error('Request error');
        }
      } else {
        console.error('Unknown Error:', error);
        toast.error('Unknown error');
      }
    }
    setUsername('');
    setPassword('');
  };

  const loginFuncion = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (username === '' || password === '') {
      toast.error('Invalid credentials');
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });
      if (res.data) {
        const { _id, message } = res.data;
        if (_id) {
          setCookie('token', _id, { path: '/' });
          cookieAtom(cookies.token);
          toast.success(message);
          navigate('/home');
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.error('No response from server');
        } else {
          toast.error('Request error');
        }
      } else {
        console.error('Unknown Error:', error);
        toast.error('Unknown error');
      }
    }
    setUsername('');
    setPassword('');
  }
  return (
    <div className="bg-white text-black border rounded-lg">
      <div className="text-center pt-5">Login/Signup</div>
      <hr className="mt-1 border-t-1 border-gray-400" />
      <form className=" p-5 flex flex-col gap-2">
        <div className=" flex flex-col gap-2 w-80">
          <input
            className=" rounded-lg border border-blue-600 outline-blue-400 px-2 py-2"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
            type="text"
            placeholder="username" />
          <input
            className="rounded-lg border border-blue-600 outline-blue-400 px-2 py-2"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            type="text"
            placeholder="password" />
        </div>
        <button onClick={loginFuncion} className="rounded-lg bg-blue-700 p-2 text-white" type="submit">login</button>
        <hr className="border-t-1 border-black my-2" />
        <button onClick={signUpFunction} className="rounded-lg bg-green-600 p-2 text-white" type="submit">sign up</button>
      </form>
    </div>
  )
}

export default LoginCard