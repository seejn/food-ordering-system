import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'

import './index.css'
import { AuthProvider } from 'src/hooks/useAuth'
import { CartProvider } from 'src/hooks/useCart'

import { Toaster } from '@redwoodjs/web/toast'

const App = ({ children }) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <CartProvider>
          <RedwoodApolloProvider>
            <Toaster />
            {children}
          </RedwoodApolloProvider>
        </CartProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
