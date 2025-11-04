function Main() {
	return (
		<main className="px-10">
			<div className="flex items-center gap-x-0.5 py-4">
				<h2 className="text-gray-600">Hi. I'm <span className="text-sky-900 font-semibold uppercase">Alain</span></h2>
				<div className="h-1 w-1 bg-sky-900 -mb-2"></div>
			</div>
      <p>I am a software developer with over 4 years of experience working with clients from both Rwanda and Germany.</p>
      <h3 className="text-xl uppercase text-gray-700 my-3">Projects</h3>
      <ul className="flex flex-col gap-y-4 mb-4">
        <li>Capstone: Facial Recognition for Access Control</li>
        <li>Comswim: A swimming website for a South African-based community</li>
        <li>Zatec Experts: A website linking working professionals with German clients</li>
      </ul>
		</main>
	);
}

export default Main; 
