// import token from "./token"

// export const apiUrl = "/api"
// export const apiUrl = "http://10.13.10.58:5000/api"
export const apiUrl = "http://127.0.0.1:5000/api"
// export const apiUrl = "http://10.13.10.5:5000/api"

const fetchData = async (apiRoute: string, method: string, requestBody: any) => {
  try {
    const methodUpperString = method.toUpperCase()
    const getMethodString = "GET"

    const getRegex = new RegExp(getMethodString, "i")

    // const accessToken = token.get() == null ? '0' : token.get()

    let response

    if (getRegex.test(methodUpperString)) {
      response = await fetch(apiUrl + apiRoute, {
        method: methodUpperString,
        headers: {
          // "Authorization": `Bearer ${accessToken}`
        },
      })
        .catch(err => console.log(err))
    } else {
      response = await fetch(apiUrl + apiRoute, {
        method: methodUpperString,
        headers: {
          // "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      })
        .catch(err => console.log(err))
    }

    return response
  } catch (error) {
    console.log(`Error fetching data: ${error}`)
    return null
  }
}

export default fetchData