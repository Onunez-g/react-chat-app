import React from "react"
import "./Header.scss"


const Header = props => (
  <div className="header">
    <h2>{props.name || "General"}</h2>
  </div>
)

export default Header