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

export const gET5ArticlesMentioningFeatured17424GET = Constants =>
  fetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGET5ArticlesMentioningFeatured17424GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGET5ArticlesMentioningFeatured17424GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

  return children({
    loading,
    data,
    error,
    refetchGET5ArticlesMentioningFeatured17424: refetch,
  });
};

export const gET5ArticlesMentioningFeatured17426GET = Constants =>
  fetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGET5ArticlesMentioningFeatured17426GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGET5ArticlesMentioningFeatured17426GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/articles?q=featured`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

  return children({
    loading,
    data,
    error,
    refetchGET5ArticlesMentioningFeatured17426: refetch,
  });
};

export const gET5MostRecentArticles17423GET = Constants =>
  fetch(
    `https://example-data.draftbit.com/articles?_limit=5&_sort=created_at_utc&_order=desc`,
    {
      headers: {
        Accept: 'application/json',
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

export const useGET5MostRecentArticles17423GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://example-data.draftbit.com/articles?_limit=5&_sort=created_at_utc&_order=desc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGET5MostRecentArticles17423GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://example-data.draftbit.com/articles?_limit=5&_sort=created_at_utc&_order=desc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
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

  return children({
    loading,
    data,
    error,
    refetchGET5MostRecentArticles17423: refetch,
  });
};

export const gET5MostRecentArticles17425GET = Constants =>
  fetch(
    `https://example-data.draftbit.com/articles?_order=desc&_sort=created_at_utc&_limit=5`,
    {
      headers: {
        Accept: 'application/json',
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

export const useGET5MostRecentArticles17425GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://example-data.draftbit.com/articles?_order=desc&_sort=created_at_utc&_limit=5`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGET5MostRecentArticles17425GET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://example-data.draftbit.com/articles?_order=desc&_sort=created_at_utc&_limit=5`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
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

  return children({
    loading,
    data,
    error,
    refetchGET5MostRecentArticles17425: refetch,
  });
};
