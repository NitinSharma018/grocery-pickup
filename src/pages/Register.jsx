import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, writeUserData } from '../firebase'; // ✅ make sure path is correct

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRegister = async () => {
    const { name, email, username, password } = formData;

    if (!name || !email || !username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save additional data to Realtime Database
      await writeUserData(user.uid, name, email, username);
      alert(`Registered Successfully!\nWelcome, ${name}`);
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Error: " + error.message);
    }
  };

  const outerContainer = {
minHeight: '100vh',
width: '100%',
padding: '2rem',
background: 'linear-gradient(to bottom right, #ffcce0, #bdfa84ff, #ffe680)',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
boxSizing: 'border-box',
};

const cardStyle = {
backgroundColor: '#fff',
borderRadius: '12px',
padding: '2rem',
width: '100%',
maxWidth: '450px',
boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
textAlign: 'center',
};

const fieldStyle = {
marginBottom: '1.5rem',
display: 'flex',
flexDirection: 'column',
gap: '0.5rem',
textAlign: 'left',
};
  return (
    <div style={outerContainer}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '2rem', color: '#333' }}>Register</h2>

        <div style={fieldStyle}>
          <label htmlFor="name">Full Name</label>
          <InputText
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleChange(e, 'name')}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="username">Username</label>
          <InputText
            id="username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={(e) => handleChange(e, 'username')}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => handleChange(e, 'password')}
            toggleMask
            feedback={false}
          />
        </div>

        <Button
          label="Register"
          icon="pi pi-user-plus"
          className="p-button-info p-button-raised"
          style={{ width: '100%' }}
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}
