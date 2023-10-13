import { Button } from '../../ds'
import './styles.css'
import React from 'react'

export default function ProductsPopular() {
  return (
    <div className='products-popular flex'>
        <h2 className='products-title'>Mais vistos</h2>
        <div className='product-cards flex'>
            <div className='product-card01 flex'>
                <img src='https://static.zattini.com.br/produtos/tenis-vizzano-casual-feminino/14/E11-0730-014/E11-0730-014_zoom1.jpg?ts=1695700341&ims=326x' alt='Tênis Vizzano Casual Feminino'></img>
                <span className='product-discount'>-5% OFF</span>
                <p className='product-card-title'>Tênis Vizzano Casual Feminino</p>
                <div className='product-card-text flex'>
                    <span className='product-pretext'>A partir de</span>
                    <p className='product-price'>R$ 74,99</p>
                    <p>ou 1x de R$ 74,99</p>
                </div>  
                <Button align='center' variation='primary'>Comprar</Button>   
            </div>
            <div className='product-card01 flex'>
                <img src='https://static.zattini.com.br/produtos/slip-on-santa-lolla-logo-feminino/06/H08-2245-006/H08-2245-006_zoom1.jpg?ts=1695700660&ims=326x' alt='Slip On Santa Lolla Logo Feminino'></img>
                <span className='product-discount'>-15% OFF</span>
                <p className='product-card-title'>Slip On Santa Lolla Logo Feminino</p>
                <div className='product-card-text flex'>
                    <span className='product-pretext strike'>R$ 129,90</span>
                    <p className='product-price'>R$ 89,99</p>
                    <p>ou 1x de R$ 89,99</p>
                </div>
                <Button align='center' variation='primary'>Comprar</Button>           
            </div>
            <div className='product-card01 flex'>
                <img src='https://static.zattini.com.br/produtos/tenis-vizzano-casual-feminino/14/2DD-7206-014/2DD-7206-014_zoom1.jpg?ts=1695699181&ims=326x' alt='Tênis Vizzano Casual Feminino'></img>
                <p className='product-card-title'>Tênis Vizzano Casual Feminino</p>
                <div className='product-card-text flex'>
                    <p className='shipping'>Frete grátis</p>
                    <span className='product-pretext'>A partir de</span>
                    <p className='product-price'>R$ 116,84</p>
                    <p>ou 1x de R$ 116,84 </p>
                </div>
                <Button align='center' variation='primary'>Comprar</Button>   
            </div>
            <div className='product-card01 flex'>
                <img src='https://static.zattini.com.br/produtos/scarpin-vizzano-salto-medio-bico-fino/06/E11-7358-006/E11-7358-006_zoom1.jpg?ts=1695699091&ims=326x' alt='Scarpin Vizzano Salto Médio Bico Fino'></img>
                <span className='product-discount'>-22% OFF</span>
                <p className='product-card-title'>Scarpin Vizzano Salto Médio Bico Fino</p>
                <div className='product-card-text flex'>
                    <span className='product-pretext strike'>R$ 129,99</span>
                    <p className='product-price'>R$ 79,99</p><p>no Pix</p>
                    <p>ou 1x de R$ 79,99</p>
                </div>
                <Button align='center' variation='primary'>Comprar</Button>   
            </div>
        </div>
        
    </div>
  )
}
