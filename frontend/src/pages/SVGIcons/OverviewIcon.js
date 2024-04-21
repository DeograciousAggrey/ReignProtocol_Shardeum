import React from "react";

const InvesterIcon = ({ color }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
				fill={color ? "#9281FF" : "#64748B"}
			/>
			<path
				d="M19 12C19 13.3845 18.5895 14.7378 17.8203 15.889C17.0511 17.0401 15.9579 17.9373 14.6788 18.4672C13.3997 18.997 11.9922 19.1356 10.6344 18.8655C9.2765 18.5954 8.02922 17.9287 7.05025 16.9497L12 12H19Z"
				fill={color ? "#9281FF" : "#64748B"}
			/>
		</svg>
	);
};

export default InvesterIcon;