import React, {useEffect, useState} from "react";
import {getContent} from "../api/api";
import {removeTags} from "../functions";

export const Team = (props) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  useEffect(() => {
    getContent('categories', '5').then((res) => {
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
    <div id="apresentacao" className="text-center">
    <div id="team" className="text-center">
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
            <div className="thumbnail">
              {" "}
              {props.data ? <img src={props.data[0].img} alt="..." className="team-img"/> : null}
              <div className="caption">
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
