import React, { useState } from "react";
import useUser from '../lib/useUser'
import Form from "../components/Form";
import fetchJson from "../lib/fetchJson";

const Login = () => {
	const { mutateUser } = useUser({
		redirectTo: "/profile-sg",
		redirectIfFound: true,
	});

	const [errorMsg, setErrorMsg] = useState("");
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();

		const body = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value
		};

		try {
			setLoading(true)
			
			await mutateUser(
				fetchJson("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				}),
			);
		} catch (error) {
			console.error("An unexpected error happened:", error);
			setErrorMsg(error.data.message);
		}
	}

	return (
		<React.Fragment>
			<div className="login" style={{ marginTop: '8em' }}>
				<Form errorMessage={errorMsg} onSubmit={handleSubmit} />
				{ loading ? <h1>Logging in. Please wait.</h1> : null }
			</div>
			<style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
		</React.Fragment>
	);
};

export default Login;