import React, {useState, useEffect, useImperativeHandle, forwardRef, useCallback} from "react";
import {createPortal} from 'react-dom'

const modalElement = document.getElementById('modal-root');

export function Modal ({children, defaultOpened = false}, ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened)

    const handleEscape = useCallback(event => {
        if (event.keycode === 27) setIsOpen(false)
    }, [])

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () =>{
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen]);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: ()=> setIsOpen(false)
    }), [])

    return createPortal(
    isOpen ? <div className="modal">{children}</div> : null, modalElement)
}

export default forwardRef(Modal);
