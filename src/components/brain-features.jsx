import React from "react";

export const BrainFeatures = (props) => {
  return (
    <div id="funcionalidades">
    <div id="testimonials" style={{backgroundColor: 'white'}}>
      <div className="container">
        <div className="section-title text-center">
          <h2>Principais funcionalidades</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" style={{minHeight: '115px'}}>
                  <div className="brain-testimonial">
                    <div className="brain-testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="brain-testimonial-content">
                      <p>{d.text}</p>
                      <div className="brain-testimonial-meta">{d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
    </div>
  );
};
