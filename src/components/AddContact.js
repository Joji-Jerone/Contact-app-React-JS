import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className = "ui main">
                <h1> Add Contact</h1>
                <h2 class="ui header">Add Contact</h2>
                <form className="ui form">
                    <div className="ui fields">
                        <label>Name</label>
                        <input type = "text" name = "name" placeholder="Enter Name"></input>
                    </div>

                    <div className="ui fields">
                        <label>Email</label>
                        <input type = "Email" name = "email" placeholder="Enter Email"></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    };
};

export default AddContact;