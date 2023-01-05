import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expense = (props) => {
    // const expenseTitle = props.title
    // const expenseAmount = props.amount
    return(
        <div>
            <ExpenseItem/>
            <ExpenseItem/>
            <ExpenseItem/>
        </div>
    )
}

export default Expense