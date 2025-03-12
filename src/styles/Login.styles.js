// login.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: -15,
        fontWeight: '400',
        marginBottom:8
    },

    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flexGrow: 1,
        backgroundColor: '#fff',
        flexShrink: 1,
        flexBasis: 0,
        
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#1D2A32',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 36,
    },
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'right',
        marginTop:12
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#075eec',
        borderColor: '#075eec',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },




    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    header: { alignItems: 'center', marginBottom: 50},
    headerImg: { width: 120, height: 120 ,marginTop:30 },
    form: { marginBottom: 16 },
    errorText: { color: 'red', marginBottom: 8 ,marginLeft:3 },
    formLink: { color: '#075eec', marginTop: 5, textAlign: 'center' },
    formFooter: { textAlign: 'center', marginBottom: 30 },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    orText: { marginHorizontal: 8, color: '#888' },
    line: { flex: 1, height: 1, backgroundColor: '#ddd' },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 16,
        marginTop:20
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    }, icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
});

export default styles;
