import { useUsers } from './hooks/useUsers'

function App() {
  const { users, error } = useUsers()

  if (error) {
    return (
      <>
        <div className='flex justify-center items-center h-screen'>
          <span className='text-2xl text-red-500'>
            Opa, algo deu errado!
          </span>
        </div>
      </>
    )
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <ul>
          {
            users.map((user) => (
              <li key={user.id} className='text-xl flex gap-4 w-80 justify-between'>
                <span>
                  {user.name}
                </span>
                <span>
                  {user.profession}
                </span>
              </li>
            ))
          }
      </ul>
     </div>
    </>
  )
}

export default App
