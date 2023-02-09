import React from "react";
import pic1 from './assets/images/image-web-3-desktop.jpg';

const Component2 = () =>{
    return(
        <div>
            <div className="to-flex yay">
                <div>
                <img src={pic1} />
                </div>
                <div className="to-design">
                    <div className="new">New</div>
                    <div className="to-adjust">
                        <div className="first-head">Hydrogen VS Electic Cars</div>
                        <div className="second-head">Will hydrogen-fueled cars ever catch up to EVs?</div>
                    </div>
                    <hr />
                    <div className="to-adjust">
                        <div className="first-head">The Downside of AR Artistry</div>
                        <div className="second-head">What are the possible adverse effects of<br/>on-demand AI image generation</div>
                    </div>
                    <hr />
                    <div className="to-adjust">
                        <div className="first-head">Is VC Funding Drying Up</div>
                        <div className="second-head">Private funding by VC firms is down 50%<br/>YOY. We take a look at what that means</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Component2;