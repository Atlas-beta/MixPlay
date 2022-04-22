import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addQueuePOST = (Constants, { songID }) =>
  fetch(
    `https://api.spotify.com/v1/me/player/queue?uri=spotify:track:${
      songID ?? ''
    }`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AccT'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useAddQueuePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addQueuePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('songs', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('song');
        queryClient.invalidateQueries('songs');
      },
    }
  );
};

export const searchGET = (Constants, { sonsearch }) =>
  fetch(
    `https://api.spotify.com/v1/search?q=${
      sonsearch ?? ''
    }&type=track,artist&market=ES&limit=25&offset=10`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AccT'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSearchGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['song', args], () => searchGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['songs']),
  });
};

export const FetchSearchGET = ({
  children,
  onData = () => {},
  refetchInterval,
  sonsearch,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useSearchGET(
    { sonsearch },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSearch: refetch });
};
