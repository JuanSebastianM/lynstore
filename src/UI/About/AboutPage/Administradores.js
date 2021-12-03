const Administradores = ({ name, info }) => {
  return (
    <>
      <article>
        <main>
          <div className='text-wrapper'>
            <h2>{name}</h2>
            {/* <img src={picture} href={name} /> */}
            <p>{info}</p>
          </div>
        </main>
      </article>
    </>
  )
}
export default Administradores
