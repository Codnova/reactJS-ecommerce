import CartIcon from "./assets/CartIcon.svg"

function CartWidget (number) {
  return (
    <div className="has-text-centered">
      <img src={CartIcon} alt="shopping cart icon" />
      <span>0</span>
    </div>
  )
}

export default CartWidget;