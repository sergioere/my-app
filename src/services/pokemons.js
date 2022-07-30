const API_URL = "https://api.https://pokeapi.co/api/v2";

export async function getAllLaunches(){
    try {
        const response = await fetch(`${API_URL}/pokemon`);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
        
    }

    
}

export async function getLaunchByFlightNumber(flightNumber){
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }

    
}

