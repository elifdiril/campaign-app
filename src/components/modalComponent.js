import React, { Component } from 'react';
import { FormGroup, Label, Modal, ModalBody, ModalHeader, Input, Button } from 'reactstrap';

export default class ModalComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updatedItem: this.props.item,
            item: this.props.item,
            modal: this.props.modal
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let newValue = e.target.value;
        let targetName = e.target.name;
        let newCampElement = this.state.item;

        if (targetName === 'name') {
            newCampElement.name = newValue
        }

        else if (targetName === 'description') {
            newCampElement.description = newValue
        }

        this.setState({
            updatedItem: JSON.stringify(newCampElement)
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.modal}>
                <ModalHeader>Details</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="name">Campaign Name</Label>
                        <Input type="textarea" name="name" id="name" value={this.state.updatedItem.name} onChange={this.onChange} />

                        <Label for="description">Campaing Description</Label>
                        <Input type="textarea" name="description" id="description" value={this.state.updatedItem.description} onChange={this.onChange} />

                        <Button onClick={() => {this.props.updateCampaign(this.state.updatedItem, this.state.item.id); this.props.toggle()}} color="warning">Update Campaign</Button>
                        <Button onClick={this.props.toggle}>Close</Button>
                    </FormGroup>
                </ModalBody>
            </Modal>
        )
    }
}
