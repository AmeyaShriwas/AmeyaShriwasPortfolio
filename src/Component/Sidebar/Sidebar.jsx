import React from 'react';
import { useNavigate } from 'react-router-dom';


// Custom Components
const CustomButton = ({ children, onClick, type, style, ...props }) => (
  <button
    onClick={onClick}
    type={type}
    style={{
      backgroundColor: '#112d4a',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: '4px',
      fontSize: '14px',
    
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      marginTop: '16px',
      marginBottom: '10px',
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);

const CustomTextField = ({ label, type, value, onChange, style, ...props }) => (
  <div style={{ width: '100%', margin: '10px 0', ...style }}>
    <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outline: 'none',
        fontSize: '16px',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  </div>
);

const CustomTypography = ({ children, variant, style, ...props }) => {
  const styles = {
    h5: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' },
    body2: { fontSize: '0.875rem', color: '#112D4A', cursor: 'pointer', textAlign: 'center' },
    ...style,
  };

  return (
    <div style={styles[variant] || styles.body2} {...props}>
      {children}
    </div>
  );
};

const CustomAvatar = ({ alt, style, ...props }) => (
  <div
    style={{
      width: '80px',
      height: '80px',
      backgroundColor: '#112D4A',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      marginBottom: '16px',
      margin: '0 auto',
      ...style,
    }}
    {...props}
  >
    {alt[0]}
  </div>
);

const CustomDivider = ({ style, ...props }) => (
  <hr
    style={{
      border: 'none',
      borderBottom: '1px solid #ddd',
      marginTop: '16px',
      width: '100%',
      ...style,
    }}
    {...props}
  />
);

const CustomIconButton = ({ onClick, style, children, ...props }) => (
  <button
    onClick={onClick}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.5rem',
      position: 'absolute',
      top: '16px',
      right: '16px',
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);

const CustomDrawer = ({ open, onClose, children }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '360px',
      height: '100%',
      backgroundColor: '#f5f5f5',
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease',
      zIndex: 1000,
    }}
  >
    <CustomIconButton onClick={onClose}>
      &times;
    </CustomIconButton>
    <div
      style={{
        padding: '24px',
        backgroundColor: 'white',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  </div>
);

// SidebarDrawer Component
export default function SidebarDrawer() {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState('login');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [emailSent, setEmailSent] = React.useState(false);
//   const navigate = useNavigate();
const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        navigate('/dashboard');
      const response = await fetch('http://yourapi.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
        setEmailSent(true);
      const response = await fetch('http://yourapi.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmailSent(true);
        console.log('OTP sent to email');
      } else {
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error occurred during forgot password:', error);
    }
  };

  const handleVerifyOtpSubmit = async (e) => {
    e.preventDefault();
    try {
        setView('resetPassword');
      const response = await fetch('http://yourapi.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        console.log('OTP verified');
        setView('resetPassword');
      } else {
        console.error('OTP verification failed');
      }
    } catch (error) {
      console.error('Error occurred during OTP verification:', error);
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
        setView('login');
      const response = await fetch('http://yourapi.com/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (response.ok) {
        console.log('Password updated');
        setView('login');
      } else {
        console.error('Password update failed');
      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
    }
  };

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/login');
  };

  const renderContent = () => {
    switch (view) {
      case 'login':
        return (
          <>
            <CustomAvatar alt="A" />
            <CustomTypography variant="h5">Login</CustomTypography>
            <form
              style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
              onSubmit={handleLoginSubmit}
            >
              <CustomTextField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomTextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomButton type="submit">Login</CustomButton>
              <CustomTypography
                variant="body2"
                onClick={() => setView('forgotPassword')}
              >
                Forgot your password?
              </CustomTypography>
            </form>
          </>
        );
      case 'forgotPassword':
        return (
          <>
              <CustomAvatar alt="A" />
            <CustomTypography variant="h5">
              {emailSent ? 'Enter OTP' : 'Forgot Password'}
            </CustomTypography>
            {!emailSent ? (
              <form
                style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                onSubmit={handleForgotPasswordSubmit}
              >
                <CustomTextField
                  label="Enter Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomButton type="submit">Submit</CustomButton>
                <CustomTypography
                  variant="body2"
                  onClick={() => setView('login')}
                >
                  Back to Login
                </CustomTypography>
              </form>
            ) : (
              <form
                style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                onSubmit={handleVerifyOtpSubmit}
              >
                
                <CustomTextField
                  label="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <CustomButton type="submit">Verify OTP</CustomButton>
                <CustomTypography
                  variant="body2"
                  onClick={() => setView('login')}
                >
                  Back to Login
                </CustomTypography>
              </form>
            )}
          </>
        );
      case 'resetPassword':
        return (
          <>
            <CustomTypography variant="h5">Reset Password</CustomTypography>
            <form
              style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
              onSubmit={handleResetPasswordSubmit}
            >
                    <CustomAvatar alt="A" />
              <CustomTextField
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <CustomButton type="submit">Update Password</CustomButton>
              <CustomTypography
                variant="body2"
                onClick={() => setView('login')}
              >
                Back to Login
              </CustomTypography>
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <CustomButton onClick={toggleDrawer(true)}>Login</CustomButton>

    
      <CustomDrawer open={open} onClose={toggleDrawer(false)}>
        {renderContent()}
        <CustomDivider />
      </CustomDrawer>
    </div>
  );
}
