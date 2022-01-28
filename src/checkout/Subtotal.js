import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
import { useNavigate  } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
//   const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
  <CurrencyFormat 

        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({23} items): <strong>{0}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
  
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;