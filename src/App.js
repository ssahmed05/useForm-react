import useForm from "./utils/useForm";

function App() {

  const [values, handleChange, handleSubmit] = useForm();


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 pt-5">
            <form action="#" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={values.name || ""} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone</label>
                <input type="tel" name="phone" value={values.phone || ""} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={values.email || ""} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
