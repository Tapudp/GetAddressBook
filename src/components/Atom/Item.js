import React from "react";

function Item(props) {
  const { data, index, selected, setSelected, setSelectedItem } = props;
  return (
    <tr
      onClick={() => {
        setSelected(!selected);
        setSelectedItem(data);
      }}
    >
      <td>{index + 1}</td>
      <td>
        <img src={data.picture.thumbnail} />
      </td>
      <td>
        {data.name.title}{" "}
        <b>
          {data.name.first} {data.name.last}
        </b>
      </td>
      <td>{data.gender}</td>
      <td>{data.dob.age}</td>
    </tr>
  );
}

export default Item;
