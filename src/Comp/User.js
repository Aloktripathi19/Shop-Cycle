import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../CompCss/User.css'
import Ct from './Ct'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function User() {
  let [data, udata] = useState([])
  let [f, setF] = useState(false)
  let obj = useContext(Ct)
  let navigate = useNavigate()


  useEffect(() => {
    let x = Cookies.get("auth");
    console.log("my cookie", Cookies.get("auth"));

    if (x !== undefined) {
      obj.updstate(JSON.parse(x));
    } else {
      navigate("/login");
    }
    if (obj.state._id) {
      axios.get("http://localhost:5000/alluser", { "headers": { "Authorization": obj.state.token, "uid": obj.state._id } }).then((res) => {
        udata(res.data)
      })
    }
  }, [f,obj.state._id])

  let del = (id) => {
    axios.delete(`http://localhost:5000/deluser/${id}`).then((res) => {
      setF(!f)
    })
  }


  return (
    <div className="user-con">
      <h2>🛠️ Admin Dashboard - Users <span></span></h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user._id}</td>
              <td>{user.phno}</td>
              <td className={user.role === "admin" ? "admin-role" : "user-role"}>
                {user.role}
              </td>
              {user.role !== "admin" && <td><button onClick={() => del(user._id)}>Delete</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User