import React from 'react';
import {formattCentsToDollars} from '../../Helpers/'

export default (props) => {
	let {id, dueDate, amountInCents} = props.paidItem
  
  	let formatCorrectly = formattCentsToDollars(amountInCents)
	
	return (
	  <li style={{color: 'green'}} className="p-2">
	     {id}: {formatCorrectly}, Paid, {dueDate}
  
	  </li>
	)
}