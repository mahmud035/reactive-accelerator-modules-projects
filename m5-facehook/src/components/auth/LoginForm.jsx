import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Field from '../ui/Field';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSubmit = async (formData) => {
    //* Make an API call and it will return (accessToken, refreshToken and Logged in User Information)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { user, token } = response.data;

        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
          navigate('/');
          // console.log(`Login time authToken: ${authToken}`);
        }
      }
    } catch (error) {
      console.log(error);
      setError('root.random', {
        type: 'random',
        message: `${error?.response?.data?.error}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      {/* email  */}
      <Field label="Email" error={errors?.email}>
        <input
          {...register('email', { required: 'Email ID is required' })}
          className={`auth-input ${
            errors?.email ? 'border-red-500' : 'border-gray-200'
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      {/* password  */}
      <Field label="Password" error={errors?.password}>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Your password must be at least 8 characters',
            },
          })}
          className={`auth-input ${
            errors?.password ? 'border-red-500' : 'border-gray-200'
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      {/* Show error message if user is not found */}
      {errors.root && (
        <p className="pb-3 text-red-500">{errors?.root?.random?.message}</p>
      )}

      {/* Submit  */}
      <Field>
        <button
          type="submit"
          className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
