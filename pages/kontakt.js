import React from 'react';
import fm from '../content/contact.md';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {

  const {
    address1 = '',
    address2 = '',
    email = '',
    email2 = '',
    fax1 = '',
    fax2 = '',
    head = '',
    phone1 = '',
    subhead = '',
  } = fm.attributes || {};

  return (
    <>
      <Breadcrumbs />
      <section className="contact-page-wrap">
        <div className="container">
          <div className="google-map-area">
            <div style={{ height: '540px', width: '100%' }}>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=lublin%20altanowa4&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-method-area">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="contact-list">
                  <h5 className="item-title">Adres:</h5>
                  <ul>
                    <li>{address1}</li>
                    <li>{address2}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contact-list">
                  <h5 className="item-title">Telefon:</h5>
                  <ul>
                    <li>{phone1}</li>
                    <li>{phone1}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contact-list">
                  <h5 className="item-title">E-mail:</h5>
                  <ul>
                    <li>{email}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contact-list">
                  <h5 className="item-title">Fax:</h5>
                  <ul>
                    <li>{fax1}</li>
                    <li>{fax2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <div className="section-heading text-center heading-dark heading-layout2">
              <h2>{head}</h2>
              <p>{subhead}</p>
            </div>

            <form
              className="contact-form-box"
              id="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    type="text"
                    placeholder="imię *"
                    className="form-control"
                    name="użytkownik"
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-md-4 form-group">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="form-control"
                    name="email"
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    placeholder="Temat *"
                    className="form-control"
                    name="temat"
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Treść *"
                    className="textarea form-control"
                    name="wiadomość"
                    id="form-message"
                    rows="2"
                    cols="20"
                    required
                  >
                  </textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-12 form-group">
                  <button
                    type="submit"
                    className="item-btn"
                  >
                    Wyślij<i className="flaticon-right-arrow"></i>
                  </button>
                </div>
              </div>
              <div className="form-response"></div>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;