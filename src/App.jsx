import React, { useState } from "react";
import DonationForm from "./components/DonationForm";
import DonationList from "./components/DonationList";
import DonationStatistics from "./components/DonationStatistics";

function App() {
	const [donations, setDonations] = useState([]);

	const addDonation = (donation) => {
		setDonations([...donations, donation]);
	};

	const deleteDonation = (index) => {
		const newDonations = [...donations];
		newDonations.splice(index, 1);
		setDonations(newDonations);
	};

	return (
		<div className="App">
			<div className="navbar bg-green-400">
				<div className="container mx-auto">
					<a href="/" className="btn btn-ghost text-xl pl-0">
						Donation Tracker
					</a>
				</div>
			</div>
			<div className="container px-5 sm:mx-auto ">
				<div className="grid sm:grid-cols-1 lg:grid-cols-5 gap-4">
					<DonationList
						donations={donations}
						onDeleteDonation={deleteDonation}
					/>
					<DonationStatistics donations={donations} />
					<DonationForm onAddDonation={addDonation} />
				</div>
			</div>
		</div>
	);
}

export default App;
