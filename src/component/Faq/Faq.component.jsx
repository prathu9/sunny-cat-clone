import FaqBox from '../Faq-box/Faq-box-component';

import './Faq.style.css';

const questions = [
    {
        question: "What is SunnyCats NFT?",
        answer: "SunnyCats is the result of months of work designing a collection of characters that embody the soul of Solana while serving a mission to give back to the community."
    },
    {
        question: "How do I mint SunnyCats?",
        answer: "On the launch date, you will need to go to the Mint page and connect your wallet using one of the supported wallet providers (Phantom or Sollet). Simply click mint and you will be asked to approve the transaction in your wallet. Once all SunnyCats are sold out, the Mint button will not longer be available." 
    }
]

const Faq = () => {
    return(
        <div className="faq-container">
            <h1>FAQ</h1>
            <div className="faq-box-container">
                {
                    questions.map(
                        (que, i) => 
                        <FaqBox key={i} 
                                question={que.question}
                                answer={que.answer}/>
                    )
                }
            </div>
        </div>
    )
}

export default Faq;