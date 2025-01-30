// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MenusCell from 'src/components/MenusCell'

const MenusPage = () => {
  return (
    <>
      <Metadata title="Menus" description="Menus page" />

      <MenusCell />
    </>
  )
}

export default MenusPage
