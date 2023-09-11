import React, { useState } from "react";
import PaymentCard from "./PaymentCard";

const SelectCard = () => {
  const [isSelected, setisSelected] = useState(null);
  const paymentOptions = [
    { optionText: "optionText" },
    { optionText: "optionText" },
  ];
  console.log(isSelected);
  return paymentOptions.map((option, index) => (
    <PaymentCard
      key={index}
      option={option}
      selected={isSelected === index}
      onChange={() => setisSelected(index)}
    />
  ));
};

export default SelectCard;
