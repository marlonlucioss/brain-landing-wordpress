import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default" style={{background: 'transparent', boxShadow: 'none'}}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img style={{width: '100px', marginTop: '-12px'}} src="../wp-content/reactpress/apps/brain-landing/build/static/media/logo2.58f8e5d640b6d2a442bc.svg" alt=""/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right" style={{color: 'white'}}>
            <li>
              <a href="#features" className="page-scroll">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Apresentação
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Apresentação
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                FAQ
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Entrar
              </a>
            </li>
            <li>
              <img style={{margin: '10px'}} src="../wp-content/reactpress/apps/brain-landing/build/static/media/pt.29359decb3c85bed020e.svg" className="img-responsive footer-logo" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};