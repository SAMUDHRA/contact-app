import React from "react";
import { useNavigate } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate = {navigate} />;
  }
  return ComponentWithRouterProp;
}

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="ui container">
        <h2 style={{marginTop:"50px"}}>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddContact);