import React, {useEffect, useState} from "react";
import {getContent} from "../api/api";



export const Header = (props) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  useEffect(() => {
    getContent('categories', '3').then((res) => {
      res.map((post) => {
        // eslint-disable-next-line default-case
        switch (post.slug) {
          case 'titulo':
            setTitle(removeTags(post.content.rendered))
            break
          case 'subtitulo':
            setSubtitle(removeTags(post.content.rendered))
            break
        }
      })
    })
  }, []);

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

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <img src="img/brain/firstSessionIcon.svg" className="img-responsive" alt="" />
                <h1>
                  {title.length ? title : "Loading"}
                  <span></span>
                </h1>
                <p>{subtitle.length ? subtitle : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll brain-first-button"
                >
                  Adquirir licença
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
