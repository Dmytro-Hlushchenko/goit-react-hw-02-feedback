// import PropTypes from 'prop-types';


export default function Stats({good, neutral, bad}) { 
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </>
    );
}