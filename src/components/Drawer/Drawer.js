import priceCorrector from "../../utils/priceCorrector";
import styles from './Drawer.module.scss'

function Drawer({ onClose, items = [], onRemove }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-20 d-flex justify-between">
                Корзина 
                <img onClick={onClose} className="removeBtn cu-p" src="/images/btn-remove.svg" alt="Close" />
                </h2>

                {items.length === 0 ? 
                    (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width={120} height={120} src="/images/empty-box.svg" alt=" "/>
                            <h2>Корзина Пустая</h2>
                            <p className="opacity-6 text-center">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className={styles.greenButton}>
                                Добавить
                                <img src="/images/arrow.svg"/>
                            </button>
                        </div>
                    ) 
                    : 
                    (
                        <>
                            <div className="items">
                                {items.map((val, index) => (
                                    <div key={index} className="cartItem d-flex align-center mb-20">
                                        <img className="mr-20" width={75} height={75} src={val.photo} />
                                        <div className="mr-20">
                                        <p className="mb-5">{val.name}</p>
                                        <b>{val.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(val.id)} className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
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
                        </>    
                    )
                }         
               
            </div>
        </div>
    );
}

export default Drawer;