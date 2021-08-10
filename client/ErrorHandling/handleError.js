async function handleError(response){
    if (response.status === 400) { // custom error response format handling
        const errorInfo = await response.json();
        throw new Error(errorInfo.message);
    }
    else if (!response.ok) {
        const err = response.statusText || response;
        throw new Error(err);
    }
    return response;
}

export default {
    handleError: handleError
}