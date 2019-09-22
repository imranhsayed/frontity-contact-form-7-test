import React from "react";
import { styled } from "frontity";
import axios from 'axios';
import { useState } from 'react';

const ContactUs = () => {

	const [ name, setName ] = useState( '' );
	const [ email, setEmail ] = useState( '' );
	const [ subject, setSubject ] = useState( '' );
	const [ message, setMessage ] = useState( '' );
	const [ loading, setLoading ] = useState( false );
	const [ status, setStatus ] = useState( { responseStatus: '', statusMessage: '' } );


	const handleFormSubmit = ( event ) => {

		if( process.browser ) {

			event.preventDefault();
			const formData = { name, email, message, subject };

			setStatus( { responseStatus: '', statusMessage: '' } );
			setLoading( true );


			// @TODO make the url dynamic and add this to be put in frontity.settings.js and add auth key in the header.
			axios.post(`https://smitpatadiya.com/wp-json/cf7e/v1/enquiry`, formData )
				.then(res => {

					setLoading( false );

					if ( 200 === res.data.status ) {

						setStatus( { responseStatus: 'success', statusMessage: 'Enquiry submitted. Thank you...' } );
						setName( '' );
						setEmail( '' );
						setSubject('' );
						setMessage('' );

					} else {
						setStatus( { responseStatus: 'error', statusMessage: 'Enquiry submitted. Thank you...' } );
					}


				})
				.catch( err => {

					setLoading( false );

					if ( 400 === err.response.data.data.status ) {
						setStatus( { responseStatus: 'error', statusMessage: err.response.data.message } );
					} else {
						setStatus( { responseStatus: 'error', statusMessage: 'Enquiry could not be submitted.' } );
					}
				} );
		}

	};


	return (
		<Container>
			<Title>Contact Form</Title>

			<Form onSubmit={ handleFormSubmit }>

				{/*Name*/}
				<Label htmlFor="form-name">Your Name:</Label>
				<Input
					id="form-name"
					value={ name }
					onChange={ ( event ) => setName( event.target.value ) }
				/>

				{/*Email*/}
				<Label htmlFor="form-email">Your Email:</Label>
				<Input
					id="form-email"
					value={ email }
					onChange={ ( event ) => setEmail( event.target.value ) }
				/>

				{/*Subject*/}
				<Label htmlFor="form-subject">Subject</Label>
				<Input
					id="form-subject"
					value={ subject }
					onChange={ ( event ) => setSubject( event.target.value ) }
				/>

				{/*Your Message*/}
				<Label htmlFor="form-message">Your Message</Label>
				<TextArea
					id="form-message"
					cols="40"
					rows="10"
					value={ message }
					onChange={ ( event ) => setMessage( event.target.value ) }
				/>
				<br/>
				{/* Submit button*/}
				<SubmitButton type="submit">Send</SubmitButton>
			</Form>

			{ loading ? <Loading>Processing...</Loading>  : '' }
			{ 'success' === status.responseStatus ? <Status>{ status.statusMessage }</Status>  : '' }
			{ 'error' === status.responseStatus ? <Error>{ status.statusMessage }</Error>  : '' }
		</Container>
	);
};

export default ContactUs;

const Loading = styled.div`
margin: 20px 0;
`;

const Status = styled.div`
color: green;
margin: 20px 0;
`;

const Error = styled.div`
color: red;
margin: 20px 0;
`;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px 0 70px 0;
  text-align: left;
`;

const Title = styled.h1`
  margin: 24 0;
  color: rgba(12, 17, 43);
  font-size: 3em;
`;

const Form = styled.form``;

const Label = styled.label`
	display: block;
	margin: 16px 0;
`;

const Input = styled.input`
    background: #fff;
    border: solid 1px #ccc;
    box-sizing: border-box;
    outline: none;
    padding: 12px 18px;
   	font-size: 22px;
   	width: 100%;
   	max-width: 400px;
    -webkit-appearance: none;
    outline-offset: 0;
    border-radius: 0;
    color: #111;
    font-weight: 400;
    line-height: 1.8;
    text-rendering: optimizeLegibility;
    margin: 0;
`;

const TextArea = styled.textarea`
    background: #fff;
    border: solid 1px #ccc;
    box-sizing: border-box;
    outline: none;
    padding: 14px;
    font-size: 22px;
    -webkit-appearance: none;
    outline-offset: 0;
    border-radius: 0;
    color: #111;
    font-weight: 400;
    line-height: 1.8;
    text-rendering: optimizeLegibility;
    margin: 0;
    width: 100%;
   	max-width: 400px;
`;

const SubmitButton = styled.button`
	margin-top: 16px;
    transition: background 150ms ease-in-out;
    background: #0073aa;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    font-size: 0.88889em;
    font-weight: 700;
    line-height: 1.2;
    outline: none;
    padding: 0.76rem 1rem;
    text-decoration: none;
    vertical-align: bottom;
    min-width: 91px;
`;
