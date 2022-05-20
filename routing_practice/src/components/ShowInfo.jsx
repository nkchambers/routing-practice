import React from 'react';
import { useParams } from 'react-router-dom';

const ShowInfo = (props) => {

    // From useParams we grab the variable from thr URL
    const {id, textColor, backColor} = useParams();

    console.log(id, textColor, backColor);

    return (
        <fieldset>
            <legend>Show Info.jsx</legend>
            
            <div style = {{ color: `${textColor}`, backgroundColor: `${backColor}` }}>
                {
                    isNaN(id)?
                    <h2>The Word is: {id}</h2>:
                    <h2>The Number is: {id}</h2>
                }

                <p>Note: You picked {textColor} for text color and {backColor} for background color.</p>
            </div>
        </fieldset>
    );
};

export default ShowInfo;