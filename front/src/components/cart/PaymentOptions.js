import React from 'react'
import styled from 'styled-components'
import Button from '../layout/Button'
import { Link } from "react-router-dom"

const PaymentOptions = ({ item}) => {
 

  // TOTAL CALCUATION
  let subtotalCalc = null;
  item.map(calc => {
    const subtotal = calc.price * calc.quantity;
    return subtotalCalc += subtotal;
  });
  

  const grandtotal = subtotalCalc  ;

  return (
    <PaymentOptionsStyled>
    
      <div className='cart-totals'>
        <h3>cart totals</h3>
        <div className='receipt'>
          <div className='receipt-content'>
            <span>Sub total</span>
            <span>{subtotalCalc.toFixed(2)}</span>
          </div>
         
        
          <div className='receipt-content'>
            <strong>Total</strong>
            <strong>{grandtotal.toFixed(2)}</strong>
          </div>
        </div>
        <div className='btn-container' >
          <Button dark disabled><Link to="/ThankYou" style={{ color: "white" }}>Click to Confirm</Link></Button>
        </div>
      </div>
    </PaymentOptionsStyled>
  )
}

const PaymentOptionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .coupon-form{
    display: flex;
  }
  .coupon {
    width: 100%;
    input{
      border:var(--input-border);
      height: 43px;
      margin-right: 10px;
      width: 15rem;
      padding: 0 1rem;
    }
  }
  .cart-totals {
    background-color: rgba(136,136,136,.1);
    padding: 1rem;
    width: 70%;
    h3{
      text-transform: uppercase;
      text-align: center;
    }
    .receipt {
      margin-top: 1rem;
      padding: 0.8rem 1rem;
      background-color: var(--light-clr);
      .receipt-content {
        display: flex;
        justify-content: space-between;
        border-bottom: var(--input-border);
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }
    .btn-container {
      margin-top: 1rem;
      width: 100%;
      button {
        width: 100%;
        background-color: var(--primary-clr);
      }
    }
  }
  @media(max-width: 768px){
    flex-direction:column;
    .coupon {
      margin-bottom: 2rem;
      input {
        width: 100%;
        margin-bottom: 0.5rem;
      }
      .btn-container {
        button{
          width: 100%;
        }
      }
      .coupon-form{
        display: flex;
        flex-direction: column;
      }
    }
    .cart-totals {
      width: 100%;
    }
  }
`

export default PaymentOptions