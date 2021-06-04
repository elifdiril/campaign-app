import React, { Component } from 'react';
import { FormGroup, Label, Modal, ModalBody, ModalHeader, Input, Button } from 'reactstrap';

export default class ModalComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updatedItem: {}
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}></ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="name">Campaing Name</Label>
                        <Input type="textarea" name="itemName" id="itemName"/>

                        <Label for="description">Campaing Name</Label>
                        <Input type="textarea" name="itemDescription" id="itemDescription"/>

                        <Button onClick= {() => this.props.updateCampaign(this.state.updatedItem, this.props.item.id)} color="warning">Update Campaign</Button>
                    </FormGroup>
                </ModalBody>
            </Modal>
        )

    }

}
