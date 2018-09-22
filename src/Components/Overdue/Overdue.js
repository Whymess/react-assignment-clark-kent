import React from 'react';
import {formattCentsToDollars} from '../../Helpers/'

export default (props) => {
	let {id, dueDate, amountInCents} = props.paidItem
  
  	let formatCorrectly = formattCentsToDollars(amountInCents)
	
	return (
	  <li style={{color: 'firebrick'}} className="p-2">
	     {id}: {formatCorrectly}, Overdue, {dueDate}
  
	  </li>
	)
}