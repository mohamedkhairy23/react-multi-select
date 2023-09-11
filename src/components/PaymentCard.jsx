import Card from "react-bootstrap/Card";

const PaymentCard = ({ option, selected, onChange }) => {
  return (
    <Card style={{ width: "18rem" }} onClick={onChange} selected={selected}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {option.optionText}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
export default PaymentCard;
