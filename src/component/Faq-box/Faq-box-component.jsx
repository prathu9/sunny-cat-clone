import {useState} from 'react';

import './Faq-box.style.css';

const FaqBox = ({question, answer}) => {
    const [showAns, setShowAns] = useState(true);

    const handleShowAns = () => {
        setShowAns(!showAns)
    }

    return(
        <div className={`${!showAns? 'faq-box-alt':''} faq-box`}>
            <span onClick={handleShowAns}>
                <svg className={`${!showAns? 'faq-box-span-alt':''} open-arrow`} focusable="false" viewBox="0 0 24 24">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </span>
            <div className="faq-box-question">{question}</div>
            <div className={`${showAns? 'faq-box-answer-alt':''} faq-box-answer`}>{answer}</div>
        </div>
    )
}

export default FaqBox;