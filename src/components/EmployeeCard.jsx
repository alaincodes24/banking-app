function EmployeeCard({ name, title, age, school, isOld }) {
	return (
		<div className={`rounded-xl p-4 ${isOld ? 'bg-green-600' : 'bg-gray-200'}`}>
			<h2>Name: {name}</h2>
			<h3>Title: {title}</h3>
			<p>Age: {age}</p>
			<p>School: {school.name}</p>
      <p>Graduate in: {school.graduation}</p>
			<p>Category: {isOld ? "Old" : "Not Old"}</p>
		</div>
	);
}

export default EmployeeCard;
