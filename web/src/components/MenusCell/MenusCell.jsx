import Menu from 'src/components/Menu'

export const QUERY = gql`
  query MenusQuery {
    menus {
      id
      name
      description
      price
      availability
      image
      ingredients
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ menus }) => {
  const menusUI = menus.map(menu => <Menu menu={menu} />)
  return (
    <>
      <h1 className='text-3xl mt-5 font-bold'>Foods</h1>
      <div className='flex gap-5'>
        {menusUI}
      </div>
    </>
  )
}
