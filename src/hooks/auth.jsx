import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api'

const AuthContext = createContext({})
function useAuth() {
    const context = useContext(AuthContext)
    return context
}

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function SignIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user, token })
        } 
        catch(e) {
            if(e.response) {
                alert(e.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    async function SignOut() {
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")
        setData({})
    }

    async function UpdateProfile({ user, avatarFile }) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            setData({ user, token: data.token })
            alert("Perfil atualizado com sucesso.")
        }
        catch(e) {
            if(e.response) {
                alert(e.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user")
        const token = localStorage.getItem("@rocketmovies:token")

        if(user && token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ token, user: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            SignIn,
            SignOut,
            UpdateProfile, 
            user: data.user
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export {
    useAuth,
    AuthProvider
}
