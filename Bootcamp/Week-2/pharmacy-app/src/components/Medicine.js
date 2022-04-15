import { useState } from "react";
import MedicineList from "./MedicineList";

function Medicine() {
 //declare static object array medicines
    const medicines = [
        {
            "id": 0,
            "name": "Apranax",
            "stock": 54
        },
        {
            "id": 1,
            "name": "Baytarail",
            "stock": 21
        },
        {
            "id": 2,
            "name": "Cytor",
            "stock": 37
        },
        {
            "id": 3,
            "name": "Dolarex",
            "stock": 14
        },
        {
            "id": 4,
            "name": "Fqualr",
            "stock": 15
        },
        {
            "id": 5,
            "name": "Gqualr",
            "stock": 16
        },
        {
            "id": 6,
            "name": "Hqualr",
            "stock": 17
        },
        {
            "id": 7,
            "name": "Jqualr",
            "stock": 18
        },
    ];
    return (
        <> {/*values going to MedicineList component */}
            {medicines.map((medicine, index) => (
                <MedicineList key={index} name={medicine.name} stock={medicine.stock} />
            ))};
        </>
    );
}

export default Medicine;