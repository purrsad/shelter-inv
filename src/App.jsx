import React, { useState } from "react";
import DonationForm from "./components/DonationForm";
import DonationList from "./components/DonationList";

function App() {
	const [donations, setDonations] = useState([]);

	const addDonation = (donation) => {
		setDonations([...donations, donation]);
		console.log(donations);
	};

	const deleteDonation = (index) => {
		const newDonations = [...donations];
		newDonations.splice(index, 1);
		setDonations(newDonations);
	};

	return (
		<>
			<DonationForm onAddDonation={addDonation} />
			<DonationList
				donations={donations}
				onDeleteDonation={deleteDonation}
			/>
		</>
	);
}

export default App;
