'use client'
import React, {useState} from 'react';
import BreadCrumb from "@/Components/Breadcrumb/BreadCrumb";
import img1 from "../../../public/img/lookbook/1.png";
import img2 from "../../../public/img/lookbook/2.png";
import img3 from "../../../public/img/lookbook/3.png";
import img4 from "../../../public/img/lookbook/4.png";
import img5 from "../../../public/img/lookbook/5.png";
import Image from "next/image";
import styles from "./style.module.scss";
import ShoppingQuantity from "@/app/shopping-cart/shoppingQuantity";

const shoppingListData = [
    {
        prodName: 'Product 1',
        prodDesc: 'Corset with Skirt',
        prodSize: 'M',
        prodPrice: 120000,
        prodImg: img1,
    },
    {
        prodName: 'Product 1',
        prodDesc: 'Corset with Skirt',
        prodSize: 'M',
        prodPrice: 120000,
        prodImg: img2,
    },
    {
        prodName: 'Product 1',
        prodDesc: 'Corset with Skirt',
        prodSize: 'M',
        prodPrice: 120000,
        prodImg: img3,
    },
    {
        prodName: 'Product 1',
        prodDesc: 'Corset with Skirt',
        prodSize: 'M',
        prodPrice: 120000,
        prodImg: img4,
    },
    {
        prodName: 'Product 1',
        prodDesc: 'Corset with Skirt',
        prodSize: 'M',
        prodPrice: 120000,
        prodImg: img5,
    },

]

const Page = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Step 3: Decrement function
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <BreadCrumb/>
            <ul className={styles.prodList}>
                {shoppingListData.map((elem, index) => {
                    return (
                        <li key={index} className={styles.prodItem}>
                            <div className={styles.prodItemContainer}>

                                <input className={styles.prodCheck} type="checkbox"/>
                                <div className={styles.prodImg}>
                                    <div className="img-container">
                                        <Image
                                            src={elem.prodImg}
                                            alt={'corset'}
                                            width={245}
                                            height={244}
                                        />
                                    </div>
                                </div>
                                <div className={styles.prodContent}>
                                    <h3 className={styles.prodTitle}>
                                        {elem.prodName}
                                    </h3>
                                    <p className={styles.prodDesc}>
                                        {elem.prodDesc}
                                    </p>
                                    <p className={styles.prodSize}>
                                        Size:
                                        <b>
                                            {elem.prodSize}
                                        </b>
                                    </p>
                                    <p className={styles.prodPrice}>
                                        Price:
                                        <b>
                                            {elem.prodPrice}
                                        </b>
                                    </p>
                                    <div className={styles.prodQuantityContainer}>
                                        <button className={`${styles.prodQuantityBtn}`}
                                                onClick={decrementQuantity}>-
                                        </button>
                                        <ShoppingQuantity quantity={quantity} />
                                        <button className={`${styles.prodQuantityBtn}`}
                                                onClick={incrementQuantity}>+
                                        </button>
                                    </div>
                                </div>
                                <button className={styles.prodDeleteBtn}>
                                    <span className="img-container">
                                        <svg className="icon">
                                          <use xlinkHref="#garbage"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Page;