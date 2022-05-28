import React from "react";
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGitHub = '#c9d1d9';
const colorDarkFontGitHub = '#8b949e';
const colorDarkGreen = '#0e4429';
const colorLightGreen = '#39d353';

const imageProfile = 'https://avatars.githubusercontent.com/u/87333149?v=4';

const urlToMyGitHub = 'https://github.com/DersoAguiar';

const App = () => {

    const handlePressGoToGitHub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if(res) {
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGitHub);
        }
    }
    return (
        // safeareaview é para celulares com o notche
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image 
            accessibilityLabel="foto de Anderson" 
            style={style.avatar} 
            source={{uri: imageProfile}}
            />
            <Text 
                accessibilityLabel= "Nome: Anderson S Aguiar" 
                style={[style.defautlText, style.name]}>
                Anderson S Aguiar
                </Text>
            <Text 
                accessibilityLabel= "Nickname: DersoAguiar"
                style={[style.defautlText, style.nickname]}>
                    DersoAguiar
            </Text>
            <Text 
                accessibilityLabel="Descrição: Aprendendo Front-End | JavaScript | HTML5 | CCS3 | React | React Native |
                Insta: @s_a.anderson"
                style={[style.defautlText, style.description]}>
                Aprendendo Front-End | JavaScript | HTML5 | CCS3 | React | React Native |
                Insta: @s_a.anderson
            </Text>

            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>        
            </View>
            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>        
            </View>
            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>        
            </View>
            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text> 
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>       
            </View>
            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text> 
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.ballLightGreen}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>       
            </View>
            <View style={style.gitHubBalls}>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text> 
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>
                <Text style={style.bolinhas}></Text>       
            </View>           
            

            <Pressable onPress={handlePressGoToGitHub}>

            <View style={style.button}> 
                <Text style={[style.defautlText, style.textButton]}> Open in GitHub </Text>
            </View>
            
            </Pressable>
        </View> 

        </SafeAreaView>
    );
    
;}

export default App;

const style = StyleSheet.create({
    container: { // colums
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',

    },

    content:{
        alignItems: 'center',
        padding: 20,
    },

    avatar:{
        height: 250,
        width: 250,
        borderRadius: 125,
        borderColor: 'white',
        borderWidth: 1.5,
    },

    defautlText: {
        color: colorFontGitHub,

    },
    
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 20,
          
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
        
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },  
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        
    },
    bolinhas:{        
        backgroundColor: colorDarkGreen,
        height: 11,
        width: 11,
        borderRadius: 12,
        margin: 0.7,
        borderWidth: 0, 
               
        
    },
    ballLightGreen:{        
        backgroundColor: colorLightGreen,
        height: 11,
        width: 11,
        borderRadius: 12,
        margin: 0.7,
        borderWidth: 0,               
        
    },
    gitHubBalls: { // colums
        backgroundColor: colorGithub,        
        justifyContent: 'center',
        alignItems: 'center',     
        flexDirection: 'row' 
              
        // flexDirection: 'row',

    },
    
});