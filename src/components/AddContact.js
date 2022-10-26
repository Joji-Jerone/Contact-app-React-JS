import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };
    render() {
        return (
            <div className="ui main">
                <h1> Add Contact</h1>
                <h2 className="ui header">Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="ui fields">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}>
                        </input>
                    </div>

                    <div className="ui fields">
                        <label>Email</label>
                        <input
                            type="Email"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}>
                        </input>
                    </div>
                    <button className="ui button blue" style={{ color: "White", background: "Navy" }}>Add</button>
                </form>
            </div>
        )
    };
};

export default AddContact;