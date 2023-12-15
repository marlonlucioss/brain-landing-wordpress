import React, {useEffect, useState} from "react";
import {getContent} from "../api/api";

export const BrainSite = (props) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')

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

  useEffect(() => {
    getContent('categories', '4').then((res) => {
      res.map((post) => {
        switch (post.title.rendered) {
          case 'titulo':
            setTitle(removeTags(post.content.rendered))
            break
          case 'subtitulo':
            setSubtitle(removeTags(post.content.rendered))
            break
          case 'texto1':
            setText1(post.content.rendered)
            break
          case 'texto2':
            setText2(post.content.rendered)
            break
          case 'texto3':
            setText3(post.content.rendered)
            break
          case 'texto4':
            setText4(post.content.rendered)
            break
        }
      })
    })
  }, []);
  return (
    <div id="responsivo" style={{backgroundColor: '#F2F8FC'}}>
    <div id="about" style={{backgroundColor: '#F2F8FC'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{title}</h2>
              <p>{subtitle ? subtitle : "loading..."}</p>
              {/*<h3>Why Choose Us?</h3>*/}
              <div className="list-style">
                <div className="col-lg-8 col-sm-8 col-xs-12">
                  <ul>
                    <li style={{display: 'flex', marginBottom: '30px'}}><div className='brain-site-list-item-style' dangerouslySetInnerHTML={{__html: text1}}>
                      {/*<h6 style={{margin: 0}}>Lorem</h6>*/}
                      {/*<span>lorem</span>*/}
                    </div></li>
                    <li style={{display: 'flex', marginBottom: '30px'}}><div className='brain-site-list-item-style' dangerouslySetInnerHTML={{__html: text2}}>
                      {/*<h6 style={{margin: 0}}>{d.title}</h6>*/}
                      {/*<span>{d.text}</span>*/}
                    </div></li>
                    <li style={{display: 'flex', marginBottom: '30px'}}><div className='brain-site-list-item-style' dangerouslySetInnerHTML={{__html: text3}}>
                      {/*<h6 style={{margin: 0}}>{d.title}</h6>*/}
                      {/*<span>{d.text}</span>*/}
                    </div></li>
                    <li style={{display: 'flex', marginBottom: '30px'}}><div className='brain-site-list-item-style' dangerouslySetInnerHTML={{__html: text4}}>
                      {/*<h6 style={{margin: 0}}>{d.title}</h6>*/}
                      {/*<span>{d.text}</span>*/}
                    </div></li>
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
    </div>
  );
};
