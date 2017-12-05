import React from 'react'

export default class Card extends React.Component {
  render () {
    return (
      <div className={'card'}>
        <h2>{this.props.title}</h2>
        <p>{this.props.number}</p>
        <style jsx>
          {`
            .card {
              padding: 10px;
              border-radius: 0;
              background-color: #FFF;
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
            }
            p {
              font-weight: 300;
              font-size: 112px;
              line-height: 112px;
              margin: 0;
            }
          `}
        </style>
      </div>
    )
  }
}