export const data = [
  {
    id: 1,
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
    id: 2,
    title: '¿Cuáles son las formas de pago?',
    jsxContent: (
      <>
        <p>
          Contraentrega en la ciudad de Sincelejo, en los municipios de Corozal,
          Morroa, Sampués, Chochó y Brémen.
        </p>
        <div className='pay-method'>
          <div className='methods'>
            <img src='' alt='Nequi' />
            <img src='' alt='Daviplata' />
          </div>
          <span>300 876 9307</span>
        </div>
      </>
    ),
  },
];
