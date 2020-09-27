import React from 'react'

type prop = {
  pizza: {
    name: string
  }
}

function SinglePizza({ pizza }: prop) {
  return <p> {pizza.name} </p>
}

export default function PizzaList({ pizzas }: { pizzas: Array<any> }) {
  return (
    <div>
      {pizzas.map(pizza => (
        <SinglePizza pizza={pizza} />
      ))}
    </div>
  )
}
