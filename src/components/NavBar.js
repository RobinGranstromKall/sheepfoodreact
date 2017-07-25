import React from "react";


export default function NavBar(props) {

    return (
        <div>
            <nav className="navbar navbar-light bg-faded">
                <form className="form-inline">
                <div className="navbar-brand"  onClick={evt => props.handleClick()} marginHeight="10">
                Sheep Food
                </div>
                <input
                    id="searchInput"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    onChange={evt => props.handleChange(evt)}/>
                </form>
            </nav>
        </div>
    )
}