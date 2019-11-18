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
import { switchMenuGroup } from '../Actions';

const MenuGroups = (props) => {

    renderMenuGroup = (item, index) => {
        return (<TouchableOpacity style={styles.groupTile} onPress={() => {
            menuGroupButtonPressed(index);
        }}>
            <View style={props.selectedGroupIndex == index ? styles.mgHighlight : styles.mgDefault}>
                <Text style={styles.groupTitle}>{item.name}</Text>
            </View>
        </TouchableOpacity>);
    }

    menuGroupButtonPressed = (index) => {
        if (props.selectedGroupIndex != index) {
            props.menuGroupPressed(index);
        }
    }

    return (
        <View style={{ flex: 0.09 }}>
            <FlatList style={styles.mgflatList}
                horizontal={true}
                data={props.menuGroupData}
                renderItem={({ item, index }) => renderMenuGroup(item, index)}
                keyExtractor={item => item.id.toString()}
                extraData={props}
            />
        </View>
    );
}

mapStateToProps = (state) => {
    return {
        selectedGroupIndex: state.selectedMenuGroupIndex,
        menuGroupData: state.menuGroupData
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        menuGroupPressed: (selectedGroupIndex) => dispatch(switchMenuGroup(selectedGroupIndex)),
    }
}

MenuGroups.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(MenuGroups);

const propTypes = {
    selectedGroupIndex: PropTypes.number,
    menuGroupData: PropTypes.array
}

const styles = StyleSheet.create({
    groupTile: {
        margin: 14,
        backgroundColor: '#472a78',
        justifyContent: 'center',
        alignItems: 'center'
    },

    groupTitle: {
        textAlign: 'center',
        fontSize: 22,
        color: '#ffffff',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    mgHighlight: {
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 15
    },

    mgDefault: {
        paddingLeft: 5,
        paddingRight: 5
    },

    mgflatList: {
        backgroundColor: '#472a78'
    },

});

