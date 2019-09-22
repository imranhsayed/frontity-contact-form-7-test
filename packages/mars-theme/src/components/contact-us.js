import React from "react";
import { styled } from "frontity";
import axios from 'axios';
import { useState } from 'react';

const ContactUs = () => {

	const [ name, setName ] = useState( '' );
	const [ email, setEmail ] = useState( '' );
	const [ subject, setSubject ] = useState( '' );
	const [ message, setMessage ] = useState( '' );

	if( process.browser ) {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const persons = res.data;
			})
	}

	const handleFormSubmit = ( event ) => {
		event.preventDefault();

		const formData = { name, email, message, subject };
		console.warn( formData );
	};


	return (
		<Container>
			<Title>Contact Form</Title>
			<Form onSubmit={ handleFormSubmit }>
				<Label>
					Your Name:
					<Input
						value={ name }
						onChange={ ( event ) => setName( event.target.value ) }
					/>
				</Label>
				<Label>
					Your Email:
					<Input
						value={ email }
						onChange={ ( event ) => setEmail( event.target.value ) }
					/>
				</Label>
				<Label>
					Subject
					<Input
						value={ subject }
						onChange={ ( event ) => setSubject( event.target.value ) }
					/>
				</Label>
				<Label>
					Your Message
					<TextArea
						value={ message }
						onChange={ ( event ) => setMessage( event.target.value ) }
					/>
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
