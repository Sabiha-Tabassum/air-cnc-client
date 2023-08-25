// booking data

export const addBooking = async bookingData => {
    const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(bookingData),
    })

    const data = await response.json()
    return data
}


// update room status

export const updateStatus = async (id, status) => {
    const response = await fetch(`http://localhost:5000/rooms/status/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify({status}),
    })

    const data = await response.json()
    return data
}


// get all bookings for a user by email

export const getBookings = async email => {
    const response = await fetch(`http://localhost:5000/bookings?email=${email}`)

    const data = await response.json()
    return data
}


// delete booking

export const deleteBooking = async id => {
    const response = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',

        },
        
    })

    const data = await response.json()
    return data
}