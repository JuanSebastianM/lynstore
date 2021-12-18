export const data = [
  [
    {
      id: 'como-puedo-comprar-un-producto',
      title: '¿Cómo puedo comprar un producto?',
      jsxContent: (
        <ol>
          <li>
            Nos envías captura de la foto del producto para confirmar
            disponibilidad.
          </li>
          <li>Nos dices las unidades, colores y medidas de tu accesorio.</li>
          <li>
            Nos dices las fecha y hora de entrega, si no lo tenemos para entrega
            inmediata te lo entregaremos a los dos (2) días.
          </li>
          <li>
            Para agendar tu pedido nos debes enviar tus datos de entrega:
            <ul>
              <li>Nombre completo</li>
              <li>Barrio</li>
              <li>Dirección</li>
              <li>Número de teléfono</li>
            </ul>
          </li>
        </ol>
      ),
    },
    {
      id: 'cuales-son-las-formas-de-pago',
      title: '¿Cuáles son las formas de pago?',
      jsxContent: (
        <>
          <p>
            Contraentrega en la ciudad de Sincelejo, en los municipios de
            Corozal, Morroa, Sampués, Chochó y Brémen.
          </p>
          <div className='pay-method'>
            <div className='methods'>
              <img src='' alt='Nequi' />
              <img src='' alt='Daviplata' />
            </div>
            <span>300 876 9307</span>
          </div>
          <div className='flex-div'>
            <div className='line'>
              <img src='' alt='LynStore logo' />
            </div>
          </div>
          <p>Si estás en una ciudad diferente a Sincelejo:</p>
          <div className='methods'>
            <img src='' alt='Nequi' />
            <img src='' alt='Daviplata' />
            <img src='' alt='Efecty' />
            <img src='' alt='Baloto' />
            <img src='' alt='SuperGiros' />
            <img src='' alt='Movii' />
            <img src='' alt='Éxito' />
            <img src='' alt='Olimpica' />
          </div>
        </>
      ),
    },
    {
      id: 'cuales-son-los-precios-de-envio',
      title: '¿Cuáles son los precios de envío?',
      jsxContent: (
        <>
          <img src='' alt='Domiciliario manejando una moto' />
          <div className='delivery-price'>
            <p>Sincelejo</p>
            <p>
              <span>$</span>3.000
            </p>
          </div>
          <div className='delivery-price'>
            <p>Brémen</p>
            <p>
              <span>$</span>4.000
            </p>
          </div>
          <div className='delivery-price'>
            <p>Sampués, Morroa, Chochó y Corozal</p>
            <p>
              <span>$</span>5.000
            </p>
          </div>
          <div className='delivery-price'>
            <img src='' alt='Servientrega' />
            <p>
              Para envíos a diferentes ciudades, el precio depende de la ciudad
              donde te encuentres.
            </p>
          </div>
        </>
      ),
    },
  ],
  [
    {
      id: 'como-comprar-al-por-mayor',
      title: '¿Cómo comprar al por mayor?',
      jsxContent: (
        <>
          <ol>
            <li>Solicita en WhatsApp el catálogo mayorista.</li>
            <li>
              Nos envías la captura de los accesorios que deseas pedir
              incluyendo unidades, colores y medidas para verificar la
              disponibilidad.
            </li>
            <li>
              Te enviamos el valor total de tu pedido y los medios de pagos que
              tenemos.
            </li>
            <li>
              Luego de realizado el pago nos envías el comprobante junto a los
              datos de entrega.
            </li>
          </ol>
          <div className='flex-div'>
            <div className='line'>
              <img src='' alt='LynStore logo' />
            </div>
          </div>
          <p>La entrega se realiza de 2 a 3 días luego de realizado el pago.</p>
          <p>
            Si te encuentras en Sincelejo, lo enviaremos a través de domicilio.
            Si te encuentras en otra ciudad, entonces a través de empresas de
            envíos.
          </p>
          <div className='flex-div'>
            <div className='line'>
              <img src='' alt='LynStore logo' />
            </div>
          </div>
          <p>
            <span>OJO:</span> No trabajamos antes de realizar el pago del
            pedido, debido a que en muchas ocasiones nos dejaron pedidos hechos,
            lo que acarrea dinero y tiempo perdido. Agradecemos comprensión.
          </p>
        </>
      ),
    },
  ],
];