import testimonial from "../testimonialCard";
import Cards from "./Cards"; 
 
 
 function Testimonials(){
    return (
        <div id="testimonial">
        <h3>Testimonials</h3>
        <div className="c">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards
                         img = {testimonial[0].img}
                         logoURL = {testimonial[0].logoURL}
                         desc = {testimonial[0].desc}
                         name = {testimonial[0].name}
                         />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards
                        img = {testimonial[1].img}
                        logoURL = {testimonial[1].logoURL}
                        desc = {testimonial[1].desc}
                        name = {testimonial[1].name}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards
                        img = {testimonial[2].img}
                        logoURL = {testimonial[2].logoURL}
                        desc = {testimonial[2].desc}
                        name = {testimonial[2].name}
                        />
                    </div>
                </div>
            </div>
            <div className="testimonial-arrow">
                <img src="\images\chevron_left_black_24dp.svg" alt="" />
                <img src="\images\chevron_right_black_24dp.svg" alt="" />
            </div>
        </div>
        
    )
 }

 export default Testimonials;