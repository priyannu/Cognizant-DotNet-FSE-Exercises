import "./App.css";
import officeImage from "./images/office.png";

function App() {
  const heading = "Office Space";

  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
    },
    {
      name: "Regus",
      rent: 65000,
      address: "Bangalore",
    },
    {
      name: "WeWork",
      rent: 55000,
      address: "Hyderabad",
    },
  ];

  return (
    <div>
      <h1>{heading}, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="25%"
        height="25%"
      />

      {offices.map((office, index) => (
        <div key={index}>
          <h2>Name: {office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;