// import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) {
        
   return (
        <>
            <button onClick={onLeaveFeedbackGood} type="button" id = "good" >Good</button>
            <button onClick={onLeaveFeedbackNeutral} type="button" id = "neutural" >Neutural</button>
            <button onClick={onLeaveFeedbackBad } type="button" id = "bad">Bad</button>
        </>
    )
};

   