import React from 'react'

export const RegisterScreen = () => {
    // return (
    //     <div>
    //         <h1>RegisterScreen</h1>
    //     </div>
    // )
    // const [email, setEmail] = useState('');

  return (
    <div>
      <h2>Login</h2>

      <form>
        {/* <input type="text" placeholder="Email" autoComplete="off"
          name="email" onChange={(ev) => setEmail(ev.target.value)} /> */}

        {/* <input type="password" placeholder="Contraseña"
                    name="password" value={password} onChange={handleInputChange}>
                </input> */}

        <button type="submit">
          Ingresar
        </button>
        <hr />
        <div
          className="google-btn"
        >
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </form>
    </div>
  )
}
