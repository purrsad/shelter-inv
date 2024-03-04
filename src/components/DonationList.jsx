import React from "react";

const DonationList = ({ donations, onDeleteDonation }) => {
	return (
		<div className="sm:col-span-1 lg:col-span-3">
			<div className="prose">
				<h4 className="mt-6 mb-4">Donations List</h4>
			</div>

			<div className="overflow-x-auto">
				{donations.length === 0 && (
					<p className="text-center">No donations yet.</p>
				)}
				{donations.length > 0 && (
					<table className="table">
						<thead>
							<tr>
								<th>Donor</th>
								<th>Type</th>
								<th>Quantity</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{donations.map((donation, index) => (
								<tr key={index}>
									<td>{donation.donorName}</td>
									<td>{donation.donationType}</td>
									<td>{donation.quantity}</td>
									<td>{donation.date}</td>
									<td>
										<button
											className="btn"
											onClick={() =>
												onDeleteDonation(index)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default DonationList;
