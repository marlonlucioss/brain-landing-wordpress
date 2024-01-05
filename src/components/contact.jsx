import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       clearState();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div>
      <div id="contact">
        <div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    Brain nas redes sociais
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 footer-body">
            <div className="container">
              <div className="col-md-5 footer-container">
                <div className="row">
                  <div className="section-title">
                    <h2><img src="img/brain/logofooter.svg" className="img-responsive footer-logo" alt="" /></h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-md-offset-1 contact-info">
                <div className="contact-item col-md-4">
                  <h3><b>Fale conosco</b></h3>
                  <p>
                    <span>
                      <b>Vendas</b>
                    </span>
                    {props.data ? props.data.address1 : "loading"} <br/>
                    {props.data ? props.data.address2 : "loading"}
                  </p>
                </div>
                <div className="contact-item col-md-4">
                  <h3 className="empty-h3" />
                  <p>
                    <span>
                      <b>Suporte</b>
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item col-md-4">
                  <h3 className="empty-h3" />
                  <p>
                    <span>
                      <b>Dúvidas e reclamações</b>
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="col-md-9 container text-left">
          <p>
            Brain Company LTDA. - CNPJ: 11.876.274/0001-88 - Endereço: Av. Dr. Gustavo Paiva, 400, 8º andar, Maceio - AL - CEP: 57300-000
          </p>
        </div>
        <div className="col-md-3 container text-right">
          <p>
            Desenvolvido no Brasil
          </p>
        </div>
      </div>
    </div>
  );
};
