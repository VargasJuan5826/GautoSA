import React, { useState, useEffect } from "react";
import { Container, Button, Select } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Search from '../components/Search'

function TestDrive() {

    const countryOptions = [
        { key: 'af', value: 'af', text: 'Toyota' },
        { key: 'ax', value: 'ax', text: 'Ford' },
        { key: 'al', value: 'al', text: 'Renault' },
        { key: 'dz', value: 'dz', text: 'Voskwagen' },
        { key: 'as', value: 'as', text: 'Audi' },
      ];
    return (
        <>
            <Container>
                <Button content='Registrar Interesado' icon='right arrow' labelPosition='right' />
                <Search></Search>
                <Select placeholder='Marca' options={countryOptions} />
            </Container>
        </>
    );
}

export default TestDrive;
