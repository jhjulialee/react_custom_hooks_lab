import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="serviceNumber">Service Number</label>
      <input
        id="serviceNumber"
        type="text"
        data-testid="serviceNumber"
        value={serviceNumber}
        onChange={(e) => setServiceNumber(e.target.value)}
      />
    </form>
  );
}

export default Form;