
import React from "react"

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Se connecter</h3>
          <div className="form-group mt-3">
            <label>Adresse e-mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Se connecter
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#">mot de passe oublié ?</a>
            <a href="#"><br/>Créer un compte</a>
          </p>
        </div>
      </form>
    </div>
  )
}