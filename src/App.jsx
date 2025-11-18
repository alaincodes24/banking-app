import CustomerCard from "./components/CustomerCard";
import EmployeeCard from "./components/EmployeeCard";
import Game from "./components/Game";
import ReadMore from "./components/ReadMore";
import Todo from "./components/Todo";
import Welcome from "./components/Welcome";
// import customer1 from "./assets/pic-1.jpg";
// import customer2 from "./assets/pic-2.jpg";
// import customer3 from "./assets/pic-3.jpg";
import Cards from "./components/Cards";
import Greeting from "./components/Greeting";
import ProductDashboard from "./components/ProductDashboad";
// import Jokes from "./components/Jokes";
import Users from "./components/Users";

function App() {
	return (
		<div className="w-11/12 mx-auto mt-10">
			{/* <div className="grid grid-cols-3 gap-8"> */}
				{/* <EmployeeCard
					name="Isabella"
					title="software developer"
					age={20}
					isOld={true}
          school={{ 
            name: "Kepler College",
            graduation: 2020
           }}
				/>
				<EmployeeCard 
          name="Patrick" 
          title="Cleaner" 
          age={19} 
          isOld={false} 
          school={{ 
            name: "Harvard University",
            graduation: 2025
           }}
        />
				<EmployeeCard 
          name="Cedrick" 
          title="Manager" 
          age={40} 
          isOld={true} 
          school={{ 
            name: "UR - CST",
            graduation: 2015
           }}
        /> */}

{/* imageUrl, tag, title, description, btnLabel */}
        {/* <CustomerCard imageUrl={customer1} tag="News" title="Stories from camp: Introducing Samia – a beacon of resilience and determination" description="Meet Samia, a 25-year-old Burundian living at Mahama Refugee Camp in Rwanda." btnLabel="Read More" />
        <CustomerCard imageUrl={customer2} tag="Case Studies" title="A lab for Nyabiheke Refugee Camp" description="A lab in a refugee camp is creating transformational, globally relevant change for displaced refugees in Rwanda" btnLabel="Read More" />
        <CustomerCard imageUrl={customer3} tag="Stories" title="Listening to our customers in Rwanda with Play Verto" description="Alight's partnership with Play Verto is part of our commitment to co-creating services by listening to displaced communities in Rwanda and addressing key concerns like security, employment, and health." btnLabel="Read More" />

        <CustomerCard imageUrl={customer3} tag="Ibishyimbo" title="Listening to our customers in Rwanda with Play Verto" description="Alight's partnership with Play Verto is part of our commitment to co-creating services by listening to displaced communities in Rwanda and addressing key concerns like security, employment, and health." btnLabel="Read More" /> */}

          {/* <Game /> */}

          {/* <ReadMore /> */}

          {/* <Welcome /> */}

          {/* <Todo /> */}

          {/* <Cards /> */}

          {/* <Greeting name="Patrick" />
          <Greeting name="Isabella" />
          <Greeting name="Phocas" />
          <Greeting name="Cedrick" /> */}

          {/* <ProductDashboard />s */}

          {/* <Jokes /> */}

          <Users />




			{/* </div> */}
		</div>
	);
}

export default App;
