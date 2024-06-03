import React from 'react'

export default function TransactionList() {
  return (
    <>
    <h3>History</h3>
    <ul id='list' class='list'>
        <li className='minus'>
            cash<span>-$400</span><button className='delete-btn'>X</button>
        </li>
    </ul>
    </>
  )
}
