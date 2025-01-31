import { Router, Route, Set, Private } from '@redwoodjs/router'
import GuestLayout from './layouts/GuestLayout/GuestLayout'
import UserLayout from './layouts/UserLayout/UserLayout'
import RestaurantLayout from './layouts/RestaurantLayout/RestaurantLayout'

import { useAuth } from 'src/hooks/useAuth'

const Routes = () => {
  const {getRole} = useAuth();
  const roleLayout = {
    RESTAURANT: RestaurantLayout,
    USER: UserLayout,
    GUEST: GuestLayout
  }

  const role = getRole() || "GUEST";
  console.log(getRole())

  return (
    <Router>
      <Set wrap={roleLayout[role]}>
        <Route path="/restaurant-profile" page={RestaurantProfilePage} name="restaurantProfile" />
        <Route path="/restaurant-order" page={RestaurantOrderPage} name="restaurantOrder" />
        <Route path="/restaurant-home" page={RestaurantHomePage} name="restaurantHome" />
      </Set>

      <Set wrap={roleLayout[role]}>
        <Route path="/user-home" page={UserHomePage} name="userHome" />
        <Route path="/cart" page={CartPage} name="cart" />
        <Route path="/place-order" page={PlaceOrderPage} name="placeOrder" />
        <Route path="/user-profile/{id:Int}" page={UserProfilePage} name="userProfile" />
      </Set>

      <Set wrap={roleLayout[role]}>
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/menus" page={MenusPage} name="menus" />
        <Route path="/menus/{id:Int}" page={MenuPage} name="menu" />
        <Route path="/restaurants" page={RestaurantsPage} name="restaurants" />
        <Route path="/restaurants/{id:Int}" page={RestaurantPage} name="restaurant" />
        <Route path="/" page={LandingPage} name="landing" />
        <Route path="/verify-reset-password-token" page={VerifyResetPasswordTokenPage} name="verifyResetPasswordToken" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
