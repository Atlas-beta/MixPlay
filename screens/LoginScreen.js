import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const LoginScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [email, setEmail] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_95}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles.Viewpv}>
          <Image
            style={styles.ImageZJ}
            resizeMode={'cover'}
            source={Images.AppImg}
          />
          <Text style={[styles.TextCP, { color: theme.colors.strong }]}>
            {'Welcome Back!'}
          </Text>

          <Text style={[styles.TextjT, { color: theme.colors.medium }]}>
            {'Sign in to get started.'}
          </Text>
        </View>

        <View style={styles.ViewMa}>
          <TextField
            onChangeText={newAccTokenValue => {
              const email = newAccTokenValue;
              try {
                setEmail(email);
                setGlobalVariableValue({
                  key: 'AccT',
                  value: 'Bearer ' + newAccTokenValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldmS, { borderColor: theme.colors.light }]}
            type={'underline'}
            value={email}
            placeholder={'AccToken'}
          />
        </View>

        <View>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('SearchScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidm5,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign In'}
          />
          <Text style={[styles.Textbg, { color: theme.colors.light }]}>
            {
              'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageZJ: {
    width: 150,
    height: 100,
  },
  TextCP: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  TextjT: {
    textAlign: 'center',
  },
  Viewpv: {
    alignItems: 'center',
  },
  TextFieldmS: {
    borderBottomWidth: 1,
  },
  ViewMa: {
    marginBottom: 36,
  },
  ButtonSolidm5: {
    borderRadius: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  Textbg: {
    textAlign: 'center',
  },
  KeyboardAvoidingView_95: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(LoginScreen);
