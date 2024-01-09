import React, { useEffect, useState } from 'react'
import InputComponent from '../components/InputComponent';
import Button from '../components/ButtonComponent';
import ProductComponent from '../components/ProductComponent';


export default function Home() {

  useEffect(()=>{
    document.title = 'صفحه محصولات';
  });

  const [products, setProduct] = useState(new Array());
  const [new_product, setNewProduct] = useState({ name: '', price: 0, desc: '' });
  const [loading, setLoading] = useState(false);

  const set_products_name = (e) => {
    setNewProduct({...new_product, name: e.target.value });
  }

  const set_products_price = (e) => {
    
    setNewProduct({...new_product, price: e.target.value });
  }

  const set_products_desc = (e) => {

    setNewProduct({...new_product, desc: e.target.value });
  }

  const save_new_product = () => {
    setLoading(true);
    setTimeout(() => {

      if (new_product.name != '' && parseInt(new_product.price) > 0 && new_product.desc != '') {
        setProduct([...products, new_product]);
  
        setLoading(false);
        alert('عملیات با موفقیت انجام شد.');
  
        return;
      }
  
      setLoading(false);
      alert('خطایی رخ داده');
      return;

    }, 5000);
    
  }

  return (
    <div className='mt-5 align-items-center'>

      <div className='row d-flex justify-content-center'>

        <div className="col-6 ">

          <div className='mt-3'>
            <span>نام محصول:</span>
            <div className='mt-2'>
              <InputComponent width='80%' value={new_product.name} get_data={set_products_name} placeholder='نام محصول را وارد کنید.' />
            </div>
          </div>

          <div className="mt-3">
            <span>قیمت محصول:</span>
            <div className='mt-2'>
              <InputComponent type='number' width='80%' value={new_product.price} get_data={set_products_price} placeholder='قیمت محصول را وارد کنید.' />
            </div>
          </div>

          <div className="mt-3">
            <span>توضیحات محصول:</span>
            <div className='mt-2'>
              <InputComponent width='80%' value={new_product.desc} get_data={set_products_desc} placeholder='توضیحات محصول را وارد کنید.' />
            </div>
          </div>

          <div className='mt-3'>
            <Button loading={loading} submit={save_new_product} />
          </div>

        </div>

        <div className="col-12 mt-3 row">

        {products.map(single_product=>(
         <div className="col-4 mx-2">
           <ProductComponent name={single_product.name} price={single_product.price} desc={single_product.desc}></ProductComponent>
         </div>
        ))}

        </div>

      </div>
    </div>
  )
}
