import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const totalFields = 4;

    useEffect(() => {
        const filledFields = [name, email, password, confirmpassword].filter(field => field).length;
        const newProgress = (filledFields / totalFields) * 100;
        setProgress(newProgress);
    }, [name, email, password, confirmpassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!name || !email || !password || !confirmpassword) {
            setError('Please fill the required fields');
            setLoading(false);
            return;
        }

        if (password !== confirmpassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        // Simulate API call
        console.log('Name:', name);
        console.log('Email:', email);
        // Do not log passwords in production!

        setName('');
        setEmail('');
        setPassword('');
        setConfirmpassword('');
        setProgress(0);
        setLoading(false);
    };

    const getProgressBarColor = () => {
        if (progress < 50) return 'bg-danger';
        if (progress < 100) return 'bg-warning';
        return 'bg-success';
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ width: '400px', maxWidth: '100%' }}>
                <h3 className="text-center mb-4">GK Trips - Register</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="confirmpassword">Confirm Password</label>
                        <input
                            id="confirmpassword"
                            type="password"
                            className="form-control"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <div className="progress mb-3">
                        <div
                            className={`progress-bar ${getProgressBarColor()}`}
                            role="progressbar"
                            style={{ width: `${progress}%` }}
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {progress.toFixed(0)}%
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
// Note: In a real application, you would handle the API call to register the user here.