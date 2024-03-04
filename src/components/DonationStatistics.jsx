import React from "react";

const DonationStatistics = ({ donations }) => {
	const totalDonations = donations.length;
	const totalAmount = donations.reduce(
		(sum, donation) => sum + parseFloat(donation.quantity),
		0
	);

	return (
		<>
			<div className="prose">
				<h4 className="mt-6 mb-4">Donations Statistics</h4>
				<p>Total Donations: {totalDonations}</p>
				<p>Total Amount Donated: {totalAmount}</p>
			</div>
		</>
	);
};

export default DonationStatistics;
