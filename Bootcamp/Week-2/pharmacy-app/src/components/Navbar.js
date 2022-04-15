import React from 'react'

const Navbar = () => {
    //navbar component
  return (
    <nav className="navbar navbar-dark bg-dark mb-1 text-center">
        <div className="container-fluid justify-content-center d-flex flex-column">
          <h2 className="navbar-text  ">
            Faruk Eczanesi İlaç Otomasyonu
            <h3 >by <a href="https://soners.dev/" className="link-secondary text-decoration-none" >@sonersdev</a></h3>
          </h2>
        </div>
      </nav>
  )
}

export default Navbar