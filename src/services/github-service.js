const _baseUrl = `https://api.github.com`;

const githubAPI = {

  getResourse: async (url) => {
    const res = await fetch(_baseUrl + url)

    if(!res.ok){
      console.error(`Cannot find url ${res.url}! Code ${res.status}`)
      return false;
    }

    const body = await res.json()
    return body
  },

  getUser: async (login) => {
    const res = githubAPI.getResourse(`/users/${login}`)

    if (!res){
      return false
    }
    return res
  }

}

export default githubAPI