import React from "react";

export const BrainSite = (props) => {
  return (
    <div id="about" style={{backgroundColor: '#F2F8FC'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Web e Responsivo</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/*<h3>Why Choose Us?</h3>*/}
              <div className="list-style">
                <div className="col-lg-8 col-sm-8 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d.title}-${i}`} style={{display: 'flex', marginBottom: '30px'}}><div>
                            <h6 style={{margin: 0}}>{d.title}</h6>
                            <span>{d.text}</span>
                          </div></li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll brain-first-button"
              >
                Comprar agora
              </a>{" "}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="../wp-content/reactpress/apps/brain-landing/build/static/media/multi-layer-image-svg.5040322e3b259b86d88d.svg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
