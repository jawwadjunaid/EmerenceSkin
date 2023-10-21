import * as  React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { TextareaAutosize } from '@mui/base';

const BtnModal = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
   <>
    <Button
        variant="outlined"
       style={{color:'white',backgroundColor: '#2cadcd', borderColor:'white'}}
       
        onClick={() => setOpen(true)}
      >
        Get Quote
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Get The Inquiry Here..</DialogTitle>
          <DialogContent>Fill in the information of the Inquiry.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>

              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input autoFocus required />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input autoFocus required />
              </FormControl>
              
              <FormControl>
                <FormLabel>Message</FormLabel>
                <TextareaAutosize required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
   </>
  );
}

export default BtnModal;
