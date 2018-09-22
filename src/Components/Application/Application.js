import React, { Component } from 'react';


// Local Dependencies 
import './Application.css'
import {formattCentsToDollars, checkIfDateIsInThePast} from '../../Helpers/'
import {
	Outstanding,
	Overdue,
	Paid
} from '../index.js'

import BillsType from '../../Data/'

export default  class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	data: '',
        	total: '',
        	paid: '',
        	overdue: '',
        	outstanding: ''
        }
    }

    componentDidMount(){
    	//  Pretend API CALL
    	this.setState({
    		data: BillsType
    	}, (state) => {
    		this.computeTotals()
   
    	})
    }


    computeTotals() {
    	let {data}  = this.state 
    	var total = 0
    	var paid = 0 
    	var overdue = 0
    	var outstanding = 0
    	 for (var prop in data) {
       		   total += data[prop]['amountInCents']
       		if(data[prop]['status'] === 'paid'){
				paid += data[prop]['amountInCents']
			}	
			if(data[prop]['status'] === 'pending'){
				let dueDate = data[prop]['dueDate']
				let overDueOrNot = checkIfDateIsInThePast(dueDate)
				if(overDueOrNot){
					overdue += data[prop]['amountInCents']
				} else {
					outstanding += data[prop]['amountInCents']
				}
			}
		}

		var formattedTotal = formattCentsToDollars(total)
		var formattedPaid = formattCentsToDollars(paid)
		var formattedOverDue = formattCentsToDollars(overdue)
		var formattOutstanding = formattCentsToDollars(outstanding)
		this.setState({
			total: formattedTotal,
			paid: formattedPaid,
			overdue: formattedOverDue,
			outstanding: formattOutstanding
		})
    }

   





    render() {
    	let {total, paid, overdue, outstanding, data} = this.state 
        return (
        	<div className="container">
        		<div className="d-flex p-2 total_container">
	        		<div className="p-2"> Total: {total} </div>
	        		<div className="p-2"> Paid: {paid} </div>
	        		<div className="p-2"> Overdue: {overdue} </div>
	        		<div className="p-2"> Outstanding: {outstanding} </div>
        		</div>

        		<div className="Detailed_list d-flex flex-column">
                      {
                        Object.values(data).map((key, index) => {
                               let dueDate = key['dueDate']
                               let overDueOrNot = checkIfDateIsInThePast(dueDate)

                                if(key.status === 'paid'){
                                    return <Paid key={index} paidItem={key}/>
                                }
                                if(overDueOrNot){
                                   return <Overdue key={index} paidItem={key}/>
                                } else {
                                    return <Outstanding key={index} paidItem={key}/>
                                }   
                           })


                      }
        			
        		</div>
        		
        	</div>
            
        );
    }
}


