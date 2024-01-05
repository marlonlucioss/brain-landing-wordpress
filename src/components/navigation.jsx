import React, {useState} from "react";
import {getContent} from "../api/api";

export const Navigation = (props) => {
  const [menu1, setMenu1] = useState('')
  const [menu2, setMenu2] = useState('')
  const [menu3, setMenu3] = useState('')
  const [menu4, setMenu4] = useState('')
  const [menu5, setMenu5] = useState('')

  function removeTags(str) {
    if ((str===null) || (str===''))
      return false;
    else
      str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
  }

  getContent('categories', '15').then((res) => {
    res.map((post) => {
      switch (post.title.rendered) {
        case 'menu1':
          setMenu1(removeTags(post.excerpt.rendered))
          break
        case 'menu2':
          setMenu2(removeTags(post.excerpt.rendered))
          break
        case 'menu3':
          setMenu3(removeTags(post.excerpt.rendered))
          break
        case 'menu4':
          setMenu4(removeTags(post.excerpt.rendered))
          break
        case 'menu5':
          setMenu5(removeTags(post.excerpt.rendered))
          break
      }
    })
  })
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
                {menu1}
              </a>
            </li>
            <li>
              <a href="#responsivo" className="page-scroll">
                {menu2}
              </a>
            </li>
            <li>
              <a href="#apresentacao" className="page-scroll">
                {menu3}
              </a>
            </li>
            <li>
              <a href="#quemutiliza" className="page-scroll">
                {menu4}
              </a>
            </li>
            <li>
              <a href="#valores" className="page-scroll">
                {menu5}
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
