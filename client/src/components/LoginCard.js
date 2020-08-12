import React from 'react'

const LoginCard = () => {
    return (
        <div className="card">
            <div className="tabs is-danger is-centered" style={{ marginBottom: "0px" }}>
                <ul>
                    <li className="is-active">
                        <a> Login </a>
                    </li>
                </ul>
            </div>
            <form method="GET" action="/chat">
                <div className="card-content">
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" name="username" type="text" placeholder="Username / Nickname" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left">
                            <div className="select is-fullwidth">
                                <select name="group">
                                    <option>Pilih Group Chat</option>
                                    <option value="php">PHP</option>
                                    <option value="javascript">Javascript</option>
                                </select>
                            </div>
                            <span className="icon is-left">
                                <i className="fas fa-users"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <input type="submit" className="button is-danger is-fullwidth" value="Login" />
                </footer>
            </form>
        </div>
    )
}

export default LoginCard
