const initialState = {
    menuGroupData: [],
    menuCategoryData: [],
    menuItemsData: [],
    selectedMenuGroupIndex: 0,
    selectedMenuCategoryIndex: 0,
    isLoading: false,
};

export default function feedData(state = initialState, action) {
    switch (action.type) {
        case 'FETCHING_INITIATED': {
            return { ...state, isLoading: true }
        };
        case 'SUCCESS_RESPONSE': {
            return {
                ...state,
                isLoading: false,
                menuGroupData: action.apiResponse.data.MenuGroups,
                menuCategoryData: action.apiResponse.data.MenuGroups[0].categories,
                menuItemsData: action.apiResponse.data.MenuGroups[0].categories[0].items,
            }
        }
        case 'FAILED_RESPONSE': {
            return {
                ...state, isLoading: false
            }
        }
        case 'MENU_GROUP_SELECTED': {
            return {
                ...state,
                menuCategoryData: state.menuGroupData[action.selectedGroupIndex] ? state.menuGroupData[action.selectedGroupIndex].categories : [],
                menuItemsData: state.menuCategoryData[0] ? state.menuCategoryData[0].items : [],
                selectedMenuGroupIndex: action.selectedGroupIndex,
                selectedMenuCategoryIndex: 0
            }
        }
        case 'MENU_CATEGORY_SELECTED': {
            console.log(`MENU_CATEGORY_SELECTED ${JSON.stringify(action)}`)
            return {
                ...state,
                menuCategoryData: state.menuGroupData[state.selectedMenuGroupIndex] ? state.menuGroupData[state.selectedMenuGroupIndex].categories : [],
                menuItemsData: state.menuCategoryData[action.selectedCategoryIndex] ? state.menuCategoryData[action.selectedCategoryIndex].items : [],
                selectedMenuCategoryIndex: action.selectedCategoryIndex
            }
        }
        default: {
            return state;
        }
    }
}