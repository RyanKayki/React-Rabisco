import axios from 'axios'

const api = axios.create({ baseURL: 'https://reqres.in/api' })
export async function getContatos() {
  try {
    const response1 = await api.get('/users?page=1')
    const response2 = await api.get('/users?page=2')
    const data1 = response1.data.data
    const data2 = response2.data.data
    const datas = [...data1, ...data2]

    return datas
  } catch (error) {
    console.error(`Erro ao buscar contatos: ${error.message}`)
    // Handle error as needed, e.g., throw it or return a default value
    throw error
  }
}

