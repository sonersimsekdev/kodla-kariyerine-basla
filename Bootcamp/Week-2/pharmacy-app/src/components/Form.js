import React, { useState } from 'react'


export const Form = ({ name, stock, setStockNum }) => {

    const onSubmit = (e) => e.preventDefault(); //the function has stopped refresh the page 

    let userValue; //declare userValue 
    
    function getInputValue(event) { //function setting up  event.target.value  userValue
        userValue = event.target.value; 
        console.log(userValue)
        
    };
   
    return (
        
        <form onSubmit={onSubmit}> {/* stop refresh the page */}
            <div className="form-group d-flex align-items-center">
                <label
                    htmlFor="exampleInputEmail1" className=' align-items-center '>
                    Stok:
                   
                </label>
                <input
                        type="number"
                        className="form-control ms-1" id="exampleInputEmail1"
                        placeholder="Güncel stok giriniz..."
                        min={0} 
                        max={999}
                        onChange={getInputValue} > 
                        </input>  {/* min is minimum value max is maximum value */}
                        

                <input
                    type="submit"
                    className="btn  btn-outline-primary ms-1" value="Uygula"
                    onClick={() => setStockNum(+userValue) }/> {/*onClick function setting up the userValue from input */}
                    
            </div>
            
        </form>
    )
}

export default Form;