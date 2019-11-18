import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

const IMAGE_BASE_URL = 'https://via.placeholder.com/300.png?text=';
const MenuItem = (props) => {

    renderMenuItem = (data) => {
        return (<TouchableOpacity style={styles.itemTiles}>
            <View style={styles.itemContainer}>
                <View style={{ flex: 0.65, flexDirection: 'column' }} >
                    <Text numberOfLines={3} style={styles.itemName}>{data.item.name}</Text>
                    <Text numberOfLines={3} style={styles.itemDescription}>{data.item.description}</Text>
                    <View style={styles.priceCaloriesContainer} >
                        <Text style={styles.itemPrice}>${parseFloat(data.item.price).toFixed(2)}</Text>
                        <Text style={styles.itemContainer}>123 cal</Text>
                    </View>
                </View>
                <Image style={styles.itemImage}
                    source={{ uri: IMAGE_BASE_URL + data.item.name }}
                />
            </View>
        </TouchableOpacity>);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList style={styles.itemsFlatlist}
                showsVerticalScrollIndicator={false}
                data={props.menuItemData}
                renderItem={item => renderMenuItem(item)}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                extraData={props}
            />
        </View>

    );

}

MenuItem.propTypes = propTypes;

export default MenuItem;

const propTypes = {
    menuItemData: PropTypes.array
}

const styles = StyleSheet.create({
    itemsFlatlist: {
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },

    itemTiles: {
        flex: 0.33,
        borderRadius: 10,
        height: 175,
        backgroundColor: '#ffffff',
        margin: 8
    },

    itemName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        padding: 5
    },

    itemPrice: {
        margin: 10,
        fontSize: 14,
        fontWeight: '500',
        color: '#000000'
    },

    itemDescription: {
        fontSize: 18,
        fontWeight: '200',
        color: '#000000',
        padding: 5
    },

    itemCalories: {
        fontSize: 14,
        fontWeight: '300',
        color: '#000000'
    },

    itemImage: {
        flex: 0.35,
        backgroundColor: '#000',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },

    priceCaloriesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});