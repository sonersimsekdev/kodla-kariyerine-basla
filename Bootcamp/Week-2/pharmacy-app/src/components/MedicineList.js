import React, { useState } from "react";
import Form from "./Form.js";

/*props from medicine component*/
function MedicineList({ name, stock }) { 

    let [stockNum, setStockNum] = useState(stock);
    //useState is setting up new medicine stock number

    return (
        <div className="container">
            <div className="row d-flex  flex-row  justify-content-center text-center  align-items-center m-3 border">
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    {name} {/*showing medicine name*/}
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <button className="btn btn-primary"  onClick={() => setStockNum(stockNum -= 1)}>-1</button> {/** onClick function setting up  stockNum -= 1 */}
                    {stockNum} {/*showing stockNum props from medicine.js */}
                    <button className="btn btn-primary" onClick={() => setStockNum(stockNum += 1)}>+1</button>{/** onClick function setting up  stockNum += 1 */}
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"> 
                    <Form setStockNum={setStockNum}/> {/**Form component from form.js */}
                </div>
            </div>
        </div>
    );
}

export default MedicineList;
