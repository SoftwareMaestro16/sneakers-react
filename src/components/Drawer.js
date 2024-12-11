import priceCorrector from "../utils/priceCorrector";

function Drawer({ onClose, items = [] }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-20 d-flex justify-between">
                Корзина 
                <img onClick={onClose} className="removeBtn cu-p" src="/images/btn-remove.svg" alt="Close" />
                </h2>

                <div className="items">
                    {items.map((val, index) => (
                        <div key={index} className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={75} height={75} src={val.photo} />
                            <div className="mr-20">
                            <p className="mb-5">{val.name}</p>
                            <b>{val.price}</b>
                            </div>
                            <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}
                </div>
                    
                <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                    </li>
                </ul>
                <button>Оформить заказ
                    <img src="/images/arrow.svg"/>
                </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;