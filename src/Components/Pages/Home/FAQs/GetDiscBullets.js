export const GetDescBullets = ({ descBullets, descBullets1, descBullets2, descBullets3, descBullets4 }) => {
  if (descBullets) {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className='descBullets'>
            {item}
          </li>
        ))
      : null
  } else if (descBullets1) {
    return descBullets1
      ? descBullets1.map((item, i) => <li key={i} className='descBullets' dangerouslySetInnerHTML={{ __html: item }}></li>)
      : null
  } else if (descBullets2) {
    return descBullets2
      ? descBullets2.map((item, i) => (
          <li key={i} className='descBullets'>
            {item}
          </li>
        ))
      : null
  } else if (descBullets3) {
    return descBullets3
      ? descBullets3.map((item, i) => (
          <li key={i} className='descBullets'>
            <span className='descBullets__bullet'></span>

            {item}
          </li>
        ))
      : null
  } else if (descBullets4) {
    return descBullets4
      ? descBullets4.map((item, i) => <li key={i} className='descBullets' dangerouslySetInnerHTML={{ __html: item }} />)
      : null
  } else {
    return null
  }
}
