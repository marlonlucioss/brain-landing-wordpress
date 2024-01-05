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
            <img style={{width: '100px', marginTop: '-12px'}} src="img/brain/logo2.svg" alt=""/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right" style={{color: 'white'}}>
            <li>
              <a href="#testimonials" className="page-scroll">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#responsivo" className="page-scroll">
                Apresentação
              </a>
            </li>
            <li>
              <a href="#apresentacao" className="page-scroll">
                Apresentação
              </a>
            </li>
            <li>
              <a href="#quemutiliza" className="page-scroll">
                Quem utiliza
              </a>
            </li>
            <li>
              <a href="#valores" className="page-scroll">
                Valores
              </a>
            </li>
            <li>
              <a className="page-scroll">
                Entrar
              </a>
            </li>
            <li>
              <img style={{margin: '10px'}} src="img/brain/pt.svg" className="img-responsive footer-logo" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
