import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  const hasErrorResponse = isRouteErrorResponse(error)

  return (
    <>
      <h1>{hasErrorResponse && error ? error.data : 'Something wrong'}</h1>
      <p>{hasErrorResponse ? 'Url does not exists' : 'Some other error'}</p>
    </>
  )
}

export default ErrorPage
