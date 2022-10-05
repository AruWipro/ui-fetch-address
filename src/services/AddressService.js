const path = 'http://localhost:4000/api/v1/'
const getAllAddressesPath = path + 'addresses'

export async function getAllAddresses() {
    try{
        const response = await fetch(getAllAddressesPath);
        return await response.json();
    }catch(error) {
        return [];
    }
}


export async function getAdressWithInRange(data) {
    const response = await fetch(getAllAddressesPath, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({request: data})
      })

    let result =  await response;
    console.log(result);

    return result.json();

}