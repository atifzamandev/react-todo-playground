import { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetail = () => {
  const params = useParams()

  console.log('params: ', params)

  const [search, setSearch] = useSearchParams()

  console.log('search', search.get('age'))

  const location = useLocation()

  console.log('location :', location)

  useEffect(() => {
    setSearch({ age: '30' })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSearch({ age: '50' })
    }, 10000)
  }, [search])
  return <p>User: {params.id}</p>
}

export default UserDetail
