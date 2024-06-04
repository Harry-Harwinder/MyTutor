import React, { useState } from 'react';

const Search = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const placeholder = "Select Subject";

    const options = ['ACT Maths', 'Animations', 'Basic Maths', 'Dramatics', 'GED Maths'];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return ( <
        div className = "search-container" >
        <
        div className = "search-overlay" >
        <
        h2 > The Simplest Way To Hire Teacher < /h2> <
        form >
        <
        select style = {
            { fontFamily: 'cursive', height: '30px', borderRadius: '5px' } }
        value = { selectedOption }
        onChange = { handleOptionChange } >
        <
        option key = "placeholder"
        value = "" > { placeholder } <
        /option> {
            options.map((option) => ( <
                option key = { option }
                value = { option } > { option } <
                /option>
            ))
        } <
        /select> <
        button style = {
            { fontFamily: 'cursive' } }
        type = "submit" >
        Find a Tutor <
        /button> <
        /form> <
        /div> <
        /div>
    );
};

export default Search;