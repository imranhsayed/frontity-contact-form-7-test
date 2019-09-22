import React from "react";
import { styled } from "frontity";
import axios from 'axios';
import { useState } from 'react';

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
			<Form>
				<Label>
					Your Name:
					<Input/>
				</Label>
				<Label>
					Your Email:
					<Input/>
				</Label>
				<Label>
					Subject
					<Input/>
				</Label>
				<Label>
					Your Message
					<TextArea/>
				</Label>
				<SubmitButton
					type="submit"
				>Send</SubmitButton>
			</Form>
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

const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const TextArea = styled.textarea``;
const SubmitButton = styled.button``;
