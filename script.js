const fetchUsers = async () => {
    try {
        const response = await fetch('https://randomuser.MEEE/api?results=10')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error('Our custom error')
    }
}

(async () => {

    try {
        console.log(
            await fetchUsers()
        )
    } catch (error) {
        console.log(error)
    }

})()