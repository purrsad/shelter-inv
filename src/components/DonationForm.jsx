import React, { useEffect, useState } from "react";

const DonationForm = ({ onAddDonation }) => {
	const [donorName, setDonorName] = useState("");
	const [donationType, setDonationType] = useState("");
	const [quantity, setQuantity] = useState("");
	const [date, setDate] = useState("");

	const today = new Date().toISOString().split("T")[0];

	const handleSubmit = (e) => {
		e.preventDefault();
		if (donorName && donationType && quantity && date) {
			onAddDonation({ donorName, donationType, quantity, date });
			// Reset form fields to their initial state
			setDonorName("");
			setDonationType("Money");
			setQuantity("");
			setDate(today);
		} else {
			console.log("Form has errors.");
		}
	};

	// Set today's date as the default value and minimum date for the date input
	useEffect(() => {
		setDate(today);
		setDonationType("Money");
	}, []);

	return (
		<div>
			<div className="prose">
				<h4 className="mt-6 mb-4">New Donation</h4>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						placeholder="Donor's Name"
						value={donorName}
						onChange={(e) => setDonorName(e.target.value)}
						required
						type="text"
						className="input input-bordered w-full max-w-xs mb-4"
					/>
				</div>

				<div>
					<select
						className="select select-bordered w-full max-w-xs mb-4"
						onChange={(e) => setDonationType(e.target.value)}
						value={donationType}
					>
						<option disabled>Donation type?</option>
						<option value="Money">Money</option>
						<option value="Food">Food</option>
						<option value="Clothing">Clothing</option>
					</select>
				</div>

				<div>
					<input
						placeholder="Quantity or Amount"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						required
						type="number"
						className="input input-bordered w-full max-w-xs mb-4"
					/>
				</div>

				<div>
					<input
						className="input input-bordered w-full max-w-xs mb-4"
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						min={date}
					/>
				</div>
				<button className="btn" type="submit">
					Add Donation
				</button>
			</form>
		</div>
	);
};

export default DonationForm;
