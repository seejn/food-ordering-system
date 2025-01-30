import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MenuCell from 'src/components/MenuCell'

const MenuPage = ({ id }) => {



  return (
    <>
      <Metadata title="Menu" description="Menu page" />
      <MenuCell id={id} />

      {/*
           My default route is named `menu`, link to me with:
           `<Link to={routes.menu()}>Menu</Link>`
        */}
    </>
  )
}

export default MenuPage
