import { useState, useContext, createContext, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || "")
  const [role, setRole] = useState(localStorage.getItem("role") || "")
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})

  const logout = () => {

    setAuthToken("")
    setRole("")
    setUser({})
    localStorage.removeItem("authToken")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
  }


  const setAuth = (token, user) => {
    setAuthToken(token)
    setRole(user?.role)
    setUser(user)


    localStorage.setItem("authToken", token)
    localStorage.setItem("role", user?.role)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const clearAuth = () => {
    setAuthToken("")
    setRole("")
    setUser({})


    localStorage.removeItem("authToken")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
  }

  const isAuthenticated = () => {
    return Boolean(authToken);
  }

  const getRole = () => {
    return role;
  }

  const hasRole = (requiredRole) => {
    return role === requiredRole;
  }

  const getUser = () => {
    return user
  }

  useEffect(() => {

    setAuthToken(localStorage.getItem("authToken") || "")
    setRole(localStorage.getItem("role") || "")
    setUser(JSON.parse(localStorage.getItem("user")) || {})
  }, [])

  return (
    <AuthContext.Provider value={{ logout, setAuth, clearAuth, isAuthenticated, getRole, getUser, hasRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
