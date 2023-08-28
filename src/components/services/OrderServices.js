

export const getAllOrdersService = async () => {

    const result = await fetch("https://localhost:7164/v1/api/Order/history", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
    });
    
    if (result.status === 200) {
        const orders = await result.json();
        return orders;
    } else {
        return null;
    }
};


export const getStatusService = async (id) => {
    const result = await fetch(`https://localhost:7164/v1/api/Order/status/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
    });

    if (result.status === 200) {
        const status = await result.json();
        return status;
    }
    else {
        return null;
    }
};