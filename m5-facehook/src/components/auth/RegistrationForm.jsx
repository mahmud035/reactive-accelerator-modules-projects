import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Field from '../ui/Field';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      setError('root.random', {
        type: 'random',
        message: `Something went wrong: ${error?.response?.data?.error}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      {/* First Name  */}
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register('firstName', { required: 'First Name is required' })}
          className={`auth-input ${
            errors.firstName ? 'border-red-500' : 'border-gray-200'
          }`}
          type="text"
          name="firstName"
          id="firstName"
        />
      </Field>

      {/* Last Name  */}
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register('lastName', { required: 'Last Name is required' })}
          className={`auth-input ${
            errors.lastName ? 'border-red-500' : 'border-gray-200'
          }`}
          type="text"
          name="lastName"
          id="lastName"
        />
      </Field>

      {/* Email  */}
      <Field label="Email" error={errors.email}>
        <input
          {...register('email', { required: 'Email ID is required' })}
          className={`auth-input ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      {/* Password  */}
      <Field label="Password" error={errors.password}>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Your password must be at least 8 characters',
            },
          })}
          className={`auth-input ${
            errors.password ? 'border-red-500' : 'border-gray-200'
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      {/* Show error message if something went wrong */}
      {errors.root && (
        <p className="pb-3 text-red-500">{errors?.root?.random?.message}</p>
      )}

      {/* Submit  */}
      <Field>
        <button
          type="submit"
          className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
        >
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegistrationForm;
