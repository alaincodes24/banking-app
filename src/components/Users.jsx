import axios from "axios";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

function Users() {
	const [users, setUsers] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// console.log(users);

	useEffect(() => {
		// fetching users from API: https://jsonplaceholder.typicode.com/users

		// 1. Promises
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((response) => response.json())
		// 	.then((data) => setUsers(data))
		// 	.catch((error) => console.log(error));

		// 2. Asynchronous Function
		// const fetchUsers = async () => {
		// setIsLoading(true);
		//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
		//   const data = await response.json();
		//   setUsers(data);
		// setIsLoading(false);
		// }
		// fetchUsers();

		// 3. Axios
		const getUsers = async () => {
			setIsLoading(true);
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			setUsers(response.data);
			setIsLoading(false);
		};

		getUsers();
	}, []);

	return (
		<div>
			<h2>List of Users</h2>
			{/* {!users ? (
				<div>Loading....</div>
			) : (
				users.map((user) => (
					<div key={user.id}>
						<h3>Name: {user.name}</h3>
					</div>
				))
			)} */}
			{/* {isLoading && ( */}
			<FadeLoader 
        color="green" 
        size={200} 
        loading={isLoading}
      />
			{/* )} */}
			<div className="grid grid-cols-2 gap-4">
				{users &&
					users.map((user) => (
						<div key={user.id} className="bg-sky-400 p-1.5 rounded-md">
							<h3>Name: {user.name}</h3>
							<p>Address: {user.address.street}</p>
							<p>Company: {user.company.name}</p>
							<p>Phone: {user.phone}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default Users;
