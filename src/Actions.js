export function fetchMenuData(url) {
    return (dispatch) => {
        dispatch(initiatedAPI());
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(gotResponse(responseJson));
            })
            .catch((error) => {
                dispatch(gotError());
            });
    }
}

export function initiatedAPI() {
    return {
        type: 'FETCHING_INITIATED',
    }
}

export function gotResponse(apiResponse) {
    return {
        type: 'SUCCESS_RESPONSE',
        apiResponse
    }
}

export function gotError() {
    return {
        type: 'FAILED_RESPONSE'
    }
}

export function switchMenuGroup(selectedGroupIndex) {
    return {
        type: 'MENU_GROUP_SELECTED',
        selectedGroupIndex
    }
}

export function switchMenuCategory(selectedCategoryIndex) {
    return {
        type: 'MENU_CATEGORY_SELECTED',
        selectedCategoryIndex
    }
}