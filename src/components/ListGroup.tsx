import { MouseEvent, useState } from "react";

function ListGroup() {
    useState()
    let items = [
        'First Item',
        'Second Item',
        'Third Item',
        'Fourth Item',
        'Fifth Item'
    ];
    let selectIndex = -1

    // items = []
    const handleClick = (event:MouseEvent) => console.log(event)
  return (
    <>
        <h1>List</h1>
        {items.length ===0 && <p>Not data found</p>}
        <ul className="list-group">
            {
            items.map((item, index) => (
                <li onClick={handleClick} key={index} className={selectIndex == index ?"list-group-item  active" : "list-group-item  active"}>{item}</li>
            ))
            }
          
        </ul>
    </>
  );
}

export default ListGroup;
