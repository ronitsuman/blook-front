import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const name = localStorage.getItem("userName")
    const userId = localStorage.getItem("userId")

    if (token && role) {
      setUser({ name, role, _id: userId, token })
      setToken(token)
    } else {
      setUser(null)
      setToken(null)
    }
  }, [])

  const login = (userData) => {
    const { token, role, name, _id } = userData
    localStorage.setItem("token", token)
    localStorage.setItem("role", role)
    localStorage.setItem("userName", name)
    localStorage.setItem("userId", _id)

    setUser({ token, role, name, _id })
    setToken(token)
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
    setToken(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
