import React from "react"
import { StaticQuery, navigate, graphql } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {

  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event, password) => {
    this.setState({
      password: password, 
    }, () => {                              
      //callback
      event.preventDefault()
      handleLogin(this.state)
      navigate(`/categories`)
    })
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/categories`)
    }

    return (
        <StaticQuery
        query={graphql`
          {
            contentfulId {
              password
            }
          }
        `}
        render={data => (
          <>
          <h1>Log in</h1>
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event, data.contentfulId.password)
            }}
          >
            <p>ID</p>
            <input type="password" name="username" onChange={this.handleUpdate} />
            <input type="submit" value="Log In" />
          </form>
        </>
        
        )}
      ></StaticQuery>
    )
  }
}

export default Login