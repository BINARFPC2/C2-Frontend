import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { format } from 'date-fns';


class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  handleShow() {
    this.setState({
      show: true
    })
  }

  handleInput() {
    this.setState({
      disabled: false
    })
  }

  render() {
    let inputElement;

    if (this.props.id === "startDate") {
      inputElement = (
        <input
          id={this.props.id}
          className={this.props.className}
          onClick={this.handleShow}
          value={this.props.value && this.props.value.startDate ? JSON.stringify(this.props.value.startDate).replace(/"/g, "") : ""}
        />
      );
    } else if (this.props.id === "endDate") {
      inputElement = (
        <input
          id={this.props.id}
          className={this.props.className}
          onClick={this.handleShow}
          value={this.props.value && this.props.value.endDate ? JSON.stringify(this.props.value.endDate).replace(/"/g, "") : ""}

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
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm' id='wrapper'>
            <div id='modal' className='bg-white w-[660px] h-[300px] p-2 rounded px-4 py-4 flex flex-col'>
              {/* <h1>INI MODAL</h1> */}
              <div>{this.props.body}</div>
              <button className='mt-3 text-sm font-bold text-white bg-purple-400 rounded-sm' onClick={this.handleClose}>Close</button>

            </div>
          </div>
        </ReactModal>
      </div>
    );

    return modal;
  }
}

export default ModalCreate;


