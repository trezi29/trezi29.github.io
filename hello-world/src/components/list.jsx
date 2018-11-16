import React from "react"

const List = props => (
  <div>
    {
      props.items.map((item, index) => <img id={index} width="300" key={index} src={item} />)
    }
  </div>
);

export default List;
