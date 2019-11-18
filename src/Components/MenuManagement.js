import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import PropTypes from 'prop-types';
import MenuGroups from '../Screens/MenuGroups';
import MenuCategory from '../Screens/MenuCategory';
import MenuItem from '../Screens/MenuItem';
import { connect } from 'react-redux';
import { fetchMenuData } from '../Actions';

const BASE_URL = 'http://localhost:3001/';

export class MenuManagement extends Component {

    componentDidMount() {
        StatusBar.setHidden(true);
        this.props.fetchMenuDataFromAPI(BASE_URL + 'api/menu');
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <MenuGroups />
                <MenuCategory />
                <MenuItem menuItemData={this.props.menuItemsData} />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        menuItemsData: state.menuItemsData,
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        fetchMenuDataFromAPI: (requestURL) => dispatch(fetchMenuData(requestURL)),
        menuGroupPressed: (selectedGroupIndex) => dispatch(switchMenuGroup(selectedGroupIndex)),
        menuCategoryPressed: (selectedCategoryIndex) => dispatch(switchMenuCategory(selectedCategoryIndex)),
    }
}


MenuManagement.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(MenuManagement);

const propTypes = {
    isLoading: PropTypes.bool,
    menuItemData: PropTypes.array
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});