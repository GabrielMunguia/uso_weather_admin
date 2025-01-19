import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import React from 'react';
import { useConfirmStore } from './store/confirmModalstore';

const ConfirmModal = () => {
  const { isAsking, setResponse, message } = useConfirmStore();

  const setResponseAndClose = (response: boolean) => {
    setResponse(response);
  };
  return (
    <Modal
      isOpen={isAsking}
      onOpenChange={() => setResponseAndClose(false)}
      isDismissable={false}
      size='xl'
      placement='center'
      className='z-50'
    >
      <ModalContent className='p-4 -z-50'>
        <ModalBody className='z-500'>
          <h1 className='text-xl font-bold text-center'>{message}</h1>
          <div className='flex justify-center mt-5'>
            <Button
              color='danger'
              onClick={() => setResponseAndClose(true)}
              className='mr-2'
              autoFocus
            >
              Confirmar
            </Button>
            <Button color='default' onClick={() => setResponseAndClose(false)}>
              Cancelar
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
