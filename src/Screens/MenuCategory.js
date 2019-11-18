import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchMenuCategory } from '../Actions';

const MenuCategory = (props) => {

    renderMenuCategory = (item, index) => {
        return (
            <TouchableOpacity style={styles.categoryTile} onPress={() => {
                menuCategoryButtonPressed(index);
            }}>
                <View style={props.selectedCategoryIndex == index ? styles.mcHighlighted : styles.mcDefault}>
                    <Text style={styles.categoryTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    menuCategoryButtonPressed = (index) => {
        if (props.selectedCategoryIndex !== index) {
            props.menuCategoryPressed(index);
        }
    }

    return (
        <View style={{ flex: 0.08 }}>
            <FlatList style={styles.mcflatList}
                horizontal={true}
                data={props.menuCategoryData}
                renderItem={({ item, index }) => renderMenuCategory(item, index)}
                keyExtractor={item => item.id.toString()}
                extraData={props}
            />
        </View>
    );
}

mapStateToProps = (state) => {
    return {
        selectedCategoryIndex: state.selectedMenuCategoryIndex,
        menuCategoryData: state.menuCategoryData
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        menuCategoryPressed: (selectedCategoryIndex) => dispatch(switchMenuCategory(selectedCategoryIndex)),
    }
}

MenuCategory.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(MenuCategory);

const propTypes = {
    selectedCategoryIndex: PropTypes.number,
    menuCategoryData: PropTypes.array
}

const styles = StyleSheet.create({
    categoryTile: {
        margin: 14,
        backgroundColor: '#38215f',
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoryTitle: {
        textAlign: 'center',
        fontSize: 19,
        color: '#ffffff',
        fontWeight: '600'
    },

    mcHighlighted: {
        paddingRight: 3,
        paddingLeft: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 12
    },

    mcDefault: {
        paddingLeft: 3,
        paddingRight: 3
    },

    mcflatList: {
        backgroundColor: '#38215f',
    },
});
