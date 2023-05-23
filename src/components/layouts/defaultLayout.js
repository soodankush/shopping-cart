import Navbar from "../partials/Navbar";
import AppContent from '../../../src/components/partials/appContent'
import Footer from "../partials/footer";
import CartContext from "../../context/CartContext";
const DefaultLayout = () => {
  return (
    <div>
      <CartContext>
        <Navbar />
        <AppContent />
        <Footer />
      </CartContext>
    </div>
  )
}

export default DefaultLayout