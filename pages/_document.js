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
          {/* Site Metas */}
          <meta name="keywords" content="Janusz Sykut,blog, stomatologia, protetyka, chirurgia, implantologia" />
          <meta name="description" content="Janusz Sykut - blog o tematyce stomatologicznej: protetyka, chirurgia, implantologia" />
          <meta name="author" content="Janusz Sykut" />
          {/* Manifest */}
          <link rel="manifest" href="manifest.json"></link>
          {/* Favicon*/}
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="#" />
          {/* Normalize CSS */}
          <link rel="stylesheet" href="/css/normalize.css" />
          {/* Main CSS */}
          <link rel="stylesheet" href="/css/main.css" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          {/* Animate CSS */}
          <link rel="stylesheet" href="/css/animate.min.css" />
          {/* Fontawesome CSS */}
          <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
          {/* Flaticon CSS */}
          <link rel="stylesheet" href="/css/font/flaticon.css" />
          {/* Meanmenu CSS */}
          <link rel="stylesheet" href="/css/meanmenu.min.css" />
          {/* Magnific Popup CSS */}
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          {/*  offcanvas CSS  */}
          <link rel="stylesheet" href="/css/rt-canvas-menu.css" />
          {/*  Custom CSS  */}
          <link rel="stylesheet" href="/css/style.css"></link>
          {/* React Slick Carousel */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Fix styles */}
          <link rel="stylesheet" href="/css/style-fix.css"></link>
          {/* Vendor Scripts */}
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <script src="/js/modernizr-3.6.0.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* jquery */}
          <script src="/js/jquery-2.2.4.min.js"></script>
          {/* Plugins js  */}
          <script src="/js/plugins.js"></script>
          {/* Popper js  */}
          <script src="/js/popper.min.js"></script>
          {/* Bootstrap js  */}
          <script src="/js/bootstrap.min.js"></script>
          {/* Counterup Js  */}
          <script src="/js/jquery.counterup.min.js"></script>
          {/* Waypoints Js  */}
          <script src="/js/waypoints.min.js"></script>
          {/* Parallaxie Js  */}
          <script src="/js/parallaxie.js"></script>
          {/* Countdown js  */}
          <script src="/js/jquery.countdown.min.js"></script>
          {/* Meanmenu Js  */}
          <script src="/js/jquery.meanmenu.min.js"></script>
          {/* Magnific Popup Js  */}
          <script src="/js/jquery.magnific-popup.min.js"></script>
          {/* Isotope Js  */}
          <script src="/js/isotope.pkgd.min.js"></script>
          {/* Imagesloaded Js  */}
          <script src="/js/imagesloaded.pkgd.min.js"></script>
          {/* Scroll Up Js  */}
          <script src="/js/jquery.scrollUp.min.js"></script>
          {/* Tilt Js  */}
          <script src="/js/tilt.jquery.min.js"></script>
          {/* offcanvas Js  */}
          <script src="/js/rt-canvas-menu.js"></script>
          {/* Custom Js  */}
          <script src="/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument