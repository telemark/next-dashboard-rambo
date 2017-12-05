import Head from './Head'
import Navbar from './Navbar'

export default ({ children }) => (
  <div>
    <Head />
    <Navbar title={'Dashboard Rambo'} />
    <div className={'wrapper'}>
      { children }
    </div>
    <style jsx global>
      {`
        html, body {
          padding: 0;
          margin: 0;
          background: white;
          color: black;
          font-family: "Open Sans", sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: "Gill Sans", "Arial", sans-serif;
        }

        .wrapper {
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </div>
)
