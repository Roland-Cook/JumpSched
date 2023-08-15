function Form(props) {
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e.target.freejump.checked);
    const formValues = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      email: e.target.email.value,
      tandem: e.target.tandem.checked,
      student: e.target.student.checked,
      freejump: e.target.freejump.checked,
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
      <label htmlFor="">Tandem</label>
      <input type="checkbox" name="tandem" />
      <label htmlFor="">Student</label>
      <input type="checkbox" name="student" />
      <label htmlFor="">Free Jump</label>
      <input type="checkbox" name="freejump" />
      <label htmlFor="">Date</label>
      <input type="date" name="date" />
      <label htmlFor="">Time</label>
      <input type="time" name="time" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
