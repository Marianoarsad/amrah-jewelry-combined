const API_BASE = 'http://localhost:5000/api';
const saveButton = document.getElementById("saveAdmin");
const loginButton = document.getElementById("login");

saveButton.addEventListener('click', (e)=>{
    buttonFormHelper(e, ()=>ConfirmPassword(handleSave));
});

loginButton.addEventListener('click', (e)=>{
    buttonFormHelper(e, handleLogin);
})

function buttonFormHelper(event, next){
    console.log("clicked");
    event.preventDefault();
    event.stopImmediatePropagation();
    next();
}

const ConfirmPassword = (ifConfirmed) =>{
    const p1 = document.getElementById("savePassword").value;
    const p2 = document.getElementById("saveConfirmPassword").value;
    if(p1 === p2) {
        ifConfirmed();
    } else {
        if(p1 !== p2)alert(`Passwords are not the same`);
    }
}

const validUsername = (username) => {
    const pattern = /[^A-Za-z0-9.@]/;
    return !pattern.test(username);
}

const handleLogin = async() =>{
    const data = {
        username: document.getElementById("loginUsername").value,
        password: document.getElementById("loginPassword").value,
    };

    if(!validUsername(data.username)) {
        alert('Please keep username alphanumeric');
        return 
    }

    try {
        const res = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if(res.ok ){
            alert('Logged in');
        }else {
            throw new Error(result.error);
        }
    } catch (error) {
        if(error.message === "Incorrect credentials") 
            alert("Incorrect please try again");
        else console.error(error.message);
    }
}

const handleSave = async() => {
    const data = {
        username: document.getElementById("saveUsername").value,
        password: document.getElementById("savePassword").value,
    };

    if(!validUsername(data.username)) {
        alert('Please keep username alphanumeric');
        return 
    }

    try {
        const res = await fetch(`${API_BASE}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (!res.ok) throw new Error(`Failed to save: ${res.statusText}`);
        const result = await res.json();
        console.log('Success:', result);
    } catch (error) {
        console.error(error.message);
    }
}