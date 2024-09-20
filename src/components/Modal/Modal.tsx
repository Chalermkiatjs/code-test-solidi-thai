import Button from 'components/Button/Button';
import { useClickOutside } from 'hooks/useClickOutside';
import React, { useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef,onClose)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant='text'
          className="absolute top-3 right-3"
        >
          X
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;