import React from "react"
import Layout from "../components/Layout"
import { Link} from "gatsby"
import { getUser, isLoggedIn} from "../services/auth"

export default () => (
  
  <Layout>
    <div>Hello world!</div>
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
  </Layout>

  )
