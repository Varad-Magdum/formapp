import React from "react";
import { useState } from "react";
import FeedBack from "./FeedBack";

const Home = () => {
	const [feedback, setFeedback] = useState({
		name: "",
		department: "",
		rating: "",
	});
	const [toggle, setToggle] = useState(true);
	const [feedbacklist, setFeedbacklist] = useState([]);

	const handleChange = (e) => {
		//note the name of input field amd key of object has to be same to work like this
		setFeedback((prevObj) => ({
			...prevObj,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		// console.log("submitted")
		e.preventDefault();
		// console.log(feedback);
		setFeedbacklist([...feedbacklist, feedback]);
		//reset input field and clear feedback data as its stored in list
		setFeedback({
			name: "",
			department: "",
			rating: "",
		});
		//now got to see feedbacks
		setToggle((prev) => !prev);
	};

	return (
		<div className="container">
			{toggle ? (
				<>
					<form onSubmit={handleSubmit}>
						<h1>Employee Feedback Form</h1>
						<div className="card">
							<label>Name</label>
							<input
								type="text"
								name="name"
								value={feedback.name}
								onChange={handleChange}
							/>
						</div>
						<div className="card">
							<label>Department</label>
							<input
								type="text"
								name="department"
								value={feedback.department}
								onChange={handleChange}
							/>
						</div>
						<div className="card">
							<label>Rating</label>
							<input
								type="number"
								name="rating"
								value={feedback.rating}
								onChange={handleChange}
							/>
						</div>
						<button type="submit">Submit</button>
					</form>
					{/* /this button is used to see feedbacks if wants/ */}
					<button
						onClick={() => {
							setToggle((prev) => !prev);
						}}
					>
						See Feedbacks
					</button>
				</>
			) : (
				<FeedBack feedbacklist={feedbacklist} setToggle={setToggle} />
			)}
		</div>
	);
};

export default Home;
