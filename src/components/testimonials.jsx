import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" style={{backgroundColor: '#F2F8FC'}}>
      <div className="container">
        <div className="section-title text-center">
          <h2>Palavra de quem utiliza</h2>
          <p>Veja depoimentos de médicos que já utilizam a solução.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" style={{display: `flex`, flexFlow: `wrap`}}>
                  <div className="testimonial">

                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta-container">
                        <div className="testimonial-image">
                          <img src={d.img} alt="" />
                        </div>
                        <div className="testimonial-texts">
                          <div className="testimonial-meta bold">{d.name} </div>
                          <div className="testimonial-meta">{d.job} </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
