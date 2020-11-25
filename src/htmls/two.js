import { companies as ShippingCompanies } from 'components/shippingCompanies/ShippingCompanies'

const Html = (companyName, logo, shipping, preview) => {
  console.log(shipping)
  const shipment = () => {
    if (Array.isArray(shipping)) {
      return shipping
        .map((item, index) => {
          return `<img src="${
            ShippingCompanies[Number(item)].uri
          }"  style="width: 100px; height: 100px;" ></img>`
        })
        .join('')
    } else
      return `         <img src="${
        ShippingCompanies[Number(shipping)].uri
      }"  style="width: 100px; height: 100px;" ></img>`
  }

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap core CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins+Display:500,700,900"
      rel="stylesheet"
    />
    <style>
      :root {
        --main-color: ${logo.color};
      }
      .blog-header {
        line-height: 1;
        border-bottom: 1px solid #e5e5e5;
      }

      * {
        font-family: 'Poppins', Georgia, 'Times New Roman', serif;
      }
      .ability-title {
        font-size: 0.9rem;
      }
      .ability {
        font-size: 0.7rem;
        font-weight: 500;
      }

      .display-4 {
        font-size: 2.5rem;
      }
      @media (min-width: 768px) {
        .display-4 {
          font-size: 3rem;
        }
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .nav-scroller .nav-link {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.875rem;
      }

      .card-img-right {
        height: 100%;
        border-radius: 0 3px 3px 0;
      }

      .flex-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
      }

      .h-250 {
        height: 250px;
      }
      @media (min-width: 768px) {
        .h-md-250 {
          height: 250px;
        }
      }

      /* Pagination */
      .blog-pagination {
        margin-bottom: 4rem;
      }
      .blog-pagination > .btn {
        border-radius: 2rem;
      }

      /*
           * Blog posts
           */
      .blog-post {
        margin-bottom: 4rem;
      }
      .blog-post-title {
        margin-bottom: 0.25rem;
        font-size: 2.5rem;
      }
      .blog-post-meta {
        margin-bottom: 1.25rem;
        color: #999;
      }

      /*
           * Footer
           */
      .blog-footer {
        padding: 2.5rem 0;
        color: #999;
        text-align: center;
        background-color: #f9f9f9;
        border-top: 0.05rem solid #e5e5e5;
      }
      .blog-footer p:last-child {
        margin-bottom: 0;
      }

      .color-primary {
        color: var(--main-color);
      }
      .color-white {
        color: #fff;
      }
      .bg-primary {
        background-color: var(--main-color) !important;
      }
      .card-header {
        display: flex;
        justify-content: center;
      }
      .company-logo {
        width: 200px;
        height: auto;
      }

      .product-image-1 {
        width: 45%;
        height: auto;
        margin-right: 10px;
      }

      .product-image-2 {
        width: 45%;
        height: auto;
      }
      .product-image {
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="blog-header">
        <div
          class="d-flex justify-content-center align-items-center blog-header"
          style="flex-direction: column"
        >
          <img
            class="mt-3"
            style="width: auto; height: 70px"
            alt="company_logo"
            src="${logo.uri}"
          />
          <h6
            class="mb-3"
            style="color: var(--main-color); font-size: 20px; font-weight: 500"
          >
            ${companyName}
          </h6>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <p class="blog-header-logo text-dark mt-3">
            WILLKOMMEN ZU UNSEREM OFFIZIELLEN EBAY SHOP
          </p>
        </div>
      </header>

      <div class="card-deck mb-3 text-center">
        <div class="card mt-4 mb-4 shadow-sm">
          <div class="card-header bg-primary">
            <h6 class="my-0 font-weight-bold ability-title color-white">
              SCHNELLE LIEFERUNG
            </h6>
            <i class="fa fa-check ml-2 color-white"></i>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-1 mb-1">
              <li class="ability">BIS 14:00 VERSAND AM SELBEN TAG</li>
            </ul>
          </div>
        </div>
        <div class="card mt-4 mb-4 shadow-sm">
          <div class="card-header bg-primary">
            <h6 class="my-0 font-weight-bold ability-title color-white">
              TOP SERVICE
            </h6>
            <i class="fa fa-check ml-2 color-white"></i>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-1 mb-1">
              <li class="ability">24STUNDEN SUPPORT</li>
            </ul>
          </div>
        </div>
        <div class="card mt-4 mb-4 shadow-sm">
          <div class="card-header bg-primary">
            <h6 class="my-0 font-weight-bold ability-title color-white">
              PRODUKTE
            </h6>
            <i class="fa fa-check ml-2 color-white"></i>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-1 mb-1">
              <li class="ability">VIELZAHL AN PRODUKTEN</li>
            </ul>
          </div>
        </div>
        <div class="card mt-4 mb-4 shadow-sm">
          <div class="card-header bg-primary">
            <h6 class="my-0 font-weight-bold ability-title color-white">
              GEPRÜFTER HÄNDLER
            </h6>
            <i class="fa fa-check ml-2 color-white"></i>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-1 mb-1">
              <li class="ability">FÜR VERTRAUEN UND SICHERHEIT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-9 blog-main">
          <h3 class="pb-4 mb-4 font-italic border-bottom color-primary">
          ${
            preview
              ? `Duygu | 4-er | Bambus | Gewürz-Set | Gewürzdosen | Gewürzbehälter | Weiß | Aus Bambus & Porzellan | Inkl.Platte | Dg-6213`
              : `#TITLE#`
          }  
          </h3>

          <div class="blog-post">
          ${
            preview
              ? `
            <img
              src="https://www.bedibuy.com/media/image/c1/a2/a8/dg-dg-6213.jpg"
              class="product-image mb-2"
              alt="image"
            />
            <img
              src="https://www.bedibuy.com/media/image/25/9d/fa/dg-dg-6213-2.jpg"
              class="product-image mb-2"
              alt="image"
            />
            <img
              src="https://www.bedibuy.com/media/image/e7/84/e0/dg-dg-6213-3.jpg"
              class="product-image mb-2"
              alt="image"
            />
            `
              : `
            <img
            src="#PICTURE1#" 
            class="product-image mb-2"
            alt="image"
          />
          <img
          src="#PICTURE2#" 
          class="product-image mb-2"
          alt="image"
        />
        <img
        src="#PICTURE3#" 
        class="product-image mb-2"
        alt="image"
      />
      <img
      src="#PICTURE4#" 
      class="product-image mb-2"
      alt="image"
    />
    <img
    src="#PICTURE5#" 
    class="product-image mb-2"
    alt="image"
  />`
          }
          </div>
          <div class="blog-post">
            <h3 class="pb-4 mb-4 font-italic border-bottom color-primary">
              BESCHREIBUNG
            </h3>
            ${
              preview
                ? ` <p>Marke: Duygu</p>
              <p>Farbe: Weiß</p>
              <p>Material: Bambus & Porzellan</p>
              <p>
                Lieferumfang und Abmessung: 1 x Duygu | 4-er | Bambus | Gewürz-Set
                | Gewürzdosen | Gewürzbehälter | Weiß | Aus Bambus & Porzellan |
                Inkl.Platte | Dg-6213
              </p>
              <p>ca. 38 cm x 10 cm x 11 cm</p>
              <p>4 x Gewürzdose (Porzellan)+ Deckel (Bambus)</p>
              <p>1 x Platte (Bambus)</p>`
                : `<p>#DESCRIPTION#</p>`
            }
           
          </div>
        </div>

        <aside class="col-md-3 blog-sidebar">
          <div class="p-4 mb-3 bg-light rounded overflow-hidden">
            <h4 class="font-italic color-primary">ZAHLUNG & VERSAND</h4>
            <p class="mb-0">Zahlungsmöglichkeiten:</p>
            <ul>
              <li>Paypal</li>
              <li>Paypal Plus</li>
              <li>Überweisung</li>
              <li>Kreditkarte</li>
              <li>Lastschrift</li>
              <li>Auf Rechnung</li>
              <li>Barzahlung bei Abholung</li>
              <li>Nachnahme</li>
            </ul>
            <p class="mb-0 mt-1">Versand:</p>
            <p>
              Die Bearbeitung des Auftrages und der Versand des Artikels dauern
              in der Regel:
            </p>
            <p class="mt-3">
              Lieferzeit Deutschland 1-3 Werktage Lieferzeit Ausland 2-5
              Werktage
            </p>
          </div>
          <div class="mb-3  rounded d-flex flex-column justify-content-center align-items-center bg-light">
   ${shipment()}
          </div>
          <div class="mb-3 bg-primary rounded">
            <img
              alt="image"
              src="https://layout.icommercetime.com/layout/design-2.png"
              class="product-image"
            />
          </div>
        </aside>
        <!-- /.blog-sidebar -->
      </div>
      <!-- /.row -->
    </main>
    <!-- /.container -->

    <footer class="blog-footer">
      <p class="color-primary">${companyName} Copyright © 2021</p>
      <p>Alle Rechte vorbehalten.</p>
    </footer>
  </body>
</html>


  `
}

export default Html
