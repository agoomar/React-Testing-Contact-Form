import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders ContactForm", () => {
    render(<ContactForm/>);
});

test("Can Fill in the form and display", () =>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText('Edd');
    const lastNameInput = screen.getByPlaceholderText('Burke');
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com');
    const messageInput = screen.getByLabelText(/message/i);

    userEvent.type(firstNameInput, "Ashish");
    userEvent.type(lastNameInput, "Goomar");
    userEvent.type(emailInput, "ashish-goomar@lambdastudents.com");
    userEvent.type(messageInput, "Hello!");

    expect(firstNameInput).toHaveValue("Ashish");
    expect(lastNameInput).toHaveValue("Goomar");
    expect(emailInput).toHaveValue("ashish-goomar@lambdastudents.com");
    expect(messageInput).toHaveValue("Hello!");

});