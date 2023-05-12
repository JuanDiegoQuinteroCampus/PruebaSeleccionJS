const url = "http://localhost:4008"

export default{
    async addUser(user){
        let api = await fetch(`${url}/reclutas`,{
            method:"POST",
            headers:{"Content-Type":"aplication/json"},
            body:JSON.stringify(user)
        })

        let response = await api.json();
        return response
    }
}
