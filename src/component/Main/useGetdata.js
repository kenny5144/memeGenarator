import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function useGetdata(){
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['picture'],
        queryFn: () =>
          fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            
      })
}