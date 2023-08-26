//  save user to database
export const saveUser = user => {
    const currentUser = {
        email: user.email
    }
    fetch(`https://air-cnc-server-seven.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

// become host 

export const becomeHost = email => {
    const currentUser = {
        role: 'host'
    }

   return fetch(`https://air-cnc-server-seven.vercel.app/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    
}


// get role

export const getRole = async email => {
    
  const response = await fetch(`https://air-cnc-server-seven.vercel.app/users/${email}`)
    const user = await response.json()
    return user?.role
}
