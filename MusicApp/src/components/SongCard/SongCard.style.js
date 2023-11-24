import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',

    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        
    },
    inner_container:{
        flex:1,
        justifyContent:'center',
        padding:10,
        
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        color:'black'
    },
    content_container:{
        flexDirection:'row'
    },

    info_container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    year:{
        fontSize:12,
        marginLeft:10,
        fontWeight:'bold'
        
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    onStock_title:{
        color:'red',
        fontSize:12,
    },
    
})