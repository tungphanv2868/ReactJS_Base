import React, { Component } from 'react'
import CardShoes from './CardShoes'
import ListShoes from './ListShoes'
import DetailShoes from './DetailShoes'
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from './data'

export default class EX_Shose extends Component {
  state = {
    shoeArr : shoeArr,
    card : [],
    detail : {},
  }
  handleAddToCard = (shoe) => {
    
    //kiểm tra sản phẩm có trong giỏ hàng có hay chưa 
    //findIndex
    let cloneCard = this.state.card;
    let index = cloneCard.findIndex((item) => {
      return item.id === shoe.id;
    });
    if(index === -1) {
      let newShoe = { ...shoe, soLuong: 1};
      cloneCard.push(newShoe);

    }else {
      //đã có
      cloneCard[index].soLuong++; 
    }
    this.setState({
      card : cloneCard
    });

    //th1 : sp chưa có trong giỏ hàng => tạo object mới có thêm key soLuong: 1 => push
    //th2 : sp đã có trong giỏ hàng => update key soLuong lên 1 đơn vị
  };

  handleRemove = (idShoe) => {
    let cloneCard = this.state.card;
    let index = cloneCard.indexOf((item) => {
      return item.id === idShoe;
    });
    cloneCard.splice(index, 1);
    this.setState({
      card : cloneCard
    });
  };


  handleChangeQuantity = (idShoe, option) => {
    let cloneCard = this.state.card;
    let index = cloneCard.findIndex((item) => {
      return item.id === idShoe;
    });
    if(option === TANG_SO_LUONG){
      cloneCard[index].soLuong++;
    }else{
      cloneCard[index].soLuong--;

      cloneCard[index].soLuong === 0 && this.handleRemove(idShoe);
    }
    this.setState({
      card : cloneCard
    })
  };

  handleChangeQuantity_V2= (idShoe, option) => {
    let cloneCard = this.state.card;
    let index = cloneCard.findIndex((item) => {
      return item.id === idShoe;
    });
    option == TANG_SO_LUONG && cloneCard[index].soLuong++;
    option == GIAM_SO_LUONG && cloneCard[index].soLuong-- && cloneCard[index].soLuong == 0 && this.handleRemove(idShoe);
    this.setState({
      card : cloneCard
    })
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <CardShoes
            handleChangeQuantity = { this.handleChangeQuantity}
           handleRemove = {this.handleRemove}
            card = {this.state.card}
        />
          <ListShoes list = {this.state.shoeArr}
          handleAddToCard = {this.handleAddToCard}/>
        </div>
        <DetailShoes/>
        
      </div>
    )
  }
}
