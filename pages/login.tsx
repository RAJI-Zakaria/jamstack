// Your React component where the password is prompted
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        const password = prompt('Please enter the password:');
        if (password) {
            // Make a request to the protected route with the provided password
            fetch(`/protected-route?password=${password}`)
                .then((response) => {
                    if (response.ok) {
                        // If the response is okay, redirect to the protected route
                        localStorage.setItem('authenticated', 'true'); 
                        router.push('/');
                    } else {
                        // Handle unauthorized access
                        alert('Unauthorized access');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    return (
        // Your login page JSX
        <div>Login Page</div>
    );
}

export default LoginPage;
