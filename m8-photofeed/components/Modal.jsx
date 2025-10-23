'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const onHide = () => {
    router.back();
  };

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="flex flex-col p-2 border border-teal-600 rounded-md shadow-md shadow-teal-700"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer ">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>

      {children}
    </dialog>,
    document.getElementById('modal-root-content')
  );
};

export default Modal;
