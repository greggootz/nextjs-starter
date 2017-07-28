import { Component } from 'react';
import Head from 'next/head'

import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
    NProgress.start()
    // ga('set', 'page', url);
    // ga('send', 'pageview');
    // console.log(`Loading: ${url}`)

}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
    margin: '0 10px 0 0'
}

export default class MyHeaders extends React.Component {
    render() {
        // const title = this.props.title
        //     ? `${this.props.title} | OnlineWagerReview.com`
        //     : `Online Betting Tutorials, Sportsbook, Casino, Poker Review | OnlineWagerReview.com`

        const title = "ReportsDFS.com"
        return (

            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
                <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="/static/css/styles.css" />
                <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
                {/*<script dangerouslySetInnerHTML={{
                    __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-412705-1', 'auto');
                    ga('send', 'pageview');`}} />*/}
            </Head>

        )
    }
}
