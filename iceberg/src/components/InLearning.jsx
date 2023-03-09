import './InLearning.css'

const InLearning = () => {
    return (
        <>
        <div className="InLearning-div">
            <div className="InLearning-heading">
                <img className='logo-img' src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png"></img>
                <div className='learning'>LEARNING</div>
            </div>
            <div className="InLearning-skills">Add new skills with these courses, free for 24 hours</div>
            <div className="InLearning-recommendations">
                <div className='recommendation-list'>
                    <div className='top-list-item'>
                        <div className='list-img-1'>
                            <svg viewBox='-5 -5 25 25' fill='white' className='play-btn'>
                                <path d="M4 14V2l10 6z"></path>
                            </svg>
                        </div>
                        <div className='list-title'>Penetration Testing: Advanced Web Testing</div>
                    </div>
                    <div className='list-item'>
                        <div className='list-img-2'>
                            <svg viewBox='-5 -5 25 25' fill='white' className='play-btn'>
                                <path d="M4 14V2l10 6z"></path>
                            </svg>
                        </div>
                        <div className='list-title'>Understanding Your Compensation and...</div>
                    </div>
                    <div className='list-item'>
                        <div className='list-img-3'>
                            <svg viewBox='-5 -5 25 25' fill='white' className='play-btn'>
                                <path d="M4 14V2l10 6z"></path>
                            </svg>
                        </div>
                        <div className='list-title'>SQL Server Machine Learning Services: Python</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-recommendations">See my recommendations</div>
        </>
    )
}

export default InLearning;