import React, { useContext, useEffect } from 'react'
import '../CompCss/Service.css'
import Ct from './Ct'
import Cookies from 'js-cookie'

function Service() {
  let obj = useContext(Ct)
  useEffect(() => {
    let x = Cookies.get("auth")
    if (x !== undefined) {
      obj.updstate(JSON.parse(x))
    }
  }, [])
  return (
    <div className="services-container">
      <h2 className="services-heading">🧺 Our Services</h2>

      <div className="services-flex">

        <div className="service-card">
          <img src="https://media.gettyimages.com/id/152803950/photo/woman-putting-shirt-into-washing-machine.jpg?s=612x612&w=0&k=20&c=JU6k8UXbVGbs_5Hi6rZMn8iz9RCb_uyC_sC4Fkdhhys=" alt="Washing Service" />
          <h3>Washing</h3>
          <p>High-quality washing services to keep your clothes fresh and clean.</p>
        </div>

        <div className="service-card">
          <img src="https://media.gettyimages.com/id/2177864467/photo/person-ironing-clothes-on-an-ironing-board-in-a-cozy-room.jpg?s=612x612&w=0&k=20&c=AFXRZ3QsaLn01UXc1np50B246JnOrZD7FS8ddPkzlCI=" alt="Ironing Service" />
          <h3>Ironing</h3>
          <p>Crisp and wrinkle-free ironing for all your clothes.</p>
        </div>

        <div className="service-card">
          <img src="https://media.istockphoto.com/id/1583061999/photo/row-of-cloth-hangers-with-white-shirts.jpg?s=612x612&w=0&k=20&c=xkefufvmG4NPiPmeUDI80bKKmYzaoHhTHcJFEQLctas=" alt="Dry Cleaning Service" />
          <h3>Dry Cleaning</h3>
          <p>Professional dry cleaning for delicate and premium fabrics.</p>
        </div>

        <div className="service-card">
          <img src="https://media.istockphoto.com/id/1069411066/photo/laundry-room.jpg?s=612x612&w=0&k=20&c=iwH2ni9c8QaFnzTcyHFiNgkDj-32hS-CWZasqT74gc4=" alt="Premium Care" />
          <h3>Premium Care</h3>
          <p>Special treatment for expensive and delicate garments.</p>
        </div>
      </div>
    </div>
  )
}

export default Service