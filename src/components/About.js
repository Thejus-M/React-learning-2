import React, { useState } from 'react'

export default function About(props) {

    const toggleDarkMode = () => {
        if (darkOuterStyle.color === 'White') {
            setDarkOuterStyle({
                color: 'Black',
                backgroundColor: 'White',
                border: '1px solid White'
            })
            setDarkInnerStyle({
                color: 'Black',
                backgroundColor: 'White'
            })
            setBtnText("Enable Dark mode")
        } else {
            setDarkOuterStyle({
                color: 'White',
                backgroundColor: 'rgb(3, 29, 29)',
                border: '1px solid White'
            })
            setDarkInnerStyle({
                color: 'White',
                backgroundColor: 'rgb(3, 75, 75)'
            })
            setBtnText("Enable Light mode")
        }
    }
    const [darkOuterStyle, setDarkOuterStyle] = useState({
        color: 'White',
        backgroundColor: 'rgb(3, 29, 29)',
        border: '1px solid White'

    })
    const [btnText,setBtnText]=useState("Enable Light mode")
    const [darkInnerStyle, setDarkInnerStyle] = useState({
        color: 'White',
        backgroundColor: 'rgb(3, 75, 75)'

    })
    let lightStyle = {
        color: 'Black',
        backgroundColor: 'White'
    }
    return (
        <div className="container"
            style={darkOuterStyle}>
            <h1 className="my-2">
                {
                    props.aboutUs
                }</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"
                            style={darkOuterStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkInnerStyle}>
                            <strong>This is the first item's accordion body.</strong>
                            It is shown by default, until the collapse plugin adds the appropriate classes
                            that we use to style each element. These classes control the overall appearance,
                            as well as the showing and hiding via CSS transitions. You can modify any of this
                            with custom CSS or overriding our default variables. It's also worth noting that
                            just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"
                            style={darkOuterStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkInnerStyle}>
                            <strong>This is the second item's accordion body.</strong>
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"
                            style={darkOuterStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={darkInnerStyle}>
                            <strong>This is the third item's accordion body.</strong>
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type='button' onClick={toggleDarkMode} className='btn  btn-primary'>
                    {btnText}
                </button>
            </div>
        </div>
    )
}