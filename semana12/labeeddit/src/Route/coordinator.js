export const goToLogin = (history) =>{
    history.push("/login")
}

export const goToSingUp = (history) =>{
    history.push("/cadastro")
}

export const goToDetalhePost = (history, id) =>{
    history.push(`/posts/${id}/comments`)
}

export const goToPostPage = (history) =>{
    history.push("/posts")
}



