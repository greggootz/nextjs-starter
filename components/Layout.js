import React from 'react'

import MyHeaders from '../components/MyHeaders'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Head from 'next/head'

// components/Layout.js

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <style jsx>{`
              .container {
                background: white;
              }
              `}
        </style>
        <div>
          <MyHeaders />
          <Header />
          <div className="container py-3">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}