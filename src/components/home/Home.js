import React from 'react';
import Typical from 'react-typical'


function Home() {
    return (
        <div >
            <p style={{ textAlign: 'center', fontSize: '30px', color: 'red' }}> <span style={{ color: 'black' }}>I'm a </span>
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Front End Developer',
                        1000,
                        'Back End Developer',
                        1000,
                        'Full Stack Developer',
                        1000,
                        'Senior Software Enginerring',
                        1000,
                        'Professional Software Enginerring',
                        1000
                    ]}
                />
            </p>

        </div>
    )
}

export default Home

