// Add a room

export const addRoom = async roomData => {
    const response = await fetch('https://air-cnc-server-seven.vercel.app/rooms', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(roomData),
    })

    const data = await response.json()
    return data
}

// get all rooms

export const getAllRooms = async () => {
    const response = await fetch('https://air-cnc-server-seven.vercel.app/rooms')

    const data = await response.json()
    return data
}

// get single room

export const getRoom = async (id) => {
    const response = await fetch(`https://air-cnc-server-seven.vercel.app/room/${id}`)

    const data = await response.json()
    return data
}



