export const QUERY = gql`
  query FindUpdateMenuQuery($id: Int!) {
    updateMenu: updateMenu(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ updateMenu }) => {
  return <div>{JSON.stringify(updateMenu)}</div>
}
