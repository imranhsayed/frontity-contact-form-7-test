import React from "react";
import { styled } from "frontity";
import axios from 'axios';

const ContactUs = () => {
	if( process.browser ) {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const persons = res.data;
				console.warn( persons.length );
			})
	}
	return (
		<Container>
			<Title>Contact Us</Title>

		</Container>
	);
};

export default ContactUs;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
