import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* Mobile Metas */}
          <meta name="viewport" content="width=devsice-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {/* Site Metas */}
          <meta name="keywords" content />
          <meta name="description" content />
          <meta name="author" content />
          {/* Site Icons */}
          <link rel="shortcut icon" href="#" type="image/x-icon" />
          <link rel="apple-touch-icon" href="#" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          {/* Pogo Slider CSS */}
          {/* <link rel="stylesheet" href="css/pogo-slider.min.css" /> */}
          {/* Site CSS */}
          <link rel="stylesheet" href="css/style.css" />
          {/* Responsive CSS */}
          <link rel="stylesheet" href="css/responsive.css" />
          {/* Custom CSS */}
          <link rel="stylesheet" href="css/custom.css" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          {/* ALL JS FILES */}
          <script src="js/jquery.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          {/* ALL PLUGINS */}
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/jquery.pogo-slider.min.js"></script>
          <script src="js/slider-index.js"></script>
          <script src="js/smoothscroll.js"></script>
          <script src="js/form-validator.min.js"></script>
          <script src="js/contact-form-script.js"></script>
          <script src="js/isotope.min.js"></script>
          <script src="js/images-loded.min.js"></script>
          <script src="js/custom.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument