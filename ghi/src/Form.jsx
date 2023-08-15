function Form(props) {
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e.target.freejump);
    const formValues = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      email: e.target.email.value,
      jumper_type: e.target.jumper_type.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };
    console.log(formValues);
    try {
      const response = await fetch("http://localhost:8000/reservation", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form action="" onSubmit={submitForm}>
      <label htmlFor="">First Name</label>
      <input type="text" name="first_name" />
      <label htmlFor="">Last Name</label>
      <input type="text" name="last_name" />
      <label htmlFor="">Phone Number</label>
      <input type="text" name="phone_number" />
      <label htmlFor="">Email</label>
      <input type="text" name="email" />

      <label htmlFor="">jumper</label>
      <input type="text" name="jumper_type"/>

      <label htmlFor="">Date</label>
      <input type="date" name="date" />
      <label htmlFor="">Time</label>
      <input type="time" name="time" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
