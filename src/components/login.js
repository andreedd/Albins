import React from "react"
import { StaticQuery, navigate, graphql } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import styles from "./css/login.module.css"
import "./css/Layout.css"
import SEO from "../components/seo"

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
          <SEO />
          <section className={styles.container}>
            <div className={styles.containerWrapper}>
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
            </div>
          </section>
        </>
        
        )}
      ></StaticQuery>
    )
  }
}

export default Login