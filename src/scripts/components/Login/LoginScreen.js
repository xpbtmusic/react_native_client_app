import React, {Component, PropTypes} from 'react';
import Logo from './Logo';
import Wallpaper from './Wallpaper';
import Dimensions from 'Dimensions';
import UserInput from './UserInput';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Easing,
    Animated
} from 'react-native';

const MARGIN = 40;
import spinner from '../images/loading.gif';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            isLoading: false,
            userNameText: null,
            passwordText: null,
        };
        this.showPass = this.showPass.bind(this);
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }

    checkPass() {
        let matchString = /^[a-zA-Z]\w{5,17}$/;
        if (this.state.userNameText === '' || this.state.userNameText === null) {
            console.log("---用户名空");
            return false;

        } else if ((this.state.passwordText === '' || this.state.passwordText === null)) {
            console.log("密码空");
            return false;
        } else if (matchString.test(this.state.passwordText)) {
            //以字母开头，长度在6~18之间，只能包含字符、数字和下划线。
            console.log("6-18");

            return false;
        }
        else return true;
    }

    _onPress() {
        if (this.state.isLoading) return;
        if (!this.checkPass()) {

            //return;
        }
        this.setState({isLoading: true});
        console.log("username " + this.state.userNameText + " password " + this.state.passwordText);
        Animated.timing(
            this.buttonAnimated,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();

        setTimeout(() => {
            this._onGrow();
        }, 2000);

        setTimeout(() => {
            this.props.navigation.navigate('TabBar');
            this.setState({isLoading: false});
            this.buttonAnimated.setValue(0);
            this.growAnimated.setValue(0);
        }, 2300);
    }

    _onGrow() {
        Animated.timing(
            this.growAnimated,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();
    }

    showPass() {
        this.state.press === false ? this.setState({showPass: false, press: true}) : this.setState({
            showPass: true,
            press: false
        });
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <GiftedForm
                formName='signupForm' // GiftedForm instances that use the same name will also share the same states
                openModal={(route) => {
                    navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
                }}
                clearOnClose={false} // delete the values of the form when unmounted
                defaults={{
                    /*
                    username: 'Farid',
                    'gender{M}': true,
                    password: 'abcdefg',
                    country: 'FR',
                    birthday: new Date(((new Date()).getFullYear() - 18)+''),
                    */
                }}
                validators={{
                    username: {
                        title: '用户名',
                        validate: [{
                            validator: 'isLength',
                            arguments: [3, 16],
                            message: '{TITLE} 长度必须为 {ARGS[0]} - {ARGS[1]} 位字符'
                        },{
                            validator: 'matches',
                            arguments: /^[a-zA-Z0-9]*$/,
                            message: '{TITLE} 只能包含字母和数字'
                        }]
                    },
                    password: {
                        title: '密码',
                        validate: [{
                            validator: 'isLength',
                            arguments: [6, 16],
                            message: '{TITLE} 长度必须是 {ARGS[0]} - {ARGS[1]} 位字符'
                        }]
                    }
                }}
            >
                <GiftedForm.SeparatorWidget />

                <GiftedForm.TextInputWidget
                    name='username'
                    title='用户名'
                    image={require('../images/contact_card.png')}
                    placeholder='请输入用户名'
                    clearButtonMode='while-editing'
                    onTextInputFocus={(currentText = '') => {
                        if (!currentText) {
                            let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
                            if (fullName) {
                                return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
                            }
                        }
                        return currentText;
                    }}
                />
                <GiftedForm.SeparatorWidget />
                <GiftedForm.TextInputWidget
                    name='password' // mandatory
                    title='密码'
                    placeholder='******'
                    clearButtonMode='while-editing'
                    secureTextEntry={true}
                    image={require('../images/lock.png')}

                />

                <GiftedForm.SeparatorWidget />


                <GiftedForm.ErrorsWidget/>

                <GiftedForm.SubmitWidget
                    title='登录'
                    widgetStyles={{
                        submitButton: {
                            backgroundColor:'#343433',
                        }
                    }}
                    onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                        if (isValid === true) {
                            // prepare object

                            /* Implement the request to your server using values variable
                            ** then you can do:
                            ** postSubmit(); // disable the loader
                            ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
                            ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
                            ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
                            */
                            this.props.navigation.navigate('TabBar');
                        }
                    }}
                />

                <GiftedForm.NoticeWidget
                    title='By signing up, you agree to the Terms of Service and Privacy Policity.'
                />

                <GiftedForm.HiddenWidget name='tos' value={true} />
            </GiftedForm>
            </View>
        );
    }

}