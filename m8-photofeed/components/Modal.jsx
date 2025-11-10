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

    // Close on Escape key (handled by dialog, but good to be explicit)
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onHide();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="flex flex-col p-2 border border-teal-600 rounded-md shadow-md shadow-teal-700"
    >
      <button
        onClick={onHide}
        aria-label="Close modal"
        className="self-end p-1 transition-opacity cursor-pointer hover:opacity-70"
      >
        <Image src="/xmark.svg" alt="" width={30} height={30} />
      </button>

      {children}
    </dialog>,
    document.getElementById('modal-root-content')
  );
};

export default Modal;
