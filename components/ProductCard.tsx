import { Product } from '@/types';
import Image from 'next/image';
import { Component } from 'react';
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  height: 7rem;

  background: var(--grind-white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 5rem;
`

const ProductName = styled.h3`
  font-family: Apercu Pro;
  font-size: 0.938rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`

const ProductPrice = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`

const ProductDescription = styled.p`
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0em;
  margin: 0;
`

interface Props {
    product: Product;
};
 
class ProductCard extends Component<Props> {
  render(){
    return (
      <Card>
        <ImageWrapper>
          <Image
            src={this.props.product.product.image.url}
            alt="Product image"
            width={80}
            height={80}
          />
        </ImageWrapper>
        <ProductInfo>
          <ProductName>{this.props.product.product.title}</ProductName>
          <ProductPrice>{this.props.product.price.formatted}</ProductPrice>
          <ProductDescription>{this.props.product.variant.title}</ProductDescription>
        </ProductInfo>
         
      </Card>
  )}
};
 
export default ProductCard;