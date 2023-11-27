import React from 'react'

export default function FlowerListItem(props) {
    const {name, country, price, id} = props.properties
  return (
   <> <div>{name}</div>
    <div>{country}</div></>
  )
}
