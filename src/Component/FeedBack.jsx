import React from "react";

const FeedBack = (props) => {
	const handleOnClick = () => {
		props.setToggle((prev) => !prev);
	};

	return (
		<div>
			{props.feedbacklist.length > 0 ? (
				<>
					{props.feedbacklist.map((feed, index) => {
						return (
							<div className="feedback" key={index}>
								<h3>
									Name: {feed.name} | Department :{" "}
									{feed.department} | Rating: {feed.rating}|
								</h3>
							</div>
						);
					})}
				</>
			) : (
				<>
					<h3>No Feedbacks is Submitted yet!</h3>
				</>
			)}
			<button onClick={handleOnClick}>Back</button>
		</div>
	);
};

export default FeedBack;
