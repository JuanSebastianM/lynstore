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
              <div className='aligned-column-div'>
                <img
                  src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640039495/unnamed-removebg-preview_idqbif.png'
                  alt='Nequi'
                />
                <p>Nequi</p>
              </div>
              <div className='aligned-column-div'>
                <img
                  src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640039807/daviplata_ek6ug2.jpg'
                  alt='Daviplata'
                />
                <p>Daviplata</p>
              </div>
            </div>
            <p className='phone-number'>300 876 9307</p>
          </div>
          <div className='flex-div'>
            <div className='line'></div>
            <img
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639949748/logo_jad5ik.png'
              alt='Logo de LynStore'
            />
            <div className='line'></div>
          </div>
          <p>Si estás en una ciudad diferente a Sincelejo:</p>
          <div className='methods'>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640039495/unnamed-removebg-preview_idqbif.png'
                alt='Nequi'
              />
              <p>Nequi</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640039807/daviplata_ek6ug2.jpg'
                alt='Daviplata'
              />
              <p>Daviplata</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041413/logo_efecty-removebg-preview_qo0gxl.png'
                alt='Efecty'
              />
              <p>Efecty</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041579/baloto-cali-colombia-785500_bbkn9a.jpg'
                alt='Baloto'
              />
              <p>Baloto</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041633/supergiros-2_oc0ncp.png'
                alt='SuperGiros'
              />
              <p>SuperGiros</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041742/7PPwLfz28cSzZfRuMj0Ptd71uOUSVEYU23di-kVC1l_oTPBvtHAkXw893FtjshhQqJ0_um4vid.png'
                alt='Movii'
              />
              <p>Movii</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041792/Logo_Exito_colombia_l8jwg8.png'
                alt='Éxito'
              />
              <p>Éxito</p>
            </div>
            <div className='aligned-column-div'>
              <img
                src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640041896/Olimpical_fjrkex.png'
                alt='Olimpica'
              />
              <p>Olimpica</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'cuales-son-los-precios-de-envio',
      title: '¿Cuáles son los precios de envío?',
      jsxContent: (
        <>
          <div className='faq-text-wrapper'>
            <img
              className='delivery-img'
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640037699/pizza-delivery-food-business-service-pizza-removebg-preview_r7qocp.png'
              alt='Domiciliario manejando una moto'
            />
            <div className='aligned-column-div'>
              <p>Sincelejo</p>
              <p>
                <span className='dollar-sign'>$</span>3.000
              </p>
            </div>
            <div className='aligned-column-div'>
              <p>Brémen</p>
              <p>
                <span className='dollar-sign'>$</span>4.000
              </p>
            </div>
            <div className='aligned-column-div'>
              <p>Sampués, Morroa, Chochó y Corozal</p>
              <p>
                <span className='dollar-sign'>$</span>5.000
              </p>
            </div>
          </div>
          <div className='flex-div'>
            <div className='line'></div>
            <img
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639949748/logo_jad5ik.png'
              alt='Logo de LynStore'
            />
            <div className='line'></div>
          </div>
          <div className='aligned-column-div'>
            <img
              className='delivery-img'
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640038668/www.servientrega.com_-1_svnvlw.png'
              alt='Servientrega'
            />
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
            <div className='line'></div>
            <img
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639949748/logo_jad5ik.png'
              alt='Logo de LynStore'
            />
            <div className='line'></div>
          </div>
          <ul>
            <li>
              La entrega se realiza de 2 a 3 días luego de realizado el pago.
            </li>
            <li>
              Si te encuentras en Sincelejo, lo enviaremos a través de
              domicilio.
            </li>
            <li>
              Si te encuentras en otra ciudad, entonces a través de empresas de
              envíos.
            </li>
          </ul>
          <div className='flex-div'>
            <div className='line'></div>
            <img
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639949748/logo_jad5ik.png'
              alt='Logo de LynStore'
            />
            <div className='line'></div>
          </div>
          <ul>
            <li>
              Para que se te apliquen precios mayoristas, la compra mínima debe
              ser de <span className='dollar-sign'>$</span>100.000 pesos.
            </li>
            <li>
              El envío es gratis por compras de o superiores a{' '}
              <span className='dollar-sign'>$</span>200.000 pesos.
            </li>
          </ul>
          <div className='flex-div'>
            <div className='line'></div>
            <img
              src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639949748/logo_jad5ik.png'
              alt='Logo de LynStore'
            />
            <div className='line'></div>
          </div>
          <p>
            <span className='bold-span'>OJO:</span> No trabajamos antes de
            realizar el pago del pedido, debido a que en muchas ocasiones nos
            dejaron pedidos hechos, lo que acarrea dinero y tiempo perdido.
            Agradecemos comprensión.
          </p>
        </>
      ),
    },
    {
      id: 'puedo-usar-sus-fotos-para-mostrar-a-mis-clientes',
      title: '¿Puedo usar sus fotos para mostrar a mis clientes?',
      jsxContent: (
        <>
          <p>
            Por supuesto que sí. Al momento de comprar al por mayor te las
            enviamos para que evites tomar nuevas fotos. Además puedes
            promocionar todos nuestros accesorios y luego realizar el pedido de
            acuerdo a lo que tus clientes te piden y así evitas invertir dinero
            sin saber.
          </p>
        </>
      ),
    },
  ],
];
