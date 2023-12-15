import React, {useEffect, useState} from "react";
import {getContent} from "../api/api";
import {removeTags} from "../functions";

export const Price = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  useEffect(() => {
    getContent('categories', '8').then((res) => {
      res.map((post) => {
        switch (post.title.rendered) {
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
  return (
    <div id="valores">
    <div id="team" className="text-center" style={{paddingBottom: '170px', backgroundSize: 'cover', backgroundImage: 'url(../wp-content/reactpress/apps/brain-landing/build/static/media/back-green.ddb641aae6e7ceb7e9c0.svg)', backgroundRepeat: 'no-repeat'}}>
      <div className="container">
        {/*<div className="col-md-8 col-md-offset-2 section-title">*/}
        {/*  <h2>Meet the Team</h2>*/}
        {/*  <p>*/}
        {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed*/}
        {/*    dapibus leonec.*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div id="row">
          <div className="col-md-12 col-sm-12 team">
            <div className="col-md-6 col-sm-12" style={{paddingTop: '60px'}}>
              <div className="caption">
                <h2 className='price-title' style={{textAlign: 'left', color: 'white'}}>{title}</h2>
                <p className='price-text' style={{textAlign: 'left', color: 'white'}}>{subtitle}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={{position: 'relative'}}>
              <img src='../wp-content/reactpress/apps/brain-landing/build/static/media/price.189c2309ce5cce1d13d1.png' style={{left: '100px', position: 'absolute', height: '630px', boxShadow: '#a3a3a3 0px 0px 45px', borderRadius: '15px'}} className="price-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
