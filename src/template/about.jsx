import React from 'react'

const About = props => {
    return (
        <div className="container mt-3">
            <div className="jumbotron text-center">
                <h3>About</h3>
                <div className="text-left mt-4">
                    <p>
                        This website was created using React, all data has obtained from PokeApi, a free API of Pokemon. 
                        Fell free to download the code and use in your own project.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About