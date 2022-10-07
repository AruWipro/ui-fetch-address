const path = process.env.REACT_APP_NODE_HOSTNAME
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
    console.log('Request is', data);
    let result = []
    if(data){
        const response = await fetch(getAllAddressesPath, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
    
        result =  await response;
        console.log(result);
    }

    return result.json();

}