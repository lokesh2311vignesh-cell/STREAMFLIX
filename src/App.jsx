import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Sign in button clicked!");
  };

  return (
    <div className="app">
      {/* Background overlay */}
      <div className="overlay"></div>

      {/* Header */}
      <header className="header">
        <div className="logo">STREAMFLIX</div>

        <select
          className="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>
      </header>

      {/* Login Container */}
      <main className="login-wrapper">
        <div className="login-box">
          <h1>Sign in to continue</h1>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label>USERNAME</label>

            <input
              type="text"
              placeholder="Email or phone number"
              required
            />

            {/* Password */}
            <label>PASSWORD</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            {/* Sign In */}
            <button type="submit" className="signin-btn">
              SIGN IN
            </button>
          </form>

          {/* Options */}
          <div className="options">
            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <span>Remember me</span>
            </label>

            <a href="#help">Need help?</a>
          </div>

          {/* Signup */}
          <div className="signup">
            <span>New to Netflix? </span>
            <a href="#signup">Sign up now.</a>
          </div>

          {/* Information */}
          <p className="info">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>

          <a href="#learn" className="learn-more">
            Learn more
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;