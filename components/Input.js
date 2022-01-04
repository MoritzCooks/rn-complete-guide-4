import { TextInput, StyleSheet } from 'react-native'

export default Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.styles}} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10
    }
})