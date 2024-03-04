import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const router = createBrowserRouter(routes)

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
