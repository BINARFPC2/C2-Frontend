import React, { useState} from 'react'
import ReactModal from 'react-modal';
import { format } from 'date-fns';


class ModalRightCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
      }

    handleClose(){
        this.setState({
            show : false
        })
    }

    handleShow(){
        this.setState({
            show : true
        })
    }

    render() {
        let inputElement;
      
        if (this.props.id === "passangers") {
          inputElement = (
            <input
              id={this.props.id}
              className={this.props.className}
              onClick={this.handleShow}
              value={this.props.value}
            />
          );
        } else {
            inputElement = (
              <input
                id={this.props.id}
                className={this.props.className}
                onClick={this.handleShow}
                value={''}
              />
            );
        }
      
        const modal = (
          <div>
            {inputElement}
            
            <ReactModal className='bg-none' isOpen={this.state.show} onRequestClose={this.state.handleClose} shouldCloseOnOverlayClick={true}>
              <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-end items-right pt-72' id='wrapper'>
                <div>
                    <button className='absolute font-bold text-sm pt-2 ml-[325px] text-black' onClick={this.handleClose}>X</button>
                </div>
                <div id='modal' className='bg-white w-auto h-[280px] rounded px-4 py-4 mr-40 flex flex-col'>
                  {/* <h1>INI MODAL</h1> */}
                  <div>{this.props.body}</div>
                  
                {/* <button className='text-white bg-purple-950 rounded-md px-6 py-2 mt-52 text-xs absolute align-bottom place-self-end'>
                    Simpan
                </button> */}
                </div>
              </div>
            </ReactModal>
          </div>
        );
      
        return modal;
      }
      }

export default ModalRightCreate;


  