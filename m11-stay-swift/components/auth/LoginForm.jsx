const LoginForm = () => {
  return (
    <form className="login-form">
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="w-full mt-4 btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
