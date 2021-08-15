import React from "react";

function List(props) {
    return(
        <ul>
            {
                // me-loop list
                // selain item juga menggunakan index/key jika dengan react,, agar tidak binggung jika salah satu item yang dirubah
                props.items.map((item, index) => <li key={index}>{item}</li>) 
            }
            {/* <li>{props.items}</li> */}
        </ul>
    )
}

export default List;