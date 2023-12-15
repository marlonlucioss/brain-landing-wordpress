import React, {useEffect, useState} from "react";
import {getContent} from "../api/api";
import {removeTags} from "../functions";

export const Testimonials = (props) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [depoimentos, setDepoimentos] = useState([])
  const [tags, setTags] = useState([])
  useEffect(() => {
    getContent('categories', '6').then((res) => {
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
    getContent('categories', '7').then((res) => {
      let list = [...depoimentos];
      res.map((post) => {
        switch (post.title.rendered) {
          case 'depoimento1':
            list[0] = removeTags(post.content.rendered)
            setDepoimentos(list)
            break
          case 'depoimento2':
            list[1] = removeTags(post.content.rendered)
            setDepoimentos(list)
            break
          case 'depoimento3':
            list[2] = removeTags(post.content.rendered)
            setDepoimentos(list)
            break
          case 'depoimento4':
            list[3] = removeTags(post.content.rendered)
            setDepoimentos(list)
            break
          case 'depoimento5':
            list[4] = removeTags(post.content.rendered)
            break
          case 'depoimento6':
            list[5] = removeTags(post.content.rendered)
            break
        }
      })
      setDepoimentos(list)
    })
  }, []);

  return (
    <div id="quemutiliza" style={{backgroundColor: '#F2F8FC'}}>
    <div id="testimonials" style={{backgroundColor: '#F2F8FC'}}>
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="row">
          {depoimentos
            ? depoimentos.map((d, i) => (
                <div key={`dep-${i}`} className="col-md-4" style={{display: `flex`, flexFlow: `wrap`}}>
                  <div className="testimonial">

                    <div className="testimonial-content">
                      <p>"{d}"</p>
                      <div className="testimonial-meta-container">
                        <div className="testimonial-image">
                          {props.data && <img src={props.data[i].img} alt=""/>}
                        </div>
                        <div className="testimonial-texts">
                          {props.data && <div className="testimonial-meta bold">{props.data[i].name} </div>}
                          {props.data && <div className="testimonial-meta">{props.data[i].job} </div>}
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
    </div>
  );
};
