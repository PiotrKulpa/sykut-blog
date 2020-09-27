import React from 'react';

const Contact = () => {
  return (
    <section className="contact-page-wrap">
      <div className="container">

        <div className="google-map-area">
          <div style={{ height: '540px', width: '100%' }}>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=lublin%20altanowa4&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0">
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
                  <li>ul. Altanowa 4/U6</li>
                  <li>Lublin</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="contact-list">
                <h5 className="item-title">Phone:</h5>
                <ul>
                  <li>+48 570 727 676</li>
                  <li>+48 081 742 68 24</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="contact-list">
                <h5 className="item-title">E-mail:</h5>
                <ul>
                  <li>sykutjanusz@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="contact-list">
                <h5 className="item-title">Fax:</h5>
                <ul>
                  <li>-</li>
                  <li>-</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="section-heading text-center heading-dark heading-layout2">
            <h2>Masz pytania? <span>pisz śmiało na maila</span></h2>
            <p>chętnie odpowiem na wszystkie, oczywiście w wolnej chwili.</p>
          </div>
          <form className="contact-form-box" id="contact-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" placeholder="imię *" className="form-control" name="name" data-error="Name field is required" required />
                <div className="help-block with-errors"></div>
              </div>
              <div className="col-md-4 form-group">
                <input type="email" placeholder="E-mail *" className="form-control" name="email" data-error="e-mail field is required" required />
                <div className="help-block with-errors"></div>
              </div>
              <div className="col-md-4 form-group">
                <input type="text" placeholder="Temat *" className="form-control" name="subject" data-error="Subject field is required" required />
                <div className="help-block with-errors"></div>
              </div>
              <div className="col-12 form-group">
                <textarea placeholder="Treść *" className="textarea form-control" name="message" id="form-message" rows="2" cols="20"
                  data-error="Message field is required" required></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <div className="col-12 form-group">
                <button type="submit" className="item-btn">Wyślij<i className="flaticon-right-arrow"></i></button>
              </div>
            </div>
            <div className="form-response"></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;