import React, { useState } from "react";
import DonationForm from "./components/DonationForm";

function App() {
	const [donations, setDonations] = useState([]);

	const addDonation = (donation) => {
		setDonations([...donations, donation]);
		console.log(donations);
	};

	return <DonationForm onAddDonation={addDonation} />;
}

export default App;
