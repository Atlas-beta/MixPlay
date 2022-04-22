import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  FieldSearchBarFull,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';

const SearchScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const auth = (AccT, storeKey) => {
    if (AccT == '') {
      AccT = StoreKey;
    }

    return AccT;
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setSearchBarValue(Constants['searchName']);
      setGlobalVariableValue({
        key: 'storeKey',
        value: '',
      });
      const AccT = auth(Constants['AccT'], Constants['storeKey']);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [searchBarValue, setSearchBarValue] = React.useState('');

  return (
    <ScreenContainer>
      <FieldSearchBarFull
        onChange={newSearchBarValue => {
          try {
            setGlobalVariableValue({
              key: 'searchName',
              value: newSearchBarValue,
            });
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Search for...'}
      />
      <ButtonOutline
        onPress={() => {
          try {
            navigation.navigate('SongSearchScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles.ButtonOutlinewn}
        title={'Get Started'}
      />
      <Text style={{ color: theme.colors.strong }}>
        {Constants['searchName']}
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutlinewn: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default withTheme(SearchScreen);
