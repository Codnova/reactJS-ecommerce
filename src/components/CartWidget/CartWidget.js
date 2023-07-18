import CartIcon from "./assets/CartIcon.svg"

function CartWidget (number) {
  return (
    <div className="has-text-centered">
      <img src={CartIcon} alt="shopping cart icon" />
      0
    </div>
  )
}

export default CartWidget;