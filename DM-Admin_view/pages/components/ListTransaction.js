import react, { Fragment, useEffect, useState } from "react";


const ListTransaction = () => {

    const [transactions, settransaction] = useState([]);

    const deletetransaction = async transaction_code => {
        try{
            const deletetransaction = await fetch(`http://localhost:5000/transactions/delete/${transaction_code}`, {
                method: "DELETE"
            });

            settransaction(transactions.filter(transactions => transactions.transaction_code !== transaction_code ))
        }catch (err){
            console.error(err.message)
        }
    }


    const gettransactions = async() => {
        try{
            
            const response = await fetch("http://localhost:5000/transactions"); 
            const jsonData = await response.json();

            settransaction(jsonData);
        } catch(err){
            console.error(err.message);
        }
    }


    useEffect(() =>{
        gettransactions();
    }, []);

    return (
        <Fragment>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Code</th>
        <th>Date</th>
        <th>Info</th>
        <th>Admin</th>
        <th>Order Code</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transactions => (
        <tr key={transactions.transaction_code}>
            <td>{transactions.transaction_code}</td>
            <td>{transactions.tra_date}</td>
            <td>{transactions.tra_information}</td>
            <td>{transactions.admin_id}</td>
            <td>{transactions.order_code}</td>
            <td><button className="btn btn-danger" onClick={() => deletetransaction(transactions.transaction_code)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
};

export default ListTransaction;
