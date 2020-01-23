import React, { useState, useEffect } from 'react'
import Card from '../Card/Card';
import './Form.scss';

function Form() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const onSubmitHandler = (arg) => {
        arg.preventDefault();
        const user = { name: name, email: email, role: role };
        let userUpdate = [...users, user];
        let newUsers = JSON.stringify(userUpdate);
        localStorage.setItem('users', newUsers);
        setUsers(userUpdate);
    };

    console.log(users, 'users state');

    useEffect(() => {
        const users = localStorage.getItem('users');
        if (users) {
            setUsers(JSON.parse(users));
        }
    }, []);

    return (
        <div className="container">
            <form className="addForm" onSubmit={(e) => onSubmitHandler(e)}>
                <h1>Add A User!</h1>
                <div className="inputs">
                    <input required className="name" placeholder="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    <input required className="email" placeholder="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input required className="role" placeholder="role" name="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
                <button type="submit">Add the Team Member</button>
            </form>
            <div className="team-members">
                <h1>Team Members</h1> <br />
                <div className="people">
                    {users.map((el, i) => {
                        return <Card key={i} el={el} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Form;