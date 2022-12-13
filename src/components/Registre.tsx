
import React, { useState } from "react"

export default function () {
  // let [authMode, setAuthMode] = useState("signin")

  // const changeAuthMode = () => {
  //   setAuthMode(authMode === "signin" ? "signup" : "signin")
  // }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Nos citrons sont pressés de vous connaître </h3>
          {/* <div className="text-center">
            Already registered?{" "}
            
          </div> */}
          <div className="form-group mt-3">
            <label>Nom</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Zoé"
            />
          </div>
          <div className="form-group mt-3">
            <label>Prénom</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Zoé"
            />
          </div>
          <div className="form-group mt-3">
            <label>Adress mail professionnelle</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Zoé@lemonTri.fr"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Go
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}