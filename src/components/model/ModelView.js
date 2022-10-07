import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';

function Modelview(props) {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={props.segment()}
        >
            <Modal.Header><span style = {{color:'#f2711c'}}>{props.addressObj.organization}</span></Modal.Header>
            <Modal.Content image>
                <Image src={props.imgUrl} size='medium' wrapped href = {props.imgUrl} as = 'a' target='_blank'/>
                <Modal.Description>
                    <Header>Services Offered {props.addressObj.organization}</Header>
                    <p>
                        {props.addressObj.services}
                    </p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default Modelview