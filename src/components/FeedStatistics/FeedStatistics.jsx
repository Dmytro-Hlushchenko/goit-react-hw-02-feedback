// import PropTypes from 'prop-types';


export default function Stats({good, neutral, bad, total, countPositiveFeedbackPercentage}) { 
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage}</p>
        </>
    );
}