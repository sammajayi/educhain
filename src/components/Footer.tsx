const Footer = () => {
    return (
        <footer>
            <div className='flex m-5 justify-center'>
            <div className='flex'>
                <img 
                 className='w-6 h-6'
                src="./src/assets/images/social-icons/mail-fill.svg" 
                alt="twitter-icon" 
                />

                <img 
                className='w-6 h-6'
                src="./src/assets/images/social-icons/linkedin-box-fill.svg" 
                alt="linkedin-icon" 
                />

                <img 
                className='w-6 h-6'
                src="./src/assets/images/social-icons/twitter-x-line.svg" 
                alt="linked-icon" 
                />

            </div>
            <p>&copy; {new Date().getFullYear()} Educhain</p>
            </div>
        </footer>
    )
}

export default Footer