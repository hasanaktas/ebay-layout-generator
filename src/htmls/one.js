import { companies as ShippingCompanies } from 'components/shippingCompanies/ShippingCompanies'

const Html = (companyName, logo, shipping, preview) => {
  console.log(shipping)
  const shipment = () => {
    if (Array.isArray(shipping)) {
      return shipping
        .map((item, index) => {
          return `  <div style="width: 140px;height: 140px; display: flex; justify-content: center; align-items: center;box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);margin:20px">
          <img src="${
            ShippingCompanies[Number(item)].uri
          }"  style="width: 100px; height: 100px;" ></img>
        </div>`
        })
        .join('')
    } else
      return `<div style="width: 140px;height: 140px; display: flex; justify-content: center; align-items: center;box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);margin:20px">
      <img src="${ShippingCompanies[shipping].uri}"  style="width: 100px; height: 100px;" ></img>
    </div>`
  }

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
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
      * {
        font-family: 'Poppins', Georgia, 'Times New Roman', serif !important;
      }
      .header {
        background: var(--main-color);
        height: 500px;
      }
    </style>
  </head>

  <body>
    <div style="max-width: 1000px; margin-left: auto; margin-right: auto;">
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; margin-bottom: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.05);">
        <img
          src="${logo.uri}"
          style="width: 70px; height: 70px;"
        >
       </img>
        <div style="color: var(--main-color);text-align: center; font-size: 22px; font-weight: 500; margin-bottom: 20px;"> ${companyName}</div>
        <div
        style="padding:5px;background-color: var(--main-color);font-size: 18px;display: flex; justify-content:center; align-items: center; text-align: center; width: 100%; color: white;" >
         WILLKOMMEN ZU UNSEREM OFFIZIELLEN EBAY SHOP
        </div>
      </div>
      <div  style="color: var(--main-color);font-size: 30px;font-weight: 700; text-align: center; margin-bottom: 20px;">
        Duygu | 4-er | Bambus | Gewürz-Set | Gewürzdosen | Gewürzbehälter | Weiß | Aus Bambus & Porzellan | Inkl.Platte | Dg-6213
     </div>
     <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items:center">
     ${
       preview
         ? `
       <img src="https://www.bedibuy.com/media/image/d6/af/ea/tfd-sm-90black_50440950453_o.jpg" style="width: 400px;height: auto; margin: 20px;box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="https://www.bedibuy.com/media/image/d0/g0/05/TFD-SM-70Black-4.jpg" style="width: 400px; height: auto; margin:20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15); " ></img>
       <img src="https://www.bedibuy.com/media/image/3d/2b/80/TFD-SM-70Black-3.jpg" style="width: 400px;height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="https://www.bedibuy.com/media/image/34/d7/e9/TFD-SM-70Black-2.jpg"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>`
         : `<img src="#PICTURE1#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="#PICTURE2#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="#PICTURE3#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="#PICTURE4#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="#PICTURE5#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>
       <img src="#PICTURE6#"  style="width: 400px; height: auto; margin: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15);" ></img>`
     }
      
     </div>
     <div   style="color: var(--main-color);font-size: 30px;font-weight: 700; text-align: center; margin-bottom: 10px;">
       BESCHREIBUNG
     </div>
     <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 20px;">
     ${
       preview
         ? ` <p  style="text-align: left;" align="center"><span style="font-size: medium; color: #888888;"><strong>Marke:&nbsp;</strong>Dekonaz</span></p>
     <p  style="text-align: left;" align="center"><span style="font-size: medium; color: #888888;"><strong>Farbe / Muster:</strong>&nbsp;Grau / Marmor Design</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;"><strong>Material</strong>: Faserplatte / Metall</span></p>
     <p style="text-align: left;"><span style="font-size: medium; color: #888888;"><strong>Gewicht</strong>: 8 kg&nbsp;</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;"><strong>Lieferung und Ma&szlig;e</strong>: 1x Dekonaz | Traditionelle Bodentisch</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;">90 cm</span></p>
     <p  style="text-align: left;"><strong style="color: #888888; font-size: medium;">Mehr Informationen</strong></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;">- Das Material unseres Produkts hat das E1-Zertifikat</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;">- Tischdicke (18 mm)</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;">- Tischbeinh&ouml;he (15 cm)</span></p>
     <p  style="text-align: left;"><span style="font-size: medium; color: #888888;">- Bodenfreiheit (Tischbeine offen) 21 cm</span></p>`
         : `#DESCRIPTION#`
     }
       
      
     </div>
     <div   style="color: var(--main-color);font-size: 30px;font-weight: 700; text-align: center; margin-bottom: 10px;">
        VERSANDOPTIONEN
      </div>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; margin-bottom: 20px;">
          ${shipment()}
      </div>
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; background-color: var(--main-color); color: white; padding: 20px; box-shadow: 0px 0px 28px 6px rgba(0,0,0,0.15); margin-bottom: 20px;">
        <div style="font-size: 24px;">${companyName} Copyright © 2021</div>
        <div style="font-size: 18px; opacity: 0.8;">Alle Rechte vorbehalten.</div>
    </div>
    </div>
  </body>
</html>

  `
}

export default Html
