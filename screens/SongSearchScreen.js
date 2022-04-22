import React from 'react';
import * as SpotifyApi from '../apis/SpotifyApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Divider, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const SongSearchScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const addQueuePOST = SpotifyApi.useAddQueuePOST();

  const [searchBarValue, setSearchBarValue] = React.useState('');

  return (
    <ScreenContainer
      style={{
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.secondary,
      }}
      scrollable={true}
      hasSafeArea={false}
    >
      <KeyboardAvoidingView
        behavior={'position'}
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View style={styles.ViewMS}>
          <Image
            style={styles.ImagexN}
            source={Images.AppImg}
            resizeMode={'contain'}
          />
          <Text style={[styles.Text_60, { color: theme.colors.strong }]}>
            {'Results for: '}
            {Constants['searchName']}
          </Text>
        </View>

        <View style={styles.View_4v}>
          <SpotifyApi.FetchSearchGET sonsearch={Constants['searchName']}>
            {({ loading, error, data, refetchSearch }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={fetchData?.tracks?.items}
                  listKey={'p3BYhr94'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        {!fetchData?.tracks?.items ? null : (
                          <Touchable
                            onPress={async () => {
                              try {
                                await addQueuePOST.mutateAsync({
                                  songID: listData?.id,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View style={styles.ViewVu}>
                              <View style={styles.ViewUf}>
                                <Text
                                  style={[
                                    styles.TextdK,
                                    { color: theme.colors.strong },
                                  ]}
                                  allowFontScaling={true}
                                  numberOfLines={2}
                                >
                                  {listData?.name}
                                </Text>

                                <Text
                                  style={[
                                    styles.TextNa,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {'From: '}
                                  {listData?.album?.name}
                                  {' album'}
                                </Text>
                              </View>

                              <View style={styles.ViewQn}>
                                <Image
                                  style={styles.Imagevd}
                                  source={{
                                    uri: 'https://media.istockphoto.com/vectors/vinyl-disk-with-blank-cover-vector-id499227249?k=6&m=499227249&s=612x612&w=0&h=RzcvjAOLm4eXP9DP-FPs1S_cz2wtnPfJasOnlvSflvs=',
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>
                            </View>
                            <Divider
                              style={styles.DividerBt}
                              color={theme.colors.divider}
                            />
                          </Touchable>
                        )}
                      </>
                    );
                  }}
                />
              );
            }}
          </SpotifyApi.FetchSearchGET>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagexN: {
    width: 150,
    height: 75,
  },
  Text_60: {
    marginBottom: 24,
    fontSize: 30,
  },
  ViewMS: {
    paddingBottom: 32,
    alignItems: 'flex-start',
    paddingTop: 64,
    paddingRight: 32,
    paddingLeft: 32,
  },
  TextdK: {
    fontSize: 20,
    alignSelf: 'flex-start',
    flex: 5,
  },
  TextNa: {
    fontSize: 11,
  },
  ViewUf: {
    width: '50%',
  },
  Imagevd: {
    width: 80,
    height: 80,
  },
  ViewQn: {
    paddingLeft: 10,
  },
  ViewVu: {
    marginTop: 12,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
    marginBottom: 12,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  DividerBt: {
    height: 1,
  },
  View_4v: {
    paddingRight: 32,
    marginBottom: 32,
    paddingLeft: 32,
    width: '100%',
  },
});

export default withTheme(SongSearchScreen);
