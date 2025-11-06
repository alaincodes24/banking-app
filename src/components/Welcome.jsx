import { useState } from "react";

function Welcome() {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  }

	return (
		<>
			<form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Enter email..."
					className="bg-gray-100 px-1 py-0.5 outline-none"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter password..."
          className="bg-gray-100 px-1 py-0.5 outline-none"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
        <button className="bg-green-500 text-white px-2 py-1">Login</button>
			</form>
			<div>
        You Login Details:
        <hr />
        Email: {email} <br />
        Password: {password}
      </div>
		</>
	);
}

export default Welcome;
